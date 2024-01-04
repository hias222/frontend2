import { useParams } from "react-router-dom";

function GetUrlPath(): string | undefined {
    const params = useParams();
    //console.log(JSON.stringify(params))
    if (params.base !== "" && params.base !== undefined && params.base !== "undefined") {
        return params.base
    } else {
        return undefined
    }
}


export default GetUrlPath;