
import { DetailsView } from "../views/detailsView.jsx";
import { SuspenseView } from "../views/suspenseView.jsx";

export function Details(props) {
    const state = props.model.currentDishPromiseState;

    function addToMenuACB() {
        props.model.addToMenu(state.data);
    }

    if (!state || !state.data) {
        return (
            <SuspenseView
                promise={state?.promise}
                error={state?.error}
            />
        );
    }

    return (
        <DetailsView
            dishData={state.data}
            guests={props.model.numberOfGuests}
            isDishInMenu={Boolean(
                props.model.dishes.find(function filterCB(dish) {
                    return dish.id === props.model.currentDishId;
                })
            )}
            onAddToMenu={addToMenuACB}
        />
    );
}
