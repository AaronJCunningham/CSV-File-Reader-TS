import { MatchResult } from "./MatchResult";
import { MatchReader } from "./MatchReader";

const reader = new MatchReader("football.csv");
reader.read();

let manWins = 0;

for (let match of reader.data) {
  if (match[1] === "Man United" && match[5] === MatchResult.HomeWin) {
    manWins++;
  } else if (match[2] === "Man United" && match[5] === MatchResult.AwayWin) {
    manWins++;
  }
}

console.log(manWins);
