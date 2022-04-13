import Footer from "./footer";
import Header from "./header";
import css from './style.module.css';

function Layout({ children }) {
    return (
        <div className={css.wrapper}>
            <Header />
            <main>
                {children}
            </main>
            <Footer />
        </div>
    )
}

export default Layout;
