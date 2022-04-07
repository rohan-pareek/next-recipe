import Link from 'next/link';
import ArrowRightIcon from '../ui/icons/arrow-right';
import css from './style.module.css';

function RecipeCard({ recipe }) {

    return (
        <div className={css.card}>
            <div className={css.thumbnail}>
                <img src={recipe.image} alt={recipe.title} />
            </div>
            <div className={css.content}>
                <div className={css.title} title={recipe.title}>{recipe.title}</div>
                <div className={css['view-recipe']}>
                    <Link href={`/recipe/${recipe.id}`}>
                        <a>
                            <button>
                                <span>View Recipe</span>
                                <ArrowRightIcon />
                            </button>
                        </a>
                    </Link>
                </div>
            </div>
        </div>
    )

}

export default RecipeCard;
