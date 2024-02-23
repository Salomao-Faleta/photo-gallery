import { Photo } from "@/types/photo";

type Props = {
    photo: Photo,
    onClick: ()=> void;
}

export function PhotoItem({ photo, onClick }:Props){
    return(
        <div onClick={onClick} className="cursor-pointer hover:opacity-80">
            <img src={`/assets/${photo.url}`} alt="" className="w-full h-56 rounded-md"/>
        </div>
    );
}