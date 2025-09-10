
function GetClubUrl(base_url: string |undefined, route_path: string | undefined): string  {

    if (route_path !== undefined && route_path === "bayern") {
        //return "https://easywk.swimdata.de/results.php"
        return base_url + "/splashdata/" + route_path + "/club/index.html"
    } else {
        return base_url + "/splashdata/" + route_path + "/club/index.html"
    }
}


export default GetClubUrl;