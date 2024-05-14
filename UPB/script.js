const image = document.querySelector("img");
const number = document.querySelector("#number");

let numberValue = 0;

function butoni() {
  numberValue +=1
  number.innerHTML = numberValue

  if (number.classList.contains("none")) {
    number.classList.remove("none");
    number.classList.add("displayIt");
  }
}
