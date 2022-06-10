const resValue = document.getElementById("result")
document.getElementById("form")
    .addEventListener('submit', function (e){             
        e.preventDefault()
        let number = document.getElementById("arabigo").value
        // const decimal = document.getElementById('arabigo').value
        let hashRomans = {
                    M: 1000,
                    CM: 900,
                    D:  500,
                    CD: 400,
                    C:  100,
                    XC:  90,
                    L:   50,
                    XL:  40,
                    X:   10,
                    IX:   9,
                    V:    5,
                    IV:   4,
                    I:    1
                },
                endValue = ""

                
                while(number > 0){//O(n) //l(n)
                    for(i in hashRomans){ //O(n)
                        if(number>= hashRomans[i]){
                            endValue += i
                            number -= hashRomans[i]
                            break        
                        }
                    }
                }

            //alert(endValue)
            console.log(endValue)
            resValue.append(endValue)
            //return endValue //O(nlogn)
               
        }   
);

// arabicToRoman(number)
