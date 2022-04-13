import Link from 'next/link';

import css from './style.module.css';

function Footer() {

    return (
        <footer className={css.footer}>
            <div className={css.container}>
                <div>
                    Next Recipe | Created by <Link href="https://github.com/rohan-pareek">
                        <a target="_blank">
                            Rohan Pareek
                        </a>
                    </Link>
                </div>
            </div>
        </footer>
    )

}

export default Footer;
