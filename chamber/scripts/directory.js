const directoryContainer = document.getElementById('directory-container');
const gridViewBtn = document.getElementById('grid-view');
const listViewBtn = document.getElementById('list-view');

async function getMembers() {
    const response = await fetch('data/members.json');
    const data = await response.json();
    displayMembers(data.members);
}

function displayMembers(members) {
    directoryContainer.innerHTML = '';

    members.forEach(member => {
        const memberCard = document.createElement('div');
        memberCard.classList.add('member-card');

        memberCard.innerHTML = `
            <img src="images/${member.image}" alt="${member.name}">
            <h3>${member.name}</h3>
            <p>Address: ${member.address}</p>
            <p>Phone: ${member.phone}</p>
            <p>Website: <a href="${member.website}" target="_blank">${member.website}</a></p>
            <p>Membership Level: ${member.membershipLevel}</p>`;

        directoryContainer.appendChild(memberCard);
    });
}

gridViewBtn.addEventListener('click', () => {
    directoryContainer.classList.add('directory-grid');
    directoryContainer.classList.remove('directory-list');
});

listViewBtn.addEventListener('click', () => {
    directoryContainer.classList.add('directory-list');
    directoryContainer.classList.remove('directory-grid');
});

getMembers();