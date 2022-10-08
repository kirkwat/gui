(app => {

    // The "scheduler" is in charge of managing tutor schedules.

    // set properties: id, name and skills
    class Tutor {}

    // set properties: tutorId, day, name and notes
    class Appointment {}

    app.Tutor = Tutor;
    app.Appointment = Appointment;

    const tutors = [
        new Tutor(1, "John", [".NET", "Angular"]),
        new Tutor(2, "Mark", ["Vue", "Node"]),
        new Tutor(3, "Karen", ["Angular", "React"]),
        new Tutor(4, "Janet", ["REST Services", "SQL"]),
        new Tutor(5, "David", [".NET"])
    ];

    let appointments = [
        new Appointment(1, 'Monday', 'Sally', 'I need lots of Angular help!')
    ];

    // Add the following methods to app.scheduler....
    // ** getTutors() - returns all tutors
    // ** getTutor(tutorId) - return tutor with given Id
    // ** getAppointments() - return all appointments
    // ** getAppointment(tutorId, day) - return all appointments for given tutor and day
    // ** saveAppointment(appt) - add passed appointment to local variable

    app.scheduler = {};

})(app || (app = {}));