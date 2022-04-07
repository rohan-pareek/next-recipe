import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect } from 'react';

import SearchIcon from "../../ui/icons/search";
import MenuIcon from "../../ui/icons/menu";
import css from './style.module.css';
import Sidebar from "../../sidebar";

function Header() {

    const { asPath } = useRouter();
    const [showSidebar, setShowSidebar] = useState(false);

    const closeSidebar = () => {
        setShowSidebar(false);
    }

    useEffect(() => {

        setShowSidebar(false);

    }, [asPath]);

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
                <div className={css.menu}>
                    <button onClick={() => setShowSidebar(true)}>
                        <MenuIcon />
                    </button>
                    <Sidebar show={showSidebar} close={closeSidebar}>
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
                    </Sidebar>
                </div>
            </div>
        </header>
    )
}

export default Header;
