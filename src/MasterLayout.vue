<template>
    <div class="wrapper">
        <!-- Sidebar -->
        <Sidebar />

        <div class="main-panel">
            <!-- Navbar -->
            <Navbar />

            <div class="container">
                <!-- Dynamic Content -->
                <slot></slot>
            </div>

            <!-- Footer -->
            <Footer/>
        </div>

        <!-- Theme Settings -->
        <ThemeSettings />
    </div>
</template>

<script>
import Sidebar from './components/layouts/Sidebar.vue';
import Navbar from './components/layouts/Navbar.vue';
import Footer from './components/layouts/Footer.vue';
// import ThemeSettings from './components/layouts/ThemeSettings.vue';

export default {
    components: {
        Sidebar,
        Navbar,
        Footer,
        // ThemeSettings,
    },
    data() {
        return {
            activeTab: "admin_home", // Dynamically set this based on your route
        };
    },
};
</script>

<style scoped>
/* Add any master-specific styles here */
</style>
