//BUILDING THE PYRAMID
const createPyramid = document.querySelector("#createPyramid");
const pyramidDiv = document.querySelector("#pyramid");

const buildPyramid = (count, character) => {
  let pyramid = "";
  for (let i = 1; i <= count; i++) {
    const blank = " ".repeat(count - i);
    const block = String(character).repeat(i * 2 - 1);
    pyramid += blank + block + blank + "<br>";
  }
  return pyramid;
};

createPyramid.addEventListener("click", () => {
  let character = document.querySelector("#character").value;
  let countInput = Number(document.querySelector("#number").value);

  if (isNaN(countInput) || countInput <= 0 || !character) {
    pyramidDiv.textContent = "Please, type a valid value";
    return;
  }

  pyramidDiv.innerHTML = buildPyramid(countInput, character);
});

// ERROR MESSAGE WHEN CLICKING ON BINARY TYPE
const pyramidType = document.querySelectorAll(".pyramidType");
const binaryType = document.querySelector("#binaryType");
const normalType = document.querySelector("#normalType");

normalType.classList.add("active");

pyramidType.forEach((icon) => {
  icon.addEventListener("click", function () {
    pyramidType.forEach((i) => i.classList.remove("active"));
    this.classList.add("active");
  });
});

const errorDiv = document.querySelector(".errorDiv");

binaryType.addEventListener("click", () => {
  errorDiv.innerHTML = "Still working on that";
  setInterval(() => {
    errorDiv.innerHTML = " ";
  }, 5000);
});

normalType.addEventListener("click", () => {
  errorDiv.innerHTML = "";
});
