import React from 'react';
import { IonButton,IonRouterLink } from '@ionic/react';

const IniciarSesionButton: React.FC<{ onClick: () => void }> = ({ onClick }) => {
  return (
    <IonRouterLink routerLink={`/inicioSesion`} routerDirection="none">
        <IonButton onClick={onClick} color={'primary'}>
          Iniciar Sesión man
        </IonButton>
    </IonRouterLink>
    
  );
};

export default IniciarSesionButton;
