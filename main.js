// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });

    // Close mobile nav after clicking a link
    if (window.innerWidth < 1024) {
      // Only for screens smaller than lg breakpoint
      document.getElementById("nav-content").classList.add("hidden");
    }
  });
});

// Toggle mobile navigation
const navToggle = document.getElementById("nav-toggle");
const navContent = document.getElementById("nav-content");

navToggle.addEventListener("click", function () {
  navContent.classList.toggle("hidden");
});

// Update current year in footer
document.getElementById("current-year").textContent = new Date().getFullYear();

// Handle contact form submission (client-side only for this HTML/JS example)
const contactForm = document.getElementById("contact-form");
const formResponse = document.getElementById("form-response");

contactForm.addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent default form submission

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  // In a real application, you would send this data to your PHP backend.
  // Example using fetch API (requires a backend endpoint)
  /*
            fetch('your-php-script.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: new URLSearchParams({
                    name: name,
                    email: email,
                    message: message
                })
            })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    formResponse.textContent = 'Message sent successfully! Thank you.';
                    formResponse.classList.remove('text-red-600');
                    formResponse.classList.add('text-green-600');
                    contactForm.reset(); // Clear the form
                } else {
                    formResponse.textContent = 'Failed to send message: ' + data.error;
                    formResponse.classList.remove('text-green-600');
                    formResponse.classList.add('text-red-600');
                }
            })
            .catch(error => {
                console.error('Error:', error);
                formResponse.textContent = 'An error occurred. Please try again later.';
                formResponse.classList.remove('text-green-600');
                formResponse.classList.add('text-red-600');
            });
            */

  // For this example, we'll just simulate success after a delay
  formResponse.textContent = "Sending message...";
  formResponse.classList.remove("text-red-600", "text-green-600");
  formResponse.classList.add("text-gray-700");

  setTimeout(() => {
    formResponse.textContent = "Message sent successfully! (Simulated)";
    formResponse.classList.remove("text-red-600", "text-gray-700");
    formResponse.classList.add("text-green-600");
    contactForm.reset();
  }, 1500);
});
