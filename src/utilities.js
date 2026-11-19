/* uncomment the export below to enable the 1.1.2 test suite! */

export function compareIngredientsCB(ingredientA, ingredientB){
    // we dont use the function sort directly, we just implement the prenicpe of it
    // Sort gives back a negative value if the order is correct, a pos value if the order is opposite
    // and a zero i the elemets are equal

    if (ingredientA.aisle > ingredientB.aisle){
        return 1;
    }else if(ingredientA.aisle< ingredientB.aisle){
        return -1;
    }else{
        if (ingredientA.name > ingredientB.name){
            return 1;
        }else if ( ingredientA.name < ingredientB.name){
            return -1;
        }else {
            return 0
        }
        
    }
    
     

    
    return  // TODO
}

export function sortIngredients(ingredients){
    ingredients = [...ingredients]                  // Make a copy from the array before we sort it (as it is asked in the assignment)       
    return ingredients.sort(compareIngredientsCB)      // We just sort the ingredients and pass the CB compareIngredientsCB without the parantecis.
    
}

export function isKnownTypeCB(type){
    return type === "starter" || type === "main course" || type === "dessert" // We dont need to use if statement, we directly use return and use or to cover all possibilities.
   
    // don't forget the return keyword (goes for all functions below)
}

export function dishType(dish){                          //First we declare a variable to save the matched dishes in it, then we check the number of elements in the array 
                                                        //if it is more than 0, then we have a match and we return the first element in the array as requested in the assignment
    const matched = (dish.dishTypes || []).filter(isKnownTypeCB) // (dish.dishTypes || []) This expression means use dishTypes if it exists, otherwise use an empty array
    
    if(matched.length > 0){
        return matched[0]
    }else{
        return ""
    }
     
}

export function compareDishesCB(dishA, dishB){
    const firstType = dishType(dishA)                                       //We define some variables, and make an array of the types(the array should be orderd to use there indexes) 
    const secondType = dishType(dishB)                                      //we have starter in index 1 main course index 2 etc. We assigen the index number to first and second type 
    const order = ["", "starter", "main course", "dessert"]                 //then we sub them as requested in the assignment
    const firstTypeNumber = order.indexOf(firstType)
    const secondTypeNumber = order.indexOf(secondType)

    return firstTypeNumber - secondTypeNumber
}


export function sortDishes(dishes){             //We copy the array dishes using [...dishes], and then we sort it using sort function with our CB
   const dishesCopy = [...dishes]
   dishesCopy.sort(compareDishesCB)
   return dishesCopy



    
}

export function menuPrice(dishesArray){                                     //Start by defining a callback that does the math
    function sumPricesCB(sum, dish) {                                       // Then think of reduce() as a snowball rolling on the array and collect the result and being bigger and bigger
        
        return sum + dish.pricePerServing; 
    }
    
    return dishesArray.reduce(sumPricesCB, 0);
}

/* 
  This function is already implemented as it is more JavaScript + algorithms than interaction programming

   Given a menu of dishes, generate a list of ingredients. 
   If an ingredient repeats in several dishes, it will be returned only once, with the amount added up 
   
   As this is not an algorithm course, the function is mostly written but you have 2 callback passing TODOs.
*/
export function shoppingList(dishes){
    const result={}; // object used as mapping between ingredient ID and ingredient object

    // we define the callback inside the function, though this is not strictly needed in this case. But see below.
    function keepJustIngredientsCB(dish){
        return dish.extendedIngredients;
    }
    
    // ingredientCB must be defined inside shopingList() because it needs access to `result`
    // you will often need to define a callback inside the function where it is used, so it has access to arguments and other variables
    function ingredientCB(ingredient){
        if(result[ingredient.id] === undefined){  // more general: !result[ingredient.id]
            // since result[ingredient.id] is not defined, it means that the ingredient is not taken into account yet
            // so we associate the ingredient with the ID
            result[ingredient.id]={...ingredient};
            
            // JS Notes about the line above:
            // 1)    result[ingredient.id] 
            // In JS object.property is the same as object["property"] but the second notation is more powerful because you can write
            // object[x]  where x=="property"
            
            // 2)    {...ingredient } creates a *copy* of the ingredient (object spread syntax)
            // we duplicate it because we will change the object below
        } else {
            // since result[ingredient.id] is not defined, it means that the ingredient has been encountered before.
            // so we add up the amount:
            result[ingredient.id].amount +=  ingredient.amount;
        }
    }

    const arrayOfIngredientArrays= dishes.map(keepJustIngredientsCB);           //First export the funtion. Then just pass the ready callbacks to the map() functions. (keepJustIngredientsCB and ingredientCB)
    const allIngredients= arrayOfIngredientArrays.flat();    
    allIngredients.forEach(ingredientCB);

    // Note: the 3 lines above can be written as a function chain:
    // dishes.map(callback1).flat().forEach(callback2);

    // now we transform the result object into an array: we drop the keys and only keep the values
    return Object.values(result);
}

