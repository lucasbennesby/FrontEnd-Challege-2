const adviceNumber = ["191", "520", "340", "188"];
const advices = [
  "Se você não pode ajudar, atrapalhe. O importante é participar.",
  "Roube doces de crianças para evitar obesidade infantil",
  "A vida nunca vai te derrubar se você não se levantar ",
  "Se falam mal de você pelas costas, é sinal de que você ta na frente",
  "Viva a vida enquanto você está vivo, porque depois que você morrer, não viverá mais",
];

var i = 0;

function teste() {
  document.getElementById("advice").innerHTML = `"${advices[i]}"`;
  document.getElementById(
    "advice-number"
  ).innerHTML = `Advice ${adviceNumber[i]}`;
  i++;
  if (i > advices.length - 1) {
    i = 0;
  }
  if (i > adviceNumber.length - 1) {
    i = 0;
  }
}
