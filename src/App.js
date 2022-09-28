
import { useState } from 'react';
import './App.css';
import { 
  PetsTwo, NavBar, Footer, AddPet, PetDetails
} from './ui-components';
import {withAuthenticator} from '@aws-amplify/ui-react'
import { Storage } from "@aws-amplify/storage"



function App({user, signOut}) {

  async function saveFile(){
    
await Storage.put("test.txt", "Hello");
  }
  const [showForm, setShowForm] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [pet, setPet] = useState()
  const [updatePet, setUpdatePet] = useState();

  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [breed, setBreed] = useState("");
  const [about, setAbout] = useState("");
  const [color, setColor] = useState("");
  const [image, setImage] = useState("");
  

  const petdetailsOverride = {
    "Close": {
      style: {
        cursor: "pointer",
      },
      onClick: () => {
        setShowDetails(false)
      },
    }
  }
  const formOverride = {
    TextField29766922: {
      placeholder: name
    },
    TextField29766923: {
      placeholder: age
    },
    TextField29766924: {
      placeholder: breed
    },
    TextField34522708: {
      placeholder: about
    },
    TextField34522715: {
      placeholder: color
    },
    TextField34522722: {
      placeholder: image
    },
    image: {
      src: updatePet == null 
      ? "https://source.unsplash.com/random/900x700/?dog"
      : updatePet.image,
    },
    
    Button34522735: {
      isDisabled: !updatePet ? true : false,
    },
    Button29766926: {
      isDisabled: updatePet ? true : false,
    },
    Icon: {
      style: {
        cursor: "pointer",
      },
      onClick: () => {
        setShowForm(false);
      },
    },
  };
  const navbarOverrides = {
    Button: {
      onClick: signOut,
    },
    image: {
      src: user?.attributes?.profile,
      //src: "https://img.icons8.com/color/50/000000/cat",
    },
   
    "Add Pet": {
style: {
  cursor: "pointer",
},
onClick: () => {
  saveFile();
  setShowForm(!showForm)
},
    },
  };
  return (
    <div className="App">

      <NavBar width={"100%"}
      overrides={navbarOverrides} />
      

      <header className="App-header">
        {showDetails && (
        <PetDetails 
        overrides={petdetailsOverride}
        pet={pet}
        style={{
          textAlign: "left",
          margin: "1rem",
        }}
           />
        )}
        {showForm && (
        <AddPet 
        pet={updatePet}
        overrides={formOverride}
      style={{
        textAlign: "left",
        margin: "1rem",
      }} />

        )}
        
      <PetsTwo overrideItems={({ item, index }) => ({
        overrides: {
          Breed: { color: "blue" },

          Button34482720: {
            onClick: () => {
              setShowDetails(!showDetails);
              setPet(item);
            },
          },

          Button34482721: {
            onClick: () => {
              if (!showForm) setShowForm(true);
              setUpdatePet(item);
              setName(item.name);
              setAbout(item.about);
              setBreed(item.breed);
              setColor(item.color);
              setImage(item.image);
              setAge(item.age);
            },
          },
        },
      })}
      />
      
      </header>
      <Footer width={"100%"}/>
    </div>
  );
}

export default withAuthenticator(App);
