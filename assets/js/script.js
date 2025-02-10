// Data
const skills = [
  { name: 'C/C++', level: 95 },
  { name: 'C#', level: 90 },
  { name: 'Python', level: 92 },
  { name: 'Java', level: 88 },
  { name: 'HTML/CSS', level: 85 },
  { name: 'Lua', level: 82 },
  { name: 'PowerShell', level: 80 },
];

const projects = [
  {
    title: 'Multi-Language Compiler',
    description: 'Advanced compiler implementation supporting multiple programming languages',
    tech: ['C++', 'LLVM', 'Python'],
  },
  {
    title: 'Game Engine Framework',
    description: 'Custom game engine with physics simulation and rendering pipeline',
    tech: ['C#', 'OpenGL', 'Lua'],
  },
  {
    title: 'Automation Suite',
    description: 'Enterprise automation tools for system administration',
    tech: ['PowerShell', 'Python', 'C#'],
  },
];

// Typewriter effect
function typeWriter(text, element, speed = 100) {
  let i = 0;
  function type() {
    if (i < text.length) {
      element.textContent += text.charAt(i);
      i++;
      setTimeout(type, speed);
    }
  }
  type();
}

// Intersection Observer for animations
function createIntersectionObserver(elements, callback) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          callback(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  elements.forEach((element) => observer.observe(element));
}

// Initialize skills section
function initializeSkills() {
  const skillsGrid = document.getElementById('skills-grid');
  
  skills.forEach((skill, index) => {
    const skillCard = document.createElement('div');
    skillCard.className = 'skill-card';
    skillCard.style.animationDelay = `${index * 100}ms`;
    
    skillCard.innerHTML = `
      <div class="skill-header">
        <span class="font-semibold">${skill.name}</span>
        <span>${skill.level}%</span>
      </div>
      <div class="progress-bar">
        <div class="progress-fill" style="width: 0%"></div>
      </div>
    `;
    
    skillsGrid.appendChild(skillCard);
  });

  // Animate skills when they come into view
  const skillCards = document.querySelectorAll('.skill-card');
  createIntersectionObserver(skillCards, (card) => {
    card.style.opacity = 1;
    card.classList.add('animate-slide-in');
    const progressBar = card.querySelector('.progress-fill');
    const targetWidth = card.querySelector('.skill-header span:last-child').textContent;
    progressBar.style.width = targetWidth;
  });
}

// Initialize projects section
function initializeProjects() {
  const projectsGrid = document.getElementById('projects-grid');
  
  projects.forEach((project, index) => {
    const projectCard = document.createElement('div');
    projectCard.className = 'project-card';
    projectCard.style.animationDelay = `${index * 200}ms`;
    
    projectCard.innerHTML = `
      <div class="project-header">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-blue-400"><path d="m18 16 4-4-4-4"/><path d="m6 8-4 4 4 4"/><path d="m14.5 4-5 16"/></svg>
        <h3 class="project-title">${project.title}</h3>
      </div>
      <p class="project-description">${project.description}</p>
      <div class="tech-tags">
        ${project.tech.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
      </div>
    `;
    
    projectsGrid.appendChild(projectCard);
  });

  // Animate projects when they come into view
  const projectCards = document.querySelectorAll('.project-card');
  createIntersectionObserver(projectCards, (card) => {
    card.style.opacity = 1;
    card.style.transform = 'translateY(0)';
    card.classList.add('animate-slide-up');
  });
}

// Initialize everything when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  // Start typewriter effect
  const typedElement = document.getElementById('typed-text');
  typeWriter('Software Engineer & Polyglot Developer', typedElement);

  // Initialize sections
  initializeSkills();
  initializeProjects();
});