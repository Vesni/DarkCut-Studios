window.onload = function () {
    document.getElementById('loading').style.display = 'none';
};

// Show credits on button click
document.getElementById('creditsButton').onclick = function () {
    document.getElementById('creditsOverlay').style.display = 'block';
};

// Close credits overlay if clicked outside content
document.getElementById('creditsOverlay').onclick = function (e) {
    if (e.target === document.getElementById('creditsOverlay')) {
        document.getElementById('creditsOverlay').style.display = 'none';
    }
};
