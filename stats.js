"use strict";
// Users
const account1 = {
    image: "./img/aden.jpg",
    fName: "Abbos Komilov",
    age: 23,
    techs: ["HTML", "CSS", "Tailwind", "Javascript"],
    projects: 21,
    gender: "male",
    active: true
};
const account2 = {
    image: "./img/aisha.jpg",
    fName: "AIsha Komilova",
    age: 19,
    techs: ["HTML", "CSS", "Bootstrap"],
    projects: 8,
    gender: "female",
    active: false
};
const account3 = {
    image: "./img/arthur.jpg",
    fName: "Artur Grigoryan",
    age: 56,
    techs: ["HTML", "CSS", "Tailwind", "Javascript"],
    projects: 24,
    gender: "male",
    active: true
};
const account4 = {
    image: "./img/cristian.jpg",
    fName: "Karimjon Rahimov",
    age: 33,
    techs: ["HTML", "CSS"],
    projects: 3,
    gender: "male",
    active: false
};
const account5 = {
    image: "./img/cruz.jpg",
    fName: "Kozimjon Raimov",
    age: 27,
    techs: ["HTML", "CSS", "Bootstrap", "Sass"],
    projects: 13,
    gender: "male",
    active: true
};
const account6 = {
    image: "./img/drake.jpg",
    fName: "Abdulla Abdiyev",
    age: 24,
    techs: ["HTML", "CSS"],
    projects: 6,
    gender: "male",
    active: true
};
const account7 = {
    image: "./img/griffin.jpg",
    fName: "Arslon Suyarov",
    age: 23,
    techs: ["HTML", "CSS"],
    projects: 3,
    gender: "male",
    active: false
};
const account8 = {
    image: "./img/kady.jpg",
    fName: "Hafiza Rasulova",
    age: 22,
    techs: ["HTML", "CSS", "Tailwind", "Javascript"],
    projects: 28,
    gender: "female",
    active: true
};
const account9 = {
    image: "./img/nikita.jpg",
    fName: "Namuna Yuldasheva",
    age: 19,
    techs: ["HTML", "CSS", "Bootstrap", "Tailwind"],
    projects: 26,
    gender: "female",
    active: true
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

// Darsdagi faollik
const elTbody = document.querySelector('#tbody')

accounts.map((account)=>{
    if(account.active){
        elTbody.innerHTML+= `
        <tr class="border border-white/40 bg-emerald-700">
        <td id="name" class="border-r px-5 py-1">${account.fName}</td>
        <td id="active" class="text-end px-5 py-1">Ha</td>
        </tr>
        `
    }else{
        elTbody.innerHTML+= `
        <tr class="border border-white/40 bg-red-600/40">
        <td id="name" class="border-r px-5 py-1">${account.fName}</td>
        <td id="active" class="text-end px-5 py-1">Yo'q</td>
        </tr>
        `
    }
})

// Diagramma yasash

const male = accounts.filter(function checkAdult(acc) {
    return acc.gender == "male";
});

const female = accounts.filter(function checkAdult(acc) {
    return acc.gender == "female";
});

const dataGender = {
    labels: ['Male', 'Female'],
    datasets: [{
        label: 'Gender',
        data: [male.length, female.length],
        backgroundColor: [
            'rgba(255, 26, 104, 0.2)',
            'rgba(54, 162, 235, 0.2)',
        ],
        borderColor: [
            'rgba(255, 26, 104, 1)',
            'rgba(54, 162, 235, 1)',
        ],
        borderWidth: 1
    }]
};

// config 
const configGender = {
    type: 'pie',
    data: dataGender,
    options: {
    }
};

// render init block
const myChart = new Chart(
    document.getElementById('myChart'),
    configGender
    );

    // Yosh diagramma
    const junior = accounts.filter(function checkAdult(acc) {
        return acc.age < 20
    });
    
    const midlle = accounts.filter(function checkAdult(acc) {
        return acc.age > 20 && acc.age < 50
    });

    const old = accounts.filter(function checkAdult(acc) {
        return acc.age > 50
    });
    
    const dataAge = {
        labels: ['Junior', 'Midlle', 'Old'],
        datasets: [{
            label: 'Age',
            data: [junior.length, midlle.length, old.length],
            backgroundColor: [
                'rgba(255, 26, 104, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
              ],
              borderColor: [
                'rgba(255, 26, 104, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
              ],
            borderWidth: 1
        }]
    };
    
    // config 
    const configAge = {
        type: 'pie',
        data: dataAge,
        options: {
        }
    };
    
    // render init block
    const myCharts = new Chart(
        document.getElementById('myCharts'),
        configAge
        );
        
        