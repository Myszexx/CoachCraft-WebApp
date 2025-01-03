import {
    Navigate,
} from 'react-router-dom';
import PropTypes from "prop-types";
import {useAppContext} from "../context/AppContext.jsx";

export function ProtectedRoute({
                                   redirectPath = '/',
                                   children,
                               }) {
    const user = useAppContext({user})
    if (!user) {
        alert("You are not logged in!");
        return <Navigate to={redirectPath} replace/>;
    }

    return children;
}

ProtectedRoute.propTypes = {
    redirectPath: PropTypes.string,
    children: PropTypes.node.isRequired,
}