import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import InicioSesion from './InicioSesion';
import Registro from './Registro';
import CuentaContent from './CuentaContent'; // Importar el componente CuentaContent
import EditarPerfil from './EditarPerfil'; // Importar el componente EditarPerfil

const Cuenta: React.FC = () => {
  const [isLogged, setIsLogged] = useState(false);
  const [isSigningUp, setIsSigningUp] = useState(false);
  const [isEditingProfile, setIsEditingProfile] = useState(false);
  const history = useHistory();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      axios.get('http://localhost:3000/perfil', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then(response => {
        console.log(response.data.message); // Token is valid
        setIsLogged(true);
      })
      .catch(error => {
        console.error('Error verifying token:', error);
        localStorage.removeItem('token');
        setIsLogged(false);
      });
    }
  }, []);

  const handleSignUp = (): void => {
    setIsSigningUp(true);
  };

  const handleLogin = (): void => {
    setIsLogged(true);
    setIsEditingProfile(true);
  };

  const handleEditProfile = (): void => {
    setIsEditingProfile(true);
  };

  const handleSaveProfile = (): void => {
    setIsEditingProfile(false);
  };

  const handleLogout = (): void => {
    setIsLogged(false);
    localStorage.removeItem('token');
  };

  return !isSigningUp && !isLogged ? (
    <InicioSesion registro={handleSignUp} login={handleLogin} />
  ) : isEditingProfile ? (
    <EditarPerfil onSave={handleSaveProfile} onCancel={() => setIsEditingProfile(false)} />
  ) : isLogged ? (
    <CuentaContent setLoggedOut={handleLogout} onEditProfile={handleEditProfile} />
  ) : (
    <Registro back={() => setIsSigningUp(false)} login={handleLogin} />
  );
};

export default Cuenta;
