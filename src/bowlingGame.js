class BowlingGame {

    constructor() {
        this.rolls = [];
    }

    roll(pins) {
        this.rolls.push(pins);
    }

    get score() {
        let score = 0;
        let rollI = 0;

        for (let frameI = 0; frameI < 10; frameI++) {
            if (this.isStrike(rollI)) {
                score += this.strikeBonus(rollI);
                rollI++;
                continue;
            }
            const frameScore = this.rolls[rollI] + this.rolls[rollI + 1];
            
            if (this.isSpare(frameScore)) {
                score += this.spareBonus(rollI);
            } else {
                score+= frameScore;
            }
            rollI += 2; 
        }
        return score;
    }

    isSpare(frameScore) {
        return frameScore === 10;
    }
    
    isStrike(rollI) {
        return this.rolls[rollI] === 10;
    }

    spareBonus(rollI) {
        return 10 + this.rolls[rollI + 2];
    }

    strikeBonus(rollI) {
        return 10 + this.rolls[rollI + 1] + this.rolls[rollI + 2];

    }
}

module.exports = BowlingGame;