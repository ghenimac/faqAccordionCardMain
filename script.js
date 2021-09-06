const question = document.querySelectorAll(".question");
const answer = document.querySelectorAll(".answer");
const icon = document.querySelectorAll(".icon");
for(let i=0; i<question.length; i++){
    question[i].addEventListener('click', function(event){
            question[i].classList.toggle("open");
        
            if (answer[i].style.display === "block") {
                answer[i].style.display = "none";
                icon[i].style.transform = "none";
            } else {
                answer[i].style.display = "block";
                icon[i].style.transform = "rotate(180deg)";
            }
        
    })
}