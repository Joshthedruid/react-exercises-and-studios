import styles from './Description.module.css';
import React from 'react';

export default function RecipeAuthor(){
    let authorLink = "https://www.thekitchn.com/chilaquiles-recipe-268271";
    let authorPhoto = "https://cdn.apartmenttherapy.info/image/upload/f_auto,q_auto:eco,w_96,h_96,c_fill,g_auto/k%2FEdit%2F2019-08-Author-Profile-Photos%2Fvianneyrodriguez";
    let authorName = "Vianney Rodriguez";
    return(
        <div className = {styles.recipeAuthorBlock}>
            <img src={authorPhoto} alt = "Photo of Vianney" className={styles.imageUpdates} />
            <div>
                <h3>{authorName}</h3>
                <a href={authorLink}>the kitchn</a> 
            </div>
        </div>
    )
}

class RecipeDescription extends 