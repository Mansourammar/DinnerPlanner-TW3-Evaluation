
export function SuspenseView(props) {

    // No promise eists
    if (!props.promise) {
        return <span>no data</span>;
    }

    // Error exists
    if (props.error) {
        return <span>{props.error.toString()}</span>;
    }

    //loading
    return (
        <img
            src="https://brfenergi.se/iprog/loading.gif"
            alt="Loading..."
        />
    );
}
