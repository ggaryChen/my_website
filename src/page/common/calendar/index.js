require('./index.css');
span1 = document.getElementsByClassName('calendar-span')[0],
    span2 = document.getElementsByClassName('calendar-span')[1],
    span3 = document.getElementsByClassName('calendar-span')[2],
    b = document.getElementsByClassName('calendar-b'),
    td = document.getElementsByClassName('calendar-item'),
    today = new Date(),
    toyear = today.getFullYear(),
    tomonth = today.getMonth() + 1,
    todate = today.getDate();

function isLeap(year) {
    return (year % 100 == 0 ? res = (year % 400 == 0 ? 1 : 0) : res = (year % 4 == 0 ? 1 : 0));
}

function getCalendar(theYear, theMonth) {
    var days = 31;
    var firstDate = new Date(theYear, theMonth - 1, 1);
    var firstDay = firstDate.getDay();
    span1.innerHTML = theYear;
    span2.innerHTML = theMonth;
    if (theMonth == 2) {
        if (isLeap(theYear)) {
            days = 29
        } else {
            days = 28
        }
    } else if (theMonth == 4 || theMonth == 6 || theMonth == 9 || theMonth == 11) {
        days = 30
    } else {
        days = 31
    }
    for (var i = firstDay; i < days + firstDay; i++) {
        td[i].innerHTML = i - firstDay + 1
    }
}
function clearCalendar() {
    for (var i = 0; i < td.length; i++) {
        td[i].innerHTML = '';
        td[i].style.color = 'black';
    }
    span3.innerHTML = todate;
    td[todate + new Date(toyear, tomonth - 1, 1).getDay() - 1].style.color = 'grey';
    if (toyear == today.getFullYear() && tomonth == today.getMonth() + 1) {
        td[todate + new Date(toyear, tomonth - 1, 1).getDay() - 1].style.color = '#39f';
    }
}

getCalendar(toyear, tomonth);
td[todate + new Date(toyear, tomonth - 1, 1).getDay() - 1].style.color = '#39f';
span3.innerHTML = todate;
for (var n = 0; n < td.length; n++) {
    td[n].onclick = function () {
        cilckk();
        this.style.color = 'grey';
        span3.innerHTML = this.innerHTML;
    }
}

function cilckk() {
    clearCalendar();
    getCalendar(toyear, tomonth);
}
b[0].onclick = function () {
    if (toyear > 1970) {
        toyear -= 1
        cilckk();
    };
};
b[1].onclick = function () {
    toyear += 1
    cilckk();
};
b[2].onclick = function () {
    if (tomonth > 1) {
        tomonth -= 1
        cilckk();
    }
};
b[3].onclick = function () {
    if (tomonth < 12) {
        tomonth += 1
        cilckk();
    }
};