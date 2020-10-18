import { IonBackButton, IonButton, IonButtons, IonContent, IonHeader, IonInput, IonItem, IonItemDivider, IonLabel, IonPage, IonSegment, IonTitle, IonToolbar } from "@ionic/react";
import { attachProps } from "@ionic/react/dist/types/components/utils";
import React from "react";

const NewItem: React.FC = () => {
	return (
		<IonContent className="ion-padding">
			<IonItem color="primary">
				<IonLabel>Adresse</IonLabel>
			</IonItem>
			<IonItem>
				<IonInput value="Entrez une adresse"></IonInput>
			</IonItem>
			<IonItemDivider />
			<IonItem color="primary">
				<IonLabel>Prix (€)</IonLabel>
			</IonItem>
			<IonItem>
				<IonInput value="Entrez un prix (€)"></IonInput>
			</IonItem>
			<IonItemDivider />
			<IonItem color="primary">
				<IonLabel>Surface (m²)</IonLabel>
			</IonItem>
			<IonItem>
				<IonInput value="Entrez une surface (m²)"></IonInput>
			</IonItem>
			<IonItemDivider />
			<IonItem color="primary">
				<IonLabel>Prix des rénovations (€)</IonLabel>
			</IonItem>
			<IonItem>
				<IonInput value="Entrez le prix des rénovations (€)"></IonInput>
			</IonItem>
			<IonItemDivider />
			<IonItem color="primary">
				<IonLabel>Loyer (€)</IonLabel>
			</IonItem>
			<IonItem>
				<IonInput value="Entrez le loyer (€)"></IonInput>
			</IonItem>
			<IonItemDivider />
			<IonItem color="primary">
				<IonLabel>Temps de vacances (mois)</IonLabel>
			</IonItem>
			<IonItem>
				<IonInput value="Entrez le temps de vacances (mois)"></IonInput>
			</IonItem>
			<IonItemDivider />
			<IonItem color="primary">
				<IonLabel>Photos</IonLabel>
			</IonItem>
			<IonItem>
				<IonInput value="Ajoutez des photos"></IonInput>
			</IonItem>
		</IonContent>
	)
}

export default NewItem;