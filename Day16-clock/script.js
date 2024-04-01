let hrs = document.querySelector('.hrs')
let min = document.querySelector('.min')
let sec = document.querySelector('.sec')
let mili = document.querySelector('.mili')
let day = document.querySelector('.day')
let timezone = document.querySelector('.timezone')
let month = document.querySelector('.month')
let year = document.querySelector('.year')

let Dayss = ['SUN', 'MON', 'TUE','WED', 'THU','FRI','SAT']
let Months =['JAN','FEB','MAR','APR','MAY','JUN','JUL','AUG','SEP','OCT','NOV','DEC']

setInterval(() => {
    let currentTime = new Date()
hrs.innerHTML = currentTime.getHours();
min.innerHTML = currentTime.getMinutes();
sec.innerHTML = currentTime.getSeconds();
mili.innerHTML = currentTime.getMilliseconds()
timezone.innerHTML = currentTime.getUTCDate()
year.innerHTML = currentTime.getUTCFullYear()
month.innerHTML = Months[currentTime.getMonth()]
day.innerHTML = Dayss[currentTime.getDay()]



},100)
