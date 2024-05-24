import React from 'react';
import ComidaCard, { ComidaType} from '../components/ComidaCard';

import { IonPage, IonTitle, IonContent, IonHeader, IonToolbar, IonButton, IonInput, IonItem, IonLabel } from '@ionic/react';

import { IonIcon } from '@ionic/react';
import { addCircleOutline } from 'ionicons/icons';

const AgregarComida: React.FC = () => {
  // Función para manejar el envío del formulario
  const handleAgregarComidaSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para procesar los datos del formulario
    console.log("Se ha enviado el formulario para agregar una nueva comida");
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Agregar Comida</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <form onSubmit={handleAgregarComidaSubmit}>
          <IonItem lines="none" style={{ maxWidth: '300px', marginLeft: '20px' }}>
            <IonLabel position="floating">Ingrese nombre Comida</IonLabel>
            <br/>
            <IonInput type="text" required></IonInput>
          </IonItem>
          <IonItem lines="none" style={{ maxWidth: '300px', marginLeft: '20px' }}>
            <IonLabel position="floating">Ingrese cantidad comida</IonLabel>
            <br/>
            <IonInput type="number" required></IonInput>
          </IonItem>
          <IonButton type="submit" expand="block">
            <IonIcon icon={addCircleOutline} slot="start" />
            Agregar Una Comida
          </IonButton>
        </form>
        {comidasAmostrar.map((comida) => (
          <ComidaCard
          key={comida.id} comida={comida}/>
        ))}
      </IonContent> 
    </IonPage>
  );
};


const comidasAmostrar: Array<{
  title: string;
  id: number;
  type: ComidaType;
  image: string;
  calorias:number;
  proteinas:number;
  grasas:number;
  carbohidratos:number;
}> = [
  {
      title: 'Filete de Cerdo',
      id: 1,
      type: 'carnita',
      image:
          'https://st3.depositphotos.com/10614052/34584/i/450/depositphotos_345848668-stock-photo-cooked-pork-steaks-on-white.jpg',
      calorias: 430,
      proteinas: 40,
      grasas: 10,
      carbohidratos: 5,
  },
  {
      title: 'Manzana',
      id: 2,
      type: 'fruta',
      image:
          'https://www.recetasnestlecam.com/sites/default/files/2022-04/tipos-de-manzana-royal-gala.jpg',
      calorias: 50,
      proteinas: 2,
      grasas: 5,
      carbohidratos: 60,
  },
  {
      title: 'Vaso de Leche',
      id: 3,
      type: 'lacteo',
      image: 
          'https://img.freepik.com/fotos-premium/vaso-leche-aislado-blanco_62856-4586.jpg',
      calorias: 100,
      proteinas: 10,
      grasas: 5,
      carbohidratos: 50,
  },
  {
      title: 'Frutilla',
      id: 4,
      type: 'fruta',
      image: 
          'https://directodelavega.cl/wp-content/uploads/2020/05/frutilla-kilo.jpeg',
      calorias: 1000,
      proteinas: 1,
      grasas: 5,
      carbohidratos: 20,
  }
]
export default AgregarComida;
