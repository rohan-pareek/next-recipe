import { useState, useEffect } from "react";

import request from "../../components/api";
import Recipes from "../../components/recipes";
import LoaderIcon from "../../components/ui/icons/loader";
import css from '../../styles/style.module.css';
import style from './style.module.css';

function AllRecipesPage() {

    const [recipes, setRecipes] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetchRecipes = async () => {
        setLoading(true);
        const url = `/complexSearch?query=&offset=0`
        const data = await request(url);
        if (!data.error) {
            const recipeList = modifyRecipes(data.results);
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
        <div className={css.container}>
            {recipes && recipes.length > 0 && <Recipes recipes={recipes} />}
            {loading
                && <div className={style.loader}><span className={style.icon}><LoaderIcon /></span></div>
            }
        </div>
    )
}

export default AllRecipesPage;
