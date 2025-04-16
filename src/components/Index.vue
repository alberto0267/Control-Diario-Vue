<script setup>
import { useRouter } from "vue-router";
import logo from "../assets/logo3d.png";
import "../styles/index.css";

const router = useRouter();

const goToLogin = () => router.push("/login");
const goToRegister = () => router.push("/register");
const goToCreate = () => router.push("/create");
</script>


<template>
    <div class="index-wrapper">
        <div class="index-container">
            <img :src="logo" alt="Logo" class="index-logo" />

            <div class="index-box">
                <button class="index-button" @click="goToLogin">Iniciar sesión</button>
                <button class="index-button" @click="goToRegister">Regístrate</button>

                <div class="forgot-password">
                    <a href="#" class="forgot-link">¿Has olvidado la contraseña?</a>
                </div>
            </div>

            <div>
                <p class="new-shop">¿Eres nuevo cliente?</p>
                <button class="shop-button" @click="goToCreate">Registrar tienda</button>
            </div>
        </div>
    </div>
</template>