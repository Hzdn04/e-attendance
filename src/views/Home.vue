<template>
  <div class="home" id="page-top">
    <!-- Navigation-->
        <nav class="navbar navbar-expand-lg navbar-light fixed-top py-3" id="mainNav">
            <div class="container px-4 px-lg-5">
                <a class="navbar-brand" href="#page-top">Datamax Absensi</a>
                <button class="navbar-toggler navbar-toggler-right" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
                <div class="collapse navbar-collapse" id="navbarResponsive">
                    <ul class="navbar-nav ms-auto my-2 my-lg-0">
                        <li class="nav-item"><a class="nav-link" href="#task">Task</a></li>
                        <li class="nav-item"><a class="nav-link" href="#procedures">Procedures</a></li>
                        <li class="nav-item"><a class="nav-link" href="/">Login</a></li>
                    </ul>
                </div>
            </div>
        </nav>
        <!-- Masthead-->
        <header class="masthead">
            <div class="container px-4 px-lg-5 h-100">
                <div class="row gx-4 gx-lg-5 h-100 align-items-center justify-content-center text-center">
                    <div class="col-lg-8 align-self-end">
                        <h1 class="text-white font-weight-bold">Please do your assignment and confirm your attendance</h1>
                        <hr class="divider" />
                    </div>
                    <div class="col-lg-8 align-self-baseline">
                        <p class="text-white-75 mb-5">" honesty and hard work are our steps to success "</p>
                        <a class="btn btn-primary btn-xl" href="/">Quickly</a>
                    </div>
                </div>
            </div>
        </header>
        <!-- task-->
        <section class="page-section bg-primary-home" id="task">
            <div class="container px-4 px-lg-5">
                <div class="row gx-4 gx-lg-5 justify-content-center">
                    <div class="col-lg-8 text-center">
                        <h2 class="text-white mt-0">finish your task !</h2>
                        <hr class="divider divider-light" />
                        <p class="text-white-75 mb-4">for time of the task can be negotiated with their respective colleagues partner, Keep your spirits up</p>
                        <a class="btn btn-light btn-xl mt-3" href="/">Get Started!</a>
                    </div>
                </div>
            </div>
        </section>
        <!-- Services-->
        <section class="page-section" id="procedures">
            <div class="container px-4 px-lg-5">
                <h2 class="text-center mt-0">At Your Office</h2>
                <hr class="divider" />
                <div class="row gx-4 gx-lg-5">
                    <div class="col-lg-3 col-md-6 text-center">
                        <div class="mt-3">
                            <div class="mb-2"><i class="fas fa-fingerprint fa-7x text-primary"></i></div>
                            <h3 class="h4 mb-2">Absent</h3>
                            <p class="text-muted mb-0">Our themes are updated regularly to keep them bug free!</p>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 text-center">
                        <div class="mt-3">
                            <div class="mb-2"><i class="fa-7x fas fa-share-alt text-primary"></i></div>
                            <h3 class="h4 mb-2">Sharing</h3>
                            <p class="text-muted mb-0">All dependencies are kept current to keep things fresh.</p>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 text-center">
                        <div class="mt-3">
                            <div class="mb-2"><i class="fas fa-tasks fa-7x text-primary"></i></div>
                            <h3 class="h4 mb-2">Check</h3>
                            <p class="text-muted mb-0">You can use this design as is, or you can make changes!</p>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 text-center">
                        <div class="mt-3">
                            <div class="mb-2"><i class="fa-7x fas fa-sign-out-alt text-primary"></i></div>
                            <h3 class="h4 mb-2">Logout</h3>
                            <p class="text-muted mb-0">Is it really open source if it's not made with love?</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Contact-->
        <section class="page-section" id="contact">
            <div class="container px-4 px-lg-5">
                <div class="row gx-4 gx-lg-5 justify-content-center">
                    <div class="col-lg-8 col-xl-6 text-center">
                        <h2 class="mt-0">Let's Get In Touch!</h2>
                        <hr class="divider" />
                        <p class="text-muted mb-5">Ready to start your next project with us? Send us a messages and we will get back to you as soon as possible!</p>
                    </div>
                </div>
                <div class="row gx-4 gx-lg-5 justify-content-center mb-5">
                    <div class="col-lg-6">
                        <div class="d-grid"><a class="btn btn-primary btn-xl" href="https://datamax.id/" type="submit">Go To</a></div>
                    </div>
                </div>
                <div class="row gx-4 gx-lg-5 justify-content-center">
                    <div class="col-lg-4 text-center mb-5 mb-lg-0">
                        <i class="bi-phone fs-2 mb-3 text-muted"></i>
                        <div></div>
                    </div>
                </div>
            </div>
        </section>
        <!-- Footer-->
        <footer class="bg-light py-5">
            <div class="container px-4 px-lg-5"><div class="small text-center text-muted">Copyright &copy; 2021 - Datamax</div></div>
        </footer>
  </div>
</template>

<script>

//import HelloWorld from '@/components/HelloWorld.vue'

//import "@/assets/js/scripts.js"

import "@/assets/css/styles.css";

export default {
  name: 'Home',
  components: {
    
  }
}

</script>
