//set main namespace
goog.provide('virtual_plant');
goog.provide( "goog.events" );
goog.provide( "goog.dom" );
goog.provide( "myapp.subapp.controller" );
goog.provide( "myapp.subapp.view" );
goog.provide('lime.Director');
goog.provide('lime.Scene');
goog.provide('lime.Layer');
goog.provide('virtual_plant.Plant');

  //get requirements
goog.require( "goog.events" );
goog.require( "goog.dom" );
goog.require( "myapp.subapp.controller" );
goog.require( "myapp.subapp.view" );
goog.require('lime.Director');
goog.require('lime.Scene');
goog.require('lime.Layer');
goog.require('virtual_plant.Plant');

  // entrypoint
  virtual_plant.start = function(){
      //object to store game-level properties
      var gameObj = {
          width: 320,
          height: 480,
					maxPlantSize: 200,
          renderer: lime.Renderer.CANVAS
      };

      var director = new lime.Director(document.body,gameObj.width,gameObj.height);
      var gameScene = new lime.Scene().setRenderer(gameObj.renderer)
      var gameLayer = new lime.Layer().setAnchorPoint(0,0);
      gameScene.appendChild(gameLayer);

			var background = new lime.Sprite().setSize(gameObj.width,gameObj.height*4/5).
						setFill('#F3E2A9').setAnchorPoint(0,0).setPosition(0,0);

			var menuArea = new lime.Sprite().setSize(gameObj.width,gameObj.height/5).
						setFill('#8B5A00').setPosition(gameObj.width/2,gameObj.height*9/10)

			gameLayer.appendChild(background);
			gameLayer.appendChild(menuArea);

			//create plant
var pet = new virtual_plant.Plant(gameObj, gameLayer);

var background = new lime.Sprite().setSize(gameObj.width,gameObj.height*4/5).
setFill('#F3E2A9').setAnchorPoint(0,0).setPosition(0,0);

var menuArea = new lime.Sprite().setSize(gameObj.width,gameObj.height/5).
setFill('#8B5A00').setPosition(gameObj.width/2,gameObj.height*9/10)

gameLayer.appendChild(background);
gameLayer.appendChild(menuArea);

gameLayer.appendChild(plant);

      director.makeMobileWebAppCapable();
      director.replaceScene(gameScene);
  }

  //this is required for outside access after code is compiled in ADVANCED_COMPILATIONS mode
  goog.exportSymbol('virtual_plant.start', virtual_plant.start);
