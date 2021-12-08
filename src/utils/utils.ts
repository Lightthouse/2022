import dayjs from "dayjs";
const relativeTime = require('dayjs/plugin/relativeTime')
const durationTime = require('dayjs/plugin/duration')


const CONTACT_PHONE = "+7-(912) 388-35-38";
const CONTACT_TELEGRAM = "https://t.me/+Tadlw3QqJwk1ZTMy";
const ADDRESS = "Мельникайте 2к3";


export let newYearTimer = () => {
    dayjs.extend(relativeTime)
    dayjs.extend(durationTime)
    let nextYear = dayjs().year() + 1;
    let nextNewYear = dayjs().year(nextYear).month(0).date(1).hour(0).minute(0).second(0)

    let now = dayjs();

    // let secondsOffset = nextNewYear.diff(now, "second");
    // let daysOffset = Math.trunc(secondsOffset / (3600 * 24));
    let a = dayjs('2010-01-01')
    return nextNewYear.toDate();
    // return dayjs('1999-01-01').to(a)
    // return dayjs.duration(100);

};