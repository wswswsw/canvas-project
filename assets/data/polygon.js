class DrawingPolygon extends PaintFunction {
    constructor(contextReal, contextDraft) {
        super();
        this.contextReal = contextReal;
        this.contextDraft = contextDraft;
        this.actionCount = 0;
        this.pointsArr = [];
    }

    onMouseDown(coord, event) {

        this.contextReal.lineCap = "round";
        this.contextDraft.lineCap = "round";
        this.contextReal.lineJoin = "round";
        this.contextDraft.strokeStyle = strokeColor;
        this.contextReal.strokeStyle = strokeColor;


        //action for the First click
        if (this.actionCount === 0) {
            this.firstOrigX = coord[0];
            this.firstOrigY = coord[1];
            this.contextReal.beginPath();
            this.contextReal.moveTo(this.firstOrigX, this.firstOrigY);
            this.pointsArr.push({ "x": this.firstOrigX, "y": this.firstOrigY });
        }

        dragging = true;
    }

    onMouseMove() { }
    onMouseLeave() { }

    onMouseUp(coord, event) {
        if (this.actionCount === 0) {
            this.newX = coord[0];
            this.newY = coord[1];
            this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
            this.toDrawReal(this.newX, this.newY, coord[0], coord[1]);
            this.pointsArr.push({ "x": coord[0], "y": coord[1] });
            this.actionCount = 1;

        } else if (this.actionCount === 1) {
            if (Math.pow((this.firstOrigX - coord[0]), 2) < 400 && Math.pow((this.firstOrigY - coord[1]), 2) < 400) {
                dragging = false;
                this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
                this.contextReal.lineTo(this.firstOrigX, this.firstOrigY);
                this.pointsArr.push({ "x": this.firstOrigX, "y": this.firstOrigY });
                this.contextReal.stroke();
                this.polygonFillTest();
                this.pointsArr = [];
                this.actionCount = 0;

            } else {
                this.newX = coord[0];
                this.newY = coord[1];
                dragging = true;
                this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
                this.toDrawReal(this.newX, this.newY, coord[0], coord[1]);
                this.pointsArr.push({ "x": coord[0], "y": coord[1] });
            }
        }
    }

    onDragging(coord, event) {
        if (this.actionCount === 0) {
            this.toDrawDraft(this.firstOrigX, this.firstOrigY, coord[0], coord[1]);

        } else if (this.actionCount === 1) {
            this.toDrawDraft(this.newX, this.newY, coord[0], coord[1]);
        }
    }

    polygonFillTest() {
        this.contextReal.beginPath();
        this.contextReal.moveTo(this.pointsArr[0].x, this.pointsArr[0].y);
        for (var i = 1; i < this.pointsArr.length; i++) {
            this.contextReal.lineTo(this.pointsArr[i].x, this.pointsArr[i].y);
        }

        this.contextReal.stroke();
    }

    toDrawDraft(fromX, fromY, toX, toY) {

        this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
        this.contextDraft.beginPath();
        this.contextDraft.moveTo(fromX, fromY);
        this.contextDraft.lineTo(toX, toY);
        this.contextDraft.closePath();
        this.contextDraft.stroke();
    }

    toDrawReal(fromX, fromY, toX, toY) {
        this.contextReal.lineTo(fromX, fromY);
        this.contextReal.stroke();
        this.contextReal.closePath();
        this.contextReal.beginPath();
        this.contextReal.moveTo(toX, toY);
        this.contextReal.closePath();
    }

}


