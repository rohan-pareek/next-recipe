import Link from "next/link";
import SearchIcon from "../../ui/icons/search";
import css from './style.module.css';

function Header() {
    return (
        <header className={css.header}>
            <div className={css.container}>
                <div className={css.logo}>
                    <Link href="/">
                        Next Recipe
                    </Link>
                </div>
                <nav>
                    <ul>
                        <li>
                            <Link href="/recipes">
                                Browse All Recipes
                            </Link>
                        </li>
                        <li>
                            <Link href="/recipe/random">
                                Random Recipe
                            </Link>
                        </li>
                    </ul>
                </nav>
                <div className={css.tools}>
                    <span className={css.search}>
                        <button>
                            <SearchIcon />
                        </button>
                    </span>
                </div>
            </div>
        </header>
    )
}

export default Header;
