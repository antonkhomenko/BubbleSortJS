var inputArraySizeInpt = document.getElementById("array-size-inpt");
var valueRes = document.getElementById("value-res");
valueRes.textContent = inputArraySizeInpt.value;

inputArraySizeInpt.addEventListener("input", function(){
    valueRes.textContent = this.value;
});