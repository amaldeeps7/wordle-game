var wordslist = ["fresh", "build", "india", "array"];
var words = wordslist[Math.floor(Math.random()*wordslist.length)].toUpperCase();
console.log(words)

//const words = "FRESH";
let attemptnum = 1;
let guessnum = 6;
let rowcheck = 0;

var i =0;
$(document).keydown(function(e)
    {
    var keynum;
    if(window.event)
    { // IE                 
        keynum = e.keyCode;
    }
    else if(e.which)
    { 
    // Netscape/Firefox/Opera                   
    keynum = e.which;
    }
    if(keynum > 64 && keynum < 123){
    if (rowcheck<5 && keynum != 8){
    keypressitem = String.fromCharCode(keynum).toUpperCase()
    console.log(keypressitem)
    console.log(keynum)
    $('td').eq(i).text(keypressitem)
    rowcheck++
    i++
    }
}
    if(keynum==8 && rowcheck > 0){
        i--
        $('td').eq(i).text('')
        $("td").eq(i).css("background-color", "white")
        rowcheck--
    }
   
    if(keynum==13 && i%5==0)
    {
        i--
        wordcheck(i)
        winnercheck(i)
        attemptnum++
        rowcheck=0
        i++
      
    }
    // i++
    // console.log(keynum)
});

function wordcheck(i){
    for(j=(i-4);j<=i;j++){
        currentcell = document.getElementsByTagName('td')[j].innerText
        wordtext = words[j%5]
        wordslist = Array.from(words)
        if (currentcell == wordtext) {
            $("td").eq(j).css("background-color", "green")
        }
        else if(wordslist.includes(currentcell)){
            $("td").eq(j).css("background-color", "yellow")
        }
        else {
             $("td").eq(j).css("background-color", "grey")
         }
    }
}

function winnercheck(i){
    var guessword = ""
    for(j=(i-4);j<=i;j++){
        currentcell1 = document.getElementsByTagName('td')[j].innerText
        guessword = guessword.concat(currentcell1)
    }
    console.log(guessword)
    if(guessword == words){
        //$("modal").modal();
        //alert("Winner in "+ attemptnum + " attempts.")
        $('.winmessage').text("You Won in Attempt " + attemptnum + " of 6")
        $('#winnermodal').modal('show');
    }
}