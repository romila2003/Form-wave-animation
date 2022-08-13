const labels = document.querySelectorAll(".form-control label");
const btn = document.querySelector(".btn");

labels.forEach(label => {
    label.innerHTML = label.innerText
        .split("")
        .map((letter, idx) => `<span style="transition-delay:${idx * 50}ms">${letter}</span>` )
        .join("")
});

const error = ["Email", "Password"];
let emailFormat = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

btn.addEventListener("click", (e) => {
    e.preventDefault();

    const inputs = document.querySelectorAll("input");
    const text = document.querySelectorAll("#text");
    for(let i = 0; i < inputs.length; i++) {
        for(let i = 0; i < text.length; i++) {
            if(inputs[i].value === "") {
                text[i].innerHTML = error[i] + " cannnot be empty";
            } else {
                text[i].innerHTML = "";
            }
        } 
    }

    if(inputs[0].value.match(emailFormat)) {
        text[0].innerHTML = "";
    } else {
        text[0].innerHTML = "Looks like this is not an email";
    };
});