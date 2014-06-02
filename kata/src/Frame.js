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

   Frame.prototype.IsClosed = function() {
      return this.FirstThrow !== undefined 
          && this.SecondThrow !== undefined;
   };

   return Frame;
});