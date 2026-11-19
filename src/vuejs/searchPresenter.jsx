
import { SearchFormView } from "../views/searchFormView.jsx";
import { SearchResultsView } from "../views/searchResultsView.jsx";
import { SuspenseView } from "../views/suspenseView.jsx";

export function Search(props) {
    const state = props.model.searchResultsPromiseState;
    const data = state?.data;

    function textChangeACB(text) {
        props.model.setSearchQuery(text);
    }

    function typeChangeACB(type) {
        props.model.setSearchType(type);
    }

    function searchNowACB() {
        props.model.doSearch(props.model.searchParams);
    }

    function dishSelectedACB(dish) {
        props.model.setCurrentDishId(dish.id);
    }

    return (
        <div>
            <SearchFormView
                dishTypeOptions={[
                    "starter",
                    "main course",
                    "dessert"
                ]}
                text={props.model.searchParams.query}
                type={props.model.searchParams.type}
                onTextChange={textChangeACB}
                onTypeChange={typeChangeACB}
                onSearchNow={searchNowACB}
            />

            {data ? (
                <SearchResultsView
                    searchResults={data}
                    onDishSelected={dishSelectedACB}
                />
            ) : (
                <SuspenseView
                    promise={state?.promise}
                    error={state?.error}
                />
            )}
        </div>
    );
}
