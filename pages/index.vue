<template>
    <div>
        <div id="home"  class="card bg-dark text-white" style="border-radius: 0;">
            <img class="card-img main-section-img" src="/assets/images/top-background.jpg" alt="Card image">
            <div class="dark-overlay"></div>
            <div class="card-img-overlay card-img-text" style="padding: 3rem 5rem;">
                <div style="width: 100%;">
                    <div style="width: 100%;">
                        <h4 class="card-title main-moto">Utilaje si Produse IT</h4>
                    </div>
                    <div style="width: 100%; margin-top: 1rem;">
                        <h4 class="card-title main-moto">pentru toate cerintele tale</h4>
                    </div>
                    <div style="width: 100%; margin-top: 1rem;">
                        <p class="card-text moto-description">Alege dintr-o gama variata de produse</p>
                    </div>
                    <div style="width: 100%;">
                        <p class="card-text moto-description">Cere o oferta si veti primi raspuns in maxim 24 de ore</p>
                    </div>
                    <div style="width: 100%;">
                        <p class="card-text moto-description">Suntem aici pentru a-ti oferi consultanta gratuita</p>
                    </div>
                    <div style="width: 100%; margin-top: 2rem;">
                        <button class="top-section-button" @click="showModal = true">Cere oferta</button>
                        <a href="tel:+40747845733">
                            <button class="top-section-button">Contactati-ne</button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div id="tic" class="card main-section" style="border: none; border-radius: 0;">
            <div class="main-section-title">Produse TIC</div>
            <div style="width: 100%; display: flex; margin-bottom: 1.5rem;">
                <span class="section-description"><b>PClife</b> ofera sprijin in achizitia de echipamente TIC prin programe de finantare si solutii IT personalizate, asigurandu-ne ca toate componentele corespund cerintelor de finantare si obiectivelor proiectului. Indiferent de domeniul de activitate, produsele noastre TIC sunt concepute pentru a sprijini transformarea digitală și a maximiza productivitatea.</span>
            </div>
            <div style="width: 100%; display: flex; align-items: center; justify-content: center;">
                <img src="/assets/images/devices.png" alt="TIC" class="tic-img">
            </div>
            <div style="width: 100%; display: flex; align-items: center; justify-content: center;">
                <span class="product-title">•  Calculatoare  •  Laptopuri  •  Periferice  •  Telefoane  •  Tablete  •  Proiectoare  •  Router  •  Licente  •  Altele  •</span>
            </div>
            <div style="width: 100%; display: flex;">
                <span class="section-description">• Vrei o <b>oferta</b> personalizata? Asteptam sa ne contactezi la adresa de email <b>office@pclife.ro</b>.</span>
            </div>
        </div>
        <div id="utilaje" class="card main-section" style="border: none; border-radius: 0;">
            <div class="main-section-title">Utilaje</div>
            <div style="width: 100%; display: flex; margin-bottom: 1.5rem;">
                <span class="section-description">Gasiti solutii eficiente si moderne in sectiunea noastra de utilaje, concepute pentru a spori productivitatea si a imbunatati calitatea proceselor de productie, adaptandu-se nevoilor diverse ale industriei.</span>
            </div>
            <div class="products-grid">
                <div class="product-card">
                    <div class="product-image">
                        <img src="/assets/images/compresor-cu-surub.jpg" alt="Compresor">
                    </div>
                    <h3 class="product-title">Compresor cu surub</h3>
                </div>
                <div class="product-card">
                    <div class="product-image">
                        <img src="/assets/images/linie-vopsire-camp-electrostatic.jpg" alt="Linie">
                    </div>
                    <h3 class="product-title">Linie de vopsire in camp electrostatic</h3>
                </div>
                <div class="product-card">
                    <div class="product-image">
                        <img src="/assets/images/masina-debitare-cu-laser.jpg" alt="Debitare">
                    </div>
                    <h3 class="product-title">Masina de debitare cu laser</h3>
                </div>
                <div class="product-card">
                    <div class="product-image">
                        <img src="/assets/images/masina-lustruit.jpg" alt="Lustruit">
                    </div>
                    <h3 class="product-title">Masini de lustruit</h3>
                </div>
                <div class="product-card">
                    <div class="product-image">
                        <img src="/assets/images/masina-sablat-compresor.jpg" alt="Sablat">
                    </div>
                    <h3 class="product-title">Masini de sablat cu compresor</h3>
                </div>
            </div>
            <div style="width: 100%; display: flex;">
                <span class="section-description">• Vrei o <b>oferta</b> personalizata? Asteptam sa ne contactezi la adresa de email <b>office@pclife.ro</b>.</span>
            </div>
        </div>
        <div id="contact" class="card main-section" style="border: none; border-radius: 0;">
            <div class="main-section-title">Contact</div>
            <div style="width: 100%; display: flex; margin-bottom: 1.5rem;">
                <span class="section-description desktop-only">Pentru orice intrebari sau informatii suplimentare, nu ezitati sa ne contactati. Puteti sa ne trimiteti un mesaj pe email sau sa ne sunati direct.<br>
                    Asteptam cu interes sa colaboram si sa va ajutam sa gasiti cele mai bune solutii pentru nevoile dumneavoastra.<br>
                    <br>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;• Adresa: <b>Targu Jiu, Nicolae Titulescu, nr. 16, GORJ</b> <br>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;• Telefon: <b>+40 774 093 685</b> <br>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;• Email: <b>office@pclife.ro</b>
                </span>
                <span class="section-description mobile-only">Pentru orice intrebari sau informatii suplimentare, nu ezitati sa ne contactati. Puteti sa ne trimiteti un mesaj pe email sau sa ne sunati direct.<br>
                    Asteptam cu interes sa colaboram si sa va ajutam sa gasiti cele mai bune solutii pentru nevoile dumneavoastra.<br>
                    <br>
                    &nbsp;&nbsp;• Adresa: <b>Targu Jiu, Nicolae Titulescu, nr. 16, GORJ</b> <br>
                    &nbsp;&nbsp;• Telefon: <b>+40 774 093 685</b> <br>
                    &nbsp;&nbsp;• Email: <b>office@pclife.ro</b>
                </span>
            </div>
        </div>
        <Modal
            :visible="showModal"
            @close="showModal = false"
            />
    </div>
