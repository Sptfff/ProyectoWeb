import React from 'react';
import { 
  IonHeader, IonPage, IonTitle, IonToolbar,IonMenuButton, 
  IonButtons,IonMenu,IonContent, IonImg
 } from '@ionic/react';
import AgregarButton from '../components/AgregarButton';
import HistorialButton from '../components/HistorialButton';
import './Inicio.css';
import logo from '../logo/logo.png'; 
import './Header.css'
import Macros from '../components/Macros'
import Calorias from '../components/Calorias'
import './Header.css'

const caloriasConsumidas = 1500;
const caloriasMeta = 2000;
const proteinasConsumidas = 50;
const grasasConsumidas = 30;
const carbohidratosConsumidos = 150;

const Inicio: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar className='Toolbar'>
          <IonTitle>Inicio</IonTitle>
          <IonImg slot="start" className='Img' src={logo} alt=""  />
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <div className='center-content'>
          <AgregarButton onClick={() => {/* Lógica para el botón de añadir comida */}} />
          <Macros proteinas={proteinasConsumidas} 
                  grasas={grasasConsumidas} 
                  carbohidratos={carbohidratosConsumidos}/>
          <Calorias caloriasConsumidas={caloriasConsumidas} caloriasMeta={caloriasMeta} />
          <HistorialButton onClick={() => {/* Lógica para el botón de historial de comidas */}} />
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Inicio;
