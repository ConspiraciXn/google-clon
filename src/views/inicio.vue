<template>

    <!-- Barra superior -->
    <div class="d-flex justify-content-end align-items-center header">

        <!-- Enlaces -->
        <a href="#">Gmail</a>
        <a href="#">Imágenes</a>

        <!-- Botón menú -->
        <iconify-icon class="icono-menu" icon="gg:menu-grid-o"></iconify-icon>

        <!-- Foto de perfil -->
        <img class="img-fluid" src="https://lh3.googleusercontent.com/ogw/ANLem4ZW_QoeqW6ojhfVbi75almYDIsM8TUZPoRx5fDZVw=s32-c-mo" alt="">

    </div>

    <!-- Logo Google + Formulario -->
    <div class="d-flex flex-column justify-content-center align-items-center seccion-dos">

        <!-- Logo -->
        <img src="https://www.google.cl/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" alt="">

        <!-- Input busqueda -->
        <div class="input-busqueda mt-5 form-control d-flex align-items-center">
            <iconify-icon class="text-secondary" icon="gravity-ui:magnifier"></iconify-icon>
            <input @keypress.enter="buscar" v-model="busqueda" class="ms-2" type="text">
            <img class="icono-svg" src="@/components/svg/icono-mic.svg" alt="">
            <img class="icono-svg" src="@/components/svg/icono-camara.svg" alt="">
        </div>
        
        <!-- Botones de búsqueda -->
        <div class="d-flex mt-3">
            <button @click="buscar" class="me-2">Buscar con Google</button>
            <button>Voy a tener suerte</button>
        </div>

        <!-- Texto -->
        <p class="mt-3">Ofrecido por Google en:
            <a href="#">Español (Latinoamérica)</a>
        </p>

    </div>

    <!-- Barra inferior -->
    <div class="barra-inferior">

        <div class="d-flex align-items-center">
            <p class="m-0">Chile</p>
        </div>

        <div>
            <ul class="d-flex justify-content-start m-0">
                <li>Sobre Google</li>
                <li>Publicidad</li>
                <li>Negocios</li>
                <li>Cómo funciona la búsqueda</li>
                <li>Privacidad</li>
                <li>Condiciones</li>
                <li>Preferencias</li>
            </ul>
        </div>

    </div>

</template>

<script>

export default {

    data() {
        return {
            busqueda: ''
        }
    },

    methods: {
        buscar() {

            if (this.busqueda == '') {
                return false
            }

            else {
                window.open(`https://www.google.com/search?q=${this.busqueda}`, '_self')
            }

        }
    }

}

</script>

<style>
body {
    margin-top: 17px;
}

a {
    text-decoration: none;
}

.header {
    margin-left: 17px;
    margin-right: 17px
}

.header>a {
    font-size: 13px;
    margin-left: 15px;
    color: black;
}

.header > img {
    border-radius: 50%;
    margin-left: 15px;
    cursor: pointer;
}

.icono-menu {
    font-size: 25px;
    margin-left: 15px;
    color: gray;
    cursor: pointer;
}

.seccion-dos {
    margin-top: 23%;
}

.form-control {
    border-radius: 30px;
    height: 50px;
}

.input-busqueda {
    width: 60%;
    transition: 0.01s;
}

.input-busqueda:hover {
    box-shadow: 0px 0px 5px 1px #DADCE0;
}

input {
    border: none;
    outline: none;
    width: 100%;
    height: 100%;
    font-size: 15px;
}

.icono-svg {
    width: 25px;
    height: 25px;
    margin-left: 10px;
    cursor: pointer;
}

button {
    border: 1px solid white;
    background-color: #F8F9FA;
    padding: 8px 15px;
    border-radius: 5px;
}

button:hover {
    border: 1px solid #DADCE0;
}

p {
    font-size: 13px;
}

.barra-inferior {
    position: fixed;
    width: 100%;
    bottom: 0;
    margin: 0;
    padding: 0;
    background-color: #F2F2F2; 
}

.barra-inferior > div {
    margin-left: 20px;
    margin-right: 17px;
    padding: 15px 0;
}

.barra-inferior > div:nth-child(1) {
    border-bottom: #DADCE0 1px solid;
}

ul {
    list-style: none;
}

li {
    font-size: 13px;
    margin: 0px 10px;
    cursor: pointer;
}

</style>