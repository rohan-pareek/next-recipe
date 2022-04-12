import { useEffect } from "react";
import { useState } from "react";

import Recipes from "../components/recipes";
import css from '../styles/style.module.css';
import request from '../components/api';
import LoaderIcon from "../components/ui/icons/loader";
import Button from '../components/ui/button';
import ArrowRightIcon from '../components/ui/icons/arrow-right';
import Link from "next/link";

function HomePage() {

  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchRecipes = async () => {
    setLoading(true);
    const url = `/random/?number=20`
    const data = await request(url);
    if (!data.error) {
      const recipeList = modifyRecipes(data.recipes);
      setRecipes(recipeList);
    }
    setLoading(false);
  }

  const modifyRecipes = (recipeList) => {
    return recipeList.map(recipe => {
      return {
        id: recipe.id,
        title: recipe.title,
        image: recipe.image
      }
    })
  }

  useEffect(() => {
    fetchRecipes();
  }, [])

  return (
    <>
      <div className={css.container}>
        {recipes
          && recipes.length > 0
          && <>
            <Recipes recipes={recipes} />
            <div className={css.browseAllButton}>
              <Link href="/recipes" passHref>
                <Button>Browse All Recipes <span className={css.icon}><ArrowRightIcon /></span></Button>
              </Link>
            </div>
          </>
        }
        {loading
          && <div className={css.loader}><span className={css.icon}><LoaderIcon /></span></div>
        }
      </div>
    </>
  )
}

export default HomePage;
