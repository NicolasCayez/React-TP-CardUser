import './Card.css'

//? Partie 1
// export default function Card() {
//   return (
//     <>
//       <article className="card">
//         <img src="https://picsum.photos/200" alt="profile_Picture" />
//         <h2>Jean-Pierre</h2>
//         <h3>JP@monfai.fr</h3>
//         <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid consequatur cum vitae dolorum vero. Dolorem, a corporis doloremque unde at, reprehenderit, tenetur nesciunt nulla nostrum non omnis sed nam aperiam!</p>
//       </article>
//     </>
//   )
// }

//? Partie 2 et 3
// export default function Card({image, pseudo, email, description}) {
//   return (
//     <>
//       <article className="card">
//         <img src={image} alt="profile_Picture" />
//         <h2>{pseudo}</h2>
//         <h3>{email}</h3>
//         <p>{description}</p>
//       </article>
//     </>
//   )
// }

//? Partie 4
export default function Card({image, pseudo, email, description, sexe}) {
  return (
    <>
      <article className={sexe == "homme" ? "card blue" : (sexe == "femme" ? "card pink" : "card yellow")}>
        <img src={image} alt="profile_Picture" />
        <h2>{pseudo}</h2>
        <h3>{email}</h3>
        <p>{description}</p>
      </article>
    </>
  )
}