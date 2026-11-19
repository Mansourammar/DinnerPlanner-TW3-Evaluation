
export function SearchResultsView(props) {

    return (
        <div>
            {(props.searchResults || []).map(
                function dishCB(dish) {

                    function dishClickACB() {
                        props.onDishSelected?.(dish);
                        window.location.hash = "#/details";
                    }

                    return (
                        <span
                            key={dish.id}
                            className="searchResult"
                            onClick={dishClickACB}
                            style={{
                                display: "inline-block",
                                width: "150px",
                                textAlign: "center",
                                verticalAlign: "top",
                                margin: "10px",
                                cursor: "pointer"
                            }}
                        >
                            <img
                                src={dish.image}
                                height={100}
                                alt={dish.title}
                            />

                            <div>
                                {dish.title}
                            </div>
                        </span>
                    );
                }
            )}
        </div>
    );
}
