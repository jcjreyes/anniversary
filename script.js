const annivTimer = () => {
    let firstDay = new Date(2021, 6, 28, 12, 00);
    let timeElapsed = new Date() - firstDay;
    let days = Math.floor(timeElapsed / 1000 / 60 / 60 / 24);
    let hours = Math.floor(timeElapsed / 1000 / 60 / 60 % 24);
    
	if (hours < 10){
		hours = "0" + hours;
	}

	let minutes = Math.floor(timeElapsed / 1000 / 60 % 60);

	if (minutes < 10){
		minutes = "0" + minutes;
	}

	let seconds = Math.floor(timeElapsed / 1000 % 60);

	if(seconds < 10){
		seconds = "0" + seconds;
	}

    document.getElementById("time-days").innerText = days + " days...";
    document.getElementById("time-hours").innerText = hours + " hours...";
    document.getElementById("time-minutes").innerText = minutes + " minutes... and";
    document.getElementById("time-seconds").innerText = seconds + " seconds!";
};

const startTimer = () => {
    annivTimer();
    window.setInterval("annivTimer()", 1);
};

startTimer();
