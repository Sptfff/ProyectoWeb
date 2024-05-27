import React from 'react';
import { 
  IonHeader, IonPage, IonTitle, IonToolbar,IonMenuButton, 
  IonButtons,IonMenu,IonContent, IonImg
 } from '@ionic/react';

 import MostrarComidas from '../../components/MostrarComidas';




const Cena: React.FC = () => {
  return (
    <div>
        <h2>Cena</h2>
      Tus comidas de la cena son:
      <MostrarComidas/>
    </div>
  );
};

export default Cena;
