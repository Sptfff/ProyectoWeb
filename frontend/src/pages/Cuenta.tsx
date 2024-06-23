import React, { useState, useEffect } from 'react';
import InicioSesion from './InicioSesion';
import Registro from './Registro';
import CuentaContent from './CuentaContent'; // Importar el componente CuentaContent
import EditarPerfil from './EditarPerfil'; // Importar el componente EditarPerfil

const Cuenta: React.FC = () => {
  const [isLogged, setIsLogged] = useState(false);
  const [isSigningUp, setIsSigningUp] = useState(false);
  const [isEditingProfile, setIsEditingProfile] = useState(false);
  const [userId, setUserId] = useState<string | null>(null);

  useEffect(() => {
    const id = localStorage.getItem('userId');
    if (id) {
      setUserId(id);
      setIsLogged(true);
    }
  }, []);

  const setSigningUp = (val: boolean = true) => {
    setIsSigningUp(val);
  };

  const setLoggedIn = (userId: string) => {
    setUserId(userId);
    setIsLogged(true);
  };

  const setEditingProfile = (val: boolean = true) => {
    setIsEditingProfile(val);
  };

  const handleSaveProfile = () => {
    setEditingProfile(false);
  };

  return !isSigningUp && !isLogged ? (
    <InicioSesion registro={setSigningUp} login={setLoggedIn} />
  ) : isEditingProfile ? (
    <EditarPerfil onSave={handleSaveProfile} onCancel={() => setEditingProfile(false)} userId={userId} />
  ) : isLogged ? (
    <CuentaContent setLoggedOut={() => {
      setIsLogged(false);
      localStorage.removeItem('userId');
    }} onEditProfile={() => setEditingProfile(true)} />
  ) : (
    <Registro
      back={() => setSigningUp(false)}
      login={(userId) => {
        setLoggedIn(userId);
        setEditingProfile(true);
      }}
    />
  );
};

export default Cuenta;
