import RecipeCard from '../recipe-card';
import css from './style.module.css'

function Recipes({ recipes }) {
    return (
        <div className={css.recipes}>
            {recipes.map(recipe => (
                <RecipeCard key={recipe.id} recipe={recipe} />
            ))}
        </div>
    )
}

export default Recipes;
