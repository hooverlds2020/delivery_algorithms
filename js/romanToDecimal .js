const resValue2 = document.getElementById("result2")
document.getElementById("form2")
    .addEventListener('submit', function (e){
    e.preventDefault()
    let s = document.getElementById("arabig").value

    let roman = new Map() ;
    roman.set('I', 1);
    roman.set('V', 5);
    roman.set('X', 10);
    roman.set('L', 50);
    roman.set('C', 100);
    roman.set('D', 500);
    roman.set('M', 1000);

    //alert(arabig.value)

    //function romanToInt(s) {
    let sum = 0;
    let n = s.length;
    for (i = 0; i < n; i++) {
        if (i != n - 1 && roman.get(s.charAt(i)) < roman.get(s.charAt(i + 1))) {
            sum += roman.get(s.charAt(i + 1)) - roman.get(s.charAt(i));
            i++;
        } else {
            sum += roman.get(s.charAt(i)); //50 + 10
        }
    }
    
    // alert(sum)
    console.log(sum)
    resValue2.append(sum)
    // return sum;

})
// Driver Code
// Considering inputs given are valid
//let input = "CM";
//console.log("Integer form of Roman Numeral is " + romanToInt(input));



