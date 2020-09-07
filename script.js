console.log("hello world");

function newfunc() {
	var nameob = document.getElementById("name1");
	nameob.addEventListener("mouseover", function() {
		nameob.style.color = "yellow";
	});
	nameob.addEventListener("mouseout", function() {
		nameob.style.color = "blue";
	});

	var em = document.getElementById("mail");
	em.addEventListener("mouseover", function() {
		em.style.color = "yellow";
	});
	em.addEventListener("mouseout", function() {
		em.style.color = "blue";
	})

	var nicks = document.getElementsByClassName("nick");
	for(let i=0;i<nicks.length;i++) {
		nicks[i].addEventListener("mouseover", function() {
			nicks[i].style.color = "yellow";
			nicks[i].style.fontSize = "20px";
		});
		nicks[i].addEventListener("mouseout", function() {
			nicks[i].style.color = "white";
			nicks[i].style.fontSize = "16px";
		});
	}

	// for(let i=0;i<places.length;i++) {
	// 	places[i].addEventListener("mouseover", function() {
	// 		places[i].style.textDecoration = "underline";
	// 		places[i].style.color = "yellow";
	// 	});
	// 	places[i].addEventListener("mouseout", function() {
	// 		places[i].style.textDecoration = "none";
	// 		places[i].style.color = "skyblue";
	// 	}); 
	// 	places[i].addEventListener("click", function() {
	// 		if(places[i].innerHTML == "Github") {
	// 			document.location.href = "https://www.linkedin.com/in/mukund-kr-kedia-a16693160/";
	// 		}
	// 		if(places[i].innerHTML == "Linkedin") {
	// 			document.location.href = "https://github.com/devPlayer55221";
	// 		}
	// 	});
	// }

}

