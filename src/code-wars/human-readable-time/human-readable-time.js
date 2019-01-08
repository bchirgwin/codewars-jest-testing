
const humanReadable = (seconds) => {
    const sec = ('00' + seconds % 60).slice(-2);
    const minutes = ('00' + Math.trunc((seconds / 60 ) % 60)).slice(-2);
    const hours =  ('00' + Math.trunc(seconds / 3600)).slice(-2);

    return `${hours}:${minutes}:${sec}`
}


module.exports = humanReadable;