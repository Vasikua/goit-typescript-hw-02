import css from './ImageGallery.module.css';
import ImageCard from '../image/ImageCard'
import { ImgProps, ImageGalleryProps } from "../../types";
import React, {FC} from 'react';

const ImageGallery:FC<ImageGalleryProps> = ({ data, onClick, onId })=> {

    return (
        <>
            <ul className={css.list}>
				{data.map((item:ImgProps) => (
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
    
    