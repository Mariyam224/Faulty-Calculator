

const calBtns = document.querySelectorAll(".btns");
const input = document.querySelector(".result");
const toggleMode = document.querySelector(".toggle input");

let str = "";

calBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {

        let buttonText = e.target.innerHTML;
        if (buttonText == "=") {

            let evalStr = str;

            evalStr = evalStr.replace(/\//g, "**");
            evalStr = evalStr.replace(/\-/g, "/");
            evalStr = evalStr.replace(/\*/g, "+");
            evalStr = evalStr.replace(/\+/g, "-");

            str = eval(evalStr);
            input.value = str;
        }
        else {
            if (buttonText == "AC") {
                str = "";
                input.value = str;
            }
            else {

                str = str + buttonText
                input.value = str;
            }
        }
    });
});


// + --> -
// * --> +
// - --> /
// / --> **


































