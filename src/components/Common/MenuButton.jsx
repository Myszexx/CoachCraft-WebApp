import PropTypes from "prop-types";
import {Link} from "react-router-dom";

export function MenuButton({ name, value, url, ...rest}) {
    return (
        <Link to={url}>
        <button value={value} {...rest}>{name}</button>
        </Link>
)
}

MenuButton.propTypes = {
    name: PropTypes.string,
    value: PropTypes.any,
    url: PropTypes.string,
}