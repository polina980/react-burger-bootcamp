import React, { useEffect } from 'react';
import { useDispatch } from '../../services/hooks/hooks';
import { AppHeader } from '../app-header/app-header';
import { getIngredientsList } from '../../services/actions/ingredients-list';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd';
import { Switch, Route } from 'react-router-dom';
import { ProtectedRoute } from '../protected-route';
import {
  Main, Registration, LoginPage,
  ForgotPassword, ResetPassword, ProfilePage,
  IngredientPage, PageNotFound
} from '../../pages/index';

export const App = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getIngredientsList())
  }, [dispatch])

  return (
    <DndProvider backend={HTML5Backend}>
      <AppHeader />
      <Switch>
        <Route path="/" exact={true} component={Main} />
        <Route path="/login" component={LoginPage} />
        <Route path="/register" component={Registration} />
        <Route path="/forgot-password" component={ForgotPassword} />
        <Route path="/reset-password" component={ResetPassword} />
        <ProtectedRoute path="/profile" component={ProfilePage} />
        <ProtectedRoute path="/profile/orders" component={ProfilePage} />
        <ProtectedRoute path="/ingredients/:${id}" component={IngredientPage} />
        <Route component={PageNotFound} />
      </Switch>
    </DndProvider>
  )
}
