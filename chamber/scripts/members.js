const url = "https://github.com/sbbaldwi/wdd230/blob/main/chamber/data/members.json";

const directory = document.querySelector('.members_grid');

async function getMembersDataGrid() {
    const response = await fetch(url);
    const data = await response.json();
    displayMembersGrid(data.members);
}
getMembersDataGrid();

const displayMembersGrid = (members) => {
    const sections = directory.querySelectorAll('.section');

    members.forEach((member, index) => {
        const section = sections[index];
        const name = section.querySelector('.name');
        const membership = section.querySelector('.level');
        const image = section.querySelector('.icon');
        const address = section.querySelector('.address');
        const phone = section.querySelector('.phoneNumber');
        const website = section.querySelector('.website');

        name.textContent = `${member.name}`;
        membership.textContent = `${member.level}`;

        image.src = member.icon || 'path/to/placeholder-image.jpg';
        image.alt = member.name || 'Default Alt Text';
        image.setAttribute('src', member.icon);
        image.setAttribute('alt', member.name);
        image.setAttribute('width', '150');
        image.setAttribute('height', 'auto');
        address.textContent = `${member.address}`;
        phone.textContent = `${member.phoneNumber}`;
        website.textContent = `${member.website}`;
        website.setAttribute('href', member.website);
        website.setAttribute('target', '_blank');
    });
};


const second_directory = document.querySelector('.members_list');

async function getMembersDataList() {
    const response = await fetch(url);
    const data = await response.json();
    displayMembersList(data.members);
}
getMembersDataList();

const displayMembersList = (members) => {
    members.forEach((member) => {
        let whole = document.createElement('section');
        let name = document.createElement('p');
        let membership = document.createElement('p');
        let website = document.createElement('a');

        name.textContent = `${member.name}`
        membership.textContent = `${member.level}`
        website.textContent = `${member.website}`;
        website.setAttribute('href', member.website);
        website.setAttribute('target', '_blank');

        whole.appendChild(name);
        whole.appendChild(membership);
        whole.appendChild(website);

        second_directory.appendChild(whole);
    });
};



const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector(".members_grid");


let names = document.querySelectorAll('.name');
let memberships = document.querySelectorAll('.level');
let images = document.querySelectorAll('.image');
let addresses = document.querySelectorAll('.address');
let phones = document.querySelectorAll('.phoneNumber');

gridbutton.addEventListener("click", () => {
    display.classList.add("members_grid");
    display.classList.remove("members_list");


    names.forEach((name) => {
        name.classList.add("dissapear");
    });
    memberships.forEach((level) => {
        level.classList.add("dissapear");
    });
    images.forEach((image) => {
        image.classList.remove("dissapear");
    });
    addresses.forEach((address) => {
        address.classList.remove("dissapear");
    });
    phones.forEach((phoneNumber) => {
        phoneNumber.classList.remove("dissapear");
    });
});

listbutton.addEventListener("click", showList);

function showList() {
    display.classList.add("members_list");
    display.classList.remove("members_grid");

    names.forEach((name) => {
        name.classList.remove("dissapear");
    });
    memberships.forEach((level) => {
        level.classList.remove("dissapear");
    });
    images.forEach((image) => {
        image.classList.add("dissapear");
    });
    addresses.forEach((address) => {
        address.classList.add("dissapear");
    });
    phones.forEach((phoneNumber) => {
        phoneNumber.classList.add("dissapear");
    });
}