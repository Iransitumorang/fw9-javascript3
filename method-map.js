const getMonth = (callback) => {
    setTimeout(() => {
        let error = false;
        let month = ['January', 'February', 'March', 'April', 'May', 'June', 'August', 'September', 'October', 'November', 'December'];
        if (!error) {
            callback(null, month);
        } else {
            callback(new Error('Sorry Data Not Found', []))
        }
    }, 4000)
};


const showMonth = (error, month) => {
    if (error !== null) {
        console.log(error)
    } else {
        month.map((isi) => {
            console.log(isi)
        })
    }
};

getMonth(showMonth);