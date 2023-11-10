const baseURL = "https://sbbaldwin.github.io/wdd230/";
const linksURL = "https://sbbaldwin.github.io/wdd230/data/links.json";

async function getLinks() {
    try {
        const response = await fetch(linksURL);
        const data = await response.json();
        console.log(data);

        displayLinks(data);
    } catch (error) {
        console.error('Error fetching links:', error);
    }
}

getLinks();


function displayLinks(weeks) {
    weeks.forEach((week) => {
        const weekDiv = document.createElement('div');
        weekDiv.classList.add('week');

        const weekHeader = document.createElement('h2');
        weekHeader.textContent = `Week ${week.week}`;

        const linksList = document.createElement('ul');

        week.links.forEach((link) => {
            const listItem = document.createElement('li');
            const anchor = document.createElement('a');
            anchor.textContent = link.title;
            anchor.href = baseURL + link.url;

            listItem.appendChild(anchor);
            linksList.appendChild(listItem);
        });

        weekDiv.appendChild(weekHeader);
        weekDiv.appendChild(linksList);

        document.body.appendChild(weekDiv);
    });
}
