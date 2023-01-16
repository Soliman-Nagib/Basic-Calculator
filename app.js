// The lines from 

let result= document.getElementById("result");

let keyboard = document.getElementById("keyboard");

let zero = document.getElementById("zero");

let one = document.getElementById("one");

let two = document.getElementById("two");

let three = document.getElementById("three");

let four = document.getElementById("four");

let five = document.getElementById("five");

let six = document.getElementById("six");

let seven = document.getElementById("seven");

let eight = document.getElementById("eight");

let nine = document.getElementById("nine");

let multiply = document.getElementById("multiply");

let divide = document.getElementById("divide");

let add = document.getElementById("add");

let subtraction = document.getElementById("subtraction");

let point = document.getElementById("point");

let reset = document.getElementById("reset");

let inputsFromKeyboard = [];



function mergNumbers (nums) {    
    let newNums = [];
    let op = ``;
    let bb = nums.length;
    let aa = 0;
    for (let i = 0; i < bb; i++)
    {
        aa = i + 1;
        if (nums[i] === "0" || nums[i] === "1" || nums[i] === "2" || nums[i] === "3" || nums[i] === "4" || nums[i] === "5" || nums[i] === "6" || nums[i] === "7" || nums[i] === "8" || nums[i] === "9" || nums[i] === ".")
        {
            op += nums[i];
        } else if (nums[i] === "+" || nums[i] === "*" || nums[i] === "/" || nums[i] === "-")
        {
            newNums.unshift(nums[i])
            nums.splice(0, aa)
            bb = i;
        }
    }
    newNums.unshift(op);
    op = ``;
    bb = nums.length;
    for (let i = 0; i < bb; i++)
    {
        aa = i + 1;
        if (nums[i] === "0" || nums[i] === "1" || nums[i] === "2" || nums[i] === "3" || nums[i] === "4" || nums[i] === "5" || nums[i] === "6" || nums[i] === "7" || nums[i] === "8" || nums[i] === "9" || nums[i] === ".")
        {
            op += nums[i];
        } else if (nums[i] === "+" || nums[i] === "*" || nums[i] === "/" || nums[i] === "-")
        {
            newNums.push(op);
            newNums.push(nums[i])
            nums.splice(0, aa)
            bb = i;
        }
    }
    bb = nums.length;
    op = ``;
    for (let i = 0; i < bb; i++)
    {
        aa = i + 1;
        if (nums[i] === "0" || nums[i] === "1" || nums[i] === "2" || nums[i] === "3" || nums[i] === "4" || nums[i] === "5" || nums[i] === "6" || nums[i] === "7" || nums[i] === "8" || nums[i] === "9" || nums[i] === ".")
        {
            op += nums[i];
        } else if (nums[i] === "+" || nums[i] === "*" || nums[i] === "/" || nums[i] === "-")
        {
            newNums.push(op);
            newNums.push(nums[i])
            nums.splice(0, aa)
            bb = i;
        }
    }
    bb = nums.length;
    op = ``;
    for (let i = 0; i < bb; i++)
    {
        aa = i + 1;
        if (nums[i] === "0" || nums[i] === "1" || nums[i] === "2" || nums[i] === "3" || nums[i] === "4" || nums[i] === "5" || nums[i] === "6" || nums[i] === "7" || nums[i] === "8" || nums[i] === "9" || nums[i] === ".")
        {
            op += nums[i];
        }
    }
    newNums.push(op)
    nums.splice(0, aa)
    return newNums;
}


function basicClaculator (t) {
    let m = [];
    let d = []; 
    let a = [];
    let s = [];

    for (let i = 0; i < t.length; i++)
    {
        if (t[i] === "*" && t[i - 2] !== "/")
        {
            m.push(+t[i - 1] * +t[i + 1]);
            t[i - 1] = " ";
            t[i] = " ";
            t[i + 1] = " ";
            t[i] = m[m.length - 1];
            m.pop(i - i)
        }
        for (let j = 0; j < t.length; j++)
        {
            if (t[j] === " ")
            {
                t.splice(j, 1);
            }
        }
        if (t[i] === "/" && t[i - 2] !== "*")
        {
            d.push(+t[i - 1] / +t[i + 1]);
            t[i - 1] = " ";
            t[i] = " ";
            t[i + 1] = " ";
            t[i] = d[d.length - 1]
        }
    }
    for (let i = 0; i < t.length; i++)
    {
        if (t[i] === "*")
        {
            m.push(+t[i - 1] * +t[i + 1]);
            t[i - 1] = " ";
            t[i] = " ";
            t[i + 1] = " ";
            t[i] = m[m.length - 1];
        }
        for (let j = 0; j < t.length; j++)
        {
            if (t[j] === " ")
            {
                t.splice(j, 1);
            }
        }
    }
    for (let i = 0; i < t.length; i++)
    {
        if (t[i] === "-")
        {
            s.push(+t[i - 1] - +t[i + 1]);
            t[i - 1] = " ";
            t[i] = " ";
            t[i + 1] = " ";
            t[i] = s[s.length - 1];
        }
        for (let j = 0; j < t.length; j++)
        {
            if (t[j] === " ")
            {
                t.splice(j, 1);
            }
        }
    }
    for (let i = 0; i < t.length; i++)
    {
        if (t[i] === "+")
        {
            a.push(+t[i - 1] + +t[i + 1]);
            t[i - 1] = " ";
            t[i] = " ";
            t[i + 1] = " ";
            t[i] = a[a.length - 1];
        }
        for (let j = 0; j < t.length; j++)
        {
            if (t[j] === " ")
            {
                t.splice(j, 1);
            }
        }
    }    
    let r = t[0];
    return r;
}


