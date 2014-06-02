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
         game.Roll(3); //spare
         game.Roll(5);
         expect(game.Score).to.equal(20);
      });

      it('score 15', function() {
         game.Roll(7);
         game.Roll(3); //spare
         game.Roll(5);
         game.Roll(2)
         expect(game.Score).to.equal(22);
      });

      it('score 18', function() {
         game.Roll(10); //14
         game.Roll(2);
         game.Roll(2);
         expect(game.Score).to.equal(18);
      });

      it('score 30', function() {
         game.Roll(10); //20
         game.Roll(10); //10
         expect(game.Score).to.equal(30);
      });

      it('score 45', function() {
         game.Roll(10); //25
         game.Roll(10); //15
         game.Roll(5); //5
         expect(game.Score).to.equal(45);
      });

      it('score 49', function() {
         game.Roll(10); //25
         game.Roll(10); //17
         game.Roll(5); //5
         game.Roll(2); //2
         expect(game.Score).to.equal(49);
      });

      it('score 133', function() {
         game.Roll(1);
         game.Roll(4);
                        //5
         game.Roll(4);
         game.Roll(5);
                       //14
         game.Roll(6);
         game.Roll(4);
                       //24
         game.Roll(5);
         game.Roll(5);
                       //39
         game.Roll(10);

         game.Roll(0);
         game.Roll(1);

         game.Roll(7);
         game.Roll(3);

         game.Roll(6);
         game.Roll(4);

         game.Roll(10);

         game.Roll(2);
         game.Roll(8);

         game.Roll(6);

         expect(game.Score).to.equal(133);
      });
   });
});