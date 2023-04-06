let btns = document.querySelector(".btn");
// console.log(typeof btns);
    btns.addEventListener('click', function (event) {
        let targetElement = event.target; //
        let parentDiv = targetElement.parentNode;
        let paragraphDiv = parentDiv.getElementsByTagName('p');
        let pElement = paragraphDiv[0];
        pElement.classList.toggle('hide');
    });