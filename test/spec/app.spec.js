/* Remember that blanket will only work with brackets live preview */
/* Try to maximise the coverage of the FlirtrModel object */

describe("Flirtr", function() {

  it("Should give the correct score", function() {  
    

    FlirtView.score( FlirtrModel.analyse( "love", patterns ) );
   
      expect( FlirtrModel.getScore() ).toBe(1);  
      
  });
 
});


