<template>
    <div>
        <!-- Navbar -->
        <nav class="custom-navbar">
            <div class="container">
                <ul class="nav justify-content-center">
                    <li class="nav-item">
                        <a class="nav-link" href="#">HOME</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">SEND MESSAGE</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">ABOUT</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">CONTACT US</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">DASHBOARD</a>
                    </li>
                </ul>
            </div>
        </nav>

        <!-- Features Section -->
        <div class="features-section">
            <div class="container py-5">
                <div class="row g-4 justify-content-center">
                    <!-- Card 1 -->
                    <div class="col-md-4">
                        <div class="card h-100">
                            <img src="https://via.placeholder.com/400x250" alt="Cognitive 3D" class="card-img-top" />
                            <div class="card-body">
                                <h5 class="card-title">Why Cognitive 3D</h5>
                                <p class="card-text">
                                    Explore beyond traditional web and mobile analytics. Dive into detailed user
                                    interactions specific to 3D, VR, and AR environments.
                                </p>
                            </div>
                        </div>
                    </div>

                    <!-- Card 2 -->
                    <div class="col-md-4">
                        <div class="card h-100">
                            <img src="https://via.placeholder.com/400x250" alt="Seamless Integration"
                                class="card-img-top" />
                            <div class="card-body">
                                <h5 class="card-title">Seamless Integration</h5>
                                <p class="card-text">
                                    Plug our SDK into your Unity or Unreal application with ease. Compatible across all
                                    devices.
                                </p>
                            </div>
                        </div>
                    </div>

                    <!-- Card 3 -->
                    <div class="col-md-4">
                        <div class="card h-100">
                            <img src="https://via.placeholder.com/400x250" alt="Transform Insights"
                                class="card-img-top" />
                            <div class="card-body">
                                <h5 class="card-title">Transform Insights</h5>
                                <p class="card-text">
                                    Transform spatial data into actionable insights. Optimize user engagement and drive
                                    your product forward.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Contact Section -->
        <div class="contact-section">
            <div class="container py-5">
                <div class="row align-items-center">
                    <!-- Contact Form -->
                    <div class="col-md-6">
                        <div class="contact-form">
                            <h2 class="mb-4">GET IN TOUCH</h2>
                            <form>
                                <div class="mb-3">
                                    <input type="text" class="form-control" placeholder="Name" required />
                                </div>
                                <div class="mb-3">
                                    <input type="text" class="form-control" placeholder="Phone Number" required />
                                </div>
                                <div class="mb-3">
                                    <input type="email" class="form-control" placeholder="Email" required />
                                </div>
                                <div class="mb-3">
                                    <textarea class="form-control" rows="5" placeholder="Message" required></textarea>
                                </div>
                                <button type="submit" class="btn btn-submit w-100">SEND</button>
                            </form>
                        </div>
                    </div>

                    <!-- Google Map -->
                    <div class="col-md-6 mt-4 mt-md-0">
                        <div class="map-embed">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.9997922550213!2d2.2922923156745066!3d48.85837360832873!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66fbd569b7baf%3A0x8d0b90c48c6e7988!2sEiffel%20Tower!5e0!3m2!1sen!2sfr!4v1631119061700!5m2!1sen!2sfr"
                                width="100%" height="400" style="border: 0" allowfullscreen="" loading="lazy">
                            </iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Navbar",
};
</script>

<style scoped>
.custom-navbar {
    background: #1e3a3f;
    padding: 15px 0;
}

.nav-link {
    color: #ffffff !important;
    font-weight: 500;
    letter-spacing: 1px;
    transition: color 0.3s ease;
}

.nav-link:hover {
    color: #b5b5b5;
}

.features-section {
    background-color: #1e3a3f;
    border-radius: 20px;
    padding: 2rem 0;
}

.card {
    border: none;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.card-title {
    font-weight: 600;
    color: #1e3a3f;
}

.card-text {
    color: #333333;
    font-size: 0.9rem;
}

.contact-section {
    background-color: #f9f9f9;
    padding: 50px 0;
}

.contact-form {
    background: #ffffff;
    padding: 30px;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.form-control {
    border-radius: 0.5rem;
}

.btn-submit {
    background-color: #1e3a3f;
    color: #ffffff;
    font-weight: 600;
    border-radius: 0.5rem;
}

.btn-submit:hover {
    background-color: #145359;
}

.map-embed {
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

h2 {
    font-weight: bold;
    color: #1e3a3f;
}
</style>
