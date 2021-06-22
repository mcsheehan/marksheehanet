#!/usr/bin/env ts-node-script

// @ts-ignore
class Grid {

    cells : Cell[][];

    assignCellsToRow(){

    }

    assignCellsToColumn(){

    }

    assignCellsToSquare(){

    }

    populate() {
        this.cells = []

        for(let i=0; i<9; i++){
            this.cells[i] = []

            for(let j=0; j<9; j++){
                this.cells[i][j] = new Cell(0);
            }
        }
    }

    print(){
        const width = this.cells.length
        const height = this.cells[0].length
        let message = "";

        let straightLine = (width: number) : string => {
            return "-".repeat(width*2 + 1) + "\n"
        }

        for(let j=0; j<height; j++){
            message += straightLine(width)
            message += "|"
            for(let i=0; i<width; i++){
                message += this.cells[i][j].value
                message += "|"
            }
            message += "\n"
        }
        message += straightLine(width)
        console.log(message)
    }
}

class Square {

}

class Row {

}

class Column {

}

class Cell {
    constructor(value: number) {
        this.value = value
    }
    value : number
}

let myGrid = new Grid();
myGrid.populate();
myGrid.print();


