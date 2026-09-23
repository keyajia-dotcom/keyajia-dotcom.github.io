$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "rgb(118, 0, 233)"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
     toggleGrid();


    // TODO 2 - Create Platforms
createPlatform(0, 600, 200, 20, '#b19ebc');
createPlatform(300, 500, 200, 20, '#7876ca');
createPlatform(600, 400, 200, 20, '#ffafcc');
createPlatform(900, 300, 200, 20, '#fffa6c');
createPlatform(1200, 200, 200, 20, '#9af8d7');


    // TODO 3 - Create Collectables
createCollectable("diamond", 100, 550, 0, 0);
createCollectable("steve", 700, 350, 0.5, 0.9);
createCollectable("diamond", 200, 1300, 0.5, 0.9);

    
    // TODO 4 - Create Cannons
createCannon("left", 200, 2000);
createCannon("right", 400, 1500);
createCannon("top", 300, 1000);

    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
