const eventDate = new Date('2024-04-19T20:00:00');

function updateTimer() {
    const currentDate = new Date();
    const timeDiff = currentDate.getTime() - eventDate.getTime();

    if (timeDiff <= 0) {
        document.getElementById('timer').innerHTML = 'Event is happening now or in the future.';
    } else {
        const seconds = Math.floor(timeDiff / 1000);
        const minutes = Math.floor(seconds / 60);
        const hours = Math.floor(minutes / 60);
        const days = Math.floor(hours / 24);

        document.getElementById('timer').innerHTML = ` ${days} days, ${hours % 24} hours, ${minutes % 60} minutes, ${seconds % 60} seconds`;
    }
}

// Update the timer every second
setInterval(updateTimer, 1000);

// Initial call to set the timer
updateTimer();