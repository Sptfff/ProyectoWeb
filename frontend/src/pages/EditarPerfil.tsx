import React from 'react';
import { IonContent, IonHeader, IonButton, IonPage, IonTitle, IonToolbar,IonImg } from '@ionic/react';
import './Header.css'
import logo from '../logo/logo.png'

interface EditarPerfilProps {
  onSave: () => void;
  onCancel: () => void;
}

const EditarPerfil: React.FC<EditarPerfilProps> = ({ onSave, onCancel }) => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar className='Toolbar'>
          <IonTitle>Editar Perfil</IonTitle>
          <IonImg slot="start" className='Img' src={logo} alt=""  />
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <p>Ola, esta es la página de editar perfil, aquí va el html jeje</p>
        <IonButton color='primary' expand='block' onClick={onSave}>
          Guardar Cambios
        </IonButton>
        
      </IonContent>
    </IonPage>
  );
};

export default EditarPerfil;

