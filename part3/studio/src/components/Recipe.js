const RecipeAuthor = () => {
   let authorLink = "https://www.muydelish.com/about/";
   let authorPhoto = "https://www.muydelish.com/wp-content/uploads/2022/07/ana-frias-about-muy-delish.png";
   let authorName = "Ana Frias";

   return (
      <div>
         <img src={authorPhoto} alt = "" style={{objectFit: "contain", borderRadius: "50%"}} />
         <div>
            <h3>{authorName}</h3>
            <a href={authorLink}></a> 
         </div>
      </div>
   );
}

const RecipeIngredients = () => {
   const ingredients = ["Corn Torillas", "Tomatillo Salsa", "Avocado Oil", "Queso Blanco", "Fried Egg"];
   return(
      <div>
         <h3>Recipe Ingredients</h3>
         <ul>
            <li>{ingredients[0]}</li>
            <li>{ingredients[1]}</li>
            <li>{ingredients[2]}</li>
            <li>{ingredients[3]}</li>
            <li>{ingredients[4]}</li>
         </ul>
      </div>
   );
}

const RecipeDescription = () => {
   return (
      <div> 
         <div>
            <h1>Chilaquiles Verde</h1>
            <p>A Mexican breakfast dish made from torilla chips soaked in enchillada sauce.  Savory, unique, and easy to add to with all of your favorite Mexican and breakfast toppings!</p>
         </div>
         <div className="recipePhotoBlock">
            <RecipeIngredients />
            <RecipeAuthor />
         </div>
      </div>
   );
}

const RecipePhoto = () => {
   return (
      <img src="https://www.muydelish.com/wp-content/uploads/2022/10/Chilaquiles-Verdes.jpg" alt="Chilaquiles" className="imageUpdates"/>
   );
}

export default function RecipeDisplay () {
   return(
      <div className="recipePhotoBlock">
         <RecipePhoto />
         <div>
            <RecipeDescription />
         </div>
      </div>
   );
}