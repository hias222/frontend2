import { swimmerData } from "../types/SwimmerData";

export type LaneState = {
    lane: string;
    place: string;
    finishtime: string;
    laptime: string;
    islaptime: boolean;
    changed: number;
    entrytime?: string;
    swimmerData: swimmerData;
};
