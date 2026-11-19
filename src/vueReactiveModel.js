import "/src/teacherFetch.js"; // protection against fetch() in infinite loops
import { reactive, watchEffect, watch } from "vue";
import { model } from "/src/DinnerModel.js";
import { dishesConst } from "/src/dishesConst.js";
import { connectToPersistence } from "./firestoreModel.js";


export const reactiveModel=reactive(model);

connectToPersistence(reactiveModel, watch);

reactiveModel.sideEffect = function() {
    this.currentDishEffect();
};

reactiveModel.doSearch({});



// ----- for Lab debug purposes ---------
// making the reactive model available at the browser JavaScript Console
window.myModel= reactiveModel;
window.dishesConst = dishesConst;

function sideEffectACB() {

    const currentId = reactiveModel.currentDishId;
    reactiveModel.sideEffect();
    return currentId;
}


// making some example dishes available
window.dishesConst= dishesConst;
watchEffect(sideEffectACB, { flush: 'sync' });

//myModel.addToMenu(dishesConst[2]); //You can test with more/different dishes
