


function send() {
    let feedback = document.getElementById("feedback").value;
    let name = document.getElementById("name").value
    if (feedback == "" || name == "" ) {

        document.getElementById("empty_field").innerText = "Please make sure that you provide both name and feedback"
    }
    else {
        document.getElementById("result").innerText = `${name}: ${feedback}`;
        document.getElementById("feedback").value = "";
        document.getElementById("empty_field").innerText = ""

        var agree = document.getElementById("is_agree")
        agree.addEventListener("change", function()  {
            if (agree.checked) {
                alert ("Please make sure you agreed with privacy terms")
            }
        })
        
    }

}
function clear_input(){
    document.getElementById("name").value = ""

}

        
