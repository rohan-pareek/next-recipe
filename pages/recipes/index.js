import { useState, useEffect } from "react";
import { useRouter } from 'next/router';

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
    const { query } = useRouter();
    const searchString = query.q || '';

    const fetchRecipes = async () => {
        setLoading(true);
        const url = `/complexSearch?query=${searchString}&offset=${offset}`
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
        window.scrollTo(0, 0);
        fetchRecipes();
    }, [offset, searchString])

    return (
        <div className={css.container}>
            {(recipes && recipes.length > 0)
                ? <>
                    <Recipes recipes={recipes} />
                    <div className={style.pagination}>
                        {offset > 0 && <Button onClick={() => setOffset(offset => offset - 1)}>Prev</Button>}
                        <Button onClick={() => setOffset(offset => offset + 1)}>Next</Button>
                    </div>
                </> : <h2>Unable to fetch Recipes. Try again.</h2>
            }
            {loading
                && <div className={style.loader}><span className={style.icon}><LoaderIcon /></span></div>
            }
        </div>
    )
}

export default AllRecipesPage;
