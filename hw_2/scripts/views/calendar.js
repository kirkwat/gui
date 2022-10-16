(app => {

    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday'];

    // Add the following method to app.calendarView....
    // ** load(tutorId)
    //      - load tutor from app.scheduler using tutorId 
    //      - select h2 tag and set it's text to 'Schedule for [[Tutor Name]]'
    //      - iteral through days collection (above)
    //            for each day:
    //              - get appointment (if there is one) from app.scheduler using tutor.id and day
    //              - select td from DOM by its ID (should have been made the day name in your HTML)
	//				- clear the contents of the td (needed later when navigating back to this screen)
    //              - if appt exists, set the td's innerHTML to include the name and notes
    //                  - else set the innerHTML of the td to include a 'Book Appointment' button
    //                      - button should call app.appointmentView.load() when clicked and pass the tutorId and day
    //                      - make sure your button has a type of "button" to prevent the page from relaoding
    //      - invoke app._changeView to show calendarView
    app.calendarView = {
        load(tutorId) {
            selectedTutor = app.scheduler.getTutor(tutorId);

            document.querySelector('#tutorDetails_name').innerText = selectedTutor.name.toUpperCase();
            const table = document.querySelector('#weekly_schedule');

            days.forEach(day => {
                let appointment = app.scheduler.getAppointment(tutorId, day);

                const tbody = table.querySelector('#'+day);

                tbody.innerHTML='';

                if(appointment){  
                    tbody.innerText =appointment.name;

                }
                else{
                    //add type button
                    let button = document.createElement("button");
                    button.classList.add('btn-primary');
                    button.innerHTML = "Book Appointment";
                    button.onclick = () => app.appointmentView.load(tutorId,day);
                    tbody.append(button);
                }

            });

            app._changeView('calendarView');
        }
    };

})(app || (app = {}));