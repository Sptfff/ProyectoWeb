import { IonPage, IonTitle,IonContent,IonHeader,IonToolbar,IonButtons } from '@ionic/react'
import React from 'react'
import MostrarComidas from '../components/MostrarComidas'
const HistorialComidas: React.FC = () => {
  return (
    <div>
      <IonPage>
        <IonHeader>
            <IonToolbar>
            <IonTitle>Historial de Comidas</IonTitle>
            </IonToolbar>
        </IonHeader>
        <IonContent>
          Ola muy wenas, aki va el historial de comidas con el editar obviamente

          Falta poner un botón o algo así pa devolverse al nav/comidas ono¿
        </IonContent>
      </IonPage>
    </div>
  )
}
export default HistorialComidas