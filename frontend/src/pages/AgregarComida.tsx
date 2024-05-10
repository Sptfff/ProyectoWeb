import React, { useState } from 'react'
import { IonPage, IonTitle,IonContent,IonHeader,IonToolbar,IonButtons, IonButton, IonItem, IonLabel, IonInput, IonGrid, IonRow, IonCol  } from '@ionic/react'
import MostrarComidas from '../components/MostrarComidas'
import {useHistory} from 'react-router-dom'; // Importa useHistory para manejar la navegación

const AgregarComida: React.FC = () => {
  const history = useHistory(); // Obtiene el objeto history para manejar la navegación
  const [comidas, setComidas] = useState([]);
  const [nombre, setNombre] = useState('');
  const [descripcion, setDescripcion]= useState('');

  const handleAgregarComida = () => {
    if(!nombre || !descripcion){
      alert('Por favor ingrese el nombre y la descripción de la comida.');
      return;
    }
    // Agregar la comida a la lista de comidas
    const nuevaComida = {
      nombre: nombre,
      descripcion: descripcion
    };
    setComidas([...comidas, nuevaComida]);

    // Limpiar los campos de texto
    setNombre('');
    setDescripcion('');

  }
  const handleVolver=() => {
    history.goBack(); // Función para volver a la página anterior
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonButton onClick={() => history.goBack()}>Volver</IonButton>
          </IonButtons>
          <IonTitle>Agregar Comida</IonTitle>
        </IonToolbar>
      </IonHeader>
      <MostrarComidas comidas={comidas} />
      <IonContent className="ion-padding">
        <p>Miren, todo esto tenemos para agregar, es humilde pero trabajo honesto :3</p>
        <IonItem>
          <IonLabel position="floating">Nombre de la comida</IonLabel>
          <IonInput value={nombre} onIonChange={(e) => setNombre(e.detail.value!)}></IonInput>
        </IonItem>
        <IonItem>
          <IonLabel position="floating">Descripción de la comida</IonLabel>
          <IonInput value={descripcion} onIonChange={(e) => setDescripcion(e.detail.value!)}></IonInput>
        </IonItem>
        <IonButton expand="block" onClick={handleAgregarComida}>Agregar comida</IonButton>
        <IonGrid>
          <IonRow className="ion-justify-content-center">
            <IonCol size="auto">
              <IonButton onClick={() => console.log('Agregar otro alimento')}>Agregar otro alimento</IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
        
      </IonContent>
    </IonPage>
  );
};

export default AgregarComida;