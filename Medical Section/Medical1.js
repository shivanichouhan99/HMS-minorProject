const medicineForm = document.getElementById('medicineForm');
const medicineList = document.getElementById('medicineList');

let medicines = [];

medicineForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const medicineName = document.getElementById('medicineName').value;
    const quantity = parseInt(document.getElementById('quantity').value);

    if (medicineName && quantity > 0) {
        const existingMedicineIndex = medicines.findIndex(med => med.name === medicineName);

        if (existingMedicineIndex !== -1) {
            medicines[existingMedicineIndex].quantity += quantity;
        } else {
            medicines.push({ name: medicineName, quantity: quantity });
        }

        renderMedicineList();
        medicineForm.reset();
    }
});

function renderMedicineList() {
    medicineList.innerHTML = '';

    medicines.forEach(medicine => {
        const listItem = document.createElement('div');
        listItem.innerHTML = `<span>${medicine.name}</span> - <span>${medicine.quantity}</span> <button onclick="removeMedicine('${medicine.name}')">Remove</button>`;
        medicineList.appendChild(listItem);
    });
}

function removeMedicine(medicineName) {
    medicines = medicines.filter(med => med.name !== medicineName);
    renderMedicineList();
}
