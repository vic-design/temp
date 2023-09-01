module.exports = {

    filters: {

        dateFormated(value) {
            let date = new Date(value);
            let day = (day = date.getDate()) < 10 ? '0' + day : day;
            let month = (month = date.getMonth()) < 10 ? '0' + month : month;
            return day + "." + month + "." + date.getFullYear();
        },
    }

};