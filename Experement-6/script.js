let svg, isDrawing = false, path;

window.onload = function () {
    svg = document.getElementById("drawingArea");

    // When mouse pressed - start drawing
    svg.addEventListener("mousedown", startDraw);

    // When mouse moves - draw path
    svg.addEventListener("mousemove", draw);

    // When mouse released - stop drawing
    svg.addEventListener("mouseup", stopDraw);

    // If mouse leaves canvas - stop drawing
    svg.addEventListener("mouseleave", stopDraw);
};

function startDraw(e) {
    isDrawing = true;
    const x = e.offsetX;
    const y = e.offsetY;

    // Create a new path
    path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute("stroke", "blue");
    path.setAttribute("stroke-width", "2");
    path.setAttribute("fill", "none");
    path.setAttribute("d", `M ${x} ${y}`); // move to start point

    svg.appendChild(path);
}

function draw(e) {
    if (!isDrawing) return;
    const x = e.offsetX;
    const y = e.offsetY;

    // Extend the path with new line segment
    let d = path.getAttribute("d");
    path.setAttribute("d", `${d} L ${x} ${y}`);
}

function stopDraw() {
    isDrawing = false;
}
