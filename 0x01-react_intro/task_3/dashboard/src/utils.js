function getFullYear(){
    const d = new Date();
    let year = d.getFullYear();

    return year;
}

function getFooterCopy(isIndex){
    if (!isIndex){
        return ("Holberton School main dashboard");
    }

    return ("Holberton School");
}

function getLatestNotification(){
    return '<strong>Urgent requirement</strong> - complete by EOD';
}

export {getFullYear, getFooterCopy, getLatestNotification};    