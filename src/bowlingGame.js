class BowlingGame {

    consturctor() {
        this.rolls = [];
    }

    roll(pins) {
        this.rolls.push(pins);
    }

    get finalScore() {
        let score = 0;
        let rollI = 0;

        for (let frameI = 0; frameI < 10; frameI++) {
            const frameScore = this.rolls[rollI] + this.rolls[rollI + 1];
            
            if (frameScore === 10) {
                score += 10 + this.rolls[rollI + 2];
            } else {
                score+= frameScore;
                
            }
            rollI += 2; 
        }
        return score;
    }
}

module.exports = BowlingGame;