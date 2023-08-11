import ClickedButton from "./ClickedButton";
import RateARecipe from "./RateARecipe";
import SaveButton from "./SaveButton";

function Button(props) {
  const saveButton = props.saveButton;
  return props.saveButton === true ? <SaveButton /> : <ClickedButton />;
 }
 
 export default Button;
 
 //need to import SaveButton and ClickedButton
 //create conditional for these buttons
 //import styling
 