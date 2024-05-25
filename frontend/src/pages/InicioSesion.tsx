import React, { useState } from 'react';
import {
  IonButton,
  IonCardTitle,
  IonCol,
  IonContent,
  IonGrid,
  IonInput,
  IonLabel,
  IonPage,
  IonRow, IonHeader,
  IonText,IonImg, IonToolbar, IonTitle
} from '@ionic/react';
import logo from '../logo/logo.png';
import './Header.css';

interface InicioSesionProps {
  registro: () => void;
  login: (username: string, password: string) => void;
}

const InicioSesion: React.FC<InicioSesionProps> = ({ registro, login }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const validateForm = () => {
    if (!username || !password) {
      setErrorMessage('Por favor, complete todos los campos.');
      return false;
    }
    setErrorMessage('');
    return true;
  };

  const handleLogin = () => {
    if (validateForm()) {
      login(username, password);
    }
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar className='Toolbar'>
          <IonImg slot="start" className='Img' src={logo} alt=""/>
          <IonTitle>Inicio de Sesión</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className='ion-padding h-full w-full'>
        <div className='justify center flex h-full w-full items-center'>
          <IonGrid className='ion-padding'>

            <IonRow className='ion-margin-top ion-padding-top'>
              <IonCol size='12'>
                <div>
                  <IonLabel>Nombre de usuario</IonLabel>
                  <IonInput
                    type='text'
                    value={username}
                    onIonChange={(e) => setUsername(e.detail.value!)}
                  />
                </div>
                <div>
                  <IonLabel>Contraseña</IonLabel>
                  <IonInput
                    type='password'
                    value={password}
                    onIonChange={(e) => setPassword(e.detail.value!)}
                  />
                </div>
                {errorMessage && <IonText color="danger">{errorMessage}</IonText>}
                <IonButton
                  className='ion-margin-top'
                  color={'primary'}
                  expand='block'
                  onClick={handleLogin}
                >
                  Iniciar sesión
                </IonButton>
              </IonCol>
            </IonRow>
            <IonRow className='ion-text-center ion-justify-content-center'>
              <IonCol size='12'>
                <p>
                  ¿No tienes una cuenta?
                  <IonText color={'primary'} onClick={registro}>
                    {' '}
                    regístrate! &rarr;
                  </IonText>
                </p>
              </IonCol>
            </IonRow>
          </IonGrid>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default InicioSesion;
