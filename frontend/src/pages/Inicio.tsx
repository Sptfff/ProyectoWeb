import React from 'react'
import { 
  IonHeader, IonPage, IonTitle, IonToolbar,IonMenuButton, 
  IonButtons,IonMenu,IonContent,IonButton, IonList,
  IonItem, IonLabel
 } from '@ionic/react';
import './Inicio.css';


const Inicio: React.FC = () => {
  return (
    <div>
        <IonMenu contentId="main-content">
        <IonHeader>
          <IonToolbar>
            <IonTitle>Menu Content</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">This is the menu content.</IonContent>
      </IonMenu>
      <IonPage id="main-content">
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonMenuButton></IonMenuButton>
            </IonButtons>
            <IonTitle>Inicio</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <div className='center-content'>
            <IonButton>Añadir Comida</IonButton>
            <h2> <strong>Tus Macro Nutrientes de Hoy:</strong></h2>
            <IonList lines="none">
                <IonItem className='item'>
                    <IonLabel>Proteinas: 0/100 g</IonLabel>
                </IonItem>
                <IonItem className='item'>
                    <IonLabel>Grasas:0/100 g</IonLabel>
                </IonItem>
                <IonItem className='item'>
                    <IonLabel>Carbohidratos: 0/100 g</IonLabel>
                </IonItem>
            </IonList>
            <h1> <strong>Calorías Consumidas Hoy:</strong></h1>
            <IonList lines="none">
                <IonItem className='item'>
                  <IonLabel>0/3000 cal.</IonLabel>
                </IonItem>
            </IonList>
            <IonButton>Historial de Comidas de Hoy</IonButton>
          </div>
          
        </IonContent>
      </IonPage>
    </div>
  );
};

export default Inicio;