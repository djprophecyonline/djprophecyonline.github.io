// Function to calculate the number of days until Christmas
    function daysUntilChristmas() {
        const today = new Date();
        const christmasDate = new Date(today.getFullYear(), 11, 25); // 11 is December
        if (today.getMonth() == 11 && today.getDate() > 25) {
            christmasDate.setFullYear(christmasDate.getFullYear() + 1);
        }
        const oneDay = 1000 * 60 * 60 * 24; // milliseconds in a day
        const daysLeft = Math.ceil((christmasDate - today) / oneDay);
        return daysLeft;
    }

    // Update the content of the <h2> element with the number of days until Christmas
    document.getElementById('daysToChristmas').innerText = daysUntilChristmas();
    
    // Function to calculate the number of days until New Year's Day
    function daysUntilNewYear() {
        const today = new Date();
        const newYearDate = new Date(today.getFullYear() + 1, 0, 1); // 0 is January of next year
        const oneDay = 1000 * 60 * 60 * 24; // milliseconds in a day
        const daysLeft = Math.ceil((newYearDate - today) / oneDay);
        return daysLeft;
    }

    // Update the content of the <h2> element with the number of days until New Year's Day
    document.getElementById('daysToNewYear').innerText = daysUntilNewYear();

    // Function to calculate the date of Easter Sunday for the current year
    function calculateEasterDate(year) {
        // Golden number for determining the date of Easter
        const goldenNumber = year % 19 + 1;

        // Using the Meeus/Jones/Butcher algorithm to calculate the date of Easter
        const century = Math.floor(year / 100) + 1;
        const skippedLeapYears = Math.floor(3 * century / 4) - 12;
        const correctedEpact = (8 * century + 5) / 25 - 5;
        const sundayAfterFullMoon = (5 * year / 4 - skippedLeapYears - 10) % 7;
        const epact = (11 * goldenNumber + 20 + correctedEpact - skippedLeapYears) % 30;

        // Determine the date of the Paschal full moon
        let fullMoonDay = 44 - epact;
        if (fullMoonDay < 21) {
            fullMoonDay += 30;
        }
        fullMoonDay += 7 - (sundayAfterFullMoon + fullMoonDay) % 7;

        // Determine the date of Easter Sunday
        let easterMonth = 3;
        let easterDay = fullMoonDay;
        if (easterDay > 31) {
            easterDay -= 31;
            easterMonth++;
        }

        return new Date(year, easterMonth - 1, easterDay); // Months are 0-indexed
    }

    // Function to calculate the number of days until Easter Sunday
    function daysUntilEaster() {
        const today = new Date();
        const currentYear = today.getFullYear();
        const nextEasterDate = calculateEasterDate(currentYear + 1); // Calculate Easter for the next year
        const oneDay = 1000 * 60 * 60 * 24; // milliseconds in a day
        const daysLeft = Math.ceil((nextEasterDate - today) / oneDay);
        return daysLeft;
    }

    // Update the content of the <h2> element with the number of days until Easter Sunday
    document.getElementById('daysToEaster').innerText = daysUntilEaster();