document.addEventListener("DOMContentLoaded", function () {
    const textos = {
        es: {
            sobreMi: "Sobre Mí",
            proyectos: "Proyectos",
            habilidades: "Habilidades",
            contacto: "Contacto",
            descripcionSobreMi: "Desarrollador apasionado por la creación de soluciones tecnológicas eficientes. Especializado en desarrollo web frontend y backend con experiencia en diversas tecnologías.",
            desarrolladorSoftware: "Desarrollador de Software",
            paginaAirsoft: "Página web para una empresa de airsoft",
            paginaAirsoftp: "Página web que se centra en la compra de productos de airsoft.",
            visitarPagina: "Visitar la página",
            paginaDuki :"Página personalizada de Duki",
            paginaDukip:"Página enfocada en uno de los artistas que más sigo.",
            paginaIconica:"Página festival IcónicaFest Sevilla",
            paginaIconicap:"Página enfocada en el festival IconicaFest y para los interesados en los festivales en general.",
            proyectoDjango:"Proyecto personal Django",
            proyectoDjangop:"Enlace a mi proyecto personal de django y las bases de mi TFG.",
            produccion:"Enlace producción",
            local:"Enlace local",
            herramientas:"Herramientas: ",
            versiones:"Control de versiones",
            idiomasp:"Español (nativo), Inglés (C1)",
            idiomas:"Idiomas: ",
            telefono:"Teléfono: ",
            perfilLinkedin:"Mi perfil Linkedin",
            perfilGithub:"Mi perfil GitHub"
        },
        en: {
            sobreMi: "About Me",
            proyectos: "Projects",
            habilidades: "Skills",
            contacto: "Contact",
            descripcionSobreMi: "Developer passionate about creating efficient technological solutions. Specialized in frontend and backend web development with experience in various technologies.",
            desarrolladorSoftware: "Software Developer",
            paginaAirsoft: "Website for an airsoft company",
            paginaAirsoftp: "Website that focuses on the purchase of airsoft products.",
            visitarPagina: "Visit the website",
            paginaDuki: "Duki Custom Page",
            paginaDukip:"Page focused on one of the artists I follow the most.",
            paginaIconica:"IcónicaFest Sevilla festival website",
            paginaIconicap:"Page focused on the IconicaFest festival and for those interested in festivals in general.",
            proyectoDjango:"Django personal project",
            proyectoDjango:"Link to my personal django project and the bases of my TFG.",
            produccion:"Production link",
            local:"Local link",
            herramientas:"Tools: ",
            versiones:"Version control:",
            idiomasp:"Spanish (native), English (C1)",
            idiomas:"Languages: ",
            telefono:"Phone Number: ",
            perfilLinkedin:"My Linkedin's profile",
            perfilGithub:"My GitHub's profile"
        }
    };

    function cambiarIdioma(idioma) {
        document.querySelectorAll("[data-key]").forEach(elemento => {
            const clave = elemento.getAttribute("data-key");
            if (textos[idioma][clave]) {
                elemento.textContent = textos[idioma][clave];
            }
        });
    }

    document.querySelector(".idioma-es").addEventListener("click", function (e) {
        e.preventDefault();
        cambiarIdioma("es");
    });

    document.querySelector(".idioma-en").addEventListener("click", function (e) {
        e.preventDefault();
        cambiarIdioma("en");
    });
});