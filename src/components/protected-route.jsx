import { Redirect, Route } from 'react-router-dom';
import PropTypes from 'prop-types';

export function ProtectedRoute({ children, ...rest }) {

    const isAuthenticated = JSON.parse(localStorage.getItem('authorization'));

    // const isAuthenticated = !!localStorage.getItem('refreshToken');

    return (
        <Route
            {...rest}
            render={() =>
                isAuthenticated ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: '/login'
                        }}
                    />
                )
            }
        />
    );
}

ProtectedRoute.propTypes = {
    children: PropTypes.node.isRequired
}
