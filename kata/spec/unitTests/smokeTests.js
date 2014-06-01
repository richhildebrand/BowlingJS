define(['Squire'], function(Squire) {
   describe('Unit Test', function() {
      describe('Smoke test should', function() {
         'use strict';

         var _main = undefined;

         beforeEach(function(done) {
            var testContext = new Squire();

            testContext.require(['Main'], function(Main) {
               testContext.Main = new Main(true);
               _main = testContext.Main;
               done();
            });
         });

         it('pass', function() {
            expect(_main.OurBoolean).to.be.true;
         });

         it('fail', function() {
            expect(_main.OurBoolean).to.be.false;
         });
      });
   });
});