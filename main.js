const boxes = document.querySelectorAll('.boxes div');


const createTooltip = (e) => {
    const tooltipParent = e.target;
    const tooltipText = e.target.dataset.tooltip;

    const newTooltip = document.createElement('span');
    newTooltip.innerHTML = tooltipText;
    newTooltip.className = "tooltip";

    tooltipParent.appendChild(newTooltip);
};

const removeTooltip = (e) => {
    const tooltip = e.target.querySelector(".tooltip");
    if (tooltip) {
        tooltip.remove();

    }
};

boxes.forEach((box) => box.addEventListener("mouseover", createTooltip));
boxes.forEach((box) => box.addEventListener("mouseleave", removeTooltip));