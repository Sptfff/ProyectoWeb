import { IonPage, IonTitle,IonContent,IonHeader,IonToolbar,IonButtons } from '@ionic/react'
import React from 'react'
import MostrarComidas from '../components/MostrarComidas'
import AgregarButton from '../components/AgregarButton'
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
          este es el buscar comidas, sería como la página de inicio de comidas.
          También podríamos agregar el botón para agregar ono¿
          <AgregarButton onClick={() => {/* Lógica para el botón de añadir comida */}}/>
          <MostrarComidas/>
        </IonContent>
        
      </IonPage>
    </div>
  )
}
export default BuscarComida