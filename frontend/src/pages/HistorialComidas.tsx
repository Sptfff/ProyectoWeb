import { IonPage, IonTitle,IonContent,IonHeader,IonToolbar,IonImg,
  IonIcon,IonButton,IonButtons, IonRouterLink, IonSegment, 
  IonSegmentButton, IonLabel} from '@ionic/react'
import MostrarComidas from '../components/MostrarComidas'
import logo from '../logo/logo.png';
import './Header.css';
import { useHistory } from 'react-router-dom';
import { addOutline, arrowBack } from 'ionicons/icons';
import Desayuno from './historial/Desayuno';
import Almuerzo from './historial/Almuerzo';
import Cena from './historial/Cena';
import React, { useState } from "react"  
const lista = {
  desayuno: {
    label: 'Desayuno',
    component: <Desayuno />,
  },
  almuerzo: {
    label: 'Almuerzo',
    component: <Almuerzo />,
  },
  cena: {
    label: 'Cena',
    component: <Cena />,
  },
};

const HistorialComidas: React.FC = () => {
  const [listSelected, setListSelected] = useState<keyof typeof lista>('desayuno');
  const history = useHistory();
  const handleIconClick = () => {
    history.push('/nav/comidas');
  };

  return (
    <div>
      <IonPage>
        <IonHeader>
            <IonToolbar className='Toolbar'>
              <IonTitle>Historial de Comidas</IonTitle>
              <IonIcon color='primary' onClick={handleIconClick} icon={arrowBack} className='h-6 w-6' slot="start"/>
              <IonImg slot="start" className='Img' src={logo} alt=""/>
            </IonToolbar>
            <IonToolbar>
              <IonSegment
                value={listSelected}
                onIonChange={(e) => setListSelected(e.target.value as keyof typeof lista)}
              >
                {Object.keys(lista).map((key) => (
                  <IonSegmentButton key={key} value={key}>
                    <IonLabel>{lista[key as keyof typeof lista].label}</IonLabel>
                  </IonSegmentButton>
                ))}
              </IonSegment>
            </IonToolbar>
        </IonHeader>
        <IonContent className='ion-padding'>{lista[listSelected].component}</IonContent>
      </IonPage>
    </div>
  )
}
export default HistorialComidas