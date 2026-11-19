
import { sortDishes, dishType, menuPrice } from "/src/utilities.js";
import "/src/style.css";

export function SidebarView(props) {

    function decreaseNumberACB() {
        props.onNumberChange(props.number - 1);
    }

    function increaseNumberACB() {
        props.onNumberChange(props.number + 1);
    }

    function dishTableRowCB(dish) {

        function dishInterestACB() {
            props.onDishInterest(dish);
        }

        function dishRemoveACB() {
            props.onDishRemove(dish);
        }

        return (
            <tr key={dish.id}>
                <td>
                    <button onClick={dishRemoveACB}>
                        x
                    </button>
                </td>

                <td>
                    <a href="#/details" onClick={dishInterestACB}>
                        {dish.title}
                    </a>
                </td>

                <td>{dishType(dish)}</td>

                <td className="rightAligned">
                    {(dish.pricePerServing * props.number).toFixed(2)}
                </td>
            </tr>
        );
    }

    return (
        <div>
            <button
                disabled={props.number === 1}
                onClick={decreaseNumberACB}
            >
                -
            </button>

            {props.number}

            <button onClick={increaseNumberACB}>
                +
            </button>

            <table>
                <tbody>
                    {sortDishes(props.dishes).map(dishTableRowCB)}

                    <tr>
                        <td></td>
                        <td>Total:</td>
                        <td></td>
                        <td className="rightAligned">
                            {(menuPrice(props.dishes) * props.number).toFixed(2)}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
