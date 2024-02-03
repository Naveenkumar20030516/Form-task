// Get a reference to the container element
var container = document.createElement("form-container");

// Create the form element
var form = document.createElement("form");

// Create and append the heading
var heading = document.createElement("h1");
heading.className = "text-center mb-3";
heading.textContent = "Sample Form";
form.appendChild(heading);

// Create the first row with two columns
var row = document.createElement("div");
row.className = "row";

var col1 = document.createElement("div");
col1.className = "col-md-6";

var col2 = document.createElement("div");
col2.className = "col-md-6";

// Create and append the First Name field
var firstNameLabel = document.createElement("label");
firstNameLabel.setAttribute("for", "firstName");
firstNameLabel.className = "form-label h4";
firstNameLabel.textContent = "First Name";
col1.appendChild(firstNameLabel);

var firstNameInput = document.createElement("input");
firstNameInput.setAttribute("type", "text");
firstNameInput.className = "form-control mb-3";
firstNameInput.setAttribute("id", "firstName");
firstNameInput.setAttribute("placeholder", "Enter your first name");
firstNameInput.setAttribute("required", true);
col1.appendChild(firstNameInput);

// Create and append the Last Name field
var lastNameLabel = document.createElement("label");
lastNameLabel.setAttribute("for", "lastName");
lastNameLabel.className = "form-label h4";
lastNameLabel.textContent = "Last Name";
col2.appendChild(lastNameLabel);

var lastNameInput = document.createElement("input");
lastNameInput.setAttribute("type", "text");
lastNameInput.className = "form-control mb-3";
lastNameInput.setAttribute("id", "lastName");
lastNameInput.setAttribute("placeholder", "Enter your last name");
lastNameInput.setAttribute("required", true);
col2.appendChild(lastNameInput);

// Append the columns to the row
row.appendChild(col1);
row.appendChild(col2);

// Append the row to the form
form.appendChild(row);

// Address
var addressLabel = document.createElement("label");
addressLabel.setAttribute("for", "address");
addressLabel.className = "form-label h4";
addressLabel.textContent = "Address";
form.appendChild(addressLabel);

var addressTextarea = document.createElement("textarea");
addressTextarea.className = "form-control mb-3";
addressTextarea.setAttribute("id", "address");
addressTextarea.setAttribute("rows", "3");
addressTextarea.setAttribute("required", true);
form.appendChild(addressTextarea);

// Pincode
var pincodeLabel = document.createElement("label");
pincodeLabel.setAttribute("for", "pincode");
pincodeLabel.className = "form-label h4";
pincodeLabel.textContent = "Pincode";
form.appendChild(pincodeLabel);

var pincodeInput = document.createElement("input");
pincodeInput.setAttribute("type", "text");
pincodeInput.className = "form-control mb-3";
pincodeInput.setAttribute("id", "pincode");
pincodeInput.setAttribute("placeholder", "Enter your pincode");
pincodeInput.setAttribute("required", true);
form.appendChild(pincodeInput);

// Gender
var genderLabel = document.createElement("label");
genderLabel.setAttribute("for", "gender");
genderLabel.className = "form-label h4";
genderLabel.textContent = "Gender";
form.appendChild(genderLabel);

var genderSelect = document.createElement("select");
genderSelect.className = "form-select mb-3";
genderSelect.setAttribute("id", "gender");
genderSelect.setAttribute("required", true);

var genderOptions = [
  { value: "", text: "Select your gender" },
  { value: "male", text: "Male" },
  { value: "female", text: "Female" },
  { value: "other", text: "Other" }
];

for (var i = 0; i < genderOptions.length; i++) {
  var option = document.createElement("option");
  option.setAttribute("value", genderOptions[i].value);
  option.textContent = genderOptions[i].text;
  genderSelect.appendChild(option);
}

form.appendChild(genderSelect);

// Choice of Food
var foodLabel = document.createElement("label");
foodLabel.className = "form-label h4";
foodLabel.textContent = "Choice of Food (Select at least 2)";
form.appendChild(foodLabel);