zero.onclick = function () {
    inputsFromKeyboard.push("0");
    result.innerText += "0";
    zero.style.borderBottomWidth = "thin";        
    setTimeout(() => {
        zero.style.borderBottomWidth = "4px";
    }, 200);
}
one.onclick = function ()
{
    inputsFromKeyboard.push("1");
    result.innerText += "1";
    one.style.borderBottomWidth = "thin";
    setTimeout(() =>
    {
        one.style.borderBottomWidth = "4px";
    }, 200);
} 
two.onclick = function ()
{
    inputsFromKeyboard.push("2");
    result.innerText += "2";
    two.style.borderBottomWidth = "thin";
    setTimeout(() =>
    {
        two.style.borderBottomWidth = "4px";
    }, 200);
} 
three.onclick = function ()
{
    inputsFromKeyboard.push("3");
    result.innerText += "3";
    three.style.borderBottomWidth = "thin";
    setTimeout(() =>
    {
        three.style.borderBottomWidth = "4px";
    }, 200);
} 
four.onclick = function ()
{
    inputsFromKeyboard.push("4");
    result.innerText += "4";
    four.style.borderBottomWidth = "thin";
    setTimeout(() =>
    {
        four.style.borderBottomWidth = "4px";
    }, 200);
} 
five.onclick = function ()
{
    inputsFromKeyboard.push("5");
    result.innerText += "5";
    five.style.borderBottomWidth = "thin";
    setTimeout(() =>
    {
        five.style.borderBottomWidth = "4px";
    }, 200);
} 
six.onclick = function ()
{
    inputsFromKeyboard.push("6");
    result.innerText += "6";
    six.style.borderBottomWidth = "thin";
    setTimeout(() =>
    {
        six.style.borderBottomWidth = "4px";
    }, 200);
} 
seven.onclick = function ()
{
    inputsFromKeyboard.push("7");
    result.innerText += "7";
    seven.style.borderBottomWidth = "thin";
    setTimeout(() =>
    {
        seven.style.borderBottomWidth = "4px";
    }, 200);
}
eight.onclick = function ()
{
    inputsFromKeyboard.push("8");
    result.innerText += "8";
    eight.style.borderBottomWidth = "thin";
    setTimeout(() =>
    {
        eight.style.borderBottomWidth = "4px";
    }, 200);
}
nine.onclick = function ()
{
    inputsFromKeyboard.push("9");
    result.innerText += "9";
    nine.style.borderBottomWidth = "thin";
    setTimeout(() =>
    {
        nine.style.borderBottomWidth = "4px";
    }, 200);
}
multiply.onclick = function ()
{
    inputsFromKeyboard.push("*");
    result.innerText += "*";
    multiply.style.borderBottomWidth = "thin";
    setTimeout(() =>
    {
        multiply.style.borderBottomWidth = "4px";
    }, 200);
} 
divide.onclick = function ()
{
    inputsFromKeyboard.push("/");
    result.innerText += "/";
    divide.style.borderBottomWidth = "thin";
    setTimeout(() =>
    {
        divide.style.borderBottomWidth = "4px";
    }, 200);
} 
add.onclick = function ()
{
    inputsFromKeyboard.push("+");
    result.innerText += "+";
    add.style.borderBottomWidth = "thin";
    setTimeout(() =>
    {
        add.style.borderBottomWidth = "4px";
    }, 200);
} 
subtraction.onclick = function ()
{
    inputsFromKeyboard.push("-");
    result.innerText += "-";
    subtraction.style.borderBottomWidth = "thin";
    setTimeout(() =>
    {
        subtraction.style.borderBottomWidth = "4px";
    }, 200);
}
point.onclick = function ()
{
    inputsFromKeyboard.push(".");
    result.innerText += ".";
    point.style.borderBottomWidth = "thin";
    setTimeout(() =>
    {
        point.style.borderBottomWidth = "4px";
    }, 200);
}
equals.onclick = function ()
{
    result.innerHTML = `${basicClaculator(mergNumbers(inputsFromKeyboard))}`;
    for (let i = 0; i < result.innerHTML.length; i++) {
        inputsFromKeyboard.push(result.innerHTML.charAt(i))
    }
    equals.style.borderBottomWidth = "thin";
    setTimeout(() =>
    {
        equals.style.borderBottomWidth = "4px";
    }, 200);
}
reset.onclick = function () {
    result.innerHTML = ``;
    inputsFromKeyboard = [];
    reset.style.borderBottomWidth = "thin";
    setTimeout(() =>
    {
        reset.style.borderBottomWidth = "4px";
    }, 200);
}