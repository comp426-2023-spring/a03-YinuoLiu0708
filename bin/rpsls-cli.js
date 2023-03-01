#!/usr/bin/env node

import minimist from "minimist"
import { rpsls } from "../lib/rpsls.js"

var argument = minimist(process.argv.slice(2))

if (argument.h || argument.help){
    help();
    process.exit();
}

if (argument.r || argument.rules){
    rules();
    process.exit();
}

try{
    console.log(JSON.stringify(rpsls(argument._[0])));
} catch (error){
    if (error instanceof RangeError){
        console.log(`Error: ${argument._[0]} is out of range.`);
        rules();
        process.exit();
    }
}

function help() {
    console.log(
        `Usage: node-rpsls [SHOT]
        Play the Lizard-Spock Expansion of Rock Paper Scissors (RPSLS)!
        
          -h, --help        display this help message and exit
          -r, --rules       display the rules and exit
        
        Examples:
          node-rpsls        Return JSON with single player RPSLS result.
                            e.g. {"player":"rock"}
          node-rpsls rock   Return JSON with results for RPSLS played against a simulated opponent.
                            e.g {"player":"rock","opponent":"Spock","result":"lose"}`
    );
}

function rules() {
    console.log(
        `Rules for the Lizard-Spock Espansion of Rock Paper Scissors:

        - Scissors CUTS Paper
        - Paper COVERS Rock
        - Rock SMOOSHES Lizard
        - Lizard POISONS Spock
        - Spock SMASHES Scissors
        - Scissors DECAPITATES Lizard
        - Lizard EATS Paper
        - Paper DISPROVES Spock
        - Spock VAPORIZES Rock
        - Rock CRUSHES Scissors`
    );
}
