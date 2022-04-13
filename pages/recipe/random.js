import { useEffect } from "react";
import { useState } from "react";

import Recipe from "../../components/recipe";
import request from '../../components/api';
import LoaderIcon from "../../components/ui/icons/loader";
import css from './style.module.css';

function RandomRecipePage() {

    const [recipe, setRecipe] = useState();
    const [loading, setLoading] = useState(false);

    const fetchRecipe = async () => {
        setLoading(true);
        const url = `/random/?number=1`
        const data = await request(url);
        if (!data.error) {
            setRecipe(data.recipes[0]);
        }
        setLoading(false);
    }

    useEffect(() => {
        fetchRecipe();
    }, [])

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

export default RandomRecipePage;
