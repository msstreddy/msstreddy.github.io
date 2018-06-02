function identifyById() {
    console.log(document.getElementById('para1'));
}

function identifyByClass() {
    console.log(document.getElementsByClassName('class1'));
}

function identifyByTag() {
    console.log(document.getElementsByTagName('p'));
}

function changeBackground() {
    document.getElementById('block1').style.backgroundColor = "blue";
}

function increaseFont() {
    document.getElementById('block2').style.fontSize = "25px";
}

function changeFontColor() {
    
}

function revertColor() {
    document.getElementById("block3").style.color="black";
}
document.getElementById("block3").onmouseover=function(){
    document.getElementById("block3").style.color="green";
}
document.getElementById("block3").onmouseout=function(){
    revertColor();
}
document.getElementById("block4").ondblclick=function(){
    hide();
}
function hide() {
    document.getElementById("block4").style.display="none";
}
document.getElementById('input1').onkeypress=function(){
    var key=event.which;
    if(key>=48 && key<=57)
    {
        return true;
    }
    else
    {
        return false;
    }
}
function changeBackColorForAllBox() {
    for(var i=0;i<3;i++)
        document.getElementsByClassName('box1')[i].style = "background-color:green";
}


function addAdjacent() {
   var para=document.createElement('p');
    var node=document.createTextNode("I got generated on the fly...");
    para.appendChild(node);
   document.getElementById('para2').appendChild(para);
}

function removePara() {
    document.getElementById('para4').remove();
}
function changeBackColor(blue,box2)
{
    for(var i=0;i<3;i++)
        document.getElementsByClassName(box2)[i].style = "background-color:"+blue;
}
function animatePara() {
    var pos=0;
    setInterval(frame,40);
    function frame()
    {
        if(pos<99)
        {
            pos++;
            document.getElementById('box5').style="margin-left:"+pos+"%";
            
        }
    }
    

}
document.getElementById('inputBox1').onchange=function(){
    var str=document.getElementById('inputBox1').value;
    document.getElementById('inputBox1').value=str.toUpperCase();
   
}
document.getElementById('inputBox2').onchange=function(){
    var str=document.getElementById('inputBox2').value;
    document.getElementById('inputBox2').value=str.toUpperCase();
   
}
document.getElementById('input4').onfocus=function(){
    document.getElementById('input4').style="background:yellow";
}
document.getElementById('inputBox3').onchange=function(){
    var str=document.getElementById('inputBox3').value;
    document.getElementById('inputBox3').value=camelize(str);
   
}

camelize=function camelize(str) {
    return str.replace(/\W+(.)/g, function(match, chr)
     {
          return chr.toUpperCase();
      });
  }
document.getElementById('browsers').onchange=function(){
    console.log(document.getElementById('browsers').value);
}