const textareaEl = document.getElementById("textarea");
const totalCounterEl = document.getElementById("total-counter");
const remainingCounterEl = document.getElementById("remaining-counter");

textareaEl.addEventListener("keyup", () => {
  counter();
});

counter();

function counter() {
  let values = textareaEl.value.length;
  totalCounterEl.innerText = values;
  remainingCounterEl.innerText = textareaEl.getAttribute("maxlength") - values;
}
