import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

/* Routes */
import { ROUTE_HOME, ROUTE_PROFIL, ROUTE_DETAILS, ROUTE_NEW } from './nav/Routes';

/* Pages */
import Home from './pages/Home';
import Profil from './pages/Profil';
import Details from './pages/Details';

/* Components */
import NewItem from './components/NewItem';
import Menu from './components/Menu';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

const App: React.FC = () => (
  <IonApp>
    <Menu />
    <IonReactRouter>
      <IonRouterOutlet>
        <Route path={ROUTE_HOME} component={Home} exact />
        <Route path={ROUTE_NEW} component={NewItem} exact />
        <Route path={ROUTE_PROFIL} component={Profil} exact />
        <Route path={ROUTE_DETAILS} component={Details} exact />
        <Route exact path="/" render={() => <Redirect to="/home" />} />
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
