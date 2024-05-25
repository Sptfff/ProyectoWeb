import React from 'react';
import { IonButton,IonRouterLink } from '@ionic/react';

const EditarPerfilButton: React.FC<{ onClick: () => void }> = ({ onClick }) => {
  return (
    <IonRouterLink routerLink={`/nav/cuenta/editarPerfil`} routerDirection="none">
        <IonButton onClick={onClick}>
          Editar Perfil pepe
        </IonButton>
    </IonRouterLink>
    
  );
};

export default EditarPerfilButton;
