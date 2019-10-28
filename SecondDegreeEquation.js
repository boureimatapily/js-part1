function SecondDegreeEquation(a,b,c){
    let Delta 
    let  X,X1,X2;
    
    console.log("Your equation is: " + a + "X*X" + "+" + b + "X" + "+" + c)
    if (a != 0){
        Delta = (b*b)-(4*a*c)
        RootSquareDelta =  Math.sqrt(Delta)
        console.log("Delta = " + "(" + b +"*"+ b + ")" + "-" + "4" +"("+ a +")("+ "*" + c+ ")" +"= " + Delta)
            if (Delta > 0){
                console.log("Delta > 0, we have two solution")
                        X1 = ((b*b) - RootSquareDelta)/(2*a)
                        X2 = ((b*b) +  RootSquareDelta)/(2*a)  
                        console.log("X1 = " + X1)
                        console.log("X2 = " + X2)               
                        }
            else if(Delta == 0){
                console.log("Delta = 0, we have one solution")
                                X = (b*b)/(2*a)   
                                console.log("X = " + X)                     
                                 }
            else {
                 console.log("Delta is smaller than 0 no solution")             
                 }
                }
    else if (a == 0){
        console.log("00ps a = 0, first degree equation , we have one solution")
                        X = (-c)/b
                        console.log("X1 = " + X)     
                    }
    else{
        console.log(X1)("infinty of solution")
        }
    }
   
alert("We are going to solve a second degree equation like aX*X + bX + c")
alert("Where a,b,c are variable that you are going to provide ")
SecondDegreeEquation(prompt("Enter your first variable"),prompt("Enter your second variable"),
prompt("Enter your third variable"))



