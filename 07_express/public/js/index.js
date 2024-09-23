const form = document.getElementById("newProduct");

const sendData = (data) => {
  fetch("http://localhost:3000/product", {
    method: "post",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((data) => data.json())
    .then((res) => {
      console.log("Response", res);
    })
    .catch(() => console.error("Error"));
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const form_data = new FormData(e.target);
  const data = Object.fromEntries(form_data);
  sendData(data);
});
