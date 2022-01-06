var due = new Date("2022-01-12T18:00:00Z");
var start = new Date("2021-09-08T12:35:00Z"); // or just use a unix timestamp
var current = new Date();

var bar = document.getElementById("bar");
bar.min = Math.round(start.getTime() / 1000);
bar.max = Math.round(due.getTime() / 1000);
bar.value = Math.round(start.getTime() / 1000);
var difference = Math.round(current.getTime() / 1000) - bar.value;


var remainingSecs = bar.max - Math.round(current.getTime() / 1000);
var remainingHours = Math.round(remainingSecs / 3600);
var meterIncrement = Math.round(difference / remainingHours);
console.log(remainingHours);

var label = document.getElementById("label");
var intervalId = 0;

i = 0;
function incrementHours() {
    if (i <= remainingHours) {
        label.innerHTML = i;
        bar.value += meterIncrement;
    } else {
        clearInterval(intervalId);
        bar.value = Math.round(current.getTime() / 1000);
    }
    
    i++;
}
intervalId = setInterval(incrementHours, 20);