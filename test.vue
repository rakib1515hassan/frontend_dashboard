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

        <!-- Footer Section -->
        <footer class="custom-footer">
            <div class="container py-5">
                <div class="row">
                    <!-- Subscribe Section -->
                    <div class="col-md-12 text-center mb-4">
                        <h5 class="text-white mb-2">Enter Your Email</h5>
                        <input type="email" class="form-control footer-input mx-auto" placeholder="Your Email">
                        <button class="btn btn-subscribe mt-2">SUBSCRIBE</button>
                    </div>
                </div>
                <div class="row">
                    <!-- Address -->
                    <div class="col-md-3">
                        <h5 class="text-primary">ADDRESS</h5>
                        <ul class="footer-list">
                            <li>📍 Making this the first true</li>
                            <li>📞 Call: +01 1234567890</li>
                            <li>✉ Email: demo@gmail.com</li>
                        </ul>
                        <div class="social-icons">
                            <a href="#"><i class="fab fa-facebook-f"></i></a>
                            <a href="#"><i class="fab fa-twitter"></i></a>
                            <a href="#"><i class="fab fa-linkedin-in"></i></a>
                            <a href="#"><i class="fab fa-instagram"></i></a>
                        </div>
                    </div>

                    <!-- Useful Links -->
                    <div class="col-md-3">
                        <h5 class="text-primary">USEFUL LINK</h5>
                        <ul class="footer-list">
                            <li><a href="#">Home</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">News</a></li>
                            <li><a href="#">Contact Us</a></li>
                        </ul>
                    </div>

                    <!-- Help & Support -->
                    <div class="col-md-3">
                        <h5 class="text-primary">HELP & SUPPORT</h5>
                        <p class="footer-text">
                            Opposed to using 'Content here, content here', making it look like readable English. Many
                            desktop publishing packages and web page
                        </p>
                    </div>

                    <!-- News -->
                    <div class="col-md-3">
                        <h5 class="text-primary">NEWS</h5>
                        <ul class="footer-list">
                            <li>📰 Normal distribution</li>
                            <li>📰 Normal distribution</li>
                        </ul>
                    </div>
                </div>
                <div class="row mt-4">
                    <div class="col text-center">
                        <p class="footer-bottom">
                            © 2024 All Rights Reserved. Design by Free Html Templates. Distribution By ThemWagons
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    </div>
</template>

<script>
export default {
    name: "NavbarFooter",
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
}

.features-section {
    background-color: #1e3a3f;
    border-radius: 20px;
    padding: 2rem 0;
}

.card {
    border-radius: 12px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.custom-footer {
    background: #111;
    color: #aaa;
    font-size: 0.9rem;
}

.footer-input {
    max-width: 400px;
    border-radius: 0.5rem;
    text-align: center;
}

.btn-subscribe {
    background: #009ecf;
    color: white;
    border-radius: 0.5rem;
    padding: 0.5rem 1.5rem;
}

.text-primary {
    color: #00bcd4 !important;
}

.footer-list {
    list-style: none;
    padding: 0;
}

.footer-list li,
.footer-list a {
    color: #ddd;
    text-decoration: none;
    margin-bottom: 0.5rem;
}

.footer-text {
    color: #ddd;
}

.footer-bottom {
    color: #666;
    font-size: 0.8rem;
}

.social-icons a {
    color: #00bcd4;
    font-size: 1.2rem;
    margin-right: 10px;
}

.social-icons a:hover {
    color: #009ecf;
}
</style>
