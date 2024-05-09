import { IonContent, IonPage } from '@ionic/react';
import ComidaCard, { ComidaType} from './ComidaCard';

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
    
  const MostrarComidas: React.FC = () => {
    return(
        <IonContent>
            <div>
                {comidasAmostrar.map((comida) => (
                    <ComidaCard
                        key={comida.id} comida={comida}
                    />
                ))}
            </div>
        </IonContent>
    );
  };
  export default MostrarComidas;

