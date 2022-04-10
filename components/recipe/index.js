import css from './style.module.css';
import ChevronRightIcon from '../ui/icons/chevron-right';
import BagdeCheckIcon from '../ui/icons/badge-check';
import ExclamationCircleIcon from '../ui/icons/exclamation-circle';
import Link from 'next/link';

function Recipe({ recipe }) {
    return (
        <div className={css['recipe-container']}>
            <div className={css.title}>{recipe.title}</div>
            <div className={css['recipe-image']}>
                <figure>
                    <img src={recipe.image} alt={recipe.title} />
                    <div>
                        {recipe.vegetarian
                            ? <div className={css.veg}><span className={`${css['icon-green']} ${css.icon}`}><BagdeCheckIcon /></span> Veg</div>
                            : <div className={css['non-veg']}><span className={`${css['icon-green']} ${css.icon}`}><ExclamationCircleIcon /></span> Non Veg</div>}
                    </div>
                </figure>
                <div className={css['view-source']}>
                    <Link href={recipe.spoonacularSourceUrl}>
                        <a target="_blank">
                            Visit Source
                        </a>
                    </Link>
                </div>
            </div>
            <div className={css['recipe-content']}>
                {/* <h1>{recipe.title}</h1> */}
                <p dangerouslySetInnerHTML={{ __html: recipe.summary }}></p>
                <div className={css['recipe-checks']}>
                    <div>
                        {recipe.vegan
                            ? <span className={`${css['icon-green']} ${css.icon}`}><BagdeCheckIcon /></span>
                            : <span className={`${css['icon-red']} ${css.icon}`}><ExclamationCircleIcon /></span>
                        }
                        Vegan
                    </div>
                    <div>
                        {recipe.glutenFree
                            ? <span className={`${css['icon-green']} ${css.icon}`}><BagdeCheckIcon /></span>
                            : <span className={`${css['icon-red']} ${css.icon}`}><ExclamationCircleIcon /></span>
                        }
                        Gluten Free
                    </div>
                    <div>
                        {recipe.dairyFree
                            ? <span className={`${css['icon-green']} ${css.icon}`}><BagdeCheckIcon /></span>
                            : <span className={`${css['icon-red']} ${css.icon}`}><ExclamationCircleIcon /></span>
                        }
                        Dairy Free
                    </div>
                </div>
                <div className={css.ingredients}>
                    <h2>Ingredients</h2>
                    <div>
                        {recipe.extendedIngredients.map(ingredient => (
                            <div className={css.extendedIngredients} key={ingredient.id}>
                                <span className={css.icon}><ChevronRightIcon /></span>
                                {ingredient.original}
                            </div>
                        ))}
                    </div>
                </div>
                <div className={css.recipe}>
                    <h2>Recipe</h2>
                    <div>
                        {recipe.analyzedInstructions[0].steps.map(instruction => (
                            <div className={css.steps} key={instruction.id}>
                                <span className={css.icon}><ChevronRightIcon /></span>
                                {instruction.step}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Recipe;
