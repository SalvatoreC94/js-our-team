// MILESTONE 0: Creare l'array di oggetti con le informazioni fornite.
const teamMembers = [
    {
        name: "Wayne Barnett",
        role: "Founder & CEO",
        photo: "wayne-barnett-founder-ceo.jpg"
    },
    {
        name: "Angela Caroll",
        role: "Chief Editor",
        photo: "angela-caroll-chief-editor.jpg"
    },
    {
        name: "Walter Gordon",
        role: "Office Manager",
        photo: "walter-gordon-office-manager.jpg"
    },
    {
        name: "Angela Lopez",
        role: "Social Media Manager",
        photo: "angela-lopez-social-media-manager.jpg"
    },
    {
        name: "Scott Estrada",
        role: "Developer",
        photo: "scott-estrada-developer.jpg"
    },
    {
        name: "Barbara Ramos",
        role: "Graphic Designer",
        photo: "barbara-ramos-graphic-designer.jpg"
    }
];

const teamContainer = document.getElementById('team-container');

// MILESTONE 1: Stampa su console utilizzando un ciclo for
for (let i = 0; i < teamMembers.length; i++) {
    const member = teamMembers[i];
    console.log(`Nome: ${member.name}`);
    console.log(`Ruolo: ${member.role}`);
    console.log(`Foto: ${member.photo}`);
    console.log('---');
}

// MILESTONE 2 e BONUS 1 e BONUS 2: Visualizzazione nel DOM
teamMembers.forEach(member => {
    const memberInfo = `
                <div class="card">
                    <img src="img/${member.photo}" alt="${member.name}">
                    <p><strong>Nome:</strong> ${member.name}</p>
                    <p><strong>Ruolo:</strong> ${member.role}</p>
                </div>
            `;
    teamContainer.innerHTML += memberInfo;
});
