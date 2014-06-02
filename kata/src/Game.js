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
      this.AddPointsForSpare(pins);
      this.AddPointsForStrike(pins);

      if (frame.IsClosed()) {
         this.ActiveFrame += 1;
         this.Frames[this.ActiveFrame] = new Frame();
      };
   };

   Game.prototype.AddPointsForSpare = function(pins) {
      if (this.ActiveFrame > 1) {
         var previousFrame = this.Frames[this.ActiveFrame - 1];
         if (previousFrame.IsSpare()) {
            this.Score += pins;
         }
      };
   };

   Game.prototype.AddPointsForStrike = function(pins) {
      if (this.LastTwoFramesAreStrikes() && this.FirstRoll()) {
         this.Score += pins * 2;
      } else if (this.PreviousFrameIsStrike())
      {
         this.Score += pins;
      }
   };

   Game.prototype.PreviousFrameIsStrike = function() {
      if (this.ActiveFrame > 1) {
         var previousFrame = this.Frames[this.ActiveFrame - 1];
         return previousFrame.IsStrike();
      }
   };

   Game.prototype.LastTwoFramesAreStrikes = function() {
      if (this.ActiveFrame > 2) {
         return this.Frames[this.ActiveFrame - 1].IsStrike()
             && this.Frames[this.ActiveFrame - 2].IsStrike();
      }
   };

   Game.prototype.FirstRoll = function () {
      var currentFrame = this.Frames[this.ActiveFrame];
      return currentFrame.SecondThrow === undefined;
   }

   return Game;
});