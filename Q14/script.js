function submitForm() {
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const age = parseInt(document.getElementById('age').value);
    const birthday = document.getElementById('birthday').value;
    const foodPreferences = document.getElementById('foodPreferences').value;

    const customerObject = {
        firstName: firstName,
        lastName: lastName,
        age: age,
        birthday: birthday,
        foodPreferences: foodPreferences
    };

    console.log("Customer Object:", customerObject);
    console.log("JSON Representation:", JSON.stringify(customerObject));

    displayCustomerData(customerObject);
}

function displayCustomerData(customer) {
    const customerDataDiv = document.getElementById('customerData');
    const customerDiv = document.createElement('div');

    customerDiv.innerHTML = `
    <div class="card">
    <p><b>First Name:</b> ${customer.firstName}</p>
    <p><b>Last Name:</b> ${customer.lastName}</p>
    <p><b>Age:</b> ${customer.age}</p>
    <p><b>Birthday:</b> ${customer.birthday}</p>
    <p><b>Food Preferences:</b> ${customer.foodPreferences}</p>
    </div>
    `;

    customerDataDiv.appendChild(customerDiv);
}
