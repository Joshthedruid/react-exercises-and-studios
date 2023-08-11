import { useState } from 'react';

export default function StatusChange () {

   const [notes, setNotes] = useState("");
   const [recipeStatus, setRStatus] = useState(false);

   const handleChange = (event) => {
      setNotes(event.target.value);
   }

   const handleSubmit = (event) => {
      event.preventDefault();
      setRStatus(true);
   }

   return (
      <div style={{paddingTop: "50px"}}>
         <form onSubmit={handleSubmit}>
            <label>Have you tried this recipe? Add your notes here: <input type="text" value={notes} onChange={handleChange} />
            </label>
            <input type="submit" />
         </form>
         {recipeStatus === true ? <div><p>My Notes: {notes}</p><p>I made the recipe!</p></div> : <div><p>My Recipe Notes aren't here!</p><p>I have not tried this recipe!</p></div>}
         
      </div>
   );
}