import React, { useState } from 'react';
import axios from 'axios';
import {
  IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonInput, IonButton, IonLabel, IonText, IonImg
} from '@ionic/react';
import logo from '../logo/logo.png';

interface InicioSesionProps {
  registro: () => void;
  login: () => void;
}

const InicioSesion: React.FC<InicioSesionProps> = ({ registro, login }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:3000/users/login', { Correo: email, Pass: password });
      console.log(response);
      localStorage.setItem('token', response.data.id)
      login();
      /*const userId = response.data.id; // Obtener el ID del usuario de la respuesta
      localStorage.setItem('userId', userId); // Guardar el id del usuario en el almacenamiento local
      login(userId);*/
    } catch (error) {
      setError('Error al iniciar sesión. Verifique sus credenciales.');
    }
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Inicio de Sesión</IonTitle>
          <IonImg slot="start" className='Img' src={logo} alt="" />
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonInput
          placeholder="Correo electrónico"
          type="email"
          value={email}
          onIonChange={(e) => setEmail(e.detail.value!)}
        />
        <IonInput
          placeholder="Contraseña"
          type="password"
          value={password}
          onIonChange={(e) => setPassword(e.detail.value!)}
        />
        {error && <IonText color="danger">{error}</IonText>}
        <IonButton expand="block" onClick={handleLogin}>Iniciar Sesión</IonButton>
        <IonButton expand="block" onClick={registro} color="light">Registrarse</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default InicioSesion;
