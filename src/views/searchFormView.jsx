
export function SearchFormView(props) {

    function textChangeACB(evt) {
        props.onTextChange?.(evt.target.value);
    }

    function typeChangeACB(evt) {
        props.onTypeChange?.(evt.target.value);
    }

    
    function searchClickACB() {
    props.onSearchNow?.();
    }

    function summaryClickACB() {
        window.location.hash = "#/summary";
    }

    return (
        <div>
            <input
                value={props.text || ""}
                onChange={textChangeACB}
            />

            <select
                value={props.type || ""}
                onChange={typeChangeACB}
            >
                <option value="">Choose:</option>

                {(props.dishTypeOptions || []).map(
                    function optionCB(optionString) {
                        return (
                            <option
                                key={optionString}
                                value={optionString}
                            >
                                {optionString}
                            </option>
                        );
                    }
                )}
            </select>

            <button
                onClick={searchClickACB}
                style={{ marginRight: "12px" }}
            >
                Search!
            </button>

            <button onClick={summaryClickACB}>
                Summary
            </button>
        </div>
    );
}
