let today = moment();
$("#todayDate").text(today.format("dddd, MMMM Do, YYYY"));

GetTime();

function GetTime() {
    var CurrentTime = new Date()
    var hour = CurrentTime.getHours()
    var minute = CurrentTime.getMinutes()
    var second = CurrentTime.getSeconds()

    if (minute < 10) {
        minute = "0" + minute
    }

    if (second < 10) {
        second = "0" + second
    }

    var GetCurrentTime = hour + ":" + minute + ":" + second + " ";

    if (hour > 11) {
        GetCurrentTime += "pm"
    } else {
        GetCurrentTime += "am"
    }

    document.getElementById("CurrentTime").innerHTML = GetCurrentTime;
    setTimeout(GetTime, 1000)
}
if (localStorage.getItem("calendarInfo") === null) {
    let calendarInfo = [
        {
            "8": "",
            "9": "",
            "10": "",
            "11": "",
            "12": "",
            "13": "",
            "14": "",
            "15": "",
            "16": "",
            "17": "",
        }
    ];
    localStorage.setItem("calendarInfo", JSON.stringify(calendarInfo));
}

let saveButton = $(".saveBtn")

for (i = 0; i < saveButton.length; i++) {
    $(saveButton[i].firstChild).on("click", function (e) {

        let textArea = e.target.parentElement.parentElement.childNodes[3].childNodes[1].value

        let textHour = e.target.parentElement.parentElement.childNodes[3].getAttribute('value')

        calendarInfo = JSON.parse(localStorage.getItem("calendarInfo"));

        calendarInfo[0][textHour] = textArea

        localStorage.setItem("calendarInfo", JSON.stringify(calendarInfo))
    })
}

let storecalendarInfo = JSON.parse(localStorage.getItem("calendarInfo"))
let textAreaArray = $(".description")

for (i = 0; i < textAreaArray.length; i++) {
    let textAreaHour = textAreaArray[i].parentElement.getAttribute("value")
    textAreaArray[i].textContent = storecalendarInfo[0][textAreaHour]
}