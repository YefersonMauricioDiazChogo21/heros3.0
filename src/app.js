import { LitElement,html } from 'lit';

export class cards extends LitElement{
    static properties(){
        heros:{}
    };
    constructor(){
        super();
        this.heros=[
            {nombre:'Wonder Woman',
            fecha:'12/1941',
            imagen:'src/img/wonderwoman.webp',
            descripcion:'Además de ser la embajadora de las amazonas hacia el resto del mundo, Mujer Maravilla posee estupendas habilidades y dones superhumanos concedidos a ella por los dioses griegos en su victoria. Entre ellos se incluyen un lazo mágico que obliga a decir la verdad hace perder la memoria y es indestructible.',
            franquisia:'DC'
            },
            {nombre:'Ant-Man',
            fecha:'01/1962',
            imagen:'src/img/antman.webp',
            descripcion:'Es un ladrón reformado y un experto en electrónica. Fue miembro de Los Vengadores, Los 4 Fantásticos y los Guardianes de la Galaxia, un personaje principal de la serie de cómics FF, y en 2015 se convirtió en el personaje principal de la serie Ant-Man. Intelecto de nivel de genio.',
            franquisia:'Marvel'
            },
            {nombre:'Flash',
            fecha:'01/1940',
            imagen:'src/img/flash.jpg',
            descripcion:'Flash (también conocido por su apodo "El Velocista Escarlata") es un superhéroe de DC Comics que posee una rapidez sobrehumana, la cual incluye la habilidad de correr a gran velocidad, reflejos sobrehumanos y la capacidad de violar algunas leyes de la física.',
            franquisia:'DC'
            },
            {nombre:'Falcon',
            fecha:'09/1969',
            imagen:'src/img/falcon.jpg',
            descripcion:'Como el superhéroe Falcon, Wilson usa alas mecánicas para volar, y tiene un control telepático y empático limitado sobre las aves. Tras la jubilación de Steve Rogers y Sam se convierte en el nuevo Capitán América y líder de Los Vengadores.',
            franquisia:'Marvel'
            },
            {nombre:'Green-Arrow',
            fecha:'09/1941',
            imagen:'src/img/greenarrow.jpg',
            descripcion:'Green Arrow es un héroe que no solo lucha por la justicia, sino también por el amor y la familia. Su historia nos muestra que se puede ser un superhéroe sin renunciar a tener una vida personal plena y feliz. Y que se puede tener una familia numerosa y diversa sin perder la cohesión y el respeto.',
            franquisia:'DC'
            },
            {nombre:'Spiderman',
            fecha:'',
            imagen:'src/img/spiderman.png',
            descripcion:'Científico, vigilante, profesor, fotógrafo, superhéroe. Fuerza, velocidad, durabilidad, agilidad, sentidos, reflejos, coordinación, equilibrio y resistencia sobrehumanos. Fisiología de la araña: Precognitiva capacidad de sentido arácnido, se aferra a la mayoría de las superficies sólidas y la capacidad de las redes.',
            franquisia:'Marvel'
            },
            {nombre:'SuperGirl',
            fecha:'08/1962',
            imagen:'src/img/supergirl.png',
            descripcion:'Super Girl apareció por primera vez en Action Comic #252 en 1959 (Beatty et al, 2009: p. 338) Gracias a la radiación solar absorbe la energía que le permite volar, tiene superfuerza, supervelocidad, es invulnerable, tiene audición aguda, tiene un rango de visión que cubre los rayos X y rayos de calor.',
            franquisia:'DC'
            },
            {nombre:'Scarlet-Witch',
            fecha:'05/1964',
            imagen:'src/img/scarletwitch.jpg',
            descripcion:'El personaje, presentado en sus inicios en una mutante, posee habilidades para alterar la realidad de formas no especificadas y es, además, una poderosa hechicera. Más tarde, se convertiría en miembro regular de Los Vengadores. Con el tiempo, contraería matrimonio con su compañero de equipo llamado Visión.',
            franquisia:'Marvel'
            },
            {nombre:'Batman',
            fecha:'05/1939',
            imagen:'src/img/batman.jpg',
            descripcion:'Batman es un hombre alto, caucásico, tiene una figura oscura e imponente, posee con cabello negro corto y ojos marrones. Él lleva un traje gris oscuro con el símbolo negro de un murciélago, en medio de el pecho. Batman también usa una capucha negra que lo cubre en todo momento para ocultar su identidad.',
            franquisia:'DC'
            },
            {nombre:'Doctor Strange',
            fecha:'07/1963',
            imagen:'src/img/doctorstrange.jpg',
            descripcion:'Doctor Strange sirve como el Hechicero Supremo, el principal protector de la Tierra contra las amenazas mágicas y místicas. Inspirado en historias de magia negra y Chandu el Mago, Strange fue creado durante la edad de plata de los cómics para traer un tipo diferente de personajes y temas a Marvel.',
            franquisia:'Marvel'
            }
        ]
    }
    render(){
        return html`
        <div class='container' style="display:grid; grid-template-columns:18rem 18rem 18rem">
            ${this.heros.map(item=>
                html`
                <div class="card" style="width: 18rem; border:solid black 2px; margin:10px;">
                    <img src="${item.imagen}" style="width: 18rem; alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${item.nombre}</h5>
                        <h5 class="card-title">${item.fecha}</h5>
                        <p class="card-text">${item.descripcion}</p>
                        <a href="#" class="btn btn-primary">${item.franquisia}</a>
                    </div>
                </div>`
            )}
        </div>
        `
    }
};

customElements.define('div-cards',cards)