window.onload = function() {
    updateLastLogin();
    modifyComments();
}
function modifyComments() {
    let els = document.getElementsByClassName("comment");
    for(let i=0; i<els.length; i++) {
        //get text length for element
        let length = els[i].textContent.length;
        //create spans for new lines
        let spanBefore = document.createElement("span");
        spanBefore.classList.add("color-comment");
        spanBefore.textContent = "/";
        for(let j=0; j < length + 3; j++) {spanBefore.textContent += "*";}
        let spanAfter = document.createElement("span");
        spanAfter.classList.add("color-comment");
        for(let j=0; j < length + 3; j++) {spanAfter.textContent += "*";}
        spanAfter.textContent += "/";
        //create new lines
        let before = document.createElement("div");
        before.classList.add("line");
        before.appendChild(spanBefore);
        let after = document.createElement("div");
        after.classList.add("line");
        after.appendChild(spanAfter);
        //add new lines to the dom
        els[i].parentElement.parentElement.insertBefore(before, els[i].parentElement);
        els[i].parentElement.parentElement.insertBefore(after, els[i].parentElement.nextSibling);
    }
}

function updateLastLogin() {
    let ip = getIP(function(ip){
        let date = getTimestamp();
        let el = document.getElementById("timestamp");
        el.textContent = "Last login: " + date + " from " + ip;
    });
}

function getTimestamp() {
    const days = ['Sun','Mon','Tue','Wed','Thur','Fri','Sat'];
    const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    let date = new Date;
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();
    let day = days[date.getDay()];
    let month = months[date.getMonth()];
    let year = date.getFullYear();
    hour = hour < 10 ? '0' + hour : hour;
    minute = minute < 10 ? '0' + minute : minute;
    second = second < 10 ? '0' + second : second;
    // let strTime = hours + ':' + minutes + ' ' + ampm;
    return day + " " + month + " " + date.getDate() + " " + hour + ":" + minute + ":" + second + " " + year;
}