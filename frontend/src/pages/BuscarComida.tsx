import { IonPage, IonTitle,IonContent,IonHeader,IonToolbar,IonButtons } from '@ionic/react'
import React from 'react'
import MostrarComidas from '../components/MostrarComidas'
const BuscarComida: React.FC = () => {
  return (
    <div>
      <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Comidas</IonTitle>
        </IonToolbar>
      </IonHeader>
        
        <IonContent>
          <MostrarComidas/>
        </IonContent>
        
      </IonPage>
    </div>
  )
}
export default BuscarComida