import dayjs from "dayjs";

export const CONTACT_PHONE = "+7-(912) 388-35-38";
export const CONTACT_TELEGRAM = "https://t.me/+Tadlw3QqJwk1ZTMy";
export const ADDRESS = "Мельникайте 2к3";
export const MEETING_TIME = "17:00";


export let newYearDate = () => {
    let nextYear = dayjs().year() + 1;
    let nextNewYear = dayjs().year(nextYear).month(0).date(1).hour(0).minute(0).second(0)
    return nextNewYear.toDate();
};