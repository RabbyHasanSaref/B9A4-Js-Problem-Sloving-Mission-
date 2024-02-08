function calculateMoney(ticketSale){
    if( ticketSale >= 0){
        const oneTicketPrice = 120;
        const employeeEvreyDay = 500;
        const employeeStafeEate = 50;
        const total = (ticketSale * oneTicketPrice) - (employeeEvreyDay + ( 8 * employeeStafeEate));
        return total;
    } 
    else{
        return "Invalid Number";
    }
}

/*-----------------------------------------------------------------------------------------*/

function checkName(name){
     if(typeof name !== 'string'){
        return 'Invalid Name';
    }
    const str = 'ayieouw';
    const fullName = '';
    name = name.toLowerCase();
    if(str.includes(name.slice(-1)) || fullName.includes(name)){
        return 'Good Name';
    }
    else{
        return 'Bad Name';
    }
}

/*-----------------------------------------------------------------------------------------*/

function deleteInvalids(array) {
        let arr = [];
        if (!Array.isArray(array)) {
            return "Invalid Array";
        }
        for(let numbre of array){
        if(typeof numbre === 'number' && !isNaN(numbre)){
            arr.push(numbre);
        }
      }
      return arr;
}
const arrNum = [1 , null, undefined, 18, -19, NaN, "12", [1, 2], { ob: "lala" }];

/*-----------------------------------------------------------------------------------------*/

function password(obj){
    const length1 = obj.birthYear;
    const length2 = length1.toString().length;
    if(length2 !== 4){
        return 'Invalid';
    }
    else if(typeof obj.name === 'string' && typeof obj.birthYear === 'number' && typeof obj.siteName === 'string'){
    const userName = obj.name;
    const birthDate = obj.birthYear;
    const webSite = obj.siteName;
    const fullInfo = webSite.charAt(0).toUpperCase() + webSite.slice(1) + '#' + userName + '@' + birthDate;
    return fullInfo;
    }
    return 'Invalid';
}
const userInfo = {name: 'rahat' , birthYear: 2002, siteName: 'Facebook'};

/*-----------------------------------------------------------------------------------------*/

function monthlySavings(arr , livingCost) {
    if(!Array.isArray(arr) || typeof livingCost !== 'number'){
        return 'invalid input';
    }
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] >= 3000){
            arr[i] -= arr[i] * 0.20;
        }
    }
    for(let n = 0; n < arr.length; n++){
        sum = sum + arr[n];
    }
    let savingCost = sum - livingCost;
    if(savingCost >= 0){
        return 'Total Savings';
    }
    else{
        return 'earn more';
    }
}
console.log(calculateMoney(10))
console.log(checkName('Rabby'))
console.log(deleteInvalids(arrNum));
console.log(password(userInfo))
console.log(monthlySavings([ 900 , 2700 , 3400], 500 ))