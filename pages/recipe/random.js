import { useRouter } from "next/router";
import Recipe from "../../components/recipe";
import recipe from '../../recipe.json';

function RandomRecipePage() {

    const { query } = useRouter();
    const recipeId = query.recipeId;

    return (
        <Recipe recipe={recipe} />
    )

}

export default RandomRecipePage;
