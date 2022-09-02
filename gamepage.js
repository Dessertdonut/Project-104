var y = math.floor(Math.random() * 10 + 1);

if(x == y)
{
    alert("CONGRATULATIONS!!!"+playername+" YOU GUESSED IT RIGHT IN "
    + guess + " GUESS ");
    guess = 1;
}

else if(x > y)

{
    guess++;
    alert("OOPS SORRY!! TRY A SMALLER NUMBER");
}
else
{
    guess++;
    alert("OOPS SORRY!! TRY A GREATER NUMBER")
}
var x = document.getElementById("guessField").value;

function playAgain(){
    y = Math.floor(Math.random() * 10 + 1);
}