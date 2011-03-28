# collection.jquery.js

 This [jQuery](http://jquery.com) Plugin introduces a collection that basically
 is a JavaScript array which comes with jQuery events when it gets changed.
 
 It's meant as a supplement to jQuery's data() method.
 
## Events

  * dataAdded
  * dataRemoved
  * dataChanged
  
### dataAdded
Is called when either push() or unshift() is called on a collection, therefore when a element gets added to the collection.

#### Arguments
*dataAdded* event handlers are getting one additional argument passed which is the element (or list of elements) that gets added to the collection.

### dataRemoved
Is called when either pop() or shift() is called on a collection, therefore when a element gets removed from the collection.

#### Arguments
*dataAdded* event handlers are getting one additional argument passed which is the element (or list of elements) that gets removed from the collection.

### dataChanged
Is called when either sort(), slice() or revert() is called on a collection, therefore when the collection changes it's order or elements are added and removed at once.

#### Arguments
*dataChange* event handlers are getting no additional arguments passed.

## Installation

Just include jQuery and collection.jquery.js in your HTML Head:

<pre>
  &lt;!DOCTYPE html>

  &lt;html>
  &lt;head>
    &lt;script src="jquery-1.5.1.min.js" charset="utf-8">&lt;/script>
    &lt;script src="collection.jquery.js" charset="utf-8">&lt;/script>
  ...
</pre>

## Usage Examples

Simple example:

<pre>
  ...
  &lt;script style="text/javascript">
    var fruits = $.collection();
    fruits.bind('dataAdded', function(event, fruit) {
      alert("A " + fruit + " has been added.");
    });
    fruits.push('apple');
    fruits.push('banana');
  &lt;/script>
  ...
</pre>