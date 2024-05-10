import { IonPage, IonTitle,IonContent,IonHeader,IonToolbar,IonButtons } from '@ionic/react'
import React from 'react'
import MostrarComidas from '../components/MostrarComidas'
const AgregarComida: React.FC = () => {
  return (
    <div>
      <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Agregar Comida</IonTitle>
        </IonToolbar>
      </IonHeader>
        <IonContent>
          Miren, todo esto tenemos para agregar, es humilde pero trabajo honesto :3
          Falta poner un botón o algo así pa devolverse al nav/comidas ono¿
          <MostrarComidas/>
        </IonContent>
        
      </IonPage>
    </div>
  )
}
export default AgregarComida