document.addEventListener(
    "DOMContentLoaded",
    function submitfire() {

      const formulario = document.getElementById("form-finsweet")
      const form = document
        .getElementById("submit-form")
        .addEventListener("mousedown", function (event) {
          event.preventDefault();
          var email = document.getElementById("email").value;
          var name = document.getElementById("name").value;
          var msg =  document.getElementById("message").value;

          if (email.value === "") {
            alert("Please enter your email");
            return false;
          }
  
          if (name.value === "") {
            alert("Please enter your name");
            return false;
          }

          if (msg.value === "") {
            alert("Please enter your message");
            return false;
          }
  
          const emailVálido = email => {
          return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
          }
  
          if (emailVálido(email.value)) {
          alert("Please enter a valid email");
          email.focus();
          return false;
          }

          formulario.submit();
          alert("Message sent succesfully");
          });	  
        });
  