"use client"

import { Modal } from "@/components/Modal";
import { PhotoItem } from "@/components/PhotoItem";
import { PhotoList } from "@/data/photoList";
import { useState } from "react";


function Page() {

    const [showModal, setShowModal] = useState(false);
    const [imageOfModal, setImageOfModal] = useState('');

    function opneModal(id:number){
        const photo = PhotoList.find(item => item.id === 1);

        if(photo){
            setImageOfModal(photo.url);
            setShowModal(true);
        }

    }

    function closeModal{
        setShowModal(false);
    }

    return (
        <div className="mx-2">
            <h1 className="text-center text-3xl font-bold my-10">Fotos do CR7</h1>

            <section className="container max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {PhotoList.map(item => (
                    <PhotoItem
                        key={item.id}
                        photo={item}
                        onClick={()=> {opneModal(item.id)}}
                    />
                ))}
            </section>

            {showModal && 
                <Modal image={imageOfModal} closeModal={}/>
            }

        </div>
    );
}

export default Page;
