import React from 'react';
import { IonContent, IonHeader, IonButton, IonPage, IonTitle, IonToolbar,IonImg } from '@ionic/react';
import logo from '../logo/logo.png';
import './Header.css';
interface CuentaContentProps {
  setLoggedOut: () => void;
  onEditProfile: () => void; // Definición de la propiedad onEditProfile
}

const CuentaContent: React.FC<CuentaContentProps> = ({ setLoggedOut, onEditProfile }) => {
  return (
    <IonPage>
      <IonHeader>
      <IonToolbar className='Toolbar'>
          <IonImg slot="start" className='Img' src={logo} alt=""/>
              <IonTitle>Mi cuenta</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Mi cuenta</IonTitle>
          </IonToolbar>
        </IonHeader>
        <p>Aquí podrás ver los datos de tu cuenta</p>
        <p>Por ahora puedes editar tu perfil y Cerrar sesión</p>
        <IonButton className="ion-margin-top ion-padding" color="primary" 
                  expand='block' onClick={onEditProfile}>
          Editar perfil
        </IonButton>
        <IonButton className="ion-margin-top ion-padding" 
                    expand='block' color="danger" onClick={setLoggedOut}>
          Cerrar sesión
        </IonButton>
        
      </IonContent>
    </IonPage>
  );
};

export default CuentaContent;
