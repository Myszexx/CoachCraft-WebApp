import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import styles from './MenuButton.module.css';

export function MenuButton({ name, url, ...rest}) {
    return (
        <Link to={url} className={styles.menuButton}>
        <img alt={name} {...rest}/>
        </Link>
)
}

MenuButton.propTypes = {
    name: PropTypes.string,
    url: PropTypes.string,
}