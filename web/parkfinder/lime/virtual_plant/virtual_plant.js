//set main namespace
  goog.provide('virtual_plant');
  goog.provide('lime.Director');
  goog.provide('lime.Scene');
  goog.provide('lime.Layer');
  goog.provide('lime.Renderer');

  //get requirements
  goog.require('lime.Director');
  goog.require('lime.Scene');
  goog.require('lime.Layer');
  goog.require('lime.Renderer');

  // entrypoint
  virtual_plant.start = function(){
      //object to store game-level properties
      var gameObj = {
          width: 320,
          height: 480,
          renderer: lime.Renderer.CANVAS
      };

      var director = new lime.Director(document.body,gameObj.width,gameObj.height);
      var gameScene = new lime.Scene().setRenderer(gameObj.renderer)
      var gameLayer = new lime.Layer().setAnchorPoint(0,0);
      gameScene.appendChild(gameLayer);

      director.makeMobileWebAppCapable();
      director.replaceScene(gameScene);
  }

  //this is required for outside access after code is compiled in ADVANCED_COMPILATIONS mode
  goog.exportSymbol('virtual_plant.start', virtual_plant.start);
