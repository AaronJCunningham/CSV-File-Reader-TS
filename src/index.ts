import { MatchResult } from "./MatchResult";
import { CsvFileReader } from "./CsvFileReader";
import { MatchReader } from "./MatchReader";

const csvFileReader = new CsvFileReader("football.csv");

const matchReader = new MatchReader(csvFileReader);
matchReader.load();

let manWins = 0;

for (let match of matchReader.matches) {
  if (match[1] === "Man United" && match[5] === MatchResult.HomeWin) {
    manWins++;
  } else if (match[2] === "Man United" && match[5] === MatchResult.AwayWin) {
    manWins++;
  }
}

console.log(manWins);
