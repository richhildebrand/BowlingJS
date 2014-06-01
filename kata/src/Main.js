define(['Main'],
function(Main) {
   'use strict';

   var Main = function(ourBoolean) 
   { 
      this.OurBoolean = ourBoolean;
   };

   Main.prototype.OurBoolean;

   return Main;
});