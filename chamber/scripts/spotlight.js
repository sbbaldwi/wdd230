// Function to fetch JSON data
async function fetchMemberData() {
    try {
        const response = await fetch('./chamber/data/members.json');
        const data = await response.json();
        return data.members;
    } catch (error) {
        console.error('Error fetching data:', error);
        return [];
    }
}

function getRandomCompanies(members, min, max) {
    const filteredMembers = members.filter(member => member.membershipLevel === 'silver' || member.membershipLevel === 'gold');
    const count = Math.min(Math.floor(Math.random() * (max - min + 1)) + min, filteredMembers.length);
    const randomIndexes = new Set();

    while (randomIndexes.size < count) {
        randomIndexes.add(Math.floor(Math.random() * filteredMembers.length));
    }

    return Array.from(randomIndexes).map(index => filteredMembers[index]);
}

function displayCompanySpotlight(members) {
    const section3 = document.getElementById('section3');

    members.forEach(member => {
        const companyDiv = document.createElement('div');
        companyDiv.classList.add('company-info');

        const name = document.createElement('p');
        name.textContent = `Company: ${member.name}`;
        companyDiv.appendChild(name);

        const img = document.createElement('img');
        img.src = member.imageURL;
        img.style.maxWidth = '250px'; 
        companyDiv.appendChild(img);

        const level = document.createElement('p');
        level.textContent = `Membership Level: ${member.membershipLevel}`;
        companyDiv.appendChild(level);

        section3.appendChild(companyDiv);
    });
}

fetchMemberData()
    .then(members => {
        const spotlightMembers = getRandomCompanies(members, 2, 3);
        displayCompanySpotlight(spotlightMembers);
    });
