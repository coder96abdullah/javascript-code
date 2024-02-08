// 
function calculateMoney(ticketSale) {
    if (ticketSale < 0)
        return "Invalid Number";
    return ((ticketSale * 120) - (500 + (8 * 50)));
}


// 
function checkName(name) {
    if (typeof name !== "string")
        return "invalid";

    const n = name.toLowerCase();

    const letters = ["a", "y", "i", "e", "o", "u", "w"];
    if (letters.includes(n[n.length - 1]))
        return "Good Name";

    return "Bad Name";


}


// 
function deleteInvalids(array) {
    if (!Array.isArray(array))
        return "Invalid Array";

    let arr = [];
    for (a of array)
        if (typeof (a) == "number" && !isNaN(a))
            arr.push(a);


    return arr;

}



// 
function password(obj) {
    if (obj.siteName === undefined || obj.birthYear === undefined || obj.name === undefined || obj.birthYear.toString().length !== 4)
        return "invalid";
    const names = obj.siteName[0].toUpperCase() + obj.siteName.slice(1);
    return names + "#" + obj.name + "@" + obj.birthYear;

}




// 
function monthlySavings(arr, livingCost) {
    if (!Array.isArray(arr) || typeof livingCost !== "number" || isNaN(livingCost))
        return "invalid input";
    let sum = 0;
    for (let i of arr) {
        if (i >= 3000)
            sum += i - (i * 20 / 100);
        else
            sum += i;
    }

    if ((sum - livingCost) < 0)
        return "earn more";

    return sum - livingCost;

}

console.log(monthlySavings([ 1000 , 2000 , 3000 ] , 5400))


