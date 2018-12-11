function resetAllButtons() {
    didDraw = false;
    var cells = document.getElementById("mainElement").getElementsByTagName("div");
    var len = cells.length;
    for (var i = 0; i < len; i++) {
        (function(j) {
            if (cells[j] !== undefined) {
                var cell = cells[j].className.toLowerCase();
                if (cell === "vertical" || cell === "horizontal" || cell === "positivediagonal" || cell === "negativediagonal" || cell === "lowslopepositive" || cell === "lowslopenegative" || cell === "highslopenegative" || cell === "highslopepositive") {
                    cells[j].parentNode.removeChild(cells[j]);
                }
            }
        })(i);
    }
    for (var i = 8; i >= 0; i--) {
        document.getElementById(i).style.backgroundImage = bullet;
    }
}
function fillButtons() {
    for (var i = 8; i >= 0; i--) {
        document.getElementById(i).style.backgroundImage = selectedBullet;
    }
}