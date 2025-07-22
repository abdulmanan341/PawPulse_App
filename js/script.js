document.addEventListener("DOMContentLoaded", () => {
  const signUpButton = document.getElementById("sign-up"); // for signing up
  const emailInput = document.querySelector(".search");

  signUpButton.addEventListener("click", () => {
    const email = emailInput.value.trim();
    const inputValidation =
      email === "" ? "Enter a valid email!" : "Successfully sign up!";
    alert(inputValidation);
    emailInput.value = "";
  });

  const subscribeButton = document.getElementById("ghost"); // for subscribing
  const subscribeInput = document.getElementById("input");

  subscribeButton.addEventListener("click", () => {
    const subscribeEmail = subscribeInput.value.trim();
    const subscribeValidation =
      subscribeEmail === ""
        ? "Enter a valid email!"
        : "Successfully subscribed!";
    alert(subscribeValidation);
    subscribeInput.value = "";
  });

  document
    .querySelectorAll(".title, .disc, .card-title, .discp") // for text animation
    .forEach((text, index) => {
      setTimeout(() => {
        text.classList.add("animate-text");
      }, index * 100);
    });

  document
    .querySelectorAll(".navbar ul li a") // navbar activeness
    .forEach((link) => {
      link.addEventListener("click", () => {
        document.querySelectorAll(".navbar ul li a").forEach((l) => {
          l.classList.remove("active");
        });
        link.classList.add("active");
      });
    });

  const navBar = document.querySelector(".navbar"); // for hamburger activeness
  document.getElementById("hamburger").addEventListener("click", () => {
    navBar.classList.toggle("active");
  });
});
