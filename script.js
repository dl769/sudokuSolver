var CV  //vertical
var CH  //horizontal  


//var array = [9]
var array = [1,2,3,4,5,6,7,8,9]

var field = new Array(10)


for (let q = 1; q <10; q++){
    field[q] = new Array(10);
}

let properValues = [0,"","0","1","2","3","4","5","6","7","8","9",undefined]
let errors = 0;
function getval(){
    errors = 0;
for (let i=1; i<10; i++){
    for (let j=1; j<10; j++){
        var s = i*10+j;
        field[i][j] = $('#'+s).val()
        if(field[i][j]==""){
            field[i][j]= 0;
        }
        if(!properValues.includes(field[i][j])){
            console.log(field[i][j],i,j)
            $('#'+s).css('color','red')
            errors = errors + 1;
        }else{
            $('#'+s).css('color','black')
        }


        field[i][j] =  parseInt(field[i][j])
    }
}
}

console.log(field);
function solveIt(){
    getval()
    if(errors == 0){
        solve()
    }else{
        window.alert("Incorrect values on the board. Please correct it.")
    }
}

function solve(){

    do{
var output = 0;
for (var i = 1; i <10; i++){
    for (var j = 1; j < 10; j++){

        if(field[i][j] == 0){
                      
            for (var c = 1; c < 10; c++){
                if (array.includes(field[c][j])){    //  <---> horizontal
                    
                    const index = array.indexOf(field[c][j]);   //find this element in arr
                    array.splice(index, 1);
                }
            }

            for (var c = 1; c < 10; c++){
                if (array.includes(field[i][c])){    //  ^| vertical
                    const index = array.indexOf(field[i][c]);   //find this element in arr
                    array.splice(index, 1);
                }
            }

            if (i>0 && i<4){CV = 1}
            if (i>3 && i<7){CV = 4}
            if (i>6 && i<10){CV = 7}

            if (j>0 && j<4){CH = 1}
            if (j>3 && j<7){CH = 4}
            if (j>6 && j<10){CH = 7}

            for (var z = CH; z <CH+3; z++){
                if (array.includes(field[CV][z])){
                    const index = array.indexOf(field[CV][z]);   //find this element in arr
                    array.splice(index, 1);
                }
            }

            CV=CV+1; //vertical 1 down
            for (var z = CH; z <CH+3; z++){
                if (array.includes(field[CV][z])){
                    const index = array.indexOf(field[CV][z]);   //find this element in arr
                    array.splice(index, 1);
                }
            }

            CV=CV+1; //vertical 1 down
            for (var z = CH; z <CH+3; z++){
                if (array.includes(field[CV][z])){
                    const index = array.indexOf(field[CV][z]);   //find this element in arr
                    array.splice(index, 1);
                }
            }

            if(array.length == 1){
                field[i][j] = array[0];
                output = output + 1;
            }
            console.log(output,'output')
        }array = [1,2,3,4,5,6,7,8,9]

    }
}
    }while(output>0)

    checkCorrectFields()
    if(counter>79){
        $('#postText').html("Sudoku solved...")
    }else{
        $('#postText').html("Could not solve sudoku...")
    }
    printSolution();
}

var counter = 0;
function checkCorrectFields(){
    for (let i=1; i<10; i++){
        for (let j=1; j<10; j++){
            if (array.includes(field[i][j])){
                counter = counter + 1;
            }
        }
    }
}

function printSolution(){
    for (let i=1; i<10; i++){
        for (let j=1; j<10; j++){
            var s = i*10+j;
            var temp = $('#'+s).val();
            temp = parseInt(temp);
            if( field[i][j] != temp){
                $('#'+s).val(field[i][j]);
                $('#'+s).css("color","green")
                console.log(field[i][j],temp)
            }
    }
}
}
function appendSolution(){
    for (var i = 1; i <10; i++){
        $('body').append('<br>')
        for (var j = 1; j < 10; j++){
    
            $('body').append(' ',field[i][j])

        }
    }
    $('body').append('<br>---------------------')
}

function refresh(){
    for (let i=1; i<10; i++){
        for (let j=1; j<10; j++){
            var s = i*10+j;
            field[i][j] = ""
            $('#'+s).val(field[i][j])
            }
        }
    $('#postText').html("")
}