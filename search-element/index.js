module.exports = SearchGrid;

function SearchElement(key, element) {
  if (!(this instanceof SearchElement))
    return new SearchGrid(options);
  
  this.key = key;
  this.element = element;
  this.visible = true;
}

SearchGrid.prototype.hide = function(element) {
  this.visible = false;
};

SearchGrid.prototype.show = function(element) {
  this.visible = true;
};

SearchGrid.prototype.sameKey = function(key) {
  return this.key === key ? true : false;
};