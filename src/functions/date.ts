const displayOptions: Intl.DateTimeFormatOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

export const getDisplayDate = (date: Date): string => {
    return date.toLocaleDateString("en-US", displayOptions);
};

export const getDateString = (date: Date): string => {
    return date.toUTCString();
}

export const isAfter = (date1: Date, date2: Date) => {
    return date1 >= date2;
}
