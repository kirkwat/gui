(app => {

    let selected = [];

    // Add the following methods to app.appointmentView....
    // ** load(tutorId, day)
    //      - store tutorId and day on selected variable above 
    //      - load appointmentView using app._changeView 
    // ** save()
    //      - select DOM elements for name (input) and notes (textarea)
    //      - create new Appointment using values on selected variables and the form values submitted 
    //      - pass appointment to app.scheduler.saveAppointment
    //      - clear the two form element values
    //      - navigate back to calendar using app.calendarView.load with the selected tutorId
    app.appointmentView = {
        load(tutorId, day) {
            selected.push(tutorId);
            selected.push(day);
            app._changeView('appointmentView');
        },
        save(){
            let nameInput = document.querySelector('#userName');
            let messageInput = document.querySelector('#message');

            let appt = new app.Appointment(selected[0],selected[1],nameInput.value,messageInput.value);
            app.scheduler.saveAppointment(appt);

            nameInput.value = "";
            messageInput.value = "";

            app.calendarView.load(selected[0]);
            selected.length = 0;
        }
    };

})(app || (app = {}));