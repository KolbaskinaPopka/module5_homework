let a = prompt("Give me your number");

if (typeof +a === "number") {
  if (Number.isNaN(+a)) {
    alert("Упс, кажется, вы ошиблись");
  } else {
    a % 2 === 0 ? alert("Четный") : alert("Нечетный");
  }
} else {
  alert("Упс, кажется, вы ошиблись");
}
