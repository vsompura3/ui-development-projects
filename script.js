const data = [
  {
    id:1,
    name: "Day 01 - XAE Landing Page",
    thumbnail: "day01.png",
    location: "Day 01",
  },

  {
    id:2,
    name: "Day 02 - UNX Landing Page",
    thumbnail: "day02.png",
    location: "Day 02",
  },
];

function generateHTML(data) {
  return `<a href="./${data.location}/index.html" class="grid-item">
    <img src="./Assets/Images/${data.thumbnail}" alt="" />
    <h2>${data.name}</h2>
  </a>`;
}

let HTML = "";
for (const i of data) {
  HTML += generateHTML(i);
}

console.log(HTML);
const grid = document.querySelector(".grid");
grid.innerHTML = HTML;