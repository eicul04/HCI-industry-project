var xmlhttp = new XMLHttpRequest();
// change URL
var url = "myTutorials.txt";

// GET Request für ID
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var codeId = JSON.parse(this.responseText);
        setCodeId(codeId);
    }
};
xmlhttp.open("GET", url, true);
xmlhttp.send();

function setCodeId(codeId) {
    document.getElementById("validationResult").innerHTML = codeId;
}