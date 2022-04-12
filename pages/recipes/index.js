import { useState, useEffect } from "react";

import request from "../../components/api";
import Recipes from "../../components/recipes";
import Button from "../../components/ui/button";
import LoaderIcon from "../../components/ui/icons/loader";
import css from '../../styles/style.module.css';
import style from './style.module.css';

function AllRecipesPage() {

    const [recipes, setRecipes] = useState([]);
    const [loading, setLoading] = useState(false);
    const [offset, setOffset] = useState(0);

    const fetchRecipes = async () => {
        setLoading(true);
        const url = `/complexSearch?query=&offset=${offset}`
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
    }, [offset])

    return (
        <div className={css.container}>
            {recipes && recipes.length > 0
                && <>
                    <Recipes recipes={recipes} />
                    <div className={style.pagination}>
                        {offset > 0 && <Button onClick={() => setOffset(offset => offset - 1)}>Prev</Button>}
                        <Button onClick={() => setOffset(offset => offset + 1)}>Next</Button>
                    </div>
                </>
            }
            {loading
                && <div className={style.loader}><span className={style.icon}><LoaderIcon /></span></div>
            }
        </div>
    )
}

export default AllRecipesPage;
