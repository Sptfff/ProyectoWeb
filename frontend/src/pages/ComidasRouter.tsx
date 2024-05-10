import { IonPage, IonRouterOutlet } from '@ionic/react';
import { Route } from 'react-router';


import BuscarComida from './BuscarComida';
import AgregarComida from './AgregarComida';
import HistorialComidas from './HistorialComidas';

const ComidasRouter: React.FC = () => {
  return (
    <IonPage>
      <IonRouterOutlet>
        <Route exact path='/nav/comidas' component={BuscarComida} />
        <Route exact path='/nav/comidas/agregar' component={AgregarComida} />
        <Route exact path='/nav/comidas/historial' component={HistorialComidas} />
      </IonRouterOutlet>
    </IonPage>
  );
};

export default ComidasRouter;