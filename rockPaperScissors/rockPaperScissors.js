/*
 * * Write a function that generates every sequence of throws a single
 * * player could throw over a three-round game of rock-paper-scissors.
 * *
 * * Your output should look something like:
 * *   [["rock", "rock", "rock"],
 * *    ["rock", "rock", "paper"],
 * *    ["rock", "rock", "scissor"],
 * *    ["rock", "paper", "rock"],
 *              ...etc...
 *                   */

const rockPaperScissors = (rounds = 3) => {
	const outcomes = [];
	const plays = ['rock', 'paper','scissors'];

	const getOutcomes = (playedSoFar, roundsLeft) =>{
		if(roundsLeft === 0) {
			outcomes.push(playedSoFar);
		} 
		else {
			for (let i = 0; i< plays.length; i++) {
				getOutcomes(playedSoFar.concat(plays[i]), roundsLeft-1);
			}
		}
	};
	getOutcomes([], rounds)
	return outcomes;
};