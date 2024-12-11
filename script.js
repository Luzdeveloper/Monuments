document.addEventListener('DOMContentLoaded', function() {
    const navigators = document.querySelectorAll('.navigator');
    const infoSection = document.getElementById('info');
    let monumentsData = [];

    fetch('monuments.json')
        .then(response => response.json())
        .then(data => {
            monumentsData = data;
        })

    navigators.forEach(navigator => {
        navigator.addEventListener('click', function() {
            const id = this.getAttribute('data-id');
            const monument = monumentsData.find(m => m.id == id);

            if (monument) {

                //  Afficher le contenu de la section info
                infoSection.innerHTML = `
                    <h2>${monument.Nom}</h2>
                     <p><strong>Ville: ${monument.ville}</strong></p>
                    <p><strong>Pays: ${monument.Pays}</strong></p>
                    <p>${monument.description}</p>
                   
                    
                `;

            
                navigators.forEach(nav => {
                    nav.classList.remove('selected');
                    nav.classList.add('grayscale');
                })

                this.classList.add('selected');
                this.classList.remove('grayscale');
            }
        });
    });
});



//Script pour afficher la map 

var map = L.map('map').setView([48.8584, 2.2945], 5);


L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Liste des lieux
var lieux = [
    {
        "id": [0],
        "Nom": "Tour Eiffel",
        "ville": "Paris",
        "Pays": "France",
        "description": "Construite en deux ans par Gustave Eiffel et ses collaborateurs pour l'Exposition universelle de Paris de 1889, célébrant le centenaire de la Révolution française, et initialement nommée « tour de 300 mètres », elle est devenue le symbole de la capitale française et un site touristique de premier plan : il s’agit du quatrième site culturel français payant le plus visité en 2016, avec 5,9 millions de visiteurs. Depuis son ouverture au public, elle a accueilli plus de 300 millions de visiteurs.",
        "coordonnées_GPS": {
            "latitude": 48.8584,
            "longitude": 2.2945
        }
    },
    {
        "id": [1],
        "Nom": "Grottes de Lascaux",
        "ville": "Montignac-Lascaux",
        "Pays": "France",
        "description": "La grotte de Lascaux, située sur la commune de Montignac-Lascaux, dans le département français de la Dordogne en région Nouvelle-Aquitaine, dans la vallée de la Vézère, est l'une des plus importantes grottes ornées du Paléolithique supérieur par le nombre et la qualité esthétique de ses peintures et gravures, principalement des représentations d'animaux. Elle est parfois surnommée « la chapelle Sixtine de l'art pariétal », selon une expression attribuée à Henri Breuil, qui la nomme également « Versailles de la Préhistoire » ou « Altamira française ».",
        "coordonnées_GPS": {
            "latitude": 45.0517,
            "longitude": 1.1745
        }
    },
    {
        "id": [2],
        "Nom": "Notre Dame De Paris",
        "ville": "Paris",
        "Pays": "France",
        "description": "La Cathédrale Notre-Dame de Paris, construite au XIIe siècle et modifiée au XVIIIe et XIXe siècles, est un symbole du culte chrétien en France. Initiée par Maurice de Sully pour accueillir les fidèles, elle devient un modèle d'architecture religieuse. Saint Louis y apporte les reliques de la Passion du Christ en 1239. Après des périodes de négligence et de restauration, notamment au XIXe siècle grâce à Victor Hugo, elle est classée au patrimoine mondial de l'UNESCO en 1991. L'incendie de 2019 détruit sa charpente et sa flèche, mais elle est restaurée et rouverte en décembre 2024.",
        "coordonnées_GPS": {
            "latitude": 48.8529,
            "longitude": 2.3499
        }
    },
    {
        "id": [3],
        "Nom": "Château de Versailles",
        "ville": "Versailles",
        "Pays": "France",
        "description": "Le château de Versailles est un château et un Nom historique français situé à Versailles, dans les Yvelines. Il fut la résidence principale des rois de France Louis XIV, Louis XV et Louis XVI. Le roi, la cour et le gouvernement y résidèrent de façon permanente du 6 mai 1682 au 6 octobre 1789, à l'exception des années de la Régence de 1715 à 1723. Voulu par Louis XIV afin de glorifier la monarchie française, le château est le plus important Nom de son règne et l'un des chefs-d'œuvre de l'architecture classique. Il exerça une grande influence en Europe aux XVIIIe et XIXe siècles dans le domaine de l'architecture et des arts décoratifs.",
        "coordonnées_GPS": {
            "latitude": 48.8048,
            "longitude": 2.1203
        }
    },
    {
        "id":[4],
        "Nom": "Palais des papes",
        "ville": "Avignon",
        "Pays": "France",
        "description": "Le Palais des papes d'Avignon, la plus grande construction gothique du Moyen Âge, servait de forteresse et de résidence pontificale au XIVe siècle. Il abrita six conclaves qui élurent Benoît XII en 1335, Clément VI en 1342, Innocent VI en 1352, Urbain V en 1362, Grégoire XI en 1370 et Benoît XIII en 1394. Ce palais fut le siège de la chrétienté d'Occident pendant cette période.",
        "coordonnées_GPS": {
            "latitude": 43.9491,
            "longitude": 4.8056
        }
    }
];

// Ajout des marqueurs sur la carte
lieux.forEach(lieu => {
    var marker = L.marker([lieu.coordonnées_GPS.latitude, lieu.coordonnées_GPS.longitude]).addTo(map);
    marker.bindPopup(`<b>${lieu.Nom}</b><br>${lieu.ville}, ${lieu.Pays}<br>${lieu.description}`);
});
