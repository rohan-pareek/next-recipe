import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect, useRef } from 'react';

import SearchIcon from "../../ui/icons/search";
import MenuIcon from "../../ui/icons/menu";
import css from './style.module.css';
import Sidebar from "../../sidebar";
import Modal from "../../modal";

function Header() {

    const { asPath, push, pathname } = useRouter();
    const [showSidebar, setShowSidebar] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const searchInput = useRef();

    const closeSidebar = () => {
        setShowSidebar(false);
    }

    const closeModal = () => {
        setShowModal(false);
    }

    useEffect(() => {

        setShowSidebar(false);

    }, [asPath]);

    const searchHandler = (e) => {
        e.preventDefault();
        const searchParam = searchInput.current.value;
        push(`/recipes?q=${searchParam}`);
        closeModal();
    }

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
                                <a className={`${pathname === '/recipes' ? css['active-link'] : ''}`}>
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
                        <button onClick={() => setShowModal(true)}>
                            <SearchIcon />
                        </button>
                    </span>
                </div>
                <div className={css.menu}>
                    <button onClick={() => setShowSidebar(true)}>
                        <MenuIcon />
                    </button>
                    <Sidebar show={showSidebar} close={closeSidebar}>
                        <div className={css['sidebar-container']}>
                            <div className={css.closeBtn}>
                                <button onClick={closeSidebar}>&times;</button>
                            </div>
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
                        </div>
                    </Sidebar>
                </div>
            </div>
            <Modal show={showModal} close={closeModal}>
                <form className={css.form}>
                    <div className={css.control}>
                        <label htmlFor="recipe">Search Recipe:</label>
                        <input type="text" id="recipe" placeholder="Enter recipe name here..." ref={searchInput} autoFocus />
                    </div>
                    <button onClick={(e) => searchHandler(e)}>Search</button>
                </form>
            </Modal>
        </header>
    )
}

export default Header;
