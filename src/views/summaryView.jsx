
import { sortIngredients } from "/src/utilities.js";
import "/src/style.css";

export function SummaryView(props) {

    function ingredientTableRowCB(ingr) {
        return (
            <tr key={ingr.id}>
                <td>{ingr.name}</td>
                <td>{ingr.aisle}</td>
                <td className="rightAligned">
                    {(ingr.amount * props.people).toFixed(2)}
                </td>
                <td>{ingr.unit}</td>
            </tr>
        );
    }

    function backToSearchACB() {
        window.location.hash = "#/search";
    }

    return (
        <div>
            <button onClick={backToSearchACB}>
                Back to Search
            </button>

            Summary for <span title="nr guests">
                {props.people}
            </span> {props.people === 1 ? "person" : "persons"}:

            <table>
                <thead>
                    <tr>
                        <th>Ingredients</th>
                        <th>Aisle</th>
                        <th>Quantity</th>
                        <th>Unit</th>
                    </tr>
                </thead>
                <tbody>
                    {sortIngredients(props.ingredients).map(
                        ingredientTableRowCB
                    )}
                </tbody>
            </table>
        </div>
    );
}
