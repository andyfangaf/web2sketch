(function () {
  'use strict';

  describe('Give it some context', function () {
    describe('maybe a bit more context here', function () {
      it('should run here few assertions', function () {

      });
    });
  });

  describe('CSS is injected properly', function() {
    it('should have highlighted class', function() {
      function getStyle(className) {
          var classes = document.styleSheets[0].rules || document.styleSheets[0].cssRules;
          for (var x = 0; x < classes.length; x++) {
              if (classes[x].selectorText == className) {
                  (classes[x].cssText) ? alert(classes[x].cssText) : alert(classes[x].style.cssText);
              }
          }
      }
      getStyle('.web2sketch--highlighted');
    });
  });

})();
