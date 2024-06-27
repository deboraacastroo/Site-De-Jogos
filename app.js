// SWIPER CAROUSEL / SLIDER

const swiper = new Swiper(".swiper", {
    // Optional parameters
    direction: "horizontal",
    loop: true,

    // If we need pagination
    pagination: {
        el: ".swiper-pagination",
    },

    // Navigation arrows
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    // And if we need scrollbar
    scrollbar: {
        el: ".swiper-scrollbar",
    },
});

// FANCYBOX / LIGHTBOX EFFECT

Fancybox.bind("[data-fancybox]", {
    // Your custom options
});

const photos = [
    {
        name: "Jogo 1",
        img: "foto01.jpg",
    },
    {
        name: "Jogo 2",
        img: "foto02.jpg",
    },
    {
        name: "Jogo 3",
        img: "foto03.jpg",
    },
    {
        name: "Jogo 4",
        img: "foto04.jpg",
    },
    {
        name: "Jogo 5",
        img: "foto05.jpg",
    },
    {
        name: "Jogo 6",
        img: "foto06.jpg",
    },
    {
        name: "Jogo 7",
        img: "foto07.jpg",
    },
    {
        name: "Jogo 8",
        img: "foto08.jpg",
    },
    {
        name: "Jogo 9",
        img: "foto09.jpg",
    },
    {
        name: "Jogo 10",
        img: "foto10.jpg",
    },
];



function galeria() {
    const galeriaGrelha = document.querySelector("#galeria-grelha");

    for (photo of photos) {
        let codigo;

        codigo = `
          <div class="col">
              <figure>
                  <a href="img/${photo.img}" data-fancybox="comida" data-caption="${photo.name}">
                      <img src="img/${photo.img}" alt="" class="img-fluid">
                      <figcaption>${photo.name}</figcaption>
                  </a>
              </figure>
          </div>
        `;
        galeriaGrelha.innerHTML += codigo;
    }
}




galeria();


    function validateForm() {
    const listaInputErros = document.querySelectorAll(".input-erro");
    listaInputErros.forEach((input) => {
        input.classList.remove("input-erro");
    })

    const formNome = document.querySelector("#nome");
    const formEmail = document.querySelector("#email");
    const formTelefone = document.querySelector("#telefone");
    const formMensagem = document.querySelector("#mensagem");

    let msgErro = "";

        if (formNome.value.trim() == ""){        // o trim limpa os espaços para não se poder submeter só com espaços
            msgErro += "\n Nome";
            formNome.classList.add("input-erro");
        }

        if (formEmail.value.trim() == ""){  
            msgErro += "\n Email";
            formEmail.classList.add("input-erro");
        }

        if (formTelefone.value == ""){
            msgErro += "\n Telefone";
            formTelefone.classList.add("input-erro");
        }

        if (formMensagem.value == ""){
            msgErro += "\n Mensagem";
            formMensagem.classList.add("input-erro");
        }

        if (msgErro != "") {
            alert("Faltam os campos: " + msgErro);
            return false;
        }
}


