import { useEffect } from "react";
import { useState } from "react";

import Carousel from "../components/carousel";
import recipes from '../recipes.json';
import css from '../styles/Home.module.css';

function HomePage() {

  const [images, setImages] = useState([]);

  useEffect(() => {

    const mappedImages = recipes.map(recipe => {
      return {
        title: recipe.title,
        src: recipe.image
      }
    });

    setImages(mappedImages)

  }, []);

  return (
    <>
      <div className={css.container}>
        <Carousel images={images} />
      </div>
    </>
  )
}

export default HomePage;
