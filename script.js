window.addEventListener('DOMContentLoaded', () => {

	const header = document.querySelector('#header'),
    project = document.querySelector('#project'),
    projectH = project.scrollHeight,
	navElements = document.querySelectorAll('[data-scroll'),
	nav = document.querySelector('#nav'),
	navToggle = document.querySelector('#navToggle');
		

	let scrollPos = document.documentElement.scrollTop;		


	// Fixed Header
		checkScroll(scrollPos);

		function checkScroll(scrollPos) {
			if (scrollPos > projectH) {
				header.classList.add('fixed');
			} else {
				header.classList.remove('fixed');
			}
		}

	
		document.addEventListener('scroll', () => {
			scrollPos = window.scrollY;
			checkScroll(scrollPos, projectH);
		});


		// Smooth scroll

		function clearActive () {
			navElements.forEach (item => {
				item.classList.remove('active');
			});
		}

		navElements.forEach (item=> {
			
			item.addEventListener('click', (event) => {
				event.preventDefault();

				let id = item.getAttribute('data-scroll');

				document.querySelector(id).scrollIntoView({
					behavior: 'smooth',
					block: 'start'
				});
			clearActive ();
			item.classList.add('active');
		});
	});

	// Burger Menu

	navToggle.addEventListener('click', (event) => {
		event.preventDefault();

		nav.classList.toggle('show');
	});

	

});