import React from 'react';
import { IonList, IonItem, IonLabel } from '@ionic/react';

const Macros: React.FC<{ proteinas: number; grasas: number; carbohidratos: number }> = ({ proteinas, grasas, carbohidratos }) => {
  return (
    <div>
      <h2> <strong>Tus Macronutrientes de Hoy:</strong></h2>
      <IonList lines="none">
          <IonItem className='item'>
              <IonLabel>Proteínas: {proteinas}/100 g</IonLabel>
          </IonItem>
          <IonItem className='item'>
              <IonLabel>Grasas: {grasas}/100 g</IonLabel>
          </IonItem>
          <IonItem className='item'>
              <IonLabel>Carbohidratos: {carbohidratos}/100 g</IonLabel>
          </IonItem>
      </IonList>
    </div>
  );
};

export default Macros;
