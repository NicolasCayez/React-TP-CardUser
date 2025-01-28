import { useState } from "react";


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
  //? TP 2 Partie 1
  function handleMouseOver(event) {
    event.target.classList.add("border")
  }
  function handleMouseLeave(event) {
    event.target.classList.remove("border")
  }
  return (
    <>
      <article className={sexe == "homme" ? "card blue" : (sexe == "femme" ? "card pink" : "card yellow")}
      onMouseOver={(event)=>handleMouseOver(event)}
      onMouseLeave={(event)=>handleMouseLeave(event)}
      >
        <img src={image} alt="profile_Picture" />
        <h2>{pseudo}</h2>
        <h3>{email}</h3>
        <p>{description}</p>
        <Like />
      </article>
    </>
  )
}

//? TP 2 Partie 2
function Like() {

  const [like, setLike] = useState(42);

  function handleClick(event) {
    event.stopPropagation()
    event.target.classList.toggle('like')
    if (event.target.classList.contains('like')) {
      setLike(like + 1);
    } else {
      setLike(like - 1);
    }
  }

  return (
    <>
      <div className="likeRow">
        <div className="likeCircle" onClick={(event)=>handleClick(event)}></div>
        <span>{like} Likes</span>
      </div>
    </>
  )
}