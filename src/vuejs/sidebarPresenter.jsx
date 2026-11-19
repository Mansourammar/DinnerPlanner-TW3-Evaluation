
import { SidebarView } from "/src/views/sidebarView.jsx";

export function Sidebar(props) {

    function numberChangeACB(number) {
        props.model.setNumberOfGuests(number);
    }

    function dishInterestACB(dish) {
        props.model.setCurrentDishId(dish.id);
    }

    function dishRemoveACB(dish) {
        props.model.removeFromMenu(dish);
    }

    return (
        <SidebarView
            number={props.model.numberOfGuests}
            dishes={props.model.dishes}
            onNumberChange={numberChangeACB}
            onDishInterest={dishInterestACB}
            onDishRemove={dishRemoveACB}
        />
    );
}
