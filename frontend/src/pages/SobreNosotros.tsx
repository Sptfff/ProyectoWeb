import React from 'react';
import { IonContent, IonHeader, IonToolbar, IonTitle, IonImg, IonPage, IonRow, IonButton} from '@ionic/react';
import logo from '../logo/logo.png';
import './Header.css';
import './SobreNosotros.css'
import {useHistory} from 'react-router-dom'; // Importa useHistory para manejar la navegación

const SobreNosotros: React.FC = () => {
  const history = useHistory()
const handleVolver=() => {
  history.push('/'); // Función para volver a la página anterior
};
  return (
    <IonPage> 
        <IonHeader>
                <IonToolbar className='Toolbar'>
                    
                    <IonImg slot="start" className='Img' src={logo} alt=""/>
                    <IonTitle>Sobre Nosotros</IonTitle>
                </IonToolbar>
        </IonHeader>
        <IonContent>
            <div className='Texto'>
                <p>Este es un proyecto del curso Ingeniería Web y Móvil ICI4247-1</p>
                <p>Somos estudiantes de la PUCV de la carrera de Ingeniería Civil Informática cursando 7mo semestre</p>
                <p>
                Si quieres saber más sobre la PUCV puedes visitarla en su web: 
                <a href="https://www.pucv.cl" target="_blank" rel="noopener noreferrer">PUCV</a>
                </p>
                <p>
                O si quieres saber de la Escuela de Ingeniería Informática: 
                <a href="https://www.inf.ucv.cl" target="_blank" rel="noopener noreferrer">INF UCV</a>
                </p>
            </div>
        </IonContent>
    </IonPage>
  );
}

export default SobreNosotros;
