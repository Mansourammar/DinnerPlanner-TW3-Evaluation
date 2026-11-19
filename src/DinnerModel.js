import * as dishSource from "./dishSource.js";
import { resolvePromise } from "./resolvePromise.js";
/* 
   The Model keeps the state of the application (Application State). 
   It is an abstract object, i.e. it knows nothing about graphics and interaction.
*/
export const model = {  
    numberOfGuests: 2,
    dishes: [],
    currentDishId: null,  // null means "intentionally empty"
    searchParams: {},
    searchResultsPromiseState: {},
    currentDishPromiseState: {},

    
    

    setCurrentDishId(dishId){
        this.currentDishId = dishId   
    },

    
    
    setNumberOfGuests(number){       
        
        if (number <=0 || !Number.isInteger(number)){
            throw new Error ("number of guests not a positive integer")
        }else{
            this.numberOfGuests = number
        }       
        // Use the function given by the teacher Nmber.isInteger to declare if the number 
        // is an integer or not, then use if statement to throw an error or assigning the number
        
    },
    
    addToMenu(dishToAdd){
        // array spread syntax exercise
        // It sets this.dishes to a new array [   ] where we spread (...) the elements of the existing this.dishes

        this.dishes= [...this.dishes, dishToAdd]; // Just put the parameter instead of the comment.
    },

    // filter callback exercise
    removeFromMenu(dishToRemove){                               //Here we return true when the dishs id's are not the same. That means we keep the dish. Then we pass the CB into the filter
        function shouldWeKeepDishCB(dish){
            return dish.id !== dishToRemove.id
            
        }
        this.dishes= this.dishes.filter(shouldWeKeepDishCB);
    },
    
    setSearchQuery(query) {
        this.searchParams.query = query;
    },

    setSearchType(type) {
        this.searchParams.type = type;
    },

    doSearch(params) {
        const searchPromise = dishSource.searchDishes(params);

        resolvePromise(searchPromise, this.searchResultsPromiseState);
    },

    currentDishEffect() {
        if (this.currentDishId) {
            return resolvePromise(
                dishSource.getDishDetails(this.currentDishId),
                this.currentDishPromiseState
            );
        } else {
            this.currentDishPromiseState = {};
        }
    },

    

    
};


    // more methods will be added here, don't forget to separate them with comma!

    


   




