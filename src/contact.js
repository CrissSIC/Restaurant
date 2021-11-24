function createContact() {
  const contact = document.createElement("div");
  contact.classList.add("contact");

  const phoneNumber = document.createElement("p");
  phoneNumber.textContent = "Call: 999999999";

  const address = document.createElement("p");
  address.textContent = "Introduce an address here";

  contact.appendChild(phoneNumber);
  contact.appendChild(address);
  return contact;
}

function initializeContact() {
  const main = document.getElementById("main");
  main.textContent = "";
  main.appendChild(createContact());
}

export default initializeContact;
