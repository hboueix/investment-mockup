import { IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonFab, IonFabButton, IonFooter, IonHeader, IonIcon, IonImg, IonItem, IonLabel, IonMenuButton, IonModal, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React, { useState } from 'react';

import { add, calendarOutline, cashOutline } from 'ionicons/icons';

/* Components */
import NewItem from '../components/NewItem';

const Home: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton></IonMenuButton>
          </IonButtons>  
          <IonTitle>Liste des appartements</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>

          <IonCard className="ion-padding" routerLink="/details">
            <IonCardHeader>
              <IonImg src="https://medias-neuf-be.avendrealouer.fr/Image/programme-neuf_5218076_D.jpg"></IonImg>
            </IonCardHeader>
            <IonCardSubtitle>
              123 rue Loin
            </IonCardSubtitle>
            <IonCardTitle>
              Méga rentable
            </IonCardTitle>
            <IonItem>
              <IonIcon icon={calendarOutline}></IonIcon>
              <IonLabel>01/01/1970</IonLabel>
              <IonIcon icon={cashOutline}></IonIcon>
              <IonLabel>55 000 €</IonLabel>
            </IonItem>
            <IonCardContent>
              Un bel appart Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mi est, finibus quis imperdiet id, varius quis dui. Phasellus molestie leo quis dapibus ornare.
            </IonCardContent>
          </IonCard>

          <IonCard className="ion-padding">
            <IonCardHeader>
              <IonImg src="https://medias-neuf-be.avendrealouer.fr/Image/programme-neuf_5126792_D.jpg?preset=l"></IonImg>
            </IonCardHeader>
            <IonCardSubtitle>
              45 rue Ionic
            </IonCardSubtitle>
            <IonCardTitle>
              Pas rentable
            </IonCardTitle>
            <IonItem>
              <IonIcon icon={calendarOutline}></IonIcon>
              <IonLabel>29/02/2014</IonLabel>
              <IonIcon icon={cashOutline}></IonIcon>
              <IonLabel>10 €</IonLabel>
            </IonItem>
            <IonCardContent>
              Un appart Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mi est, finibus quis imperdiet id, varius quis dui. Phasellus molestie leo quis dapibus ornare.
            </IonCardContent>
          </IonCard>

        <IonFab vertical="bottom" horizontal="end" slot="fixed">
          <IonFabButton onClick={() => setShowModal(true)}>
            <IonIcon icon={add} />
          </IonFabButton>
        </IonFab>

        <IonModal isOpen={showModal}>
          <IonHeader>
            <IonToolbar>
              <IonTitle>Nouvel appartement</IonTitle>
              <IonButton color="danger" className="ion-padding-end" slot="end" onClick={() => setShowModal(false)}>Annuler</IonButton>
            </IonToolbar>
          </IonHeader>
          <NewItem />
          <IonFooter>
            <IonToolbar>
              <IonButton color="success" expand="full" onClick={() => setShowModal(false)}>Sauvegarder</IonButton>
            </IonToolbar>
          </IonFooter>
        </IonModal>
      </IonContent>
    </IonPage>
  );
};

export default Home;
