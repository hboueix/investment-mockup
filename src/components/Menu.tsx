import { IonMenu, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonMenuToggle, IonRouterOutlet } from "@ionic/react";
import React from "react";

const Menu: React.FC = () => {
	return (
    <>
	  <IonMenu side="start" menuId="custom-menu" contentId="main-content">
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>Menu</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          <IonMenuToggle auto-hide="true">
            <IonItem routerLink="/home">Liste des appartements</IonItem>
            <IonItem routerLink="/profil">Profil</IonItem>
          </IonMenuToggle>
        </IonList>
      </IonContent>
		</IonMenu>
    <IonRouterOutlet id="main-content"></IonRouterOutlet>
    </>
  );
};

export default Menu;