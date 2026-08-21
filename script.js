// Appointment Form

const appointmentForm = document.getElementById("appointmentForm");

appointmentForm.addEventListener("submit", function (event) {

    // Page ko refresh hone se rokta hai
    event.preventDefault();

    // Form ki values lena
    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const service = document.getElementById("service").value;
    const date = document.getElementById("date").value;

    // Check karna ke required fields filled hain
    if (name === "" || phone === "" || service === "" || date === "") {

        alert("Please fill in all required fields.");

        return;
    }

    // Success message
    alert(
        "Thank you, " + name +
        "! Your appointment for " +
        service +
        " has been submitted successfully."
    );

    // Form clear karna
    appointmentForm.reset();

    // ===============================
// WHATSAPP APPOINTMENT BOOKING
// ===============================

const appointmentForm =
    document.getElementById("appointmentForm");

document.getElementById('appointmentForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Form values
    const name = document.getElementById('custName').value;
    const service = document.getElementById('custService').value;
    const date = document.getElementById('custDate').value;

    // Salon WhatsApp Number
    const phoneNumber = "923133773297";

    // Formatted Message
    const message = `*New Booking Request - Queens Beauty Salon*%0A%0A` +
                    `*Name:* ${encodeURIComponent(name)}%0A` +
                    `*Service:* ${encodeURIComponent(service)}%0A` +
                    `*Date & Time:* ${encodeURIComponent(date)}`;

    // Open WhatsApp
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappURL, '_blank');
}); document.getElementById('appointmentForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Form values
    const name = document.getElementById('custName').value;
    const service = document.getElementById('custService').value;
    const date = document.getElementById('custDate').value;

    // Salon WhatsApp Number
    const phoneNumber = "923133773297";

    // Formatted Message
    const message = `*New Booking Request - Queens Beauty Salon*%0A%0A` +
                    `*Name:* ${encodeURIComponent(name)}%0A` +
                    `*Service:* ${encodeURIComponent(service)}%0A` +
                    `*Date & Time:* ${encodeURIComponent(date)}`;

    // Open WhatsApp
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappURL, '_blank');
}); 

}) 