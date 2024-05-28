import css from './SearchBar.module.css';
import toast, {Toaster} from 'react-hot-toast';
export default function SearchBar({onSearch}) {
 

  const handleSubmit = (event) => {
    event.preventDefault();
    const query = event.target.elements.query.value.trim();
    if (query.length === 0) {
      toast.success('Please type something in the searchfield', {
  style: {
    border: '1px solid #713200',
    padding: '16px',
    color: '#713200',
  },
  iconTheme: {
    primary: '#713200',
    secondary: '#FFFAEE',
  },
      });
      return
   }
    
    onSearch(query);    
   event.target.reset();
  }

  return (
        <>
        <Toaster position='top-center' />
        <header className={css.searchField} >
          <form className={css.form} onSubmit={handleSubmit}>
              <input className={css.input} type="text"  name="query"/>
              <button type="submit">Search</button>
          </form>
        </header>
        </>
    )
}

