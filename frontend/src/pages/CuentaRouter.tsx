import { IonPage, IonRouterOutlet } from '@ionic/react';
import { Route } from 'react-router';
import React from 'react';
import Cuenta from './Cuenta';
import EditarPerfil from './EditarPerfil';


const CuentaRouter: React.FC = () => {
  return (
    <IonPage>
      <IonRouterOutlet>
        <Route exact path='/nav/cuenta' component={Cuenta} />
        <Route exact path='/nav/cuenta/editarPerfil' component={EditarPerfil} />
      </IonRouterOutlet>
    </IonPage>
  );
};

export default CuentaRouter;
