import React, { useState } from "react";
import axios from "axios";
import Card from './Card'

function Cards (){

    const [myDrinks, setMyDrinks] = useState([]);

    const importData = async() =>{

        let myArray = [];
        
        for (let i = 0; i < 12; i++) {
            const {data} = await axios.get('https://www.thecocktaildb.com/api/json/v1/1/random.php');
            let {drinks} = data
            console.log(drinks[0]);
            myArray.push(drinks[0]);
        }
        console.log(myArray[0].idDrink)
        setMyDrinks(myArray);
    }

    React.useEffect( () => {
        importData();
    },[])

    return(
        <div className='row mt-4'>
            {
                myDrinks.map( (item) => (
                    <div className='col-4 mb-3'>
                        <Card
                            key={item.idDrink}
                            name={item.strDrink}
                            image={item.strDrinkThumb}
                            instruction={item.strInstructions}
                        />                        
                    </div>
                ))
            }
        </div>
    )
}
 export default Cards;