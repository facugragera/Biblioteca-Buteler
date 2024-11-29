//calendario
document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar-view');
    var listViewEl = document.getElementById('list-view');
    var toggleViewBtn = document.getElementById('toggle-view');
    var searchInput = document.getElementById('search');

    var calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth',
		locale: 'es',
        buttonText: {
            today: 'Hoy'
			},
        events: [
            /*{
                title: 'Seminario: Belleza y conocimiento en la literatura grecolatina',
                start: '2024-10-15',
                description: 'Cronograma:\n18:30 a 19:45 \nClase expositiva con ejempliﬁcaciones sobre la noción de catarsis griega, \naproximación al teatro griego como institución, genealogía de Antígona, \nimportancia de este personaje para la intertextualidad. \n19:45 a 20 hs: breve convite/ merienda \n20:00 a 21 hs. \nTaller de escritura desde un disparador y lectura de lo producido',

                extendedProps: {
					link: 'https://forms.gle/PtGZ4pBBiv2gX3es9',
                    image: 'eventos/escrituraCreativa.jpeg'
                }
			},*/
		
            {
                title: 'Taller de escritura creativa',
                start: '2024-10-09',
                description: 'Cronograma:\n18:30 a 19:45 \nClase expositiva con ejempliﬁcaciones sobre la noción de catarsis griega, \naproximación al teatro griego como institución, genealogía de Antígona, \nimportancia de este personaje para la intertextualidad. \n19:45 a 20 hs: breve convite/ merienda \n20:00 a 21 hs. \nTaller de escritura desde un disparador y lectura de lo producido',

                extendedProps: {
					link: 'https://forms.gle/PtGZ4pBBiv2gX3es9',
                    image: 'eventos/escrituraCreativa.jpeg'
                }
			},
			
            {
                title: 'Conversatorio: Eros Platonico',
                start: '2024-09-03',
                description: '19:00PM por Google Meets',
                extendedProps: {
					link: 'https://docs.google.com/forms/d/e/1FAIpQLSfbcKVQC3GyDjvBSqpUvP99VMyePG3Zj8etMKbEoENmH8vl4A/viewform',
                    image: 'eventos/erosplatonico.jpeg'
                }
			},
        ],
        eventClick: function(info) {
            alert(info.event.title + '\n' + info.event.extendedProps.description);
        }
    });

    calendar.render();
	
//vista
    toggleViewBtn.addEventListener('click', function() {
        if (calendarEl.style.display === 'none') {
            calendarEl.style.display = 'block';
            listViewEl.style.display = 'none';
			searchInput.style.display = 'none';
            toggleViewBtn.textContent = 'Cambiar a vista de lista';
        } else {
            calendarEl.style.display = 'none';
            listViewEl.style.display = 'block';
			searchInput.style.display = 'block';
            toggleViewBtn.textContent = 'Cambiar a vista de calendario';
            populateListView(calendar.getEvents());
        }
    });

//lista
    function populateListView(events) {
        listViewEl.innerHTML = '';
        events.forEach(function(event) {
            var listItem = document.createElement('div');
            listItem.className = 'list-item';
            listItem.innerHTML = `
				<div class="items-lista">
					<h3>${event.title}</h3>
					<a href="${event.extendedProps.link}" class="register-button" target="_blank">Inscribirse</a> 
					<p>${event.start.toISOString().split('T')[0]}</p>
					<p>${event.extendedProps.description.replace(/\n/g, '<br>')}</p>
				<div>
				<div class="imagen-lista">
					<img src="${event.extendedProps.image}" alt="${event.title}" style="width:100%;max-width:300px;">
				<div>
		   `;
            listViewEl.appendChild(listItem);
        });
    }

//buscar
    searchInput.addEventListener('input', function() {
        var query = searchInput.value.toLowerCase();
        var events = calendar.getEvents();
        var filteredEvents = events.filter(function(event) {
            return event.title.toLowerCase().includes(query) ||
                   event.extendedProps.description.toLowerCase().includes(query);
        });
        populateListView(filteredEvents);
    });
});

/*

document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');

    var calendar = new FullCalendar.Calendar(calendarEl, {
        plugins: ['dayGrid', 'list'],
        initialView: 'dayGridMonth',
        headerToolbar: {
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,listMonth'
        },
        locale: 'es', // Cambiar el idioma a español
        events: [
            {
                title: 'Evento 1',
                start: '2024-06-01',
                description: 'Descripción del Evento 1',
                extendedProps: {
                    image: 'evento1.jpg'
                }
            },
            {
                title: 'Evento 2',
                start: '2024-06-10',
                description: 'Descripción del Evento 2',
                extendedProps: {
                    image: 'evento2.jpg'
                }
            },
            {
                title: 'Evento 3',
                start: '2024-06-15',
                description: 'Descripción del Evento 3',
                extendedProps: {
                    image: 'evento3.jpg'
                }
            }
        ],
        eventClick: function(info) {
            // Mostrar modal o información del evento al hacer clic
            alert(info.event.title + '\n' + info.event.extendedProps.description);
        }
    });

    calendar.render();
});

*/