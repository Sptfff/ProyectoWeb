import React from 'react'

import { IonIcon, IonLabel, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs } from '@ionic/react';

import { home, personOutline, restaurant, restaurantOutline } from 'ionicons/icons';

import { Redirect, Route } from 'react-router';

import Inicio from './Inicio';
import Cuenta from './Cuenta';
import ComidasRouter from './ComidasRouter'

interface AppRoute {
    path: string;
    component: JSX.Element;
    exact?: boolean;
}
  
interface TabsRouterTabButton {
    tab: string;
    href: string;
    icon: string;
    label: string;
}

const tabsRoutes: AppRoute[] = [
    {
        path: '/nav/inicio',
        component: <Inicio />,
    },
    {
        path: '/nav/cuenta',
        component: <Cuenta />,
        exact: true,
    },
    {
        path: '/nav/comidas',
        component: <ComidasRouter />,
    },
    {
        path: '/nav',
        component: <Redirect to='/nav/inicio' />,
        exact: true,
    }
];

const tabButtons: TabsRouterTabButton[] = [
    {
        tab: 'inicio',
        href: '/nav/inicio',
        icon: home,
        label: 'Inicio',
    },
    {
      tab: 'comidas',
      href: '/nav/comidas',
      icon: restaurantOutline,
      label: 'Comidas',
    },
    {
        tab: 'mi-cuenta',
        href: '/nav/cuenta',
        icon: personOutline,
        label: 'Mi cuenta',
    },
    
];
const Nav: React.FC = () => (
    <IonTabs>
      <IonRouterOutlet>
        {tabsRoutes.map((route) => (
          <Route key={route.path} path={route.path} exact={route.exact}>
            {route.component}
          </Route>
        ))}
      </IonRouterOutlet>
      
      <IonTabBar slot='bottom'>
        {tabButtons.map((tabButton) => (
          <IonTabButton key={tabButton.tab} tab={tabButton.tab} href={tabButton.href}>
            <IonIcon aria-hidden='true' icon={tabButton.icon} />
            <IonLabel>{tabButton.label}</IonLabel>
          </IonTabButton>
        ))}
      </IonTabBar>
    </IonTabs>
  );
  
  export default Nav;