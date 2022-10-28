"use strict";
// Users
const account1 = {
    image: "./img/aden.jpg",
    fName: "Abbos Komilov",
    age: 23,
    techs: ["HTML", "CSS", "Tailwind", "Javascript"],
    projects: 11,
    gender: "boy",
};
const account2 = {
    image: "./img/aisha.jpg",
    fName: "AIsha Komilova",
    age: 19,
    techs: ["HTML", "CSS", "Bootstrap"],
    projects: 8,
    gender: "girl",
};
const account3 = {
    image: "./img/arthur.jpg",
    fName: "Artur Grigoryan",
    age: 26,
    techs: ["HTML", "CSS", "Tailwind", "Javascript"],
    projects: 24,
    gender: "boy",
};
const account4 = {
    image: "./img/cristian.jpg",
    fName: "Karimjon Rahimov",
    age: 23,
    techs: ["HTML", "CSS"],
    projects: 3,
    gender: "boy",
};
const account5 = {
    image: "./img/cruz.jpg",
    fName: "Kozimjon Raimov",
    age: 21,
    techs: ["HTML", "CSS", "Bootstrap", "Sass"],
    projects: 13,
    gender: "boy",
};
const account6 = {
    image: "./img/drake.jpg",
    fName: "Abdulla Abdiyev",
    age: 24,
    techs: ["HTML", "CSS"],
    projects: 6,
    gender: "boy",
};
const account7 = {
    image: "./img/griffin.jpg",
    fName: "Arslon Suyarov",
    age: 23,
    techs: ["HTML", "CSS"],
    projects: 3,
    gender: "boy",
};
const account8 = {
    image: "./img/kady.jpg",
    fName: "Hafiza Rasulova",
    age: 22,
    techs: ["HTML", "CSS", "Tailwind", "Javascript"],
    projects: 28,
    gender: "girl",
};
const account9 = {
    image: "./img/nikita.jpg",
    fName: "Namuna Yuldasheva",
    age: 19,
    techs: ["HTML", "CSS", "Bootstrap", "Tailwind"],
    projects: 26,
    gender: "girl",
};

const accounts = [
    account1,
    account2,
    account3,
    account4,
    account5,
    account6,
    account7,
    account8,
    account9,
];

// O'zgaruvchilar
const elUser = document.querySelector("#user");
const elForm = document.querySelector("#form");
const elTotal = document.querySelector("#total");
const elAllBtn = document.querySelector("#all-btn");
const elBoyBtn = document.querySelector("#boy-btn");
const elGirlBtn = document.querySelector("#girl-btn");

// Craete users item
accounts.forEach(function (item) {
    const { image, fName, age, techs, projects } = item;
    
    elUser.innerHTML += `
    <li class="flex flex-col justify-center items-center bg-ut-green-item py-5 rounded-2xl">
    <img class="w-24 h-24 rounded-full mb-4" src="${image}" alt="${fName}">
    <h3 id="name" class="text-ut-blue-light font-bold mb-1">${fName}</h3>
    <p class="mb-1"><span class="text-yellow-500">Yosh:</span> <span class="age">${age}</span></p>  
    <p id="techs" class="text-sm mb-1">${techs}</p>
    <p><span class="text-gray-400 font-medium">Qilgan proektlar soni:</span> <span class="age">${projects}</span></p>
    </li>
    `;
});

// O'quvchilar umumiy sonini chiqarish
elTotal.textContent = accounts.length;

// Ism bilan qidiruv
const searchName = function() {
    const elName = document.querySelectorAll("#name");
    elForm["name-input"].addEventListener("input", function () {
        const inputNameValue = form["name-input"].value;
        elName.forEach(function (item) {
            if (item.textContent.toLowerCase().includes(inputNameValue)) {
                item.parentElement.classList.remove("hidden");
            } else {
                item.parentElement.classList.add("hidden");
            }
        });
    });
}
searchName()

// techs bilan qidiruv
const searchTech = function(){
    const elTechs = document.querySelectorAll("#techs");
    elForm["techs-input"].addEventListener("input", function () {
        const inputTechsValue = form["techs-input"].value;
        elTechs.forEach(function (item) {
            if (item.textContent.toLowerCase().includes(inputTechsValue)) {
                item.parentElement.classList.remove("hidden");
            } else {
                item.parentElement.classList.add("hidden");
            }
        });
    });
}
searchTech()

// Inputlarni bo'shatish
const inputValDel = function(){
    form["name-input"].value = ''
    form["techs-input"].value = ''
}

// Bollarni saralash
elBoyBtn.addEventListener("click", function () {
    elUser.innerHTML = "";
    accounts.map((account) => {
        if (account.gender == "boy") {
            const { image, fName, age, techs, projects } = account;
            elUser.innerHTML += `
            <li class="flex flex-col justify-center items-center bg-ut-green-item py-5 rounded-2xl">
            <img class="w-24 h-24 rounded-full mb-4" src="${image}" alt="${fName}">
            <h3 id="name" class="text-ut-blue-light font-bold mb-1">${fName}</h3>
            <p class="mb-1"><span class="text-yellow-500">Yosh:</span> <span class="age">${age}</span></p>  
            <p id="techs" class="text-sm mb-1">${techs}</p>
            <p><span class="text-gray-400 font-medium">Qilgan proektlar soni:</span> <span class="age">${projects}</span></p>
            </li>
            `;
        }
    });
    searchName()
    searchTech()
    inputValDel()
});

// Qizlarni saralash
elGirlBtn.addEventListener("click", function () {
    elUser.innerHTML = "";
    accounts.map((account) => {
        if (account.gender == "girl") {
            const { image, fName, age, techs, projects } = account;
            elUser.innerHTML += `
            <li class="flex flex-col justify-center items-center bg-ut-green-item py-5 rounded-2xl">
            <img class="w-24 h-24 rounded-full mb-4" src="${image}" alt="${fName}">
            <h3 id="name" class="text-ut-blue-light font-bold mb-1">${fName}</h3>
            <p class="mb-1"><span class="text-yellow-500">Yosh:</span> <span class="age">${age}</span></p>  
            <p id="techs" class="text-sm mb-1">${techs}</p>
            <p><span class="text-gray-400 font-medium">Qilgan proektlar soni:</span> <span class="age">${projects}</span></p>
            </li>
            `;
        }
    });
    searchName()
    searchTech()
    inputValDel()
});

// Hammasini chiqarish
elAllBtn.addEventListener("click", function () {
    elUser.innerHTML = "";
    accounts.map((account) => {
        const { image, fName, age, techs, projects } = account;
        elUser.innerHTML += `
        <li class="flex flex-col justify-center items-center bg-ut-green-item py-5 rounded-2xl">
        <img class="w-24 h-24 rounded-full mb-4" src="${image}" alt="${fName}">
        <h3 id="name" class="text-ut-blue-light font-bold mb-1">${fName}</h3>
        <p class="mb-1"><span class="text-yellow-500">Yosh:</span> <span class="age">${age}</span></p>  
        <p id="techs" class="text-sm mb-1">${techs}</p>
        <p><span class="text-gray-400 font-medium">Qilgan proektlar soni:</span> <span class="age">${projects}</span></p>
        </li>
        `;
    });
    searchName()
    searchTech()
    inputValDel()
});


