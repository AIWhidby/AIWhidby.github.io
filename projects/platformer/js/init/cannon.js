(function (window) {
    'use strict';
    window.opspark = window.opspark || {};
    window.opspark.collectable = window.opspark.collectable || {};
    let cannon = window.opspark.cannon;
    
    /**
     * init: Initialize all cannons.
     *
     * GOAL: Add at least 3 cannons to make your level challenging. 
     * 
     * Use the createCannon Function to create cannons for the level. 
     * 
     * createCannon() takes these arguments:
     *      
     *      createPlatform(type, position, delay);
     * 
     *      type: "top", "bottom", "left", or "right"
     *      position: The position of the cannon along whichever side the cannon is placed on
     *          - the x coordinate for "top" and "bottom" cannons
     *          - the y coordinate for "left" and "right" cannons
     *      delay: OPTIONAL the number of milliseconds to wait before firing the first projectile
     */ 
    function init(game) {
        let createCannon = cannon.create;
       /*
       /*
createCannon(type, position, delay);

type: The type of cannon to be made. This can be one of the following Strings: "top", "bottom", "left", or "right"
position: The position coordinate for the cannon along the wall it is placed.
delay: OPTIONAL The number of milliseconds to wait before firing the first projectile

*/





        ////////////////////////////////////////////////////////////////////////
        // ALL YOUR CODE GOES BELOW HERE ///////////////////////////////////////
        
        // example: 

        createCannon("top", 450);
        createCannon("bottom", 450);
        createCannon("top", 450); // a cannon on the top of the screen, located at x = 450
        createCannon("left", 300, 1000); // a cannon on the left side of the screen, located at y = 300, with a 1 second delay (1000ms)
       




        // ALL YOUR CODE GOES ABOVE HERE ///////////////////////////////////////
        ////////////////////////////////////////////////////////////////////////
    };
    cannon.init = init;
})(window);
