import React from 'react'
import { useState } from 'react';
import { IonHeader, IonContent, IonTitle, IonToolbar, IonPage,IonButton, IonRouterLink,IonMenu} from '@ionic/react';
import InicioSesion from './InicioSesion';
import Registro from './Registro';
import EditarPerfilButton from '../components/EditarPerfilButton';
import { Link } from 'react-router-dom';

const CuentaContent: React.FC<{ setLoggedOut: () => void }> = ({ setLoggedOut }) => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Mi cuenta</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse='condense'>
          <IonToolbar>
            <IonTitle size='large'>Mi cuenta</IonTitle>
          </IonToolbar>
        </IonHeader>
        <p>Hola muy buenas, esta es la página de tu propia cuenta <br /></p>
        <p>Proximante podrás editar tu perfil. Por ahora puedes sólo cerrar sesión jeje: <br /></p>
        <EditarPerfilButton onClick={() => {/* Lógica para el botón de historial de comidas */}}/>
        <IonButton className='ion-margin-top ion-padding' color={'danger'} onClick={setLoggedOut}>
          Cerrar sesión
        </IonButton>
      </IonContent>
    </IonPage>
  );
};



const Cuenta: React.FC = () => {
  const [isLogged, setIsLogged] = useState(false);
  const [isSigningUp, setIsSigningUp] = useState(false);

  const setSigningUp = (val: boolean = true) => {
    setIsSigningUp(val);
  };

  const setLoggedIn = (val: boolean = true) => {
    setIsLogged(val);
  };

  return !isSigningUp && !isLogged ? (
    <InicioSesion registro={setSigningUp} login={() => setLoggedIn(true)} />
  ) : isLogged ? (
    <CuentaContent setLoggedOut={() => setLoggedIn(false)} />
  ) : (
    <Registro back={() => setSigningUp(false)} login={() => setLoggedIn(true)} />
  );
}

export default Cuenta;