function sendRequest(generatedPassword) {

    if (generatedPassword == "") {
        document.getElementById("instructions").innerHTML = "";
        return;
    }
    if (window.XMLHttpRequest) {
        xmlhttp = new XMLHttpRequest();
    } else { 
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }

    xmlhttp.onreadystatechange = function() {

        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {

            document.getElementById("instructions").innerHTML = xmlhttp.responseText;
            resetAllButtons();

        }
    }
    xmlhttp.open("GET", "database.php?password=" + generatedPassword + "&username=" + document.getElementById("username").value, true);
    xmlhttp.send();
}