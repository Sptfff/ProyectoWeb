import React from 'react'
import { IonHeader, IonContent, IonTitle, IonToolbar, IonPage,IonButtons, IonMenuButton,IonMenu, IonRouterLink} from '@ionic/react';
import IniciarSesionButton from '../components/IniciarSesionButton';

const RegistroOption: React.FC = () => {
  return (
    <div>
      <IonRouterLink routerLink={`/registro`} routerDirection="none">
            <p>¿No tienes Cuenta? Regístrate</p>
      </IonRouterLink>
    </div>
  )
}

export default RegistroOption;