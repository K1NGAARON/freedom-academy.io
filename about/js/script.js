const target = document.querySelector('#team');
const team = [
    {
        name: 'Arno Vanmassenhove',
        position: 'CEO & Founder',
        intro: 'Creates content, helps clients and leads the business.',
        img : '/about/img/arno.jpeg',
    },
    {
        name: 'Marie Ameele',
        position: 'Community Manager',
        intro: 'Manages client communication, and organizes our live events.',
        img: '/about/img/marie.jpeg',
    },
    {
        name: 'Aaron Gerard',
        position: 'Site & Ads Expert',
        intro: 'Builds websites and manages online advertising campaigns.',
        img: '/about/img/aaron_gerard.jpeg',
    },
    {
        name: 'Tim Denhaerinck',
        position: 'Video Editor',
        intro: 'Creates engaging video content for social media platforms',
        img: '/about/img/tim.jpeg',
    }
];

function createTeam() {
    for (let i = 0; i < team.length; i++) {
        const template = `
            <div class="wrapper team-wrapper">
                <div class="item">
                    <img src="${team[i].img}" alt="${team[i].name}">
                </div>
                <div class="item"> 
                    <h5>
                        ${team[i].name}
                    </h5>
                    <p class="position">
                        ${team[i].position}
                    </p>
                    <p class="intro">
                        ${team[i].intro}
                    </p>
                </div>
            </div>
        `;

        target.insertAdjacentHTML("beforeend", template);
    };
};

$(document).ready(createTeam);