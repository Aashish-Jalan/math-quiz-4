player1_name = localStorage.getItem("player1_name");
player2_name = localStorage.getItem("player2_name");

score = 0;
score_2 = 0;


document.getElementById("player1_name").innerHTML = player1_name + ":"; 
document.getElementById("player2_name").innerHTML = player2_name + ":";

document.getElementById("score").innerHTML = score;
document.getElementById("score_2").innerHTML = score_2;


document.getElementById("player_question").innerHTML = "Question Turn -"+ player1_name;
document.getElementById("player_answer").innerHTML = "Answer Turn - " + player2_name;



function send() {
    word_1 = document.getElementById("word_1").value;
    word_2 = document.getElementById("word_2").value;
    actual_answer = parseInt(word_1) * parseInt (word_2);
    question_number  = "<h4> " + word_1 + " X " + word_2 + "</h4>";
    input_box  = "<br> Answer : <input type='number' id = 'input_check_box'>";
    check_button = "<br> <br> <button class = 'btn btn-info' onclick = 'check()'> Check </button>";
    row = question_number + input_box + check_button ; 
    document.getElementById("output").innerHTML = row;
    document.getElementById("word_1").value = ""; 
    document.getElementById("word_2").value = ""; 
    time_start()
    
  
}


question_turn = "player1";
answer_turn = "player2";

function check()
{
   get_answer = document.getElementById("input_check_box").value;
   if (get_answer == actual_answer)
   {
    if (answer_turn == "player1")
    {
        score = score+1;
        document.getElementById("score").innerHTML =score;

    }
    else
    {
        score_2 = score_2 + 1;
        document.getElementById("score_2").innerHTML = score_2;

    }
   }

   if (question_turn == "player1")
    {
        question_turn = "player2"
        document.getElementById("player_question").innerHTML = "Question Turn - " + player2_name;
     }
     else
     {

        question_turn = "player1"
        document.getElementById("player_question").innerHTML = "Question Turn - " + player1_name;
     }

     if (answer_turn == "player1")
     {
         answer_turn = "player2"
         document.getElementById("player_answer").innerHTML = "Answer Turn - " + player2_name;
     }
     else
     {
        answer_turn = "player1"
        document.getElementById("player_answer").innerHTML = "Answer Turn - " + player1_name;
     }

     document.getElementById("output").innerHTML = "";

}
