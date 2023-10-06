// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Pagination for displaying tools
const toolsData = [
    { name: 'Tool 1', description: 'Description of Tool 1...' },
    { name: 'Tool 2', description: 'Description of Tool 2...' },
    { name: 'Tool 3', description: 'Description of Tool 3...' },
    { name: 'Tool 4', description: 'Description of Tool 4...' },
    { name: 'Tool 5', description: 'Description of Tool 5...' },
    { name: 'Tool 6', description: 'Description of Tool 6...' },
    { name: 'Tool 7', description: 'Description of Tool 7...' },
    { name: 'Tool 8', description: 'Description of Tool 8...' },
    { name: 'Tool 9', description: 'Description of Tool 9...' },
    { name: 'Tool 10', description: 'Description of Tool 10...' },
    { name: 'Tool 11', description: 'Description of Tool 11...' },
    { name: 'Tool 12', description: 'Description of Tool 12...' },
    { name: 'Tool 13', description: 'Description of Tool 13...' },
    { name: 'Tool 14', description: 'Description of Tool 14...' },
];

const itemsPerPage = 9; // Updated to 10 items per page
let currentPage = 0;

function renderTools() {
    const toolContainer = document.getElementById('tool-container');
    toolContainer.innerHTML = '';

    const startIndex = currentPage * itemsPerPage;
    const endIndex = Math.min(startIndex + itemsPerPage, toolsData.length);

    for (let i = startIndex; i < endIndex; i++) {
        const tool = toolsData[i];
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <h3>${tool.name}</h3>
            <p>${tool.description}</p>
        `;
        toolContainer.appendChild(card);
    }
}

function handleNextClick() {
    const totalPages = Math.ceil(toolsData.length / itemsPerPage);
    if (currentPage < totalPages - 1) {
        currentPage++;
        renderTools();
    }
}

function handlePrevClick() {
    if (currentPage > 0) {
        currentPage--;
        renderTools();
    }
}

const nextButton = document.getElementById('next-button');
const prevButton = document.getElementById('prev-button');

nextButton.addEventListener('click', handleNextClick);
prevButton.addEventListener('click', handlePrevClick);

// Initial rendering of tools
renderTools();
