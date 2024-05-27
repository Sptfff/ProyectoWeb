import React from 'react';
import { 
  IonHeader, IonPage, IonTitle, IonToolbar,IonMenuButton, 
  IonButtons,IonMenu,IonContent, IonImg
 } from '@ionic/react';
 import MostrarComidas from '../../components/MostrarComidas';




const Almuerzo: React.FC = () => {
  return (
    <div>
        <h2>Almuerzo</h2>
      Para el almuerzo comiste lo siguiente:
      <MostrarComidas/>
    </div>
  );
};

export default Almuerzo;
