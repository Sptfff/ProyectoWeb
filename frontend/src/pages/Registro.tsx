import React, { useState } from 'react';
import axios from 'axios';
import {
  IonButton,
  IonButtons,
  IonCardTitle,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonInput,
  IonLabel,
  IonPage,
  IonRow,
  IonToggle,
  IonToolbar,
  IonText,
  IonImg
} from '@ionic/react';
import { arrowBack } from 'ionicons/icons';
import RegionComunaSelector from './RegionComunaSelector';
import './Header.css';
import logo from '../logo/logo.png';

interface RegistroProps {
  back: () => void;
  login: (userId: string) => void;
}

const Registro: React.FC<RegistroProps> = ({ back, login }) => {
  const [username, setUsername] = useState('');
  const [rut, setRut] = useState('');
  const [email, setEmail] = useState('');
  const [region, setRegion] = useState('');
  const [comuna, setComuna] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [errorMessages, setErrorMessages] = useState({
    username: '',
    rut: '',
    email: '',
    region: '',
    comuna: '',
    password: '',
    confirmPassword: '',
    acceptTerms: '',
  });

  // Función para validar el RUT y su dígito verificador
  const validaDV = (rut: string) => {
    const [numero, dv] = rut.replace("-K", "-k").split("-");
    const dvVer = ((T) => {
      let M = 0, S = 1;
      for (; T; T = Math.floor(T / 10)) S = (S + (T % 10) * (9 - (M++ % 6))) % 11;
      return S ? S - 1 : "k";
    })(parseInt(numero, 10));
    return dvVer == dv.toLowerCase();
  };

  // Función para validar el formulario antes de enviar
  const validateForm = () => {
    const newErrorMessages = {
      username: '',
      rut: '',
      email: '',
      region: '',
      comuna: '',
      password: '',
      confirmPassword: '',
      acceptTerms: '',
    };
    let valid = true;

    if (!username) {
      newErrorMessages.username = 'Por favor, ingrese su nombre de usuario.';
      valid = false;
    }
    if (!rut) {
      newErrorMessages.rut = 'Por favor, ingrese su RUT.';
      valid = false;
    } else if (!/^[0-9]{7,8}-[0-9Kk]{1}$/.test(rut)) {
      newErrorMessages.rut = 'El RUT ingresado es inválido. (ej: 12345678-9)';
      valid = false;
    } else if (!validaDV(rut)) {
      newErrorMessages.rut = 'El dígito verificador del RUT es inválido.';
      valid = false;
    }
    if (!email) {
      newErrorMessages.email = 'Por favor, ingrese su email.';
      valid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrorMessages.email = 'El email ingresado es inválido. (ej: alguien@example.com)';
      valid = false;
    }
    if (!region) {
      newErrorMessages.region = 'Por favor, seleccione su región.';
      valid = false;
    }
    if (!comuna) {
      newErrorMessages.comuna = 'Por favor, seleccione su comuna.';
      valid = false;
    }
    if (!password) {
      newErrorMessages.password = 'Por favor, ingrese su contraseña.';
      valid = false;
    }
    if (!confirmPassword) {
      newErrorMessages.confirmPassword = 'Por favor, confirme su contraseña.';
      valid = false;
    } else if (password !== confirmPassword) {
      newErrorMessages.confirmPassword = 'Las contraseñas no coinciden.';
      valid = false;
    }
    if (!acceptTerms) {
      newErrorMessages.acceptTerms = 'Debe aceptar los términos y condiciones.';
      valid = false;
    }

    setErrorMessages(newErrorMessages);
    return valid;
  };

  // Función para manejar el registro de usuario
  const handleSignup = async () => {
    if (validateForm()) {
      const userData = {
        id: 0, // Este valor probablemente no sea necesario si el servidor asigna el ID
        Nombre: username,
        Rut: rut,
        Correo: email,
        nombreCiudad: comuna,
        nombreRegion: region,
        Pass: password,
        Sexo: 0, // Ajusta según la estructura esperada por tu API
        Peso: 0, // Ajusta según la estructura esperada por tu API
        Altura: 0, // Ajusta según la estructura esperada por tu API
        FechaNac: '1990-01-01', // Ajusta según la estructura esperada por tu API
        Objetivo: 1, // Ajusta según la estructura esperada por tu API
        ActividadFisica: 1, // Ajusta según la estructura esperada por tu API
        Activo: 1, // Ajusta según la estructura esperada por tu API
        esAdmin: 0 // Ajusta según la estructura esperada por tu API
      };

      try {
        const response = await axios.post('http://localhost:3000/users/', userData);
        const userId = response.data.id; // Obtener el ID del usuario de la respuesta
        console.log('Signup successful:', response.data);
        console.log('User ID:', userId);
        localStorage.setItem('userId', userId.toString()); // Guardar el ID del usuario en el almacenamiento local
        login(userId.toString()); // Llamar a la función de login después del registro exitoso
      } catch (error) {
        console.error('Error during signup:', error);
      }
    }
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar className='Toolbar'>
          <IonButtons slot='start'>
            <IonIcon color='primary' onClick={back} icon={arrowBack} className='h-6 w-6' />
            <IonLabel>Volver a Inicio de Sesión</IonLabel>
            <IonImg className='Img' src={logo} alt="" />
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className='ion-padding h-full w-full'>
        <div className='justify center flex h-full w-full items-center'>
          <IonGrid className='ion-padding'>
            <IonRow>
              <IonCol size='12'>
                <IonCardTitle>Regístrate!</IonCardTitle>
              </IonCol>
            </IonRow>
            <IonRow className='ion-margin-top ion-padding-top'>
              <IonCol size='12'>
                <div>
                  <IonInput
                    placeholder='Ingrese nombre de usuario'
                    type='text'
                    value={username}
                    onIonChange={(e) => setUsername(e.detail.value!)}
                  />
                  {errorMessages.username && <IonText color="danger">{errorMessages.username}</IonText>}
                </div>
                <div>
                  <IonInput
                    placeholder='Ingrese su RUT (Sin punto y con guión)'
                    type='text'
                    value={rut}
                    onIonChange={(e) => setRut(e.detail.value!)}
                  />
                  {errorMessages.rut && <IonText color="danger">{errorMessages.rut}</IonText>}
                </div>
                <div>
                  <IonInput
                    placeholder='Ingrese su Email'
                    type='email'
                    value={email}
                    onIonChange={(e) => setEmail(e.detail.value!)}
                  />
                  {errorMessages.email && <IonText color="danger">{errorMessages.email}</IonText>}
                </div>
                <RegionComunaSelector
                  onRegionChange={(regionId: string) => setRegion(regionId)}
                  onComunaChange={(comunaId: string) => setComuna(comunaId)}
                />
                {errorMessages.region && <IonText color="danger">{errorMessages.region}</IonText>}
                {errorMessages.comuna && <IonText color="danger">{errorMessages.comuna}</IonText>}
                <div>
                  <IonInput
                    placeholder='Ingrese su contraseña'
                    type='password'
                    value={password}
                    onIonChange={(e) => setPassword(e.detail.value!)}
                  />
                  {errorMessages.password && <IonText color="danger">{errorMessages.password}</IonText>}
                </div>
                <div>
                  <IonInput
                    placeholder='Confirme su contraseña'
                    type='password'
                    value={confirmPassword}
                    onIonChange={(e) => setConfirmPassword(e.detail.value!)}
                  />
                  {errorMessages.confirmPassword && <IonText color="danger">{errorMessages.confirmPassword}</IonText>}
                </div>
                <IonToggle
                  color={'success'}
                  checked={acceptTerms}
                  onIonChange={(e) => setAcceptTerms(e.detail.checked)}
                >
                  Acepto los términos y condiciones
                </IonToggle>
                {errorMessages.acceptTerms && <IonText color="danger">{errorMessages.acceptTerms}</IonText>}
                <IonButton
                  className='ion-margin-top'
                  color={'primary'}
                  expand='block'
                  onClick={handleSignup}>
                  Crear cuenta
                </IonButton>
              </IonCol>
            </IonRow>
          </IonGrid>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Registro;
