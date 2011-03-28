describe("collection.jquery.js", function() {
  var collection;
  var eventCallback;
  
  beforeEach(function() {
    collection = $.collection();
    eventCallback = jasmine.createSpy();
  });
  
  it("fires event on add and keeps normal behaviour", function() {
    collection.bind('dataAdded', eventCallback);
    collection.push(123);
    expect(eventCallback).toHaveBeenCalled();
    expect(eventCallback.mostRecentCall.args[1]).toBe(123);
    expect(collection).toEqualArray([123]);

    eventCallback = jasmine.createSpy();
    collection.bind('dataAdded', eventCallback);
    collection.unshift(456);
    expect(eventCallback).toHaveBeenCalled();
    expect(eventCallback.mostRecentCall.args[1]).toBe(456);
    expect(collection).toEqualArray([456, 123]);
  });
  
  describe("with data", function() {
    beforeEach(function() {
      collection.push(123);
      collection.push(456);
      collection.push(789);
    });
    
    it("fires event on remove and keeps normal behaviour", function() {
      collection.bind('dataRemoved', eventCallback);
      expect(collection.pop()).toBe(789);
      expect(eventCallback).toHaveBeenCalled();
      expect(eventCallback.mostRecentCall.args[1]).toBe(789);
      expect(collection).toEqualArray([123, 456]);
    
      eventCallback = jasmine.createSpy();
      collection.bind('dataRemoved', eventCallback);
      expect(collection.shift()).toBe(123);
      expect(eventCallback).toHaveBeenCalled();
      expect(eventCallback.mostRecentCall.args[1]).toBe(123);
      expect(collection).toEqualArray([456]);
    });
  
    it("fires event when array gets changed (sort, splice, reverse) and keeps normal behaviour", function() {
      collection.push(124);
      collection.bind('dataChanged', eventCallback);
      expect(collection.sort()).toEqualArray([123, 124, 456, 789]);
      expect(eventCallback).toHaveBeenCalled();
      expect(collection).toEqualArray([123, 124, 456, 789]);
      
      eventCallback = jasmine.createSpy();
      collection.bind('dataChanged', eventCallback);
      expect(collection.splice(0, 2, 'abc', 'def', 'hij'));
      expect(eventCallback).toHaveBeenCalled();
      expect(collection).toEqualArray(['abc', 'def', 'hij', 456, 789]);
      
      eventCallback = jasmine.createSpy();
      collection.bind('dataChanged', eventCallback);
      expect(collection.reverse());
      expect(eventCallback).toHaveBeenCalled();
      expect(collection).toEqualArray([789, 456, 'hij', 'def', 'abc']);
    });
  });
});