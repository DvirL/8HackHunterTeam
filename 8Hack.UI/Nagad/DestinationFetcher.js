const SERVER_BASE_URL = 'http://weride.azurewebsites.net';

export const getDestinations = (callback)=> {
    console.log('going to server');

    var url = SERVER_BASE_URL + '/api/queues/All';
    fetch(url).then(response => response.json()).then(responseJson=>callback(responseJson)).catch((error) => {
        console.error(error);
    });
};

export const getWaitingQueue = (destinationId, callback)=> {
    var url = SERVER_BASE_URL + '/api/queues/FullQueue?destinationId=' + destinationId;
    console.log('going to server to fetch queue for ' + destinationId + '. url: ' + url);
    fetch(url).then(response => response.json()).then(responseJson=>callback(responseJson)).catch((error) => {
        console.log('error fetching waiting queue');
    });
};

export const removeFromWaitingQueue = (userId, callback)=> {
    var url = SERVER_BASE_URL + '/api/queues/UnsubscribeAll?userId=' + userId;
    console.log('going to server to delete ' + userId + ' from all queues. url: ' + url);
    fetch(url, {method: 'delete'}).then(responseJson=>callback(responseJson)).catch((error) => {
        console.log('error fetching deleting from queuee');
    });
};