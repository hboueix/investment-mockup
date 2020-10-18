import { IonBackButton, IonBackdrop, IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonHeader, IonImg, IonInput, IonItem, IonLabel, IonList, IonPage, IonThumbnail, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';


const Details: React.FC = () => {
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Details</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>
          <IonHeader collapse="condense">
            <IonToolbar>
              <IonButtons>
                <IonBackButton/>
              </IonButtons>
            </IonToolbar>
          </IonHeader>
          <IonItem >
          <IonThumbnail slot="start">
            <IonImg src={"https://edito.seloger.com/sites/default/files/styles/manual_crop_1440x480/public/page_garde_guide/image/location-appartement-guide-seloger.jpg?itok=OtCuI5sf&c=d63190d171fd783906d17365aba288bf"} />
          </IonThumbnail>
          </IonItem>
          <IonList>
            <IonItem>
              <IonLabel>Adresse : 4 rue Castéja</IonLabel>
            </IonItem>
            <IonItem>
              <IonLabel>Prix : 680 000</IonLabel>
            </IonItem>
            <IonItem>
              <IonLabel>Surface : 48m2</IonLabel>
            </IonItem>
            <IonItem>
              <IonLabel>Renovation : oui </IonLabel>
            </IonItem>
            <IonItem>
              <IonLabel>Loyer : 680</IonLabel>
            </IonItem>
            <IonItem>
              <IonLabel>Vacances : non</IonLabel>
            </IonItem>
            <IonItem>
              <IonLabel>Note : 8</IonLabel>
            </IonItem>
            <IonItem>
            <IonButton>Supprimer</IonButton>
            </IonItem>
          </IonList>

          

          <IonCard>

          <IonCardHeader>
            <IonCardTitle>Modifications </IonCardTitle>
          </IonCardHeader>

          <IonCardContent>
            <IonItem>
              <IonLabel>Adresse :</IonLabel>
              <IonInput placeholder="Adresse" ></IonInput>
            </IonItem>
            <IonItem>
              <IonLabel>Prix :</IonLabel>
              <IonInput placeholder="Prix à l'achat"></IonInput>
              </IonItem>
              <IonItem>
              <IonLabel>Surface :</IonLabel>
              <IonInput placeholder="Surface en m2"></IonInput>
              </IonItem>
              <IonItem>
              <IonLabel>Renovation :</IonLabel>
              <IonInput placeholder="rénové ou non"></IonInput>
              </IonItem>
              <IonItem>
              <IonLabel>Loyer :</IonLabel>
              <IonInput placeholder="Loyer mensuel"></IonInput>
              </IonItem>
              <IonItem>
              <IonLabel>Vacances :</IonLabel>
              <IonInput placeholder="Vacances"></IonInput>
              </IonItem>
              <IonItem>
              <IonLabel>Note :</IonLabel>
              <IonInput placeholder="Note sur 10"></IonInput>
              </IonItem>
              <IonItem>
                <IonButton>Modifier</IonButton>
              </IonItem>
          </IonCardContent>
        </IonCard>
          
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Calculs  </IonCardTitle>
          </IonCardHeader>

          <IonCardContent>
            <IonItem>
              <IonLabel>Prix au m2 a l'achat :</IonLabel>
              
            </IonItem>
            <IonItem>
              <IonLabel>Prix au m2 a la location :</IonLabel>
              
              </IonItem>
              <IonItem>
              <IonLabel>Prix par mois a l'emprunt :</IonLabel>
              
              </IonItem>
              <IonItem>
              <IonLabel>Rentabilité :</IonLabel>
              
              </IonItem>
              <IonItem>
              <IonLabel>cash flow :</IonLabel>
              
              </IonItem>
              <IonItem>
                <IonButton>Calculer</IonButton>
              </IonItem>
          </IonCardContent>
        </IonCard>
          
        </IonContent>
      </IonPage>
    );
  };
  
  export default Details;