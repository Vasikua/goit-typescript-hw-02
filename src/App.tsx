import { useState, useEffect} from 'react';
import { FetchImages } from '../img-request';
import ImageGallery from './components/imagesList/ImageGallery';
import SearchBar from './components/searchBar/SearchBar';
import Loader from './components/loader/Loader';
import LoadMoreBtn from './components/loadMoreBtn/LoadMoreBtn';
import ImageModal from './components/imageModal/ImageModal';


import './App.css';

function App() {
  
  const [openModal, setOpenModal] = useState(false);
  const [images, setImages] = useState([]);
  const [isloading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState('');
  const [total, setTotal] = useState(0);
  const [imgId, setImgId] = useState(0);
  
  const modImg = images.find((img) => img.id === imgId)?.urls.regular;
  
  const handleImgId = (id) => {
    setImgId(id);
  };
  
  const handleOpenModal = () => {
    setOpenModal(true);
  };
  
  const handleCloseModal = () => {
    setOpenModal(false);
    setImgId(null);
  };
    
  const handleSearch = async (newQuery) => {
    setQuery(newQuery);
    setPage(1);
    setImages([]);
  };  

  const handleLoadMore = () => {
    setPage(page + 1);
  };
  

  useEffect(() => {
    
    if (query === "") {
      setTotal(0);
      return;
    }
    async function getImages() {
      try {
        setError(false);
        setLoading(true);
        const { result, total} = await FetchImages(query, page);
        setTotal(total);
        setImages((prevImages) => {
          return [...prevImages, ...result];
        })
      } catch (error) {
        setError(true);
      }
      finally {
        setLoading(false);
      }
    
    }
    getImages();
  }, [page, query]);

  
  return (
    <>
      <ImageModal openModal={openModal} CloseModal={handleCloseModal}  id={modImg} />
      <SearchBar onSearch={handleSearch} />
      {isloading && <Loader />}
      {error && console.log(" somthing went wrong")}
      {images.length > 0 && <ImageGallery data={images} onClick={handleOpenModal} onId={handleImgId} />}
      {!isloading && images.length < total  && <LoadMoreBtn onClick={handleLoadMore}/>}
    </>
  );
}

export default App;

