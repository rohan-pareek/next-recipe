import Header from "./header";

function Layout({ children }) {
    return (
        <>
            <Header />
            {children}
        </>
    )
}

export default Layout;
