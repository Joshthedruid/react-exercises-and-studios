import { useState } from 'react';

export default function BoardAssignment () {
   const boards = [{"label":"Use Up Those Leftovers","value":"1"}, {"label":"International Breakfasts","value":"2"}, {"label":"Personal Favorites","value":"3"}];

   const handleChange = (event) => {
      setName(event.target.value);
   }

   const [boardName, setName] = useState('no boards yet!');

   return (
      <div style={{paddingTop: "50px"}}>
      <label>Save to Board: </label>
      <select value={boardName} onChange={handleChange}>
         {boards.map((board) => {
            return(
               <option value={board.value}>{board.label}</option>
            );
         })}
      </select>

      <p>Saved to {boardName}!</p>
      </div>
   );
}