const axios = require('axios');


const sendSMS = async (apiKey, requestData) => {

    const endpoint = 'https://connect.mrnotify.lk/trigger/send';

    await axios({
        method: 'POST',
        url: endpoint,
        headers: {
            'Content-Type': 'application/json',
            'Apikey': apiKey,
        },
        data: requestData
    })
        .then(response => {
            if (response.status == 200 || response.status == 201) {
                let body = response.data;
                let info = body.info;

                console.log("Status", info);

            } else if (response.status == 403) {
                let body = response.data;
                let error = body.error;

                console.log("Status", error);

            }
            else {
                console.error("Failed calling Send SMS API", response.status);
            }
        })
        .catch(error => {
            console.log('Error', error)
            console.log('mrnotify send message failed');

        });
}

exports.sendSMS = sendSMS;