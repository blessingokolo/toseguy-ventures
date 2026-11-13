console.log("JavaScript is connected!");
// CUSTOMER ENQUIRY FORM

const enquiryForm = document.getElementById("enquiryForm");

enquiryForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = enquiryForm.querySelector('input[type="text"]').value;
    const phone = enquiryForm.querySelector('input[type="tel"]').value;
    const email = enquiryForm.querySelector('input[type="email"]').value;
    const product = enquiryForm.querySelector("select").value;
    const quantity = enquiryForm.querySelector('input[type="number"]').value;
    const message = enquiryForm.querySelector("textarea").value;

    const whatsappMessage =
        `Hello Toseguy Ventures!

I would like to request a quotation.

Name: ${name}
Phone: ${phone}
Email: ${email}
Product: ${product}
Quantity: ${quantity}
Additional Information: ${message}`;

    const whatsappURL =
        "https://wa.me/2348111973288?text=" +
        encodeURIComponent(whatsappMessage);

    window.open(whatsappURL, "_blank");

});
