import { IonPage, IonHeader, IonButtons, IonMenuButton, IonTitle, IonToolbar, IonButton, IonCard, IonContent, IonImg, IonInput, IonItem, IonItemDivider, IonLabel, IonList, IonSegment, IonSegmentButton } from '@ionic/react';
import React, { useState } from 'react';

const Profil: React.FC = () => {

  const [userSide, setUser] = useState<'profil' | 'edit'>('profil');
  const [name, setName] = useState<string>("User");
  const [imageProfile] = useState<string>("https://cdn001.tintin.com/public/tintin/img/characters/dupond-et-dupont/dupond-et-dupont.png");
  const [bring, setBring] = useState<number>(4568692861.967)
  const [loan, setLoan] = useState<number>(4.6)
  const [insurrance, setInsurrance] = useState<number>(78)
  const [duration, setDuration] = useState<number>(10)
  const [fresh, setFresh] = useState<number>(29);

  const changeUser = (event: CustomEvent) => {
    setUser(event.detail.value);
  }

  const changeName = (event: CustomEvent) => {
    setName(event.detail.value!);
  }

  const changeBring = (event: CustomEvent) => {
    setBring(event.detail.value!);
  }

  const changeLoan = (event: CustomEvent) => {
    setLoan(event.detail.value!);
  }

  const changeInsurrance = (event: CustomEvent) => {
    setInsurrance(event.detail.value!);
  }

  const changeDuration = (event: CustomEvent) => {
    setDuration(event.detail.value!);
  }

  const changeFresh = (event: CustomEvent) => {
    setFresh(event.detail.value!);
  }

  return (
    <IonPage >
      <IonHeader>
      <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton></IonMenuButton>
          </IonButtons>  
          <IonTitle>Profil de l'utilisateur</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonSegment value={userSide} onIonChange={changeUser}>
          <IonSegmentButton value="profil">
            <IonLabel>Profil</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value="edit">
            <IonLabel>Modifier</IonLabel>
          </IonSegmentButton>
        </IonSegment>
        {userSide === "profil" &&
          < React.Fragment >
            < IonCard >
              <IonList>
                <IonItemDivider></IonItemDivider>
                <IonItem>
                  <IonImg src={imageProfile}></IonImg>
                </IonItem>
              </IonList>
            </IonCard>
            < IonCard >
              <IonList>
                <IonItemDivider>Name</IonItemDivider>
                <IonItem>
                  <IonInput value={name} readonly></IonInput>
                </IonItem>
              </IonList>
            </IonCard>
            < IonCard >
              <IonList>
                <IonItemDivider>Apport (€)</IonItemDivider>
                <IonItem>
                  <IonInput value={bring} readonly></IonInput>
                </IonItem>
              </IonList>
            </IonCard>
            < IonCard >
              <IonList>
                <IonItemDivider>Taux emprunt (%)</IonItemDivider>
                <IonItem>
                  <IonInput value={loan} readonly></IonInput>
                </IonItem>
              </IonList>
            </IonCard>
            < IonCard >
              <IonList>
                <IonItemDivider>Taux assurance (%)</IonItemDivider>
                <IonItem>
                  <IonInput value={insurrance} readonly></IonInput>
                </IonItem>
              </IonList>
            </IonCard>
            < IonCard >
              <IonList>
                <IonItemDivider>Durée de l’emprunt (années)</IonItemDivider>
                <IonItem>
                  <IonInput value={duration} readonly></IonInput>
                </IonItem>
              </IonList>
            </IonCard>
            < IonCard >
              <IonList>
                <IonItemDivider>Frais de notaire (%)</IonItemDivider>
                <IonItem>
                  <IonInput value={fresh} readonly></IonInput>
                </IonItem>
              </IonList>
            </IonCard>
          </React.Fragment>
        }
        {userSide === "edit" &&
          < React.Fragment >
            <IonButton size="large" color="dark" expand="block" fill="outline">Import Image</IonButton>
            < IonCard >
              <IonList>
                <IonItemDivider>Name</IonItemDivider>
                <IonItem>
                  <IonInput value={name} placeholder="Enter Name" onIonChange={changeName} clearInput></IonInput>
                </IonItem>
              </IonList>
            </IonCard>
            < IonCard >
              <IonList>
                <IonItemDivider>Apport (€)</IonItemDivider>
                <IonItem>
                  <IonInput value={bring} placeholder="Enter Bring" onIonChange={changeBring} clearInput></IonInput>
                </IonItem>
              </IonList>
            </IonCard>
            < IonCard >
              <IonList>
                <IonItemDivider>Taux emprunt (%)</IonItemDivider>
                <IonItem>
                  <IonInput value={loan} placeholder="Enter Loan" onIonChange={changeLoan} clearInput></IonInput>
                </IonItem>
              </IonList>
            </IonCard>
            < IonCard >
              <IonList>
                <IonItemDivider>Taux assurance (%)</IonItemDivider>
                <IonItem>
                  <IonInput value={insurrance} placeholder="Enter Insurrance" onIonChange={changeInsurrance} clearInput></IonInput>
                </IonItem>
              </IonList>
            </IonCard>
            < IonCard >
              <IonList>
                <IonItemDivider>Durée de l’emprunt (années)</IonItemDivider>
                <IonItem>
                  <IonInput value={duration} placeholder="Enter Duration" onIonChange={changeDuration} clearInput></IonInput>
                </IonItem>
              </IonList>
            </IonCard>
            < IonCard >
              <IonList>
                <IonItemDivider>Frais de notaire (%)</IonItemDivider>
                <IonItem>
                  <IonInput value={fresh} placeholder="Enter Fresh" onIonChange={changeFresh} clearInput></IonInput>
                </IonItem>
              </IonList>
            </IonCard>
          </React.Fragment>
        }
      </IonContent >
    </IonPage >
  );
};

export default Profil;