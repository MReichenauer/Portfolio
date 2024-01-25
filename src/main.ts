import emailjs from 'emailjs-com';
import './style.css';

// initiate with my key (public)
emailjs.init("o8R8UK_2pAso8ORoO");

function sendEmail() {
    const name = (<HTMLInputElement>document.getElementById('name')).value;
    const email = (<HTMLInputElement>document.getElementById('email')).value;
    const message = (<HTMLTextAreaElement>document.getElementById('message')).value;

    // my service and template
    emailjs.send("service_b2g5mnx", "template_xa36h5j", {
        to_name: "Max Reichenauer", 
        from_name: name,
        from_email: email,
        message: message,
    })
    .then(response => {
        console.log('Email sent successfully:', response);
      
        // Clear form fields
        (<HTMLInputElement>document.getElementById('name')).value = '';
        (<HTMLInputElement>document.getElementById('email')).value = '';
        (<HTMLTextAreaElement>document.getElementById('message')).value = '';
      
        // Set popup text
        const popUpText = document.getElementById('popUpText');
        if (popUpText) {
          popUpText.textContent = "Email sent successfully!";
        }
      
        // Display the popup
        const popUp = document.getElementById('myPopUp');
        if (popUp) {
          popUp.style.display = 'block';
        }
      
        // Hide the popup after 5 sec
        setTimeout(() => {
          if (popUp) {
            popUp.style.display = 'none';
          }
        }, 5000);
      })
      .catch(error => {
        console.error('Error sending email:', error);
      });
    }

// Send email click event
const sendButton = document.getElementById('sendButton');
if (sendButton) {
    sendButton.addEventListener('click', sendEmail);
}

const navMenu = document.querySelector("#navMenu");
const navOptions = document.querySelector("#navOption")

navMenu?.addEventListener("click", () => {
  navMenu.classList.toggle("active");
  navMenu.classList.toggle("show");
  navOptions?.classList.toggle("hide");
  navOptions?.classList.toggle("navOptions");
})

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

const startBtn = document.querySelector("#startBtn")

startBtn?.addEventListener("click", () => {
  scrollToTop();
})

const startBigBtn = document.querySelector("#startBigBtn")

startBigBtn?.addEventListener("click", () => {
  scrollToTop();
})



