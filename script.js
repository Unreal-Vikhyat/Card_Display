
let inputs = document.querySelectorAll("form input[type='text']");
let button = document.querySelector("#button");

button.addEventListener("click", function (e) {
    e.preventDefault();
    toba();
});

function toba() {
    let body = document.body;

    let main = document.createElement("div");
    main.id="main";

    let Profile = document.createElement("div");
    Profile.id="Profile";

    let img = document.createElement("img");
    img.src = inputs[0].value;

    let h3 = document.createElement("h3");
    h3.textContent = inputs[1].value;

    let h5 = document.createElement("h5");
    h5.textContent = inputs[2].value;

    let p = document.createElement("p");
    p.textContent = inputs[3].value;

    Profile.appendChild(img);
    main.append(Profile, h3, h5, p);
    body.appendChild(main);
}
