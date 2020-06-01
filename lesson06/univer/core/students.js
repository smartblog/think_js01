'use strict';

/**
 * @param {string} fio
 */
function Student(fio) {
    validateValues();
    fio = fio.replace(/\s+/g, ' ').trim()

    const arrFromFio = fio.split(" ");

    if (arrFromFio.length < 3)
        throw new Error('Value fio is not full');

    const arr = capitalizeElements(arrFromFio);

    let _isHealthy = true;
    this.firstname = arr[1];
    this.lastname = arr[0];
    this.middlename = arr[2];

    this.fullname = function () {
        const fullname = this.lastname + " " + this.firstname + " " + this.middlename;
        return fullname;
    }

    this.withInitials = function () {
        const withInitials = this.lastname + " " + this.firstname[0] + "." + this.middlename[0] + ".";
        return withInitials;
    }

    this.isHealthy = function () {
        return _isHealthy;
    };

    this.makeSick = () => {
        _isHealthy = false;

        if (_isHealthy == false) {
            return true
        } else {
            return false
        }
    };

    this.makeHealthy = () => {
        _isHealthy = true;

        if (_isHealthy == true) {
            return true
        } else {
            return false
        }
    };

    function validateValues() {
        if (!fio)
            throw new Error('You need enter fio of student');

        if (typeof fio !== "string")
            throw new Error('Value fio is not string');
    }

    function capitalizeElements(array) {
        const newArray = [];
        array.forEach(element => {
            newArray.push(element.charAt(0).toUpperCase() + element.slice(1))
        });
        return newArray;
    }
}
