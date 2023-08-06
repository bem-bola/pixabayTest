import React from "react";
import { useEffect, useState } from "react";
import Form from "../assets/Form";
import ImageBox from "./ImageBox";
import { useLocation } from "react-router-dom";

function Search({ request }) {
  // Les paramètres url
  const paramsUrl = new URLSearchParams(useLocation().search);

  const [images, setImages] = useState([]);
  const [query, setQuery]   = useState(paramsUrl.get('query'));
  const [page, setPage]     = useState(1);


  const searchImage = async (e) => {
    
    try {
      const url =
        "https://pixabay.com/api/?key=19623972-cbbb46b1934f51067078e255d&image_type=photo&q=" +
        query +
        "&page=" +
        page;

      const res = await fetch(url);
      const data = await res.json();
      setImages((prev) => [...prev, ...data.hits]);
    } catch (e) {}
  };
  // Valeur des inputs du formulaire
  const changeHandler = (e) => {
    setQuery(e.target.value);
  };
  // Scroll infinie
  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop + 1 >=
      document.documentElement.scrollHeight
    ) {
      setPage((prev) => prev + 1);
    }
  };
  // Scroll up
  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  useEffect(() => {
    searchImage();
  }, [page]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);



  return (
    <section className="w-5/6 m-auto">
      {/* Fomulaire */}
      <Form
        searchImage={searchImage}
        query={query}
        changeHandler={changeHandler}
      />

      {/* Result data */}
      <article>
        <button onClick={scrollUp} className="fixed bottom-10 right-10 text-white text-bold text-2xl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 19.5v-15m0 0l-6.75 6.75M12 4.5l6.75 6.75" />
        </svg>

        </button>
        {images.length > 0 ? (
          /** Data */
          <div>
              <div className="flex flex-wrap w-100">
                {images.map((imageReq, index) => (
                  <ImageBox key={index} {...imageReq} />
                ))}
              </div>
          </div>
         
        ) : (
            <p className="text-2xl text-white text-center"> Aucun résultat pour ! </p>
        )}
      </article>
    </section>
  );
}

export default Search;
