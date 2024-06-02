import css from './SearchBar.module.css';
import toast, { Toaster } from 'react-hot-toast';
import React, {FC} from 'react';
import { FormEvent } from "react";
import { SearchBarProps } from "../../types";
const SearchBar:FC<SearchBarProps> = ({onSearch}) =>{
 

  const handleSubmit = (event:FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const query = (event.target as HTMLInputElement).value.trim();
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
   (event.target as HTMLFormElement).reset();
  }

  return (
        <>
        <Toaster position='top-center' />
        <header className={css.searchField} >
          <form className={css.form} onSubmit={handleSubmit}>
              <input className={css.input} type="text"  name="query"/>
              <button type="submit" className={css.button}>Search</button>
          </form>
        </header>
        </>
    )
}

export default SearchBar;