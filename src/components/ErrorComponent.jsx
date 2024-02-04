import { useRouteError } from "react-router-dom";

function ErrorComponent(){
    const error = useRouteError();
    console.log(error);
    return (
        <>
        <h1>Error</h1>
        <h4>{error.status}</h4>
        </>
    )
}

export default ErrorComponent;