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
        case 'frutas':
            return 'fruta';
        case 'carnes':
            return 'carnita';
        case 'alimento proteico':
            return 'carnita'; // Assuming this maps to 'carnita'
        case 'cereales y derivados':
            return 'lacteo'; // Assuming this maps to 'lacteo'
        case 'pastas':
            return 'lacteo'; // Assuming this maps to 'lacteo'
        case 'pescado':
            return 'carnita'; // Assuming this maps to 'carnita'
        case 'verduras':
            return 'fruta'; // Assuming this maps to 'fruta'
        default:
            return 'fruta'; // Default category if not mapped
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
