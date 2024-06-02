import css from './ImageGallery.module.css';
import ImageCard from '../image/ImageCard'
import { Img } from "../../types";
import React, {FC} from 'react';
import {ImageGalleryProps} from '../../types'

const ImageGallery:FC<ImageGalleryProps> = ({ data, onClick, onId })=> {

    return (
        <>
            <ul className={css.list}>
				{data.map((item:Img) => (
                        <li key={item.id} className={css.item}>
                            <ImageCard data={item} onClick={onClick} onId={ onId} />	
                        </li>
                                    )
                         )
                }
            </ul>
        </>
    )
}

export default ImageGallery;
    
    