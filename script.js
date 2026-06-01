const projectsSection = document.getElementById("projects");

const projects = [
  {
    image: "images/expresso.png",
    title: "Movers and Packers",
    desc: "A basic movers and packers website created with HTML, CSS, and Bootstrap. It show moving and packing services.",
    tech: ["HTML", "CSS", "BootStrap"],
    livelink:"https://rohinikharche.github.io/Expresso/",
    codelink:"https://github.com/rohinikharche/Expresso"
  },
  {
    image: "images/dice.jpg",
    title: "Dice Game",
    desc: "A simple and fun game made using HTML, CSS, and JavaScript where two players roll dice and the winner is decided.",
    tech: ["HTML", "CSS", "JavaScript"],
    livelink:"https://rohinikharche.github.io/Dice-Game/",
    codelink:"https://github.com/rohinikharche/Dice-Game"
  },
  {
    image: "images/alphabet.jpg",
    title: "Alphabet Game",
    desc: "A simple and fun game made using HTML, CSS, and JavaScript. It helps users learn and practice alphabets in an interactive way.",
    tech: ["HTML", "CSS", "JavaScript"],
    livelink:"https://rohinikharche.github.io/Alphabet-learning-game/",
    codelink:"https://github.com/rohinikharche/Alphabet-learning-game"
  }
];

projectsSection.innerHTML = `
  <h2 class="title">Featured Projects</h2>
  <p class="subtitle">
    Here are some of my recent projects that showcase my skills 
  </p>

  <div class="projects-grid">
    ${projects.map(project => `
      <div class="project-card">
        <img src="${project.image}" alt="${project.title}">

        <div class="project-content">
          <h3>${project.title}</h3>
          <p>${project.desc}</p>

          <div class="tech-stack">
            ${project.tech.map(t => `<span>${t}</span>`).join("")}
          </div>

          <div class="project-actions">
            <a href="${project.livelink}" target="_blank" class="btn-outline">Live Demo</a>
            <a href="${project.codelink}" target="_blank" class="btn-outline">Code</a>
          </div>
        </div>
      </div>
    `).join("")}
  </div>
`;
