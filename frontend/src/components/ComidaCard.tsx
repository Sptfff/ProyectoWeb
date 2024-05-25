import React from 'react';
import { IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonGrid, IonRow, IonCol } from '@ionic/react';
import './cards.css';

export type ComidaType = 'fruta' | 'carnita' | 'lacteo';

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

interface ComidaCardProps {
    comida: Comida;
}

const ComidaCard: React.FC<ComidaCardProps> = ({ comida }) => {
    return (
        <div className='flex'>
            <IonCard className='cartas'>
                <div className='cardHeader'>
                    <img alt={comida.title} src={comida.image || 'default_image_url'} />

                    <IonCardHeader>
                        <IonCardTitle>{comida.title}</IonCardTitle>
                        <IonCardSubtitle>
                            {comida.type} | {comida.calorias} Calorias
                        </IonCardSubtitle>
                    </IonCardHeader>
                </div>

                <IonCardContent>
                    <IonGrid fixed={true}>
                        <IonRow>
                            <IonCol className='letra'>{comida.proteinas}g Proteinas</IonCol>
                            <IonCol className='letra'>{comida.grasas}g Grasas</IonCol>
                            <IonCol className='letra'>{comida.carbohidratos}g Carbohidratos</IonCol>
                        </IonRow>
                    </IonGrid>
                </IonCardContent>
            </IonCard>
        </div>
    );
};

export default ComidaCard;
