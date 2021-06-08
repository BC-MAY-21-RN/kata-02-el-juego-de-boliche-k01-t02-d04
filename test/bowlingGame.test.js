const BowlingGame = require('./bowlingGame');

describe('Tests in BogwlingGame class', () => {
    let game; //GAME
    
    beforeEach( ()=> {
        game = new BowlingGame();
    
    } );

    test('should return 0 for all zeros', () => {

        for (let index = 0; index < 20; index++) {
            game.roll(0);        
        }
        expect(game.score).toEqual(0);
    }
}