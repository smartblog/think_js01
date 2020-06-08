'use strict';

/**
 * @param {number} number
 */
function Group(number) {
    validateValues();

    this.number = number;
    this.students = [];

    this.addStudent = (student) => {
        this.students.push(student);
    }

    /**
    * @return {array} список всех больных студентов
    */
    this.whoSick = function () {
        const arraySick = [];
        this.students.forEach(student => {
            if (!student.isHealthy())
                arraySick.push(student.fullname());
        });
        return arraySick;
    }

    function validateValues() {
        if (!number)
            throw new Error('You need enter number of group');

        if (typeof number !== "number")
            throw new Error('Value number is not number');
    }
}
