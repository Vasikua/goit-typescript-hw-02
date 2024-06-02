import css from './ImageGallery.module.css';
import ImageCard from '../image/ImageCard'
import { Img } from "../../types";
import React, {FC} from 'react';
interface ImageGallery {
    data: Img;
    onClick:()=>void;
    onId: ()=>void;
}

const ImageGallery:FC<ImageGallery> = ({ data, onClick, onId })=> {

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
    
    