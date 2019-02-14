var inputArraySizeInpt = document.getElementById("array-size-inpt");
var valueRes = document.getElementById("value-res");
var genButt = document.getElementById("genButt");
var iab = document.getElementsByClassName("input-Array-block");
valueRes.textContent = inputArraySizeInpt.value;

inputArraySizeInpt.addEventListener("input", function(){
    valueRes.textContent = this.value;
});
var checkVar = 0;
genButt.addEventListener("click", function(){
    if(checkVar == 0){
        let t = document.createElement("table");
        let tr = document.createElement("tr");
        var td = document.createElement("td");
        var inpt = document.createElement("input");
    // t.style.border = "1px solid #fff";
        t.style.cellpadding = "5";
    // td.style.width = "50px";
    // td.style.height = "50px";
        t.appendChild(tr);
        td.appendChild(inpt);
        tr.appendChild(td);
        iab[0].appendChild(t);
        inpt.classList.add("inptStyle");
        td.style.height = "50px";
        td.style.width = "50px";
        td.style.border = "1px solid #fff";
    for(let i = 0; i < inputArraySizeInpt.value; i++){
        var td = document.createElement("td");
        var inpt = document.createElement("input");
        td.appendChild(inpt);
        tr.appendChild(td);
        td.style.height = "50px";
        td.style.width = "50px";
        td.style.border = "1px solid #fff";
        td.style.after
        inpt.classList.add("inptStyle");
        }
    }
   checkVar = 1;
})