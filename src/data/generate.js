const states = require("./states.json");
const fs = require("fs");

function selector(states) {
  return states
    .map(state => state.name)
    .sort()
    .join("\n");
}

fs.writeFile("states.txt", selector(states), err => {
  if (err) console.error(err);
  else console.log("write complete!");
});
