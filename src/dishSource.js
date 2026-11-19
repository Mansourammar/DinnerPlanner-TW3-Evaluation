import { PROXY_URL, PROXY_KEY } from "./apiConfig";
export function getResponseACB(response){
    if(!response.ok){
        throw new error("Error!")        
    }
    return response.json()

}
export function someACB(a){
    console.log(a)
    return a.results
}

export function searchDishes(searchParams){
    const url = `${PROXY_URL}/recipes/complexSearch${searchParams ? "?" + new URLSearchParams(searchParams) : ""}`

    return fetch(url, 
        {headers : 
        { 
            "X-DH2642-Key" : "3d2a031b4cmsh5cd4e7b939ada54p19f679jsn9a775627d767",
            "X-DH2642-Group" : "047",
        }       
    }).then(getResponseACB).then(someACB)   


}


export function getMenuDetails(ids_array){
    const obj = {ids : ids_array }
    const url = `${PROXY_URL}/recipes/informationBulk${ids_array ? "?" + new URLSearchParams(obj) : ""}`

    return fetch(url, 
        {headers : 
            { 
              "X-DH2642-Key" : "3d2a031b4cmsh5cd4e7b939ada54p19f679jsn9a775627d767",
              "X-DH2642-Group" : "047"

            }
        }
    ).then(getResponseACB)
    

}


export function getDishDetails(id){
    return getMenuDetails([id]).then(arrayToObjectACB)

}

export function arrayToObjectACB(arrayOfIds){
    return arrayOfIds[0]   

}



