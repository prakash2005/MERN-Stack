var listofdata=[]
var input=document.getElementById("input");
var todo=document.getElementById("todo");
document.getElementById("button").onclick=click;
function click(){
    if(input.value.trim()===""){
        alert("Please enter a valid tassk");
        return;
    }
    listofdata.push(input.value);
    console.log(listofData);
    input.value=" ";
    showList;
    
}
function showList(){
    todo.innerHTML=" ";
    li.innerHTML
    listofdata.forEach(function(n,i){
    listofdata.innerHTML = ("<a onclick='edit(" + i+ ")'Edit</a>"+ "<a onclick='delete(" + i+ ")'>&times | </a>")
})
}

function edit(i){
    var newVal =prompt("please insert new value")
    listofdata.splice(i,1,newVal)
    showList;
}