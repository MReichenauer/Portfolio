import emailjs from 'emailjs-com';
import './style.css';

// initiate with my key (public)
emailjs.init("o8R8UK_2pAso8ORoO");

function sendEmail() {
  const nameInput = document.getElementById('name') as HTMLInputElement;
  const emailInput = document.getElementById('email') as HTMLInputElement;
  const messageInput = document.getElementById('message') as HTMLTextAreaElement;

  // Get values from input fields and trim whitespace
  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const message = messageInput.value.trim();
  
      // Validate input fields
      if (name === '' || email === '' || message === '') {
          alert('Please fill in all fields: Name, Email, and Message.');
          return;
      }
  
      // Validate email format
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(email)) {
          alert('Please enter a valid email address.');
          return;
      }

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
          console.log("work?");
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

// Toggle classes on nav
const navMenu = document.querySelector("#navMenu");
const navOptions = document.querySelector("#navOption")

navMenu?.addEventListener("click", () => {
  navMenu.classList.toggle("active");
  navMenu.classList.toggle("show");
  navOptions?.classList.toggle("hide");
  navOptions?.classList.toggle("navOptions");
})

// Scroll to top function for start buttons
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

// Event handler for hamburger nav
const startBtn = document.querySelector("#startBtn")
const internShipBtn = document.getElementById("internShipBtn");
const skillsBtn = document.getElementById("skillsBtn");
const contactsBtn = document.getElementById("contactsBtn");
const contactMeBtn = document.getElementById("contactMeBtn");

startBtn?.addEventListener("click", () => {
  scrollToTop();
})

internShipBtn?.addEventListener("click", () => {
  window.location.href = "#internShip";
});

skillsBtn?.addEventListener("click", () => {
  window.location.href = "#skills";
});

contactsBtn?.addEventListener("click", () => {
  window.location.href = "#contact";
});

contactMeBtn?.addEventListener("click", () => {
  window.location.href = "#contactMe";
});

// Event handler for big nav
const startBigBtn = document.querySelector("#startBigBtn")
const internShipBigBtn = document.getElementById("internShipBigBtn");
const skillsBigBtn = document.getElementById("skillsBigBtn");
const contactsBigBtn = document.getElementById("contactsBigBtn");
const contactMeBigBtn = document.getElementById("contactMeBigBtn");

startBigBtn?.addEventListener("click", () => {
  scrollToTop();
})

internShipBigBtn?.addEventListener("click", () => {
  window.location.href = "#internShip";
});

skillsBigBtn?.addEventListener("click", () => {
  window.location.href = "#skills";
});

contactsBigBtn?.addEventListener("click", () => {
  window.location.href = "#contact";
});

contactMeBigBtn?.addEventListener("click", () => {
  window.location.href = "#contactMe";
});

