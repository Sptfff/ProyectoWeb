import React from 'react';
import ComidaCard, { ComidaType} from '../components/ComidaCard';

import { IonPage, IonTitle, IonContent, IonImg, IonHeader, IonToolbar, IonButton, IonInput, IonItem, IonLabel } from '@ionic/react';
import MostrarComidas from '../components/MostrarComidas';
import { IonIcon } from '@ionic/react';
import { addCircleOutline,arrowBack } from 'ionicons/icons';
import logo from '../logo/logo.png' 
import './Header.css'
import { useHistory } from 'react-router-dom';

const AgregarComida: React.FC = () => {
  const history = useHistory();
  const handleIconClick = () => {
    history.push('/nav/comidas');
  };
  const handleAgregarComidaSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para procesar los datos del formulario
    console.log("Se ha enviado el formulario para agregar una nueva comida");
  };
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar className='Toolbar'>
          <IonIcon color='primary' onClick={handleIconClick} icon={arrowBack} className='h-6 w-6' slot="start"/>
          <IonImg className='Img' slot="start" src={logo} alt=""  />
          <IonTitle>Agregar Comida</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <form onSubmit={handleAgregarComidaSubmit}>
            <IonItem lines="none" style={{ maxWidth: '300px', marginLeft: '20px' }}>
              <IonInput placeholder='Ingrese Comida (ej: manzana)' type="text" required></IonInput>
            </IonItem>
            <IonItem lines="none" style={{ maxWidth: '300px', marginLeft: '20px' }}>
              <IonInput placeholder='Ingrese Cantidad' type="number" required></IonInput>
            </IonItem>
            <IonButton type="submit" expand="block" color={'success'}>
              <IonIcon icon={addCircleOutline} slot="start" />
              Agregar Una Comida
            </IonButton>
          </form>
        <MostrarComidas/>
      </IonContent> 
    </IonPage>
  );
};

export default AgregarComida;