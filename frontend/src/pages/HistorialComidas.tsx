import { IonPage, IonTitle,IonContent,IonHeader,IonToolbar,IonButton } from '@ionic/react'
import ComidaCard, { ComidaType} from '../components/ComidaCard';
import React from 'react'
import MostrarComidas from '../components/MostrarComidas'

type ComidaType = {
  title: string;
  id: number;
  type: 'fruta' | 'carnita' | 'lacteo'; // Esto es un ejemplo, ajusta según tus necesidades
  image: string;
  calorias: number;
  proteinas: number;
  grasas: number;
  carbohidratos: number;
};

const HistorialComidas: React.FC = () => {
  const comidasPorSeccion: Record<string, ComidaType[]> = {
    mañana: [
      // Aquí puedes agregar las comidas para la mañana
      {
        title: 'Manzana',
        id: 1,
        type: 'fruta',
        image:
          'https://www.recetasnestlecam.com/sites/default/files/2022-04/tipos-de-manzana-royal-gala.jpg',
        calorias: 50,
        proteinas: 2,
        grasas: 5,
        carbohidratos: 60,
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
    ],
    tarde: [
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
      // Aquí puedes agregar las comidas para la tarde
    ],
    noche: [
      // Aquí puedes agregar las comidas para la noche
    ],
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Historial de Comidas</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonButton expand="block" routerLink="/comidas">Volver a Comidas</IonButton>
        <div style={{ padding: '10px' }}>
          <h2>Mañana</h2>
          {comidasPorSeccion.mañana.map((comida) => (
            <ComidaCard key={comida.id} comida={comida} />
          ))}
          <h2>Tarde</h2>
          {comidasPorSeccion.tarde.map((comida) => (
            <ComidaCard key={comida.id} comida={comida} />
          ))}
          <h2>Noche</h2>
          {comidasPorSeccion.noche.map((comida) => (
            <ComidaCard key={comida.id} comida={comida} />
          ))}
        </div>
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
export default HistorialComidas