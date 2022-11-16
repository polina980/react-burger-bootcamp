import React, { useEffect, useState, useCallback } from 'react';
import styles from './app.module.css';
import { AppHeader } from '../app-header/app-header';
import { BurgerIngredients } from '../burger-ingredients/burger-ingredients';
import { BurgerConstructor } from '../burger-constructor/burger-constructor';
import { PriceCount } from '../price-count/price-count';
import { Modal } from '../modal/modal';
import { IngredientDetails } from '../ingredient-details/ingredient-details';
import { OrderDetails } from '../order-details/order-details';
import { useDispatch, useSelector } from 'react-redux';
import { getIngredientsList } from '../../services/actions/ingredients-list';
import { deleteIgredientDetails } from '../../services/actions/ingredient-details';
import { getOrderNumber } from '../../services/actions/order-details';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd';
import { clearConstructor } from '../../services/actions/ingredients-constructor';
import { Switch, Route, useHistory } from 'react-router-dom';
import { ProtectedRoute } from '../protected-route';
import { LoginPage, Registration, ForgotPassword, ResetPassword, ProfilePage, OrdersHistory, IngredientPage } from '../../pages/index';

export function App() {

  const [openOrderModal, setOrderOpenModal] = useState();
  const openIngredientsModal = useSelector(state => !!state.ingredientDetails.ingredientDetails);
  const buns = useSelector(state => state.constructorList.buns);
  const ingredients = useSelector(state => state.ingredientsList.ingredientsList);
  const idList = (ingredients.map(element => element._id));
  const dispatch = useDispatch();
  const history = useHistory();
  const authorization = useSelector(state => state.getLogin.success);

  useEffect(() => {
    dispatch(getIngredientsList())
  }, [dispatch])

  const handleOrderOpenModal = (() => {
    if (!authorization) {
      history.replace({ pathname: `/login` });
    } else {
      setOrderOpenModal(true)
      dispatch(getOrderNumber(idList))
    }
  })

  const closeIngredientsModal = useCallback(() => {
    dispatch(deleteIgredientDetails())
  }, [dispatch])

  const closeOrderModal = useCallback(() => {
    setOrderOpenModal(false)
    dispatch(clearConstructor())
  }, [])

  return (
    <>
      <Switch>
        <DndProvider backend={HTML5Backend}>
          <AppHeader />

          <Route path="/login" exact={true}>
            <LoginPage />
          </Route>

          <Route path="/register" exact={true}>
            <Registration />
          </Route>

          <Route path="/forgot-password" exact={true}>
            <ForgotPassword />
          </Route>

          <Route path="/reset-password" exact={true}>
            <ResetPassword />
          </Route>

          <ProtectedRoute path="/profile" exact={true}>
            <ProfilePage />
          </ProtectedRoute>

          <Route path="/profile/orders" exact={true}>
            <OrdersHistory />
          </Route>

          {/* <Route path="/ingredients/:id" exact={true}>
            <IngredientPage />
          </Route> */}

          <Route path="/" exact={true}>
            <main className={styles.main}>
              <BurgerIngredients />
              <div className={styles.twoBlocks}>
                <BurgerConstructor />
                {buns.length > 0 ?
                  <PriceCount onClick={handleOrderOpenModal} />
                  : null}
              </div>
            </main>
          </Route>
        </DndProvider>
      </Switch>

      {openIngredientsModal && (
        <Modal onClose={closeIngredientsModal} title='Детали ингредиента'>
          <IngredientDetails />
        </Modal>
      )}

      {!!openOrderModal && (
        <Modal onClose={closeOrderModal}>
          <OrderDetails />
        </Modal>
      )}
    </>
  )
}
