import React, { useState, useEffect } from 'react';
import axios from 'axios';
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
  IonText,
  IonImg
} from '@ionic/react';
import logo from '../logo/logo.png';
import './Header.css';
import './EditarPerfil.css';
import { useHistory } from 'react-router-dom';

interface EditarPerfilProps {
  onSave: () => void;
  onCancel: () => void;
}

const EditarPerfil: React.FC<EditarPerfilProps> = ({ onSave, onCancel }) => {
  const history = useHistory();

  const [sexo, setSexo] = useState<string>('');
  const [peso, setPeso] = useState<number | null>(null);
  const [altura, setAltura] = useState<number | null>(null);
  const [fechaNac, setFechaNac] = useState<string>('');
  const [objetivo, setObjetivo] = useState<string>('');
  const [nivelAct, setNivelAct] = useState<string>('');
  const [errorMessages, setErrorMessages] = useState({
    sexo: '',
    peso: '',
    altura: '',
    objetivo: '',
    nivelAct: ''
  });

  const validateForm = () => {
    const newErrorMessages = {
      sexo: '',
      peso: '',
      altura: '',
      objetivo: '',
      nivelAct: ''
    };
    let valid = true;

    if (!sexo) {
      newErrorMessages.sexo = 'Por favor, seleccione su sexo.';
      valid = false;
    }
    if (!peso || peso <= 0) {
      newErrorMessages.peso = 'Por favor, ingrese un peso válido mayor que 0.';
      valid = false;
    }
    if (!altura || altura <= 0) {
      newErrorMessages.altura = 'Por favor, ingrese una altura válida mayor que 0.';
      valid = false;
    }
    if (!objetivo) {
      newErrorMessages.objetivo = 'Por favor, seleccione su objetivo.';
      valid = false;
    }
    if (!nivelAct) {
      newErrorMessages.nivelAct = 'Por favor, seleccione su nivel de actividad física.';
      valid = false;
    }

    setErrorMessages(newErrorMessages);
    return valid;
  };

  const handleSave = async () => {
    if (validateForm()) {
      const userData = {
        Sexo: sexo,
        Peso: peso,
        Altura: altura,
        FechaNac: fechaNac,
        Objetivo: objetivo,
        ActividadFisica: nivelAct
      };

      try {
        console.log(userData)
        const idToken = localStorage.getItem('token');
        console.log(idToken);
        const response = await axios.put(
          'http://localhost:3000/users/editar',
          userData, // Este es el body de la solicitud
          {
              headers: {
                  Authorization: `Bearer ${idToken}`
              }
          }
      );
        console.log(response);


        /*console.log(userId);
        console.log("--");
        console.log("--");
        console.log(userData);
        const response = await axios.put(`http://localhost:3000/users/${userId}`, userData);
        console.log('Profile updated:', response.data);*/
        onSave();
      } catch (error) {
        console.error('Error updating profile:', error);
      }
    }
  };

  const handleDateChange = (e: CustomEvent) => {
    const value = e.detail.value;
    if (typeof value === 'string') {
      setFechaNac(value);
    } else if (Array.isArray(value) && value.length > 0) {
      setFechaNac(value[0]);
    }
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar className='Toolbar'>
          <IonImg slot="start" className='Img' src={logo} alt="" />
          <IonTitle>Editar Perfil</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className='content'>
        <div className="formulario">
          <form id="editarPerfil" method="post">
            <IonList>
              <IonLabel>Selecciona tu sexo:</IonLabel>
              <IonRadioGroup value={sexo} onIonChange={(e) => setSexo(e.detail.value)} className="sexo">
                <IonItem>
                  <IonLabel>Masculino</IonLabel>
                  <IonRadio slot="start" value="1" />
                </IonItem>
                <IonItem>
                  <IonLabel>Femenino</IonLabel>
                  <IonRadio slot="start" value="0" />
                </IonItem>
              </IonRadioGroup>
              {errorMessages.sexo && <IonText color="danger">{errorMessages.sexo}</IonText>}

              <IonGrid className='entrada'>
                <div className='paprobar'>
                  <IonRow>
                    <IonCol size="6">
                      <IonItem className='peso'>
                        <IonLabel position="floating">Peso (Kg):</IonLabel><br />
                        <IonInput type="number" value={peso !== null ? peso : ''} onIonChange={(e) => setPeso(parseFloat(e.detail.value!))} required />
                      </IonItem>
                      {errorMessages.peso && <IonText color="danger">{errorMessages.peso}</IonText>}
                    </IonCol>
                    <IonCol size="6">
                      <IonItem className='altura'>
                        <IonLabel position="floating">Altura (Cm):</IonLabel><br />
                        <IonInput type="number" value={altura !== null ? altura : ''} onIonChange={(e) => setAltura(parseFloat(e.detail.value!))} required />
                      </IonItem>
                      {errorMessages.altura && <IonText color="danger">{errorMessages.altura}</IonText>}
                    </IonCol>
                  </IonRow>
                </div>
              </IonGrid>

              <IonTitle className='fecha'>Fecha de Nacimiento</IonTitle>
              <div className='fecha-container'>
                <IonDatetime
                  className='move-right'
                  id='fechanacimiento'
                  presentation="date"
                  preferWheel={true}
                  value={fechaNac}
                  onIonChange={handleDateChange}
                ></IonDatetime>
              </div>

              <IonRadioGroup value={objetivo} onIonChange={(e) => setObjetivo(e.detail.value)} className="objetivo">
                <IonLabel>¿Qué objetivo tienes?</IonLabel>
                <IonItem>
                  <IonLabel>Bajar de Peso</IonLabel>
                  <IonRadio slot="start" value="1" />
                </IonItem>
                <IonItem>
                  <IonLabel>Mantener Peso</IonLabel>
                  <IonRadio slot="start" value="2" />
                </IonItem>
                <IonItem>
                  <IonLabel>Ganar Masa Muscular</IonLabel>
                  <IonRadio slot="start" value="3" />
                </IonItem>
              </IonRadioGroup>
              {errorMessages.objetivo && <IonText color="danger">{errorMessages.objetivo}</IonText>}

              <IonRadioGroup value={nivelAct} onIonChange={(e) => setNivelAct(e.detail.value)} className="nivelAct">
                <IonLabel>Nivel de Actividad Física</IonLabel>
                <IonItem>
                  <IonLabel>Ligero (1-2 días x semana)</IonLabel>
                  <IonRadio slot="start" value="1" />
                </IonItem>
                <IonItem>
                  <IonLabel>Moderado (3-4 días x semana)</IonLabel>
                  <IonRadio slot="start" value="2" />
                </IonItem>
                <IonItem>
                  <IonLabel>Alto (5 o más días x semana)</IonLabel>
                  <IonRadio slot="start" value="3" />
                </IonItem>
              </IonRadioGroup>
              {errorMessages.nivelAct && <IonText color="danger">{errorMessages.nivelAct}</IonText>}

              <div className="boton">
                <IonButton color='primary' expand='block' onClick={handleSave}>Guardar Cambios</IonButton>
              </div>
            </IonList>
          </form>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default EditarPerfil;
