import './styles.css';

function Button() {
   function onLearnMore(){
      alert("Water Time!");
   }
   return ( 
         <button onClick={onLearnMore}>
            Learn More
         </button>
   );
}

export default Button;