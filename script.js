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

  {
    id:3,
    name: "Day 03 - SHPX Landing Page",
    thumbnail: "day03.png",
    location: "Day 03",
  },

  // {
  //   id:4,
  //   name: "Day 04 - UNX Landing Page",
  //   thumbnail: "day04.png",
  //   location: "Day 04",
  // },

  // {
  //   id:5,
  //   name: "Day 05 - UNX Landing Page",
  //   thumbnail: "day05.png",
  //   location: "Day 05",
  // },

  // {
  //   id:6,
  //   name: "Day 06 - UNX Landing Page",
  //   thumbnail: "day06.png",
  //   location: "Day 06",
  // },
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