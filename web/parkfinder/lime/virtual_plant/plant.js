goog.provide('virtual_plant.Plant');
goog.require('lime.Circle');

virtual_plant.Plant = function(gameObj) {
  goog.base(this);

  this.gameObj = gameObj;
  this.happiness = 100;
  this.health = 100;

  this.setPosition(this.gameObj.width/2, this.gameObj.height/2);
  this.updateLook();

  var dt = 100;
  lime.scheduleManager.scheduleWithDelay(function() {
          this.happiness -= 0.1;
          this.health -= 0.1;

          //game over
          if(this.happiness <= 0 || this.health <= 0) {
              alert('Game over!');
              location.reload();
          }

          this.updateLook();
      }, this, dt);

};

goog.inherits(virtual_plant.Plant,lime.Circle);

/**
 * update the plant's look according to it's happiness and health
 */
virtual_plant.Plant.prototype.updateLook = function() {
    //size of the plant according to the health
    var plantSize = this.gameObj.maxPlantSize * this.health/100;
    this.setSize(plantSize, plantSize);

    //color according to the happiness (between green and red)
    var redAmount = parseInt((100-this.happiness)/100*255); //255 if 0 health
    var greenAmount = parseInt((this.happiness)/100*255); //255 if 100 health
    this.setFill(redAmount,greenAmount, 0);
};
