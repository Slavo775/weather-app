export const getFormattedDayAndDate = () => {
    const now = new Date();
    const daysOfWeek = [
        'Pondelok', 'Utorok', 'Streda', 'Štvrtok', 'Piatok', 'Sobota', 'Nedela'
    ];
    const dayOfWeek = daysOfWeek[now.getDay()];
    const date = now.toLocaleDateString('en-GB');
    return {textDay: dayOfWeek, date: date.replaceAll('/', '.')}
}