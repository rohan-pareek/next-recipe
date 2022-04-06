import Link from "next/link";
import { useRouter } from "next/router";
import SearchIcon from "../../ui/icons/search";
import css from './style.module.css';

function Header() {

    const { asPath } = useRouter();

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
                            <Link href="/">
                                <a className={`${asPath === '/' ? css['active-link'] : ''}`}>
                                    Featured Recipes
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/recipes">
                                <a className={`${asPath === '/recipes' ? css['active-link'] : ''}`}>
                                    Browse All Recipes
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/recipe/random">
                                <a className={`${asPath === '/recipe/random' ? css['active-link'] : ''}`}>
                                    Random Recipe
                                </a>
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
