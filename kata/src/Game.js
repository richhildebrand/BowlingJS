define(['Frame'],
function(Frame) {
   'use strict';

   var Game = function()
   { 
      this.Score = 0;
      this.ActiveFrame = 1;
      this.Frames = {};
      this.Frames[this.ActiveFrame] = new Frame();
   };

   Game.prototype.ActiveFrame;
   Game.prototype.Fames;

   Game.prototype.Roll = function(pins) {
      this.Score += pins;

      var frame = this.Frames[this.ActiveFrame];
      frame.ScoreRoll(pins);

      if (frame.IsClosed()) {
         this.ActiveFrame += 1;
         this.Frames[this.ActiveFrame] = new Frame();
      }
   };

   return Game;
});