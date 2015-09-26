var SearchElement = require('./search-element');

module.exports = SearchGrid;

var results = [];
var searchKey = '';
var searchInput;
var template = fs.readFileSync(__dirname + '/index.html', 'utf8');

function SearchGrid(options) {
  if (!(this instanceof SearchGrid))
    return new SearchGrid(options);

  if(typeof options == 'object'){
    searchKey = options.key;
    if(options.searchInput){
      searchInput = options.searchInput;
      searchInput.addEventListener('keydown', function(event) {
        this.find(event);
      }.bind(this), false);
    }
  }
}

SearchGrid.prototype.add = function(element) {
  var element = new SearchElement(searchKey, element);
  results.push(element);
};

SearchGrid.prototype.remove = function(key) {
 var iterator = array.length;
  while(iterator--){
    if(array[iterator].sameKey(value)){
      array.splice(iterator,1);
    }
  }
};

SearchGrid.prototype.size = function() {
  return results.length;
};

SearchGrid.prototype.find = function(key) {
  for (var i = 0; i < results.length; i++) {
    if (results == ){
      count++;
    }
  }
};