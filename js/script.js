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