type CalendarEvent = {
    id: number;
    eventName: string;
    startDate: Date;
    endDate: Date;
    location: string;
    label: string;
}

export type CalendarEventJson = {
    id: number;
    eventName: string;
    startDate: string;
    endDate: string;
    location: string;
    label: string;
}

export default  CalendarEvent