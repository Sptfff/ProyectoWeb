import React, { useState } from 'react';
import { IonHeader, IonContent, IonTitle, IonToolbar, IonPage } from '@ionic/react';
import InicioSesion from './InicioSesion';
import Registro from './Registro';
import CuentaContent from './CuentaContent'; // Importar el componente CuentaContent
import EditarPerfil from './EditarPerfil'; // Importar el componente EditarPerfil

const Cuenta: React.FC = () => {
  const [isLogged, setIsLogged] = useState(false);
  const [isSigningUp, setIsSigningUp] = useState(false);
  const [isEditingProfile, setIsEditingProfile] = useState(false);

  const setSigningUp = (val: boolean = true) => {
    setIsSigningUp(val);
  };

  const setLoggedIn = (val: boolean = true) => {
    setIsLogged(val);
  };

  const setEditingProfile = (val: boolean = true) => {
    setIsEditingProfile(val);
  };

  const handleSaveProfile = () => {
    // Aquí deberías guardar los datos del perfil y luego mostrar la página de CuentaContent
    setEditingProfile(false);
  };

  return !isSigningUp && !isLogged ? (
    <InicioSesion registro={setSigningUp} login={() => setLoggedIn(true)} />
  ) : isEditingProfile ? (
    <EditarPerfil onSave={handleSaveProfile} onCancel={() => setEditingProfile(false)} />
  ) : isLogged ? (
    <CuentaContent setLoggedOut={() => setLoggedIn(false)} onEditProfile={() => setEditingProfile(true)} />
  ) : (
    <Registro
      back={() => setSigningUp(false)}
      login={() => {
        setLoggedIn(true);
        // Después de registrarte, muestra la página de edición de perfil
        setEditingProfile(true);
      }}
    />
  );
};

export default Cuenta;