</template>

<script>
import Modal from '~/components/Modal.vue';

export default {
  components: {
    Modal
  },
  data() {
    return {
      showModal: false
    };
  }
};
</script>

<style scoped>
    .mobile-only {
        display: none;
    }
    .main-section-img {
        height: 500px; 
        object-fit: cover;
    }
    .dark-overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%; /* Full width to cover the image */
        height: 100%;
        background: linear-gradient(to right, rgb(0, 0, 0), rgba(0, 0, 0, 0.562)); /* Gradient from dark to transparent */
        pointer-events: none; /* Prevents interaction with the overlay */
    }
    .main-moto {
        font-size: 3rem;
        font-weight: 700;
        text-transform: uppercase;
    }
    .moto-description {
        font-size: 1.7rem;
    }
    .top-section-button {
        font-size: 1.5rem;
        color: white;
        background: #d92b24;
        border: none;
        border-radius: 10px;
        padding: 0.4rem 1.2rem;
        margin-right: 1rem;
    }
    .top-section-button:hover {
        background: #af231e;
    }
    .card-img-text {
        padding: 3rem 3rem;
        display: flex;
        align-items: center;
    }
    .main-section {
        padding: 1rem 5rem;
    }
    .main-section-title {
        width: 100%;
        font-size: 2rem;
        font-weight: 700;
        margin-bottom: 0.5rem;
    }

    .products-grid {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }

    .product-card {
        width: 300px;
    }

    .product-title {
        margin-top: 0.6rem;
        margin-bottom: 0.6rem;
        font-size: 1.5rem;
        text-align: center;
    }

    .product-image {
        height: 300px;
        width: 300px;
    }
    .product-image img {
        width: 100%;
        height: auto;
        object-fit: cover;
    }

    .section-description {
        margin-top: 0.6rem;
        margin-bottom: 0.6rem;
        font-size: 1.5rem;
    }

    .simple-text {
        font-size: 1rem;
        color: rgb(54, 54, 54);
        margin-top: 0;
    }

    @media (max-width: 768px) {
        .mobile-only {
            display: block;
        }
        .desktop-only {
            display: none;
        }
        .main-section-img {
            height: 400px; 
        }
        .tic-img {
            width: 100%;
        }

        .card-img-text {
            padding: 1rem 1rem !important;
        }

        .main-moto {
            font-size: 2rem;
        }

        .moto-description {
            font-size: 1rem;
        }

        .main-section {
            padding: 1rem 1rem !important;
        }

        .product-card {
            width: 100%;
            align-items: center;
            display: flex;
            flex-direction: column;
        }

        .section-description {
            font-size: 1.2rem;
        }
    }
</style>