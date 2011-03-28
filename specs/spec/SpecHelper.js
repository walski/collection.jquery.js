beforeEach(function() {
  this.addMatchers({
    toEqualArray: function(b) { return !(this.actual < b || b < this.actual); }
  });
});
