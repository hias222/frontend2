import { LaneState } from "../../shared/state/LaneState";
import { eventHeat } from "../../shared/types/EventHeat";

export interface BaseFrontendInterface {
    startdelayms: number;
    EventHeat: eventHeat;
    lanes: [LaneState] | [];
    displayMode: string;
    runningTime: string;
}
