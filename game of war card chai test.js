let expect = chai.expect;

describe('Player', function() {
    describe('#playerScore', function() {
        it('should start player score at zero', function() {
            let x = new Player()
            expect(x.playerScore).to.equal(0);
        });

        it('should throw an error if player score starts at any other number than zero', function() {
            expect(function() {
                x.playerScore(5);
            }).to.throw(Error);
        });
    });
});