import React from 'react';
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonItem,
  IonLabel,
  IonInput,
  IonRadio,
  IonRadioGroup,
  IonButton,
  IonGrid,
  IonRow,
  IonCol,
  IonDatetime,
  IonListHeader,IonImg
} from '@ionic/react';
import logo from '../logo/logo.png';
import './Header.css';
import './EditarPerfil.css'
import { useHistory } from 'react-router-dom';
interface EditarPerfilProps {
  onSave: () => void;
  onCancel: () => void;
}
const EditarPerfil: React.FC<EditarPerfilProps> = ({ onSave, onCancel }) => {
  const history = useHistory();
  return (
    <IonPage>
      <IonHeader>
      <IonToolbar className='Toolbar'>
          <IonImg slot="start" className='Img' src={logo} alt=""/>
          <IonTitle>Editar Perfil</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className='content'>
        <div className="formulario">
          <form id="editarPerfil" method="post">
            <IonList>
              <IonRadioGroup className="sexo">
                <IonItem>
                  <IonLabel>Masculino</IonLabel>
                  <IonRadio slot="start" value="Hombre" />
                </IonItem>
                <IonItem>
                  <IonLabel>Femenino</IonLabel>
                  <IonRadio slot="start" value="Mujer" />
                </IonItem>
              </IonRadioGroup>
              <IonGrid className='entrada'>
                <div className='paprobar'>
                  <IonRow>
                    <IonCol size="6">
                      <IonItem className='peso'>
                        <IonLabel position="floating">Peso (Kg):</IonLabel>
                        <IonInput type="number" name="peso" className='dist-num' required />
                      </IonItem>
                    </IonCol>
                    <IonCol size="6">
                      <IonItem className='altura'>
                        <IonLabel position="floating">Altura (Cm):</IonLabel>
                          <IonInput type="number" name="altura" className='dist-num' required />
                      </IonItem>
                    </IonCol>
                  </IonRow>
                </div>
              </IonGrid>
                <IonTitle  className='fecha' >Fecha de Nacimiento</IonTitle>
                <div className='fecha-container'>
                <IonDatetime className='move-right' presentation="date" preferWheel={true}></IonDatetime>
              </div>
              <IonRadioGroup className="objetivo">
                  <IonLabel>¿Qué objetivo tienes?</IonLabel>
                <IonItem>
                  <IonLabel>Bajar de Peso</IonLabel>
                  <IonRadio slot="start" value="Bajar de Peso" />
                </IonItem>
                <IonItem>
                  <IonLabel>Mantener Peso</IonLabel>
                  <IonRadio slot="start" value="Mantener Peso" />
                </IonItem>
                <IonItem>
                  <IonLabel>Ganar Masa Muscular</IonLabel>
                  <IonRadio slot="start" value="Ganar Masa Muscular" />
                </IonItem>
              </IonRadioGroup>
              <IonRadioGroup className="nivelAct">
                  <IonLabel>Nivel de Actividad Física</IonLabel>
                <IonItem>
                  <IonLabel>Ligero (1-2 días x semana)</IonLabel>
                  <IonRadio slot="start" value="Ligero" />
                </IonItem>
                <IonItem>
                  <IonLabel>Moderado (3-4 días x semana)</IonLabel>
                  <IonRadio slot="start" value="Moderado" />
                </IonItem>
                <IonItem>
                  <IonLabel>Alto (5 o más días x semana)</IonLabel>
                  <IonRadio slot="start" value="Alto" />
                </IonItem>
              </IonRadioGroup>
              <div className="boton">
                <IonButton color='primary' expand='block' onClick={onSave}>Guardar Cambios</IonButton>
              </div>
            </IonList>
          </form>
        </div>
      </IonContent>
    </IonPage>
  );
};
export default EditarPerfil;