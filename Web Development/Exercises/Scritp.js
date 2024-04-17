function saveData(name, phone, email) {
    const newData = {
        name: name,
        phone: phone,
        email: email
    };
    let savedData = JSON.parse(localStorage.getItem('formData')) || [];

    savedData.push(newData);

    localStorage.setItem('formData', JSON.stringify(savedData));
}

function displayData() {
    const dataBody = document.getElementById('dataBody');

    dataBody.innerHTML = '';

    const savedData = JSON.parse(localStorage.getItem('formData')) || [];

    savedData.forEach(data => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${data.name}</td>
            <td>${data.phone}</td>
            <td>${data.email}</td>
        `;
        dataBody.appendChild(row);
    });
}


document.getElementById('dataForm').addEventListener('submit', function(event) {
    event.preventDefault(); 


    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;


    saveData(name, phone, email);


    displayData();


    this.reset();
});


displayData();
