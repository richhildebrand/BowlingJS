define([],
function() {
   'use strict';

   var Frame = function() { };

   Frame.prototype.FirstThrow;
   Frame.prototype.SecondThrow;

   Frame.prototype.ScoreRoll = function(pins) {
      if (this.FirstThrow === undefined) {
         this.FirstThrow = pins;
      } else {
         this.SecondThrow = pins;
      }
   };

   Frame.prototype.IsSpare = function() {
      return (this.FirstThrow + this.SecondThrow) === 10;
   }

   Frame.prototype.IsStrike = function() {
      return this.FirstThrow === 10;
   }


   Frame.prototype.IsClosed = function() {
      return this.FirstThrow === 10 
          || this.SecondThrow !== undefined;
   };

   return Frame;
});