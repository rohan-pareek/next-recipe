import { useEffect } from "react";
import { useState } from "react";

import Carousel from "../components/carousel";
import Recipes from "../components/recipes";
import recipes from '../recipes.json';
import css from '../styles/style.module.css';

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
        {/* <Carousel images={images} /> */}
        <Recipes recipes={recipes} />
      </div>
    </>
  )
}

export default HomePage;
