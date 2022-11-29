import React, { useEffect, useCallback, useState, FC } from 'react';
import { useDispatch, useSelector } from '../../services/hooks/hooks';
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
// import { Modal } from '../../components/modal/modal';
// import { IngredientDetails } from '../../components/ingredient-details/ingredient-details';
// import { deleteIgredientDetails } from '../../services/actions/ingredient-details';

export const App = () => {

  const dispatch = useDispatch();
  // const openIngredientsModal = useSelector(state => !!state.ingredientDetails.ingredientDetails);

  useEffect(() => {
    dispatch(getIngredientsList())
  }, [dispatch])

  // const closeIngredientsModal = useCallback(() => {
  //   dispatch(deleteIgredientDetails())
  // }, [dispatch])

  return (
    <DndProvider backend={HTML5Backend}>
      <AppHeader />
      <Switch>
        <Route path="/" exact={true} component={Main} />
        <Route path="/login" exact={true} component={LoginPage} />
        <Route path="/register" exact={true} component={Registration} />
        <Route path="/forgot-password" exact={true} component={ForgotPassword} />
        <Route path="/reset-password" exact={true} component={ResetPassword} />
        <ProtectedRoute path="/profile" exact={true} component={ProfilePage} />
        <ProtectedRoute path="/profile/orders" exact={true} component={ProfilePage} />
        <Route path="/ingredients/:id" exact={true} component={IngredientPage} />
        <Route component={PageNotFound} />
      </Switch>

      {/* {openIngredientsModal && (
        <Modal onClose={closeIngredientsModal} title='Детали ингредиента'>
          <IngredientDetails />
        </Modal>
      )} */}
    </DndProvider>
  )
}
