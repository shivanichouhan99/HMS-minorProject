document.addEventListener('DOMContentLoaded', function () {
    const doctorList = document.getElementById('doctor-list');

    // Sample doctors data (can be fetched from server in real scenario)
    const doctors = [
        { id: 1, name: 'Dr. John Doe', specialization: 'Cardiologist' },
        { id: 2, name: 'Dr. Jane Smith', specialization: 'Pediatrician' },
        { id: 3, name: 'Dr. Michael Johnson', specialization: 'Dermatologist' },
        { id: 3, name: 'Dr. Michael Johnson', specialization: 'Dermatologist' },
        { id: 3, name: 'Dr. Michael Johnson', specialization: 'Dermatologist' },
        { id: 3, name: 'Dr. Michael Johnson', specialization: 'Dermatologist' },
        { id: 3, name: 'Dr. Michael Johnson', specialization: 'Dermatologist' },
        { id: 3, name: 'Dr. Michael Johnson', specialization: 'Dermatologist' },
        { id: 3, name: 'Dr. Michael Johnson', specialization: 'Dermatologist' }
    ];

    // Display doctors in the list
    doctors.forEach(doctor => {
        const doctorItem = document.createElement('div');
        doctorItem.classList.add('doctor');
        doctorItem.dataset.id = doctor.id;
        doctorItem.innerHTML = `
            <h2>${doctor.name}</h2>
            <p>Specialization: ${doctor.specialization}</p>
        `;
        doctorItem.addEventListener('click', () => {
            scheduleAppointment(doctor);
        });
        doctorList.appendChild(doctorItem);
    });

    // Function to schedule appointment with a doctor
    function scheduleAppointment(doctor) {
        // In a real scenario, you can implement logic for scheduling appointment
        alert(`Appointment scheduled with ${doctor.name}, ${doctor.specialization}`);
    }
});
