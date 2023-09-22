function send() {
    let feedback = document.getElementById("feedback").value;
    let name = document.getElementById("name").value
    if (feedback == "" || name == "" ) {

        document.getElementById("empty_field").innerText = "Please make sure that you provide both name and feedback"
    }
    else {
        
        document.getElementById("empty_field").innerText = ""
        document.getElementById("result").innerText = ""
        document.getElementById("result").innerText = `${name}: ${feedback}`;
    }
}