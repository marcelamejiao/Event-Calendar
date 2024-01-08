const apiHost = import.meta.env.VITE_API_HOST ?? 'http://localhost:8080';

export const getAllEvents = async () => {
    const response = await fetch(`${apiHost}/events`);
    return await response.json();
};

export const getEventsById = async (id) => {
    const response = await fetch(`${apiHost}/events/${id}`);
    return await response.json();
};

export const createEvent = async (data) => {
    const response = await fetch(`${apiHost}/events`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });

    if (!response.ok) {
        throw new Error("Could not create an event");
    }
};

export const deleteEvent = async (id) => {
    const response = await fetch(`${apiHost}/events/${id}`, {
        method: "DELETE",
    });

    if (!response.ok) {
        throw new Error("Could not delete this event");
    }
};

export const updateEvent = async (id, data) => {
    const response = await fetch(`${apiHost}/events/${id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });

    if (!response.ok) {
        throw new Error("Could not update this event");
    }
};

export const getEventsByLabel = async (label) => {
    const response = await fetch(`${apiHost}/events/label?` + new URLSearchParams({
        label: label,
    }));
    return await response.json();
};

export const getEventsByLocation = async (location) => {
    const response = await fetch(`${apiHost}/events/location?` + new URLSearchParams({
        location: location,
    }));
    return await response.json();
};

export const getEventsByDate = async (startDate, endDate) => {
    const response = await fetch(`${apiHost}/events/by-date?` + new URLSearchParams({
        startDate: startDate,
        endDate: endDate,
    }));
    return await response.json();
};
