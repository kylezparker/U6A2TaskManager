//store class in global variable
const nonImpIcon="far fa-star";
const impIcon="fas fa-star";
var isImportant=false;
var isVisible=true;

function toggleImportant(){
    // console.log("clickaroo!");

    // $("#iImportant").removeClass(nonImpIcon);
    // $("#iImportant").addClass(impIcon);
    if(isImportant){
        $("#iImportant").removeClass(impIcon).addClass(nonImpIcon);
        isImportant=false;
    }else{
        $("#iImportant").removeClass(nonImpIcon).addClass(impIcon);
        isImportant=true;
    }
 }

 function togglePanel(){
    console.log("display");
    if(isVisible){
        $("#pnlForm").fadeOut();
        isVisible=false;
    }else{
        $("#pnlForm").fadeIn();
        isVisible=true;
    }
 }


function init(){
    console.log("working");


    // load data

    //hook events
    //inline function anonymous
    // $("#iImportant").click(function(){
    //     console.log("clickaroo!");
    //  });
    $("#iImportant").click(toggleImportant);

    $("#btnShowHide").click(togglePanel);
}
window.onload=init;


//think of logic for toggle

