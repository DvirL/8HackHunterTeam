const SERVER_BASE_URL = 'http://weride.azurewebsites.net';

export const getDestinations = (callback)=> {
    console.log('going to server');

    var url = SERVER_BASE_URL + '/api/queues/All';
    fetch(url).then(response => response.json()).then(responseJson=>callback(responseJson)).catch((error) => {
        console.error(error);
    });
/*
    return [
        {key: 'תל אביב יא חביבי'},
        {key: 'רמת גן'},
        {key: 'רמת השרון'},
        {key: 'באר בשבע'},
        {key: 'הרצליה'},
        {key: 'בת ים'},
        {key: 'הרחק הרחק מכאן'},
        {key: 'חיפה'},
        {key: 'עכו'},
        {key: 'ראשון לציון'},
        {key: 'גבעת עדה'},
        {key: 'קסם'},
        {key: 'אשקלון'},
        {key: 'ירושלים'}
    ];*/
};

export const getWaitingQueue = (destinationId, callback)=> {
    var url = SERVER_BASE_URL + '/api/queues/FullQueue?destinationId=' + destinationId;
    console.log('going to server to fetch queue for ' + destinationId + '. url: ' + url);
    fetch(url).then(response => response.json()).then(responseJson=>callback(responseJson)).catch((error) => {
        console.log('error fetching waiting queue');
    });
};