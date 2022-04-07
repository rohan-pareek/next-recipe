import Recipes from "../../components/recipes";
import recipes from '../../recipes.json';
import css from '../../styles/style.module.css';

function AllRecipesPage() {
    return (
        <div className={css.container}>
            <Recipes recipes={recipes} />
        </div>
    )
}

export default AllRecipesPage;
