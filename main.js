var checkbox=document.getElementById('donetask');

function insertjs()
  {
  	//Lors de l'appuie sur le bouton insérer, intégration du contenu
  	// du champs de texte dans la list (divlist)
  	var insert= document.getElementById("inputask").value;
  	document.getElementById("divlist").innerHTML+="<p id=\"checkbox\">"+insert+"<input type=\"checkbox\" onchange=\"deletejs()\"></p>";
  }

  function deletejs()
  {
  	console.log("ok")
  	// parent
  	//var d = document.getElementById("parent");
    //d.removeChild(lastChild);

  	var test = document.getElementById("divlist").childNodes.length;
  	console.log(test);
    //window.event.target.parent.removeChild(window.event.target);
    //document.getElementById("checkbox").removeChild("p");
    getElementById("checkbox").addEventListener('click', function (event) {
  alert('Element clicked through function!');
});
  }