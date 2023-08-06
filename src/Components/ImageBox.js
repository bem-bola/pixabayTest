import React from 'react'

const ImageBox = ({largeImageURL,pageURL }) => {
    return (
        <div className="w-64 mx-1 my-3 h-full text-white">
            <div className="h-60">
                <img src={largeImageURL} alt="imgpixabay" className="min-w-full h-1/3 min-h-full" />
            </div>
                
            <div className="h-1/5 flex bg-white">
                <a
                    href={largeImageURL}
                    className="rounded-none bg-sky-500/100 w-1/2 py-3 text-center font-semibold" >
                    Voir
                </a>
                <a
                    href={pageURL}
                    className="rounded-none bg-indigo-500/100 w-1/2 py-3 text-center font-semibold" >
                    Voir sur pixabay
                </a> 
            </div>
        </div>
  )
}

export default ImageBox