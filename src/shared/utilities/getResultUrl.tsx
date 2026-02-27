import getRandomString from "./getRandomString";

function GetResultUrl(base_url: string | undefined, route_path: string | undefined): string {

    var no_cache_string = getRandomString(10)

    if (route_path !== undefined && route_path === "maerz") {
        return "https://easywk.swimdata.de/results.php"
        //return base_url + "/splashdata/" + route_path + "/result/index.html?nc=" + no_cache_string
    } else {
        return base_url + "/splashdata/" + route_path + "/result/index.html?nc=" + no_cache_string
    }

}


export default GetResultUrl;