const pi = Math.PI;

function calculation() {
    var input = document.getElementById('diameter').value;
    var answer = input * pi;
    document.getElementById("answer").innerText = answer;
}
