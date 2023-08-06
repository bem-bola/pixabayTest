import React from "react";
import Form from "../assets/Form";

function Home() {

  return (
    <main className="h-screen bg-slate-700">
      <section className="relative top-1/3 mx-auto w-1/2">
        <h1 className="text-white text-center text-lg mb-3">
          MOTEUR DE RECHERCHE D'IMAGES PIXABAY
        </h1>
        <Form action="/search"/>
      </section>
    </main>
  );
}

export default Home;
