const getFullYear = () => {
    let currentYear = new Date().getFullYear;
    return currentYear;
}

const getFooterCopy = (isIndex) => {
    if (isIndex === true) {
        return ("Holberton School");
    } else {
        return ("Holberton School main dashboard");
    }
}

module.exports = {
    getFullYear,
    getFooterCopy,
};