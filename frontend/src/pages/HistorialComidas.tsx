import { IonPage, IonTitle,IonContent,IonHeader,IonToolbar,IonImg,IonList,IonLabel,IonItem } from '@ionic/react'
import React from 'react'
import MostrarComidas from '../components/MostrarComidas'
import logo from '../logo/logo.png';
import './Header.css';
const HistorialComidas: React.FC = () => {
  return (
    <div>
      <IonPage>
        <IonHeader>
            <IonToolbar className='Toolbar'>
              <IonTitle>Historial de Comidas</IonTitle>
              <IonImg slot="start" className='Img' src={logo} alt=""/>
            </IonToolbar>
        </IonHeader>
        <IonContent>
          <div>Desayuno</div>
            <MostrarComidas/>
          <div>Almuerzo</div>
            <MostrarComidas/>
          <div>Cena</div>
            <MostrarComidas/>
        </IonContent>
      </IonPage>
    </div>
  )
}
export default HistorialComidas