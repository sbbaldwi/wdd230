const url = "./data/members.json";
const cards = document.querySelector('#cards');

async function getMembersData() {
    try {
        const response = await fetch(url);
        const data = await response.json();
        displayMembers(data.members);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

function displayMembers(members) {
    members.forEach((member) => {
        const card = document.createElement('section');

        member.links.forEach((link) => {
            const linkDiv = document.createElement('div');
            linkDiv.classList.add('link');

            const name = document.createElement('h2');
            name.textContent = link.name;

            const address = document.createElement('p');
            address.textContent = `Address: ${link.address}`;

            const phone = document.createElement('p');
            phone.textContent = `Phone: ${link['phone number']}`;

            const website = document.createElement('a');
            website.textContent = 'Website';
            website.href = link['website url'];
            website.target = '_blank';

            const icon = document.createElement('img');
            icon.src = link.icon;
            icon.alt = link.name + ' Icon';

            linkDiv.appendChild(name);
            linkDiv.appendChild(address);
            linkDiv.appendChild(phone);
            linkDiv.appendChild(website);
            linkDiv.appendChild(icon);

            card.appendChild(linkDiv);
        });

        cards.appendChild(card);
    });
}

getMembersData();

