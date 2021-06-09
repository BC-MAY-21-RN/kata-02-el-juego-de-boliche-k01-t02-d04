const { CLIEngine } = require('eslint');
const BowlingGame = require('../src/bowlingGame');

describe('Tests in BowlingGame class', () => {
    
    let game;
    
    //Before each test
    beforeEach( ()=> {
        game = new BowlingGame();
    
    } );

    // -/- -/- -/- -/- -/- -/- -/- -/- -/- -/- = 0
    test('should return 0 for all zeros', () => {
        rollGame(0,20);
        expect(game.score).toEqual(0);
    });
    
    // 1/1 1/1 1/1 1/1 1/1 1/1 1/1 1/1 1/1 1/1 = 20
    test('should return 20 for all ones', () => {
        rollGame(1,20)
        expect(game.score).toEqual(20);
    });

    // 5/5 3/- -/- -/- -/- -/- -/- -/- -/- -/- = 16
    test('should return correct score for spare rolled', () => {
        game.roll(5);
        game.roll(5);
        game.roll(3);
        rollGame(0,17);

        expect(game.score).toEqual(16);
    });

    // 10 1/1 -/- -/- -/- -/- -/- -/- -/- -/- -/-  = 14
    test('should return correct score for strike rolled', () => {
        game.roll(10);
        game.roll(1);
        game.roll(1);
        rollGame(0,17);

        expect(game.score).toEqual(14);
    });

    // Game function
    function rollGame(pins, rolls) {
        for (let index = 0; index < rolls; index++) {
            game.roll(pins);
        }
    }
});