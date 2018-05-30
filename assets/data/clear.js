      //Should I write a new function for this clear feature??//

class Clear extends PaintFunction{
    constructor(contextReal,contextDraft){
        super();
        this.contextReal = contextReal;
        this.contextDraft = contextDraft;            
    }
    
//use the clearRect function 
$("#resetCanvas").click(function(){
        //Used the [0] to select the correct element in canvas
    context.clearRect(0,0, canvas[0].width, canvas[0].height); 
});
