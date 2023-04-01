const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const btn4 = document.getElementById("btn4");
const btn5 = document.getElementById("btn5");
const card1 = document.getElementById("card-1");
const card2 = document.getElementById("card-2");
const card3 = document.getElementById("card-3");
const card4 = document.getElementById("card-4");
const borderTop = document.getElementById("top-border");
const docArr = [
  { card: card1, btn: btn1, bTop: "b-top1", condition: 1 },
  { card: card2, btn: btn2, bTop: "b-top2", condition: 2 },
  { card: card3, btn: btn3, bTop: "b-top3", condition: 3 },
  { card: card4, btn: btn4, bTop: "b-top4", condition: 4 },
  { card: card4, btn: btn5, bTop: "b-top4", condition: 4 },
];

function handleClick(kartu) {
  for (const x of docArr) {
    x.card.classList.add("hidden");
  }
  kartu.classList.remove("hidden");
}
function handleBTop(bTop) {
  for (const x of docArr) {
    if (borderTop.classList.contains(x.bTop)) {
      borderTop.classList.remove(x.bTop);
    }
  }
  borderTop.classList.add(bTop);
}

function handleOpacity(condition) {
  for (const x of docArr) {
    x.btn.classList.remove(
      "fade-8",
      "fade-6",
      "fade-4",
      "order-1",
      "order-2",
      "order-3",
      "color-1",
      "color-2",
      "color-3",
      "color-4"
    );
  }
  switch (condition) {
    case 1:
      btn1.classList.add("color-1");
      btn2.classList.add("fade-8", "order-2");
      btn3.classList.add("fade-6", "order-3");
      break;
    case 2:
      btn1.classList.add("fade-4", "order-3");
      btn2.classList.add("color-2");
      btn3.classList.add("fade-8", "order-2");
      break;
    case 3:
      btn1.classList.add("fade-6", "order-2");
      btn2.classList.add("fade-4", "order-3");
      btn3.classList.add("color3");
      break;
    default:
      btn1.classList.add("fade-8", "order-1");
      btn2.classList.add("fade-6", "order-2");
      btn3.classList.add("fade-4", "order-3");
      btn5.classList.add("color-4");
      break;
  }
}

for (const x of docArr) {
  x.btn.addEventListener("click", (e) => {
    handleOpacity(x.condition);
    handleBTop(x.bTop);
    handleClick(x.card);
  });
}
