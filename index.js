function findMatching(drivers, filter) {
    return drivers.filter(driver => driver.toLowerCase() === filter.toLowerCase());
}

function fuzzyMatch(drivers, filter) {
    return drivers.filter(driver => driver.substring(0, filter.length) === filter);
}

function matchName(drivers, filter) {
    return drivers.filter(driver => driver.name === filter);
}