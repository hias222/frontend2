
function GetClubUrl(base_url: string |undefined, route_path: string | undefined): string  {

    if (route_path !== undefined && route_path === "bezirk") {
        return "https://easywk.swimdata.de/clubs.php"
        //return base_url + "/splashdata/" + route_path + "/clubs.html"
    } else {
        return base_url + "/splashdata/" + route_path + "/result/index.html"
    }
}


export default GetClubUrl;