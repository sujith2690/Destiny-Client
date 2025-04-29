import React from 'react'

const Gallery = () => {
    return (
        <>
            <section className="py-6 dark:bg-gray-100 dark:text-gray-900">
                <div className="container grid grid-cols-2 gap-4 p-4 mx-auto md:grid-cols-4">
                    {[
                        { src: "https://cdn.pixabay.com/photo/2015/06/19/21/24/avenue-815297_1280.jpg", title: "Travel Avenue", span: "col-span-2 row-span-2 md:col-start-3 md:row-start-1 min-h-96" },
                        { src: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg", title: "Lonely Tree" },
                        { src: "https://cdn.pixabay.com/photo/2016/11/18/18/39/beach-1836335_1280.jpg", title: "Tropical Beach" },
                        { src: "https://cdn.pixabay.com/photo/2017/12/16/22/22/bora-bora-3023437_1280.jpg", title: "London Travel" },
                        { src: "https://cdn.pixabay.com/photo/2016/02/18/20/02/nature-1207955_1280.jpg", title: "Mountain Landscape" },
                        { src: "https://cdn.pixabay.com/photo/2018/01/06/23/25/snow-3066167_1280.jpg", title: "Adventure" },
                        { src: "https://cdn.pixabay.com/photo/2018/08/16/08/39/hallstatt-3609863_1280.jpg", title: "Bali Travel" },
                        { src: "https://cdn.pixabay.com/photo/2018/11/22/18/06/desert-3832488_1280.jpg", title: "Venice Boat" },
                        { src: "https://cdn.pixabay.com/photo/2024/11/06/10/06/woman-9178026_1280.jpg", title: "Greece Travel" },
                        { src: "https://cdn.pixabay.com/photo/2022/09/21/16/49/arch-7470764_1280.jpg", title: "Monaco", span: "col-span-2 row-span-2 md:col-start-1 md:row-start-3 min-h-96" }
                    ].map((item, index) => (
                        <div key={index} className={`relative overflow-hidden rounded shadow-sm ${item.span ? item.span : "min-h-48"} aspect-square group`}>
                            <img
                                src={item.src}
                                alt={item.title}
                                loading="lazy"
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 flex items-end justify-center p-2 bg-white/10 bg-opacity-40 opacity-0 group-hover:opacity-100 transition duration-500">
                                <p className="text-white text-lg font-semibold ">{item.title}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>






        </>


    )
}

export default Gallery