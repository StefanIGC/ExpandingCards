let panelsElement = document.querySelectorAll('.panel');

let removeActiveClasses = () => {
    panelsElement.forEach(panel => {
        panel.classList.remove('active');
    });
};

let activatePanel = (panel) => {
    removeActiveClasses();
    panel.classList.add('active');
};

panelsElement.forEach(panel => {
    panel.addEventListener('click', () => {
        activatePanel(panel);
    });
    panel.addEventListener('mouseover', () => {
        activatePanel(panel);
    });
});



