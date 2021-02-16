var score =0;
var competences = [];
var competencestotal = [];

for (var i=1; i<=5; i=i+1|0) {
  competencestotal[i]=0;
  competences[i]=0;
}


function soumettrereponse(a,b) {
var selected=false;
var res ;
var competence=0;
var childNodes = document.getElementById("Q"+a).getElementsByTagName('*');

if (a==1) document.getElementById("first").style.display = "none"

for (var i=1; i<=5; i=i+1|0) {
if(hasClass(document.getElementById("Q"+a),"Comp"+i))
competencestotal[i]=competencestotal[i]+1;
}

for (var node of childNodes) {
  node.disabled = true;
  if(hasClass(node,"selected")){
    selected=true;

if(hasClass(node,"true")){
  for (var i=1; i<=5; i=i+1|0) {
  if(hasClass(document.getElementById("Q"+a),"Comp"+i))
  competences[i]=competences[i]+1;
  }
score=score+parseInt(document.getElementById("score"+a).value);

}
}
}
if(!selected)
{

  alert('Vous devez choisir une reponse');
  document.getElementById("S"+a).style.visibility = 'block';
return false;
}
if (a!=b) {
document.getElementById("Q"+a).style.display = "none";
document.getElementById("Q"+b).style.display = "block";
document.getElementById("S"+b).style.display = "block";
document.getElementById("S"+a).style.visibility = 'hidden';
}

}


function calculerscore()
{
soumettrereponse(10,10);
document.getElementById("scoretotal").innerHTML=score;
document.getElementById("Q"+10).style.display = "none";
document.getElementById("S"+10).style.display = "none";
document.getElementById("scorewindow").style.display = "block";
var i=0;
for (var i=1; i<=5; i=i+1|0) {
if(competencestotal.length!=0  ){
document.getElementById("scorecomp"+i).innerHTML=competences[i]+ " sur "+ competencestotal[i];
// ecart de 2 entre les compéntences//
if(competencestotal[i]-competences[i]<=2)
document.getElementById("resultacomp"+i).innerHTML="Competence Acquise";
else {
  document.getElementById("resultacomp"+i).innerHTML="Competence Non Acquise";
}
}
} 


}
function getChildren(n, skipMe){
    var r = [];
    for ( ; n; n = n.nextSibling )
       if ( n.nodeType == 1 && n != skipMe)
          r.push( n );
    return r;
};

function getSiblings(n) {
    return getChildren(n.parentNode.firstChild, n);
}

function hasClass(ele,cls) {
  return !!ele.className.match(new RegExp('(\\s|^)'+cls+'(\\s|$)'));
}

function addClass(ele,cls) {
  if (!hasClass(ele,cls)) ele.className += " "+cls;
}

function removeClass(ele,cls) {
  if (hasClass(ele,cls)) {
    var reg = new RegExp('(\\s|^)'+cls+'(\\s|$)');
    ele.className=ele.className.replace(reg,' ');
  }
}

var questions = document.getElementsByClassName('Q');
for (var i=0, len=questions.length|0; i<len; i=i+1|0) {

  var childNodes = questions[i].getElementsByTagName("a");
  for (var node of childNodes) {
    node.addEventListener("click", function() {
      this.removeAttribute("href");
      var Siblings = getSiblings(this.parentNode);
for (var sib of Siblings) {
  if(sib.getElementsByTagName("a").length!=0)
  if (hasClass(sib.getElementsByTagName("a")[0],"selected")) removeClass (sib.getElementsByTagName("a")[0],"selected");
}
        if (!hasClass(this,"selected")) addClass(this,"selected");
    });
  }

}
