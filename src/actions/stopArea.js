export const SELECT_STOP_AREA = 'SELECT_STOP_AREA';

export function setSelectedStopArea(stopArea) {
    return {
        type: SELECT_STOP_AREA,
        payload: stopArea
    };
}