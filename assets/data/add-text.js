class AddText extends PaintFunction{
    constructor(contextReal,contextDraft){
        super();
        this.contextReal = contextReal;
        this.contextDraft = contextDraft;
        this.fontWeight = 600; //font weight
        this.fontSize = 30; //font size
        this.fontStyle = "Arial"; //font-family
        this.fillStyle = strokeColor; //font color
        this.textX = [];
        this.textY = [];
    }
    
//onMouseDown -textbox comes out 
    onMouseDown(coord,event){
        this.textX.push(coord[0]);
        this.textY.push(coord[1]);

       
        //Make the input box appear on the clicked area
        this.fontStartY = this.textY[0] - this.fontSize;
        $('#textInput').css({"display":"block","transform":"translateY("+coord[1]+"px) translateX("+coord[0]+"px)","font-size":this.fontSize+"px","color":this.fillStyle,"font-family":this.fontStyle,"font-weight":this.fontWeight,"padding":"0","border-style":"dotted"});
       
        //If user click outside the input box, text will be printed on the canvas real
        
        if ((this.textX.length > 1) && (event.target.id != $('#textInput'))){
            this.outputText(this.contextReal);  
        }
    }


    //Print the text on the canvas real
    outputText(ctx){
        let inputText = $('#textInput').val();
        this.fontSize = 30; //font size
        this.contextReal.fillStyle = strokeColor;
        contextReal.fillText(inputText,this.textX[0],this.textY[0]+parseInt(this.fontSize));
    
       //contextReal.stroke();
        $('#textInput').css({"display":"none","transform":"translateY(0) translateX(0)"});
        $('#textInput').val('');

        //$('body').find('input[type=text],input').val('');
        this.textX= [];
        this.textY = [];
    }

}
