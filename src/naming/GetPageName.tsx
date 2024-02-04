import { useParams } from "react-router-dom";

function changeName(name: string): string {

    if (name === "maerz") {
        return "Nürnberger Märzmeeting 2024"
    } else if (name === "masters") {
        return "Bayerische Kurzbahnmeisterschaft der Masters 2024"
    } else if (name === "verein") {
        return "SG Fürth Vereinsmeisterschaft 2024"
    } else {
        return name
    }


}

function GetPageName(): string | undefined {
    const params = useParams();
    //console.log(params.base)
    if (params.base !== "" && params.base !== undefined && params.base !== "undefined") {
        return changeName(params.base)
    } else {
        return "Ergebnisdienst Schwimmen"
    }
}

export default GetPageName;