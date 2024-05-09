import React from 'react';
import { IonList, IonItem, IonLabel } from '@ionic/react';

const Calorias: React.FC<{ caloriasConsumidas: number; caloriasMeta: number }> = ({ caloriasConsumidas, caloriasMeta }) => {
  return (
    <div>
      <h2> <strong>Calorías Consumidas Hoy:</strong></h2>
      <IonList lines="none">
          <IonItem className='item'>
            <IonLabel>{caloriasConsumidas}/{caloriasMeta} cal.</IonLabel>
          </IonItem>
      </IonList>
    </div>
  );
};

export default Calorias;
