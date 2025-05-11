function redirectTo(page) {
  window.location.href = page;
}

//REGISTRATION LOGIC
document.addEventListener("DOMContentLoaded", function () {
  const empIdInput = document.getElementById("empId");
  const form = document.getElementById("registerForm");
  const ackSection = document.getElementById("acknowledgement");
  const ackEmpId = document.getElementById("ackEmpId");
  const ackName = document.getElementById("ackName");
  const ackEmail = document.getElementById("ackEmail");

  if (empIdInput && form) {
    const generateEmployeeId = () => {
      return Math.floor(1000000 + Math.random() * 9000000);
    };

    const generatedId = generateEmployeeId();
    empIdInput.value = generatedId;

    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const password = document.getElementById("password").value;
      const confirmPassword = document.getElementById("confirmPassword").value;

      if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return;
      }

      ackEmpId.textContent = generatedId;
      ackName.textContent = `${document.getElementById("firstName").value} ${
        document.getElementById("lastName").value
      }`;
      ackEmail.textContent = document.getElementById("email").value;

      ackSection.classList.remove("hidden");
      form.reset();

      empIdInput.value = generatedId;
    });
  }
});

//LOGIN LOGIC
const loginForm = document.getElementById("loginForm");

if (loginForm) {
  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const empId = document.getElementById("loginEmpId").value.trim();
    const password = document.getElementById("loginPassword").value.trim();

    if (empId === "" || password === "") {
      alert("Please fill in all fields.");
      return;
    }
    alert("Employee Registration Successful");
    window.location.href = "index.html";
  });
}


// JS: Highlight active link
document.addEventListener('DOMContentLoaded', () => {
  const links = document.querySelectorAll('.sidebar nav ul li a');
  const currentPage = window.location.pathname.split('/').pop(); // e.g. "dashboard.html"

  links.forEach(link => {
    const linkPage = link.getAttribute('href');
    if (linkPage === currentPage) {
      link.classList.add('active');
    }
  });
});


function toggleDropdown(menuId) {
  const dropdown = document.getElementById(menuId);
  dropdown.classList.toggle("open");
}

document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll(".dropdown-menu a");
  const currentPage = window.location.pathname.split("/").pop();

  links.forEach(link => {
    const linkPage = link.getAttribute("href");
    if (linkPage === currentPage) {
      link.classList.add("active");

      // Also expand the parent dropdown
      const parentDropdown = link.closest(".dropdown-menu");
      if (parentDropdown) {
        parentDropdown.classList.add("open");
      }
    }
  });
});