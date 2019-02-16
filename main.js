var inputArraySizeInpt = document.getElementById("array-size-inpt");
var valueRes = document.getElementById("value-res");
var genButt = document.getElementById("genButt");
var iab = document.getElementsByClassName("input-Array-block");
var sortBtn = document.getElementById("sort-btn");
valueRes.textContent = inputArraySizeInpt.value;

inputArraySizeInpt.addEventListener("input", function(){
    valueRes.textContent = this.value;
});
var checkVar = 0;
genButt.addEventListener("click", function(){
    if(checkVar == 0){
        let t = document.createElement("table");
        let tr = document.createElement("tr");
    // t.style.border = "1px solid #fff";
        t.style.cellpadding = "5";
    // td.style.width = "50px";
    // td.style.height = "50px";
        t.appendChild(tr);
        iab[0].appendChild(t);
    for(let i = 0; i < inputArraySizeInpt.value; i++){
        var td = document.createElement("td");
        var inpt = document.createElement("input");
        td.appendChild(inpt);
        tr.appendChild(td);
        td.style.height = "50px";
        td.style.width = "50px";
        td.style.border = "1px solid #fff";
        inpt.classList.add("inptStyle");
        }
    }
   checkVar = 1;
})

sortBtn.addEventListener("click", function(){
    if(checkVar == 1){
        let tdA = iab[0].querySelectorAll("td");
        var jsArray = [];
        jsArray.lenght = tdA.length;
        for(let i = 0; i < tdA.length; i++){
            jsArray[i] = tdA[i].children[0].value;
        };
        console.log(jsArray);
    };
});