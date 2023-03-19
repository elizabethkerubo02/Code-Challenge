// function for calculating grade

function calculateGrade(){
  const marks = parseInt(document.getElementById("marks").value);
  let grade;

  if(marks >= 0 && marks <= 100){
    if(marks >= 80){
      grade = "A";
    }else if (marks >= 60){
      grade = "B";
    }else if (marks >= 50){
      grade = "C";
    }else if (marks >= 40){
      grade = "D";
    }else{
      grade = "E"
    }
    document.getElementById("results").innerHTML = "The student's grade is:" + grade;

  }else{
    document.getElementById("results").innerHTML = "Invalid!Please enter a number between 0 and 100.";

  }
}

// speed detector function

function calculateDemeritPoints(){

  // get the speed input
  const speed = document.getElementById("speedInput").value;

  // calculate the number of demerit points
  let speedLimit = 70;
  let demeritPerKm = 5;
  let speedMessage = "";

  if(speed <= speedLimit){
    speedMessage = "Ok";
  }else{
    const demeritPoints = Math.floor((speed - speedLimit) / demeritPerKm);
    if(demeritPoints >= 12){
      speedMessage = "Licence Suspended";
    }else{
      speedMessage = `Demerit Points : ${demeritPoints}`;
    }
  }
  document.getElementById("result").innerHTML = speedMessage;

}
//
//  net pay salary 

function calculateNetSalary(){
  const basicSalary = parseInt(document.getElementById("basic-salary").value);

  const benefits = parseInt(document.getElementById("benefits").value);
  const nhifRates = [0,150,300,500,600,750,850,900,950,1000,1100,1200,1300,1400,1500];
  const taxBrackets = [{upperLimit:12298,rate:0},{upperLimit:23885,rate:0.1},{upperLimit:35472,rate:0.15},{upperLimit:47059,rate:0.20},{upperLimit:Infinity,rate:0.25}];
  const nhif = nhifRates[Math.ceil(basicSalary / 1000)];
  const payee = taxBrackets.reduce((acc,bracket) => acc + bracket.rate * Math.max(Math.min(basicSalary - acc, bracket.upperLimit - acc),0),0);
  const nssf = Math.min(basicSalary * 0.06 + benefits * 0.06, 200);
  const grossSalary = basicSalary + benefits;
  const netSalary = grossSalary - payee - nhif - nssf;
  
  document.getElementById("net-salary").innerHTML = `Gross Salary: ${grossSalary},payee: ${payee},NHIF Deductions ${nhif},
  NSSF Deduction: ${nssf}, Net Salary: ${netSalary}`;
}  


