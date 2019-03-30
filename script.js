

function runCheck() {
    const arr1 = [];
    const arr2 = [];
    const arr3 = [];
    const arr4 = [];
    /* const arr5 = [];
    const arr6 = []; */
    for (let index = 1; index <= 24; index++) {
        let value = document.getElementById(`num${index}`).value;
        if (index <= 6)
        {
            let valueOfElement = {id: index, value: value}
            arr1.push(valueOfElement);
        } else if (index > 6 && index <= 12)
        {
            let valueOfElement = {id: index, value: value}
            arr2.push(valueOfElement);
        }
         else if (index > 12 && index <= 18)
        {
            let valueOfElement = {id: index, value: value}
            arr3.push(valueOfElement);
        }
         else if (index > 18 && index <= 24)
        {
            let valueOfElement = {id: index, value: value}
            arr4.push(valueOfElement);
        } else {
            //DO Nothing
        }   
    }
    const array = [];
    array.push(arr1, arr2, arr3, arr4);
    canSeeFront(array);
}



function canSeeFront(a) {
    var countCanNotSee = 0;
    for (let i = 0; i < a.length - 1; i++)
    {
        for (let j = 0; j < a[0].length; j++)
        {
            
            if (a[i][j].value < a[i+1][j].value && !a[i][j].numberBeforeIsLess)
            {
                const id = a[i][j].id;
                document.getElementById(`num${id}`).style.border = "1px solid green";
                if (i == a.length -2)
                {
                    const id = a[i+1][j].id;
                    document.getElementById(`num${id}`).style.border = "1px solid green";
                }
                continue;
            } else {
                const id = a[i+1][j].id;
                document.getElementById(`num${id}`).style.border = "1px solid red";
                a[i+1][j].numberBeforeIsLess = true;
                countCanNotSee += 1;
                if (i == a.length -2)
                {
                    const id = a[i+1][j].id;
                    document.getElementById(`num${id}`).style.border = "1px solid red";
                }
            }

           
        }
    }
    if (countCanNotSee > 0)
        return false;
    else 
        return true;
}


function sum () {
    console.log(5 + 9);
}






