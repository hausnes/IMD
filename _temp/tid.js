// Given a number of seconds since 1.1.1980, calculate the date and time
function calculateDate(seconds) {
	var date = new Date(0);
	date.setUTCSeconds(seconds);
	return date;
}

console.log(calculateDate(1675769765)); // 1.1.1980 00:00:00