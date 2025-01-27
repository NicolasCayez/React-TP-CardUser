import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Card'

//? Partie 2
const USER_JP = {image:"https://picsum.photos/id/2/200", pseudo:"Jean-Pierre", email:"jp@monfai.fr", description:"Lorem ipsum dolor sit amet. Denetur nesciunt nulla nostrum non omnis sed nam aperiam!", sexe:"homme"}
const USER_BOB = {image:"https://picsum.photos/id/3/200", pseudo:"Bob", email:"bob@monfai.fr", description:"Lorem ipsum dolor sit amet. Reprehenderit, tenetur nesciunt nulla nostrum non omnis sed nam aperiam!", sexe:"non-binaire"}
const USER_JANE = {image:"https://picsum.photos/id/4/200", pseudo:"Jack", email:"jack@monfai.fr", description:"Lorem ipsum dolor omnis sed nam aperiam!", sexe:"femme"}
const USERS = [USER_JP, USER_BOB, USER_JANE]
 console.log(USERS)
export default function App() {
  
  //? Partie 1
  // return (
  //   <>
  //     <h1>Liste des utilisateurs</h1>
  //     <Card />
  //   </>
  // )

  //? Partie 2
  // return (
  //   <>
  //     <h1>Liste des utilisateurs</h1>
  //     <Card image={USER_JP.image} pseudo={USER_JP.pseudo} email= {USER_JP.email} description={USER_JP.description}/>
  //     <Card image={USER_BOB.image} pseudo={USER_BOB.pseudo} email= {USER_BOB.email} description={USER_BOB.description}/>
  //     <Card image={USER_JANE.image} pseudo={USER_JANE.pseudo} email= {USER_JANE.email} description={USER_JANE.description}/>
  //   </>
  // )

  //? Partie 3
  // return (
  //   <>
  //     <h1>Liste des utilisateurs</h1>
  //     {USERS.map((oneUser, index) =>
  //         <Card key={index} image={oneUser.image} pseudo={oneUser.pseudo} email= {oneUser.email} description={oneUser.description}/>
  //       )
  //     }
  //   </>
  // )

  //? Partie 4
  return (
    <>
      {USERS.length>0 ? <h1>Liste des utilisateurs</h1> : <h1>Aucun utilisateur d’inscrit</h1>}
      {USERS.map((oneUser, index) =>
          <Card key={index} image={oneUser.image} pseudo={oneUser.pseudo} email= {oneUser.email} description={oneUser.description} sexe={oneUser.sexe}/>
        )
      }
      {USERS.length>0 && <p>il y a {USERS.length} utilisateurs inscrits !</p>}
    </>
  )
}

