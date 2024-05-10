import React from 'react'
import { IonHeader, IonContent, IonTitle, IonToolbar, IonPage,IonButtons, IonMenuButton,IonMenu} from '@ionic/react';
import IniciarSesionButton from '../components/IniciarSesionButton';

const Cuenta: React.FC = () => {
  return (
    <div>
      <IonPage id="main-content">
        ola esta es la página d las cuentas
        <IonContent>
          <IniciarSesionButton onClick={() => {/* Lógica para el botón de añadir comida */}} />
        </IonContent>
      </IonPage>
    </div>
  )
}

export default Cuenta;