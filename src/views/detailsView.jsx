
export function DetailsView(props) {
    const dish = props.dishData;
    const guests = props.guests;

    
    const price = dish.pricePerServing;
    const totalPrice = price * guests;

    const instructionsDocument = new DOMParser().parseFromString(
        dish.instructions || "",
        "text/html"
    );

    const instructionSteps = Array.from(
        instructionsDocument.querySelectorAll("li")
    ).map(function instructionStepCB(item) {
        return item.textContent.trim();
    });

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
                style={{ marginRight: "12px" }}
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

            {instructionSteps.length > 0 ? (
                <ol>
                    {instructionSteps.map(function stepCB(step, index) {
                        return <li key={index}>{step}</li>;
                    })}
                </ol>
            ) : (
                <p>{instructionsDocument.body.textContent?.trim()}</p>
            )}

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
