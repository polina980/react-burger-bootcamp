import { Route, Redirect, RouteProps } from 'react-router-dom';
import { useSelector } from '../services/hooks/hooks';

export const ProtectedRoute = ({ component, path }: RouteProps) => {

    const authorization = useSelector(state => state.getLogin.login);

    if (!authorization) {

        return (
            <Route path={path} component={component}>
                <Redirect
                    to={'/login?retpath=/profile'}
                />
            </Route>
        )
    }
    return <Route path={path} component={component} />
}

// const ProtectedRoute = ({ onlyForAuth, children, ...rest }) => {
//     const isAuthorized = getCookie("accessToken");
//     const location = useLocation();
  
//     if (!onlyForAuth && isAuthorized) {
//       const { from } = location.state || { from: { pathname: "/" } };
//       return (
//         <Route {...rest}>
//           <Redirect to={from} />
//         </Route>
//       );
//     }
  
//     if (onlyForAuth && !isAuthorized) {
//       return (
//         <Route {...rest}>
//           <Redirect to={{ pathname: "/login", state: { from: location } }} />
//         </Route>
//       );
//     }
  
//     return <Route {...rest}>{children}</Route>;
//   }

// Этот рут может и переадресовывать пользователя туда, откуда он пришел, 
// если он уже авторизован, тогда не нужно будет дублировать переадресацию на страницах 
// Логина, Регистрации, Восстановления пароля и тд
