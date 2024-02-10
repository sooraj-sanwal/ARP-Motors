
// Owl Carousel Initialization
$(document).ready(function () {
  var carModelsCarousel = $('#carModelsCarousel');

  carModelsCarousel.owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 3
      },
      1000: {
        items: 5
      }
    }
  });

  // Update main image when carousel item is clicked
  carModelsCarousel.on('click', '.item', function (e) {
    var imageSrc = $(this).data('image');
    $('#mainCarImage').attr('src', imageSrc);
  });
});

// for form validation

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("myForm");
  const nameInput = document.getElementById("name");
  const mobileInput = document.getElementById("mobile");
  const emailInput = document.getElementById("email");
  const vehicleInput = document.getElementById("vehicle");
  const submitButton = document.getElementById("submitButton");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    let isValid = true; // Flag to track overall form validity
    clearErrors(); // Clear any existing error messages

    // Validation for name field
    if (nameInput.value.trim() === "") {
      isValid = false;
      showError("nameError", "Name can't be empty");
    } else if (nameInput.value.length < 3 || nameInput.value.length > 20) {
      isValid = false;
      showError("nameError", "Name should be between 3 and 20 characters");
    }

    // Validation for mobile number field
    const mobileRegex = /^[6-9]\d{9}$/;
    if (!mobileRegex.test(mobileInput.value.trim())) {
      isValid = false;
      showError("mobileError", "Please enter a valid Indian mobile number");
    }

    // Validation for email field
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput.value.trim())) {
      isValid = false;
      showError("emailError", "Please enter a valid email address");
    }

    // Validation for vehicle type field
    if (vehicleInput.value === "") {
      isValid = false;
      showError("vehicleError", "Please select a vehicle type");
    }

    if (isValid) {
      // If all fields are valid, submit the form
      form.submit();
      form.reset(); // Clear the form fields
    }
  });

  function showError(id, message) {
    const errorElement = document.getElementById(id);
    errorElement.textContent = message;
    errorElement.style.color = "red"; // Set error message color to red
  }

  function clearErrors() {
    const errorElements = document.querySelectorAll(".error");
    errorElements.forEach(function (element) {
      element.textContent = "";
    });
  }
});
