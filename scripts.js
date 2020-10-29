calculate = () => {
    const score1 = document.getElementById("score1").value;
    const score2 = document.getElementById("score2").value;
    const score3 = document.getElementById("score3").value;
    const score4 = document.getElementById("score4").value;
    const sum = parseInt(score1) + parseInt(score2) + parseInt(score3) + parseInt(score4);

    document.getElementById("submitButton").style.display = "none";
    document.getElementById("newButton").style.display = "";
    document.getElementById("gradeCriteria").style.display = "none";

    if(!sum) {
        document.getElementById("resultHeading").className = "text-danger";
        document.getElementById("resultHeading").innerHTML = "*Please Enter Score Values Above*";
        document.getElementById("submitButton").style.display = "";
        document.getElementById("newButton").style.display = "none";
    }
    if(sum <= 39) {
        document.getElementById("resultHeading").className = "text-success";
        document.getElementById("resultHeading").innerHTML = "Your Results";
        document.getElementById("result").innerHTML = `<b>Grade:</b> D <br/> <b>Score:</b> ${sum}`;
    }
    if (sum >= 40 && sum <= 49) {
        document.getElementById("resultHeading").className = "text-success";
        document.getElementById("resultHeading").innerHTML = "Your Results";
        document.getElementById("result").innerHTML = `<b>Grade:</b> C <br/> <b>Score:</b> ${sum}`;
    }
    if (sum >= 50 && sum <= 59) {
        document.getElementById("resultHeading").className = "text-success";
        document.getElementById("resultHeading").innerHTML = "Your Results";
        document.getElementById("result").innerHTML = `<b>Grade:</b> B <br/> <b>Score:</b> ${sum}`;
    }
    if (sum >= 60 && sum <= 69) {
        document.getElementById("resultHeading").className = "text-success";
        document.getElementById("resultHeading").innerHTML = "Your Results";
        document.getElementById("result").innerHTML = `<b>Grade:</b> A <br/> <b>Score:</b> ${sum}`;
    } 
    if (sum >= 70) {
        document.getElementById("resultHeading").className = "text-success";
        document.getElementById("resultHeading").innerHTML = "Your Results";
        document.getElementById("result").innerHTML = `<b>Grade:</b> A* <br/> <b>Score:</b> ${sum}`;
    }
};