
import { SummaryView } from "/src/views/summaryView.jsx";
import { shoppingList } from "/src/utilities.js";

export function Summary(props) {
    return (
        <SummaryView
            people={props.model.numberOfGuests}
            ingredients={shoppingList(props.model.dishes)}
        />
    );
}
