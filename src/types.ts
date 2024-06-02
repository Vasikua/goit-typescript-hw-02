
export interface ImgProps{
  id: number;
  urls:{
    regular: string;
    small: string;
  }
    src: string;
    alt_description: string;
}
  
export interface ImageCardProps { 
data:ImgProps;
onClick:()=>void ;
onId: (id:number)=>void;
}


export interface ImageModalProps{
    openModal:()=>void;
    CloseModal:()=>void;
    id: string;
}

export interface ImageGalleryProps {
  data: ImgProps;
  onClick: () => void;
  onId: () => void;
}
export interface response {
  result: ImgProps;
  total: number;
}