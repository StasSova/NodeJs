console.log("Console log");
let myForm = document.getElementById("myForm");

const sendDate = (data) => {
  fetch("http://localhost:3000", {
    method: "POST",
    body: JSON.stringify({ data }),
    headers: {
      contentType: "application/json; charset=UTF-8",
    },
  }).then((res) => console.log(res));
};

myForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const formData = new FormData(myForm);
  const data = Object.fromEntries(formData);
  sendDate(data);
  console.log("formData", data);
});
