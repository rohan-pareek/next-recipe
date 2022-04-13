import { useRouter } from "next/router";
import { useState, useEffect } from "react";

import request from "../../components/api";
import Recipe from "../../components/recipe";
import LoaderIcon from "../../components/ui/icons/loader";
import css from './style.module.css';

function RecipePage() {

    const { query } = useRouter();
    const recipeId = query.recipeId;

    const [recipe, setRecipe] = useState();
    const [loading, setLoading] = useState(false);

    const fetchRecipe = async () => {
        setLoading(true);
        const url = `${recipeId}/information?`
        const data = await request(url);
        if (!data.error) {
            setRecipe(data);
        }
        setLoading(false);
    }

    useEffect(() => {
        fetchRecipe();
    }, [recipeId])

    return (
        <>
            {recipe
                ? <Recipe recipe={recipe} />
                : <div className={css.container}>
                    <h2>Unable to fetch the Recipe. Try again.</h2>
                </div>
            }
            {loading
                && <div className={css.loader}><span className={css.icon}><LoaderIcon /></span></div>
            }
        </>
    )

}

export default RecipePage;