import { IonImg, IonPage, IonTitle,IonContent,IonHeader,IonToolbar,IonSearchbar } from '@ionic/react'
import React from 'react'
import MostrarComidas from '../components/MostrarComidas'
import AgregarButton from '../components/AgregarButton'
import logo from '../logo/logo.png' 
import './Header.css'
import HistorialButton from '../components/HistorialButton'
const BuscarComida: React.FC = () => {
  return (
    <div>
      <IonPage>
      <IonHeader>
        <IonToolbar className='Toolbar'>
          <IonImg className='Img' slot="start" src={logo} alt=""  />
          <IonTitle>Comidas</IonTitle>
        </IonToolbar>
        <IonSearchbar animated={true} placeholder="Buscar Comidas"></IonSearchbar>
      </IonHeader>
        <IonContent>
          <AgregarButton onClick={() => {}}/>
          <HistorialButton onClick={() => {}}/>
          <MostrarComidas/>
        </IonContent>
        
      </IonPage>
    </div>
  )
}
export default BuscarComida