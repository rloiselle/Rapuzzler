// Test to check for click event
describe("testing anonymous functions", function(){

  it('changes cell style', function() {
    $('.cell[data-row="2"][data-col="2"]').trigger('click');

    waitsFor(function() {
      return $('.cell[data-row="2"][data-col="2"]').hasClass('blue');
    }, 'blue never loaded', 500);

    // runs (function() {
    //   expect($('div').hasClass('.blue'));
    // });

  });

});
