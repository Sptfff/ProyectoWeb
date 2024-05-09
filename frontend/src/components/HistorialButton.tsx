import React from 'react';
import { IonButton,IonRouterLink } from '@ionic/react';

const HistorialButton: React.FC<{ onClick: () => void }> = ({ onClick }) => {
  return (
    <IonRouterLink routerLink={`/nav/comidas`} routerDirection="none">
        <IonButton onClick={onClick}>
          Historial de Comidas
        </IonButton>
    </IonRouterLink>
  );
};

export default HistorialButton;
