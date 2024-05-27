import React from 'react';
import { IonContent, IonPage } from '@ionic/react';
import ComidaCard, { ComidaType } from './ComidaCard';
import data from '../JSON/comidas.json';

interface Comida {
    title: string;
    id: number;
    type: ComidaType;
    image: string;
    calorias: number;
    proteinas: number;
    grasas: number;
    carbohidratos: number;
}


const mapCategoriaToComidaType = (categoria: string): ComidaType => {
    switch (categoria) {
        case 'Frutas':
            return 'Fruta';
        case 'Carnes':
            return 'Carne';
        case 'Alimento proteico':
            return 'Alimento proteico'; // Assuming this maps to 'carnita'
        case 'Cereales y derivados':
            return 'Cereales y derivados'; // Assuming this maps to 'lacteo'
        case 'Pastas':
            return 'Pastas'; // Assuming this maps to 'lacteo'
        case 'Pescado':
            return 'Carne'; // Assuming this maps to 'carnita'
        case 'Verduras':
            return 'Verduras'; // Assuming this maps to 'fruta'
        default:
            return 'Otros'; // Default category if not mapped
        
    }
};

const MostrarComidas: React.FC = () => {
    const comidas = data.comidas.map((comida: any) => ({
        ...comida,
        type: mapCategoriaToComidaType(comida.type),
    }));

    return (
        <div>
            <div>
                {comidas.map(comida => (
                    <ComidaCard key={comida.id} comida={comida} />
                ))}
            </div>
        </div>
    );
};

export default MostrarComidas;
