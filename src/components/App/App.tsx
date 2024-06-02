import { useState, useEffect} from 'react';
import { FetchImages } from '../../../img-request';
import { ImgProps } from "../../types";
import {response} from '../../types'
import ImageGallery from '../imagesList/ImageGallery';
import SearchBar from '../searchBar/SearchBar';
import Loader from '../loader/Loader';
import LoadMoreBtn from '../loadMoreBtn/LoadMoreBtn';
import ImageModal from '../imageModal/ImageModal';
import './App.css';


function App() {
  
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [images, setImages] = useState<ImgProps[]>([]);
  const [isloading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const [query, setQuery] = useState<string>('');
  const [total, setTotal] = useState<number | null>(0);
  const [imgId, setImgId] = useState<number | null>(0);
  
  const modImg = images.find((img) => img.id === imgId)?.urls.regular;
  
  const handleImgId = (id:number) => {
    setImgId(id);
  };
  
  const handleOpenModal = ():void => {
    setOpenModal(true);
  };
  
  const handleCloseModal = ():void => {
    setOpenModal(false);
    setImgId(null);
  };
    
  const handleSearch = async (newQuery:string) => {
    setQuery(newQuery);
    setPage(1);
    setImages([]);
  };  

  const handleLoadMore = ():void => {
    setPage(page + 1);
  };
  
  useEffect(() => {
    
    if (query === "") {
      setTotal(0);
      return;
    }
    async function getImages(){
      try {
        setError(false);
        setLoading(true);
        const { result, total}:response = await FetchImages(query, page);
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

