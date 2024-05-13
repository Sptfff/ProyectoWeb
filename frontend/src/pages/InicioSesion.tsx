import {
  IonButton,
  IonCardTitle,
  IonCol,
  IonContent,
  IonGrid,
  IonInput,
  IonLabel,
  IonPage,
  IonRow,
  IonText,
} from '@ionic/react';

interface InicioSesionProps {
  registro: () => void;
  login: () => void;
}

const InicioSesion: React.FC<InicioSesionProps> = ({ registro, login }: InicioSesionProps) => {
  return (
    <IonPage>
      <IonContent fullscreen className='ion-padding h-full w-full'>
        <div className='justify center flex h-full w-full items-center'>
          <IonGrid className='ion-padding'>
            <IonRow>
              <IonCol size='12'>
                <IonCardTitle>Inicio de sesión</IonCardTitle>
              </IonCol>
            </IonRow>

            <IonRow className='ion-margin-top ion-padding-top'>
              <IonCol size='12'>
                <div>
                  <IonLabel>Nombre de usuario</IonLabel>
                  <IonInput type='text' />
                </div>
                <div>
                  <IonLabel>Contraseña</IonLabel>
                  <IonInput type='password' />
                </div>
                <IonButton className='ion-margin-top' color={'light'} expand='block' onClick={login}>
                  Iniciar sesión
                </IonButton>
              </IonCol>
            </IonRow>
            <IonRow className='ion-text-center ion-justify-content-center'>
              <IonCol size='12'>
                <p>
                  ¿No tienes una cuenta?
                  <IonText color={'primary'} onClick={registro}>
                    {' '}
                    regístrate! &rarr;
                  </IonText>
                </p>
              </IonCol>
            </IonRow>
          </IonGrid>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default InicioSesion;