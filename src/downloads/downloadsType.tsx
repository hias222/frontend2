export type club = {
    name: string;
    code: string;
    nation?: string;
    region?: string;
    entriesfile?: string;
    certsfile?: string;
}

export type common = {
    name: string;
    link?: string;
}

export type downloadData = {
    common: [common];
    clubs: [club];
}