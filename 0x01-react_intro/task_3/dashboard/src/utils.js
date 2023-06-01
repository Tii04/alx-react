const getFullYear = () => {
    let currentYear = new Date();
    return currentYear.getFullYear;
}

const getFooterCopy = (isIndex) => {
    if (isIndex === true) {
        return ("Holberton School");
    } else {
        return ("Holberton School main dashboard");
    }
}

const getLatestNotification = () => {
    return ("<strong>Urgent requirement</strong> - complete by EOD");
}

module.exports = {
    getFullYear,
    getFooterCopy,
    getLatestNotification
};