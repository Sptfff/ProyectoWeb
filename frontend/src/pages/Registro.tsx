import {
  IonButton,
  IonButtons,
  IonCardTitle,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonInput,
  IonLabel,
  IonPage,
  IonRow,
  IonSelect,
  IonSelectOption,
  IonToggle,
  IonToolbar,
} from '@ionic/react';
import { arrowBack } from 'ionicons/icons';

interface RegistroProps {
  back: () => void;
  login: () => void; // Agregar función para iniciar sesión
}

const Registro: React.FC<RegistroProps> = ({ back, login }: RegistroProps) => {
  const signup = () => {
    console.log('Signup');
    login();
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot='start'>
            <IonIcon color='primary' onClick={back} icon={arrowBack} className='h-6 w-6' />
            <IonLabel>Volver</IonLabel>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className='ion-padding h-full w-full'>
        <div className='justify center flex h-full w-full items-center'>
          <IonGrid className='ion-padding'>
            <IonRow>
              <IonCol size='12'>
                <IonCardTitle>Regístrate!</IonCardTitle>
              </IonCol>
            </IonRow>

            <IonRow className='ion-margin-top ion-padding-top'>
              <IonCol size='12'>
                <div>
                  <IonLabel>Nombre de usuario</IonLabel>
                  <IonInput type='text' />
                </div>
                <div>
                  <IonLabel>RUT</IonLabel>
                  <IonInput type='text' />
                </div>
                <div>
                  <IonLabel>Email</IonLabel>
                  <IonInput type='email' />
                </div>
                <div>
                  <IonLabel>Seleccione su región</IonLabel>
                  <IonSelect placeholder='Ver regiones'>
                    <IonSelectOption value='5'>Región de Valparaíso</IonSelectOption>
                    <IonSelectOption value='13'>Región Metropolitana</IonSelectOption>
                  </IonSelect>
                </div>
                <div>
                  <IonLabel>Seleccione su comuna</IonLabel>
                  <IonSelect placeholder='Ver comunas' disabled>
                    <IonSelectOption value='5'>Viña del Mar</IonSelectOption>
                    <IonSelectOption value='13'>Valparaíso</IonSelectOption>
                  </IonSelect>
                </div>
                <div>
                  <IonLabel>Contraseña</IonLabel>
                  <IonInput type='password' />
                </div>
                <div>
                  <IonLabel>Confirme su contraseña</IonLabel>
                  <IonInput type='password' />
                </div>
                <IonToggle color={'success'} labelPlacement='end'>
                  Acepto los términos y condiciones
                </IonToggle>
                <IonButton className='ion-margin-top' color={'primary'} expand='block' onClick={signup}>
                  Crear cuenta
                </IonButton>
              </IonCol>
            </IonRow>
          </IonGrid>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Registro;