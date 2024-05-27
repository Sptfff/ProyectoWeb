import React from 'react';
import { 
  IonHeader, IonPage, IonTitle, IonToolbar,IonMenuButton, 
  IonButtons,IonMenu,IonContent, IonImg
 } from '@ionic/react';
import MostrarComidas from '../../components/MostrarComidas';




const Desayuno: React.FC = () => {
  return (
    <div>
        <h2>Desayuno</h2>
        Tus comidas agregadas en desayuno son:
      <MostrarComidas/>
    </div>
  );
};

export default Desayuno;
