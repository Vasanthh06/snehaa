function addTask() {
  let input = document.getElementById("taskInput");
  if (input.value == "") return;
  let li = document.createElement("li");
  li.textContent = input.value;
  li.onclick = () => (li.style.textDecoration = "line-through");
  document.getElementById("taskList").appendChild(li);
  input.value = "";
}

const wordList = [
  "apple",
  "bread",
  "chair",
  "dream",
  "focus",
  "heart",
  "world",
  "music",
  "smile",
  "light",
  "water",
  "plant",
  "brain",
  "happy",
  "magic",
  "peace",
  "trust",
  "sweet",
  "power",
  "brave",
  "laugh",
  "pride",
  "tiger",
  "eagle",
  "river",
  "stone",
  "money",
  "skill",
  "learn",
  "faith",
];

let score = 0,
  streak = 0;

function checkWord() {
  let input = document.getElementById("wordInput").value.toLowerCase();
  let tiles = document.getElementById("tiles");
  let result = document.getElementById("wordResult");
  tiles.innerHTML = "";

  if (input.length != 5) {
    result.innerText = "Enter 5 letters";
    return;
  }
  if (!wordList.includes(input)) {
    result.innerText = "Invalid word";
    return;
  }

  for (let i = 0; i < 5; i++) {
    let t = document.createElement("div");
    t.className = "tile green";
    t.innerText = input[i].toUpperCase();
    tiles.appendChild(t);
  }

  score += 10;
  streak++;
  result.innerText = streak == 2 ? "🏆 Two correct!" : "🎉 Correct!";
  if (streak == 2) streak = 0;

  document.getElementById("score").innerText = score;
  document.getElementById("streak").innerText = streak;
  document.getElementById("wordInput").value = "";
}
