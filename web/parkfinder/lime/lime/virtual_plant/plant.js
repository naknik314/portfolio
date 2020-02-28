goog.provide('virtual_plant.Plant');
goog.require('lime.Circle');

virtual_plant.Pet = function(gameObj) {
  goog.base(this);

  this.gameObj = gameObj;
  this.happiness = 100;
  this.health = 100;

  this.setPosition(this.gameObj.width/2, this.gameObj.height/2);
  this.updateLook();
};

goog.inherits(virtual_plant.Plant,lime.Circle);

/**
 * update the plant's look according to it's happiness and health
 */
virtual_plant.Plant.prototype.updateLook = function() {
    //size of the pet according to the health
    var plantSize = this.gameObj.maxPetSize * this.health/100;
    this.setSize(petSize, petSize);

    //color according to the happiness (between green and red)
    var redAmount = parseInt((100-this.happiness)/100*255); //255 if 0 health
    var greenAmount = parseInt((this.happiness)/100*255); //255 if 100 health
    this.setFill(redAmount,greenAmount, 0);
};
