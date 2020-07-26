export const orderByDate = (array, reverced = false) => {
    return array.sort(function (a, b) {
        const dateAArray = a.dateTo.split('.')
        const dateBArray = b.dateTo.split('.')

        if (reverced) {
            return date_sort_asc(new Date(dateAArray[2], dateAArray[1], dateAArray[0]), new Date(dateBArray[2], dateBArray[1], dateBArray[0]));
        }

        return date_sort_desc(new Date(dateAArray[2], dateAArray[1], dateAArray[0]), new Date(dateBArray[2], dateBArray[1], dateBArray[0]));
    })
}

var date_sort_asc = function (date1, date2) {

    if (date1.getTime() > date2.getTime()) return 1;
    if (date1.getTime() < date2.getTime()) return -1;
    return 0;
};

var date_sort_desc = function (date1, date2) {

    if (date1.getTime() > date2.getTime()) return -1;
    if (date1.getTime() < date2.getTime()) return 1;
    return 0;
};