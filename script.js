let panelsElement = document.querySelectorAll('.panel');
let activePanelIndex = 0;
const intervalTime = 5000; // 10 seconds

let removeActiveClasses = () => {
    panelsElement.forEach(panel => {
        panel.classList.remove('active');
    });
};

let activatePanel = () => {
    removeActiveClasses();
    panelsElement[activePanelIndex].classList.add('active');
    activePanelIndex = (activePanelIndex + 1) % panelsElement.length;
};

panelsElement.forEach(panel => {
    panel.addEventListener('click', () => {
        activePanelIndex = Array.from(panelsElement).indexOf(panel);
        activatePanel();
    });
    
    panel.addEventListener('mouseover', () => {
        activePanelIndex = Array.from(panelsElement).indexOf(panel);
        activatePanel();
    });
});

setInterval(activatePanel, intervalTime);



