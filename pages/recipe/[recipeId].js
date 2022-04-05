import { useRouter } from "next/router";

function RecipePage() {

    const { query } = useRouter();

    return (
        <h1>Recipe by Id {query.recipeId}</h1>
    )

}

export default RecipePage;