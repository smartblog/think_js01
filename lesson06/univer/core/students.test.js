
describe('class Student', () => {
    describe('create', () => {
        it('Empty fio of student', () => {
            expect(() => new Student()).to.throw('You need enter fio of student');
        });
        it('Value fio is not string', () => {
            expect(() => new Student(123)).to.throw('Value fio is not string');
        });
        it('Value fio is not full', () => {
            expect(() => new Student("Иванов Иван")).to.throw('Value fio is not full');
        });
    });
    describe('operations', () => {
        const student = new Student("Иванов Иван Иванович")
        it('make Sick', () => {
            student.makeSick();
            assert.equal(student.isHealthy(), false);
        });
        it('make Healthy', () => {
            student.makeHealthy();
            assert.equal(student.isHealthy(), true);
        });
    });
});
