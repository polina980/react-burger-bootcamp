// import { Route, Redirect } from 'react-router-dom';
// import PropTypes from 'prop-types';
// import { useSelector } from 'react-redux';

// export const ProtectedRoute = ({ component, path }) => {

//     const authorization = useSelector(state => state.getLogin.login);

//     if (!authorization) {

//         return (
//             <Route>
//                 <Redirect to={{ pathname: '/login' }} />
//             </Route>
//         )
//     }
//     return <Route path={path} component={component} />
// }

// ProtectedRoute.propTypes = {
//     children: PropTypes.node.isRequired
// }
