import css from './style.module.css';

function Button({ children, ...props }) {
    return (
        <button className={css.button} {...props}>{children}</button>
    )
}

export default Button;
