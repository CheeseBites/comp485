function addEventListenerToallDivElements() {

    for (var i = 0; i < numberOfBulletPoints; i++) {

        (function() {

            var k = i;

            var first = Math.floor(k / 3);
            var second = k % 3;

            document.getElementById(k).addEventListener("mousedown", function() {
                changeImageMouseDown(k, first, second)
            }, false);

            document.getElementById(k).addEventListener("mouseover", function() {
                changeImage(k, first, second)
            }, false);

        })();

    }

    document.getElementById('mouseUpElement').addEventListener('mouseup', function() {
        mouseup()
    }, false);

    document.getElementById('mainElement').addEventListener('mouseup', function() {
        mouseup()
    }, false);

    document.getElementById('mainElement').addEventListener('mousedown', function() {
        mousedown()
    }, false);

    document.getElementById('mainElement').addEventListener('dblclick', function() {
        resetAllButtons()
    }, false);

}