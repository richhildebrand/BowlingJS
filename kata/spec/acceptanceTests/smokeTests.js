define(['Squire'], function(Squire) {
   describe('Smoke test should', function() {
      'use strict';

      var Main = undefined;

      beforeEach(function(done) {
         var testContext = new Squire();

         testContext.require(['Main'], function(main) {
            testContext.Main = main;
            Main = testContext.Main;
            done();
         });
      });

      it('pass', function() {
         var main = new Main(false);
         expect(main.OurBoolean).to.be.false;
      });

      it('fail', function() {
         var main = new Main(false);
         expect(main.OurBoolean).to.be.true;
      });
   });
});