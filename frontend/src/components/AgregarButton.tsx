import React from 'react';
import { IonButton,IonRouterLink } from '@ionic/react';

const AgregarButton: React.FC<{ onClick: () => void }> = ({ onClick }) => {
  return (
    <IonRouterLink routerLink={`/nav/comidas`} routerDirection="none">
        <IonButton onClick={onClick}>
          Agregar Comida
        </IonButton>
    </IonRouterLink>
    
  );
};

export default AgregarButton;
