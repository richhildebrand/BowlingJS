define(['Squire'], function(Squire) {
   describe('Game should', function() {
      'use strict';

      var game = undefined;

      beforeEach(function(done) {
         var testContext = new Squire();

         testContext.require(['Game'], function(Game) {
            game = new Game();
            done();
         });
      });

      it('start at zero', function() {
         expect(game.Score).to.be;
      });

      it('score five', function() {
         game.Roll(5);
         expect(game.Score).to.equal(5);
      });

      it('score seven', function() {
         game.Roll(5);
         game.Roll(2);
         expect(game.Score).to.equal(7);
      });

      it('be on frame two', function() {
         game.Roll(5);
         game.Roll(2);
         expect(game.ActiveFrame).to.equal(2);
      });

      it('be on frame two', function() {
         game.Roll(10);
         expect(game.ActiveFrame).to.equal(2);
      });

      it('score 15', function() {
         game.Roll(7);
         game.Roll(3);
         game.Roll(5);
         expect(game.Score).to.equal(20);
      });

      it('score 18', function() {
         game.Roll(10);
         game.Roll(2);
         game.Roll(2);
         expect(game.Score).to.equal(18);
      });
   });
});