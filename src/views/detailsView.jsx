
export function DetailsView(props) {
    const dish = props.dishData;
    const guests = props.guests;

    
    const price = dish.pricePerServing;
    const totalPrice = price * guests;

    function addToMenuACB() {
        props.onAddToMenu?.();
        window.location.hash = "#/search";
    }

    function cancelACB() {
        window.location.hash = "#/search";
    }

    return (
        <div>
            <button
                onClick={addToMenuACB}
                disabled={props.isDishInMenu}
            >
                Add to menu
            </button>

            <button onClick={cancelACB}>Cancel</button>

            <h2>{dish.title}</h2>

            <img
                src={dish.image}
                alt={dish.title}
                height={200}
            />

            <div>
                
                    <p>
                        Price per person: {price}
                    </p>

                    <p>
                        Price for {guests} guests: {totalPrice}
                    </p>

            </div>

            <h3>Ingredients</h3>

            <ul>
                {(dish.extendedIngredients || []).map(
                    function ingredientCB(ingredient) {
                        return (
                            <li key={ingredient.id}>
                                {ingredient.name}:
                                {" "}{ingredient.amount}
                                {" "}{ingredient.unit}
                            </li>
                        );
                    }
                )}
            </ul>

            <h3>Instructions</h3>

            <p>{dish.instructions}</p>

            <a
                href={dish.sourceUrl}
                target="_blank"
                rel="noreferrer"
            >
                More information
            </a>
        </div>
    );
}
