"use client"

import { PhotoList } from "@/data/photoList";


function Page() {
    return (
        <div className="mx-2">
            <h1 className="text-center text-3xl font-bold my-10">Fotos do CR7</h1>

            <section className="container max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {PhotoList.map(item => (
                    <div>...</div>
                ))}
            </section>
        </div>
    );
}

export default Page;
