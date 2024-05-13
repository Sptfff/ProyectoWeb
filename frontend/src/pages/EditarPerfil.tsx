import { IonContent, IonHeader,IonButton, IonTabBar,IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';


const EditarPerfil: React.FC = () => {
  console.log('editar');
  return (
    <div>
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Editar Perfil</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          Ola, este es la página de editar perfil, aki va el html jeje
          <IonButton color={'primary'} expand='block' 
                      routerLink='/nav/cuenta/' routerDirection="none">
            Guardar Cambios
          </IonButton>
        </IonContent>
      </IonPage>
    </div>
  )
}

export default EditarPerfil;