var foodChoices = [
  { value: "pizza", text: "Pizza" },
  { value: "burger", text: "Burger" },
  { value: "sushi", text: "Sushi" },
  { value: "pasta", text: "Pasta" },
  { value: "salad", text: "Salad" }
];

for (var i = 0; i < foodChoices.length; i++) {
  var foodDiv = document.createElement("div");
  foodDiv.className = "form-check";

  var foodInput = document.createElement("input");
  foodInput.setAttribute("type", "checkbox");
  foodInput.setAttribute("name", "food[]");
  foodInput.setAttribute("value", foodChoices[i].value);
  foodInput.setAttribute("id", "food" + foodChoices[i].value);

  var foodInputLabel = document.createElement("label");
  foodInputLabel.className = "form-check-label";
  foodInputLabel.setAttribute("for", "food" + foodChoices[i].value);
  foodInputLabel.textContent = foodChoices[i].text;

  foodDiv.appendChild(foodInput);
  foodDiv.appendChild(foodInputLabel);
  form.appendChild(foodDiv);
}

// State
var stateLabel = document.createElement("label");
stateLabel.setAttribute("for", "state");
stateLabel.className = "form-label h4";
stateLabel.textContent = "State";
form.appendChild(stateLabel);

var stateInput = document.createElement("input");
stateInput.setAttribute("type", "text");
stateInput.className = "form-control mb-3";
stateInput.setAttribute("id", "state");
stateInput.setAttribute("required", true);
form.appendChild(stateInput);

// Country
var countryLabel = document.createElement("label");
countryLabel.setAttribute("for", "country");
countryLabel.className = "form-label h4";
countryLabel.textContent = "Country";
form.appendChild(countryLabel);

var countryInput = document.createElement("input");
countryInput.setAttribute("type", "text");
countryInput.className = "form-control mb-3";
countryInput.setAttribute("id", "country");
countryInput.setAttribute("required", true);
form.appendChild(countryInput);

// Submit button
var submitButton = document.createElement("button");
submitButton.setAttribute("type", "submit");
submitButton.className = "btn btn-primary";
submitButton.textContent = "Submit";
form.appendChild(submitButton);

// Append the form to the container
container.appendChild(form);
document.body.appendChild(container);

// Create a table dynamically
var table = document.createElement("table");
table.className = "table table-bordered mt-3";
container.appendChild(table);

// Create the table header
var tableHeader = document.createElement("thead");
table.appendChild(tableHeader);
var headerRow = document.createElement("tr");
tableHeader.appendChild(headerRow);

var headerFields = [
  "First Name",
  "Last Name",
  "Address",
  "Pincode",
  "Gender",
  "Food",
  "State",
  "Country"
];

headerFields.forEach(function (headerText) {
  var headerCell = document.createElement("th");
  headerCell.textContent = headerText;
  headerRow.appendChild(headerCell);
});

// Create a table body
var tableBody = document.createElement("tbody");
table.appendChild(tableBody);

// Add an event listener for form submission
form.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent the form from actually submitting

  // Get form values
  var firstName = form.querySelector("#firstName").value;
  var lastName = form.querySelector("#lastName").value;
  var address = form.querySelector("#address").value;
  var pincode = form.querySelector("#pincode").value;
  var gender = form.querySelector("#gender").value;
  var food = [];
  var foodCheckboxes = form.querySelectorAll('input[name="food[]"]:checked');
  foodCheckboxes.forEach(function (checkbox) {
    food.push(checkbox.value);
  });
  var state = form.querySelector("#state").value;
  var country = form.querySelector("#country").value;

  // Create a new row for the table
  var newRow = tableBody.insertRow();

  // Create cells for each data field
  [firstName, lastName, address, pincode, gender, food.join(", "), state, country].forEach(function (data) {
    var cell = newRow.insertCell();
    cell.textContent = data;
  });

  // Clear the form fields
  form.reset();
});