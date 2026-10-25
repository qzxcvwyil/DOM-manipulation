const userProfile = {
  name: "Madina",
  birthYear: 2007,
  isDeveloper: true,
  hobbies: ["reading", "gaming", "music"]
};

let info = document.getElementById("profileInfo");

function showProfile() {
  let year = new Date().getFullYear();
  let age = year - userProfile.birthYear;
  let months = age * 12;
  let count = userProfile.hobbies.length;

  console.log("Age: " + age);
  console.log("Months: " + months);
  console.log("Hobbies: " + count);

  info.textContent = "Name: " + userProfile.name + ", Age: " + age + ", Months: " + months + ", Hobbies: " + count;
}

showProfile();

let form = document.getElementById("profileForm");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  userProfile.name = document.getElementById("username").value;
  userProfile.birthYear = Number(document.getElementById("birthYear").value);
  showProfile();
  info.classList.add("active");
});

let list = document.getElementById("hobbyList");
let input = document.getElementById("newItem");

for (let i = 0; i < userProfile.hobbies.length; i++) {
  let li = document.createElement("li");
  li.textContent = userProfile.hobbies[i];
  list.appendChild(li);
}

document.getElementById("addBtn").addEventListener("click", () => {
  if (input.value !== "") {
    let li = document.createElement("li");
    li.textContent = input.value;
    list.appendChild(li);
    input.value = "";
  }
});

document.getElementById("removeBtn").addEventListener("click", () => {
  if (list.lastElementChild) {
    list.lastElementChild.remove();
  }
});