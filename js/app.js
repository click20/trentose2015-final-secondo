var score = 0;

var FlirtrModel = {  
  
   /* It sets the phrase to analyse */
   check: function(){
        var ph_taken = $("input").val()
        return ph_taken;
   },
    
   analyse : function (phrase,data_pattern){
       
       for( var i=0; i<data_pattern.length; i++ ){
           
           if( phrase.indexOf( data_pattern[i].word ) != -1 ){
               
               if( phrase.indexOf( data_pattern[i].neutraliser ) != -1 ){
                   console.log("neutr");
                   score = 0;
               }else{
                   console.log("score= ",data_pattern[i].score);
                   score+= data_pattern[i].score;
               }
      
           }else{
               continue;
           }
               
           
       }
       return score;
       
   },
  
   /* Returns the flirting score (number) of the phrase.
    * It is computed by looking for flirting patterns, 
    * adding up the individual scores of the matching
    * patterns (unless the pattern neutraliser is found to 
    * the right of the matching word)
    */
   getScore : function () {
       
       var ScoreTot = FlirtrModel.analyse(phrase, patterns);
       
   }
         
};


var FlirtView = {
    
    score: function(scoreTot){
        $(".score").text(scoreTot);
    }
    
};

var FlirtController = {
    
}; 

$(document).ready(function(){
    
    $("button").click( function(){
        FlirtView.score( FlirtrModel.analyse( FlirtrModel.check(), patterns ) );
        
    } )
    
    
});
