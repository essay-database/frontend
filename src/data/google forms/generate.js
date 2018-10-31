#!/usr/bin/env node
const states = require("../states.json");
const fs = require("fs");

function selector(states) {
  return states
    .map(state => state.name)
    .sort()
    .join("\n");
}

function generateYears(yearsBack) {
  return Array.from(
    new Array(yearsBack),
    (_, idx) => new Date().getFullYear() - idx
  ).join("\n");
}

fs.writeFile("years.txt", generateYears(100), err => {
  if (err) console.error(err);
  else console.log("write complete!");
});
