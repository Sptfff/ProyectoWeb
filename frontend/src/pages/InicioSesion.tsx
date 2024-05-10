import React from 'react'
import { IonApp, IonRouterOutlet, setupIonicReact, IonPage, IonContent } from '@ionic/react';
import RegistroOption from '../components/RegistroOption';

function InicioSesion() {
  return (
    <div>
        <IonPage>
            Ola gente
            <IonContent>
                <RegistroOption />
            </IonContent>
        </IonPage>
    </div>
  )
}

export default InicioSesion