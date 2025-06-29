
function GetResultUrl(base_url: string |undefined, route_path: string | undefined): string  {

    if (route_path !== undefined && route_path === "bezirk") {
        return "https://easywk.swimdata.de/results.php"
        //return base_url + "/splashdata/" + route_path + "/results.html"
    } else {
        return base_url + "/splashdata/" + route_path + "/index.html"
    }
}


export default GetResultUrl;