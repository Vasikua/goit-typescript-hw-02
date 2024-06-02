import css from './ImageCard.module.css'
import React, {FC} from 'react';
// import { Img } from '../../types';
import { ImageCardProps } from '../../types';



const ImageCard :FC<ImageCardProps> = ({data: { id, alt_description, urls: { small } }, onClick, onId }) => {
    
  return (<>
            <div className={css.cotainer} >
                  <img
                    className={css.img}
                    key={id}
                    src={small} alt={alt_description}
                    onClick={() => {
                              onClick();
                              onId(id)
                        }}/>
            </div>
         </>)
}


export default ImageCard;