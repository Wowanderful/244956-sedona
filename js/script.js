  var link = document.querySelector(".big-button-brown");
  var popup = document.querySelector(".modal-hide");
  var checkin = popup.querySelector("[name=check-in-date]");
  var checkout = popup.querySelector("[name=check-out-date]");
  var form = popup.querySelector("form");

  link.addEventListener("click", function (evt) {
    (evt).preventDefault();
    popup.classList.toggle("modal-open");

    checkin.focus();
  });

  form.addEventListener("submit", function(evt) {
    if (!checkin.value || !checkout.value) {
      evt.preventDefault();
      console.log("Необходимо заполнить дату приезда и отъезда");
    }
      })


