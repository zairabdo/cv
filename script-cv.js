		window.addEventListener("scroll", function() { 
		var scrollY = window.scrollY ;
		var offsetHeight = document.body.offsetHeight ;
		var innerHeight1 =window.innerHeight;
		var deplacement = (scrollY*10)/(offsetHeight-innerHeight1);
		console.log(deplacement);
		document.getElementById('progress_bar').value = deplacement; // Modifie la valeur de la barre de progression pour qu'elle corresponde au déplacement du scroll
		});
		
		
		function myScroll() { // Définition de la fonction de scroll
		var progress = document.getElementById('progress_bar').value; // Valeur de la barre de progression
		var offsetHeight = document.body.offsetHeight ;
		// Calculez ici la valeur de déplacement à efectuer lors du scroll
		var innerHeight1 =window.innerHeight;
		window.scroll(0, progress*150) // Déplacement de la offsetHeight de 0 px latéralement et 'value' px horizontalement|^
		}
		

