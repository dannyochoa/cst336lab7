<!DOCTYPE html>
<html>
    <head>
        <title>Hangman</title>
        <link  href="css/styles.css" rel="stylesheet" type="text/css" />
        <link href="https://fonts.googleapis.com/css?family=Pacifico" rel="stylesheet">
        <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
        
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>
        
        <meta name="viewport" content="width=device-width, initial-scale=1">
    </head>
    <body>
        <div class='container text-center'>
            <header>
               <h1>Hangman</h1>
            </header>
            
            <div id="word"></div>
            <div id="letters">
                <!--<input type="text" id="letterBox">-->
                <!--<button class="letter" id= "A">A</button>-->
                <!--<button class="letter" id = "B">B</button>-->
                <!--<button class="letter">C</button>-->
                <!--<button class="letter">D</button>-->
                <!--<button class="letter">E</button>-->
            </div>
            <br/><br/>
            <br> <button id="hintButton">Hint</button>
            <div id="man">
               <img src="img/stick_0.png" id="hangImg">
            </div>
            
            <div id="won">
                <h2>You Won!</h2>
                <button class="replayBtn btn btn-success">Play Again</button>
            </div>
            <div id="lost">
                <h2>You Lost!</h2>
                <button class="replayBtn btn btn-warning">Play Again</button>
            </div>
            
            <div id="guessedWord">
                <br><br>
                <table id="table" style="width:100%">
                    
                </table>
            </div>
        </div>

    </body>
    
    
    <script>
            
        var selectedWord = "";
        var selectedHint = "";
        var board = [];
        var remainingGuess = 6;
        var hintUsed = false;
        var words = [{word: "snake", hint: "It's a reptile"},
                     {word: "monkey", hint: "It's a mammal"},
                     {word: "beetle", hint: "It's an insect"},
                     {word: "horse", hint: "It's a mammal"},
                     {word: "whale", hint: "It's a mammal"}];
        var alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 
                        'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 
                        'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
        
        //LISTENERS
       startGame();
       
        $(".letter").click( function(){
            checkLetter($(this).attr("id"));
            disableButton($(this));
        });
        
        $("#hintButton").click( function(){
            if(hintUsed == false){
            $("#word").append("<span class='hint'>Hint: " + selectedHint + "</span>");
            remainingGuess -= 1;
            updateMan();
            hintUsed = true;
            }
        })
        
        $(".replayBtn").on("click", function(){
            location.reload();
        });
        //FUNCTIONS
        function startGame(){
            pickWord();
            initBoard();
            updateBoard();
            createLetters();
        
        }
        function initBoard(){
            for (var letter in selectedWord){
                board.push("_");
            }
        }
        
        function pickWord(){
            var randomInt = Math.floor(Math.random() * words.length);
            selectedWord = words[randomInt].word.toUpperCase();
            // alert(selectedWord);
            selectedHint = words[randomInt].hint;
        }
        
        function updateBoard(){
            $("#word").empty();
            
            for(var i = 0; i < board.length; i++){
                $("#word").append(board[i] + " ");
                // $("#word").html()
            }
            $("#word").append("<br />");
            // $("#word").append("<span class='hint'>Hint: " + selectedHint + "</span>");
        }
        
        function createLetters(){
            for(var letter of alphabet){
                $("#letters").append("<button class='letter' id='" + letter + "'>" + letter + "</button>");
            }
        }
        
        function checkLetter(letter){
            var positions = [];
            for(var i=0; i< selectedWord.length;i++){
                if(letter == selectedWord[i]){
                    positions.push(i);
                }  
            }
            
            if(positions.length > 0){
                updateWord(positions, letter);
                
                if(!board.includes('_')){
                    endGame(true);
                    $("#guessedWord").append("<h3>Word guessed</h3>");
                     $("#table").append("<td style='color:green;'>" + selectedWord + "</td>");
                }
                
            }else{
                remainingGuess -= 1;
                updateMan();
            }
            
            if(remainingGuess <= 0){
                endGame(false);
                $("#guessedWord").append("<h3>Word guessed</h3>");
                 $("#table").append("<td style='color:red;'>" + selectedWord + "</td>");
            }
        }
        
        function updateWord(position,letter){
            for(var pos of position){
                board[pos] = letter;
            }
            
            updateBoard();
        }
        
        function updateMan(){
            $("#hangImg").attr("src", "./img/stick_" + (6 - remainingGuess) + ".png");
        }
        
        function endGame(win){
            $("#letters").hide();
            if(win){
                $('#won').show();
            }else{
                $('#lost').show();
            }
        }
        
        function disableButton(btn){
            btn.prop("disabled",true);
            btn.attr("class", "btn btn-danger")
        }
    </script>
    
</html>