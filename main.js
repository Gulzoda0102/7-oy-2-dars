// const box = document.querySelector("#ota")

// function renderUser (url){
//     box.innerHTML = "";

// fetch(url)
// .then(lavash => lavash.json())
// .then(lavashKeldi => {

//     lavashKeldi.map(obyektlar => {
//         box.innerHTML += `
//         <li class="w-[300px] bg-pink-400 rounded m-4 p-8 flex flex-col items-center  ">
//         <h2>${obyektlar.name}</h2>
//         <p>${obyektlar.address.street}</p>
//         <p>${obyektlar.email}</p>
//         <p>${obyektlar.phone}</p>
//         <p>${obyektlar.website}</p>
//         </li>
//         `
//     })

// })
// .catch(xato => {
//     console.log("Gamburger keldi");
    
// })
// .finally(()=> {
//     console.log("Ogohlantirish");
    
// })

// }
// renderUser("https://jsonplaceholder.typicode.com/users")









const box = document.querySelector("#ota"); 
const searchInput = document.querySelector("#search"); 
const darkModeBtn = document.querySelector("#darkMode"); 
let users = [];


function renderUser(url) {
    fetch(url)
        .then((res) => res.json())
        .then((data) => {
            users = data;
            displayUsers(users); 
        })
        .catch(() => console.log("Xatolik yuz berdi!"));
}


function displayUsers(data) {
    box.innerHTML = "";
    data.forEach((user) => {
        box.innerHTML += `
      <li class="w-[300px] bg-pink-400 rounded-xl m-4 p-8 flex flex-col items-center shadow-lg">
            <h2 class="text-xl font-bold">${user.name}</h2>
            <p>${user.address.street}, ${user.address.city}</p>
            <p>${user.email}</p>
            <p>${user.phone}</p>
            <p>${user.website}</p>
        </li>
        `;
    });
}


searchInput.addEventListener("input", (e) => {
    const searchValue = e.target.value.toLowerCase();
    const filteredUsers = users.filter((user) =>
        user.name.toLowerCase().includes(searchValue)
    );
    displayUsers(filteredUsers);
});


darkModeBtn.addEventListener("click", () => {
    document.documentElement.classList.toggle("dark"); 
});

const darkModeBtnn = document.querySelector("#dark-mode-toggle");
const body = document.body;


if (localStorage.getItem("darkMode") === "enabled") {
    body.classList.add("dark-mode");
}


darkModeBtn.addEventListener("click", () => {
    body.classList.toggle("dark-mode");

 
    if (body.classList.contains("dark-mode")) {
        localStorage.setItem("darkMode", "enabled");
    } else {
        localStorage.setItem("darkMode", "disabled");
    }
});


renderUser("https://jsonplaceholder.typicode.com/users");
