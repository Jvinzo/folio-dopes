import React from "react";

export default function Index_main() {
    return (
        <>

            <header id="header">
                <div className="d-flex flex-column">

                    <div className="profile">
                        <img src="assets/img/profiles-img.jpg.jpeg" alt="" className="img-fluid rounded-circle" />
                        <h1 className="text-light"><a href="index.html">Juste Brunon</a></h1>
                        <div className="social-links mt-3 text-center">
                            <a href="https://twitter.com/JusteAzoman?t=yPk9EZoj7wB_kVcUrMM2SQ&s=09" target="bank" className="twitter"><i className="bx bxl-twitter"></i></a>
                            <a href="https://www.facebook.com/juste.azoman" target="bank" className="facebook"><i className="bx bxl-facebook"></i></a>
                            <a href="https://www.instagram.com/justeazoman/" className="instagram"><i className="bx bxl-instagram"></i></a>
                            <a href="https://www.skype.com/fr/" target="bank" className="google-plus"><i className="bx bxl-skype"></i></a>
                            <a href="https://www.linkedin.com/in/juste-azoman-9a0906267?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="bank" className="linkedin"><i className="bx bxl-linkedin"></i></a>
                        </div>
                    </div>

                    <nav id="navbar" className="nav-menu navbar">
                        <ul>
                            <li><a href="#hero" className="nav-link scrollto active"><i className="bx bx-home"></i> <span>Accueil</span></a></li>
                            <li><a href="#about" className="nav-link scrollto"><i className="bx bx-user"></i> <span>A Propos</span></a></li>
                            <li><a href="#resume" className="nav-link scrollto"><i className="bx bx-file-blank"></i> <span>Resumé</span></a></li>
                            <li><a href="#portfolio" className="nav-link scrollto"><i className="bx bx-book-content"></i> <span>Portfolio</span></a></li>
                            <li><a href="#services" className="nav-link scrollto"><i className="bx bx-server"></i> <span>Services</span></a></li>
                            <li><a href="#contact" className="nav-link scrollto"><i className="bx bx-envelope"></i> <span>Contact</span></a></li>
                        </ul>
                    </nav>

                </div>
            </header>


            <section id="hero" className="d-flex flex-column justify-content-center align-items-center">
                <div className="hero-container" data-aos="fade-in">
                    <h1>Juste Brunon</h1>
                    <p>Je suis  Développeur <br />  Photographe<span className="typed" data-typed-items="Designer, Developer, Freelancer, Photographer"></span></p>
                </div>
            </section>

            <main id="main">


                <section id="about" className="about">
                    <div className="container">

                        <div className="section-title">
                            <h2>A Propos</h2>
                            <p> Passionné de la programmation et du développement web depuis mes premières lignes de code. Mon voyage dans le monde du développement a débuté avec une simple curiosité, et au fil du temps, il s'est transformé en une expérience épanouissante dans la création de sites web et d'applications interactives.  <br />

                                En tant que développeur web, mon objectif principal est de transformer des idées en réalité numérique. J'aime résoudre des problèmes complexes, concevoir des interfaces utilisateur intuitives et créer des expériences en ligne qui captivent et engagent les utilisateurs.</p>
                        </div>

                        <div className="row">
                            <div className="col-lg-4" data-aos="fade-right">
                                <img src="assets/img/profiles-img.jpg.jpeg" className="img-fluid" alt="" />
                            </div>
                            <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
                                <h3> Développeur Web &amp; Photographe.</h3>
                                <p className="fst-italic">
                                    Quelques informations sur ma personne
                                </p>
                                <div className="row">
                                    <div className="col-lg-6">
                                        <ul>
                                            <li><i className="bi bi-chevron-right"></i> <strong>Naissance:</strong> <span>15 Octobre 1999</span></li>
                                            <li><i className="bi bi-chevron-right"></i> <strong>Website:</strong> <span>www.expert.com</span></li>
                                            <li><i className="bi bi-chevron-right"></i> <strong>Téléphone:</strong> <span>+229 623 982</span></li>
                                            <li><i className="bi bi-chevron-right"></i> <strong>Ville:</strong> <span>Cotonou, BÉNIN</span></li>
                                        </ul>
                                    </div>
                                    <div className="col-lg-6">
                                        <ul>
                                            <li><i className="bi bi-chevron-right"></i> <strong>Age:</strong> <span>24</span></li>
                                            <li><i className="bi bi-chevron-right"></i> <strong>Niveau:</strong> <span>Licence</span></li>
                                            <li><i className="bi bi-chevron-right"></i> <strong>Emailone:</strong> <span>Justeazoman@gmail.com</span></li>
                                            <li><i className="bi bi-chevron-right"></i> <strong>Freelance:</strong> <span>Disponible</span></li>
                                        </ul>
                                    </div>
                                </div>
                                <p>
                                    "Toute technologie suffisamment avancée est indiscernable de la magie." - Arthur C. Clarke <br />

                                    “N’importe quel idiot peut écrire du code qu'un ordinateur peut comprendre. Les bons programmeurs écrivent du code que les humains peuvent comprendre.” - Martin Fowler
                                </p>
                            </div>
                        </div>

                    </div>
                </section>


                <section id="facts" className="facts">
                    <div className="container">

                        <div className="section-title">
                            <h2>Faits</h2>
                            <p>Mes qualifications et qualités.</p>
                        </div>

                        <div className="row no-gutters">

                            <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch" data-aos="fade-up">
                                <div className="count-box">
                                    <i className="bi bi-emoji-smile"></i>
                                    <span data-purecounter-start="0" data-purecounter-end="232" data-purecounter-duration="1" className="purecounter"></span>
                                    <p><strong>Client Heureux</strong></p>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch" data-aos="fade-up" data-aos-delay="100">
                                <div className="count-box">
                                    <i className="bi bi-journal-richtext"></i>
                                    <span data-purecounter-start="0" data-purecounter-end="521" data-purecounter-duration="1" className="purecounter"></span>
                                    <p><strong>Projets</strong> Réussir</p>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch" data-aos="fade-up" data-aos-delay="200">
                                <div className="count-box">
                                    <i className="bi bi-headset"></i>
                                    <span data-purecounter-start="0" data-purecounter-end="1453" data-purecounter-duration="1" className="purecounter"></span>
                                    <p><strong>Heures d'assistance</strong> Disponible</p>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch" data-aos="fade-up" data-aos-delay="300">
                                <div className="count-box">
                                    <i className="bi bi-people"></i>
                                    <span data-purecounter-start="0" data-purecounter-end="32" data-purecounter-duration="1" className="purecounter"></span>
                                    <p><strong>Travailleurs acharnés</strong></p>
                                </div>
                            </div>

                        </div>

                    </div>
                </section>


                <section id="skills" className="skills section-bg">
                    <div className="container">

                        <div className="section-title">
                            <h2>Compétences</h2>
                            <p>Fort de mon expérience et de mes compétences, je suis prêt à relever de nouveaux défis professionnels. <br /> Mon parcours professionnel m'a permis d'acquérir des compétences essentielles, notamment la gestion de projet, la gestion du temps et la prise de décision éclairée</p>
                        </div>

                        <div className="row skills-content">

                            <div className="col-lg-6" data-aos="fade-up">

                                <div className="progress">
                                    <span className="skill">HTML <i className="val">80%</i></span>
                                    <div className="progress-bar-wrap">
                                        <div className="progress-bar" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>

                                <div className="progress">
                                    <span className="skill">CSS <i className="val">80%</i></span>
                                    <div className="progress-bar-wrap">
                                        <div className="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>

                                <div className="progress">
                                    <span className="skill">JavaScript <i className="val">65%</i></span>
                                    <div className="progress-bar-wrap">
                                        <div className="progress-bar" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>


                                <div className="progress">
                                    <span className="skill">Laravel <i className="val">75%</i></span>
                                    <div className="progress-bar-wrap">
                                        <div className="progress-bar" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>

                            </div>

                            <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">

                                <div className="progress">
                                    <span className="skill">PHP <i className="val">80%</i></span>
                                    <div className="progress-bar-wrap">
                                        <div className="progress-bar" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>

                                <div className="progress">
                                    <span className="skill">WordPress/CMS <i className="val">80%</i></span>
                                    <div className="progress-bar-wrap">
                                        <div className="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>

                                <div className="progress">
                                    <span className="skill">React JS <i className="val">90%</i></span>
                                    <div className="progress-bar-wrap">
                                        <div className="progress-bar" role="progressbar" aria-valuenow="55" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>

                                <div className="progress">
                                    <span className="skill">Photoshop <i className="val">55%</i></span>
                                    <div className="progress-bar-wrap">
                                        <div className="progress-bar" role="progressbar" aria-valuenow="55" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>

                            </div>

                        </div>

                    </div>
                </section>


                <section id="resume" className="resume">
                    <div className="container">

                        <div className="section-title">
                            <h2>Resumé</h2>
                            <p> Mon parcours professionnel et académique m'a permis d'acquérir une solide base de compétences et d'expériences enrichissantes.</p>
                        </div>

                        <div className="row">
                            <div className="col-lg-6" data-aos="fade-up">
                                <h3 className="resume-title">Résumé</h3>
                                <div className="resume-item pb-0">
                                    <h4>Juste Brunon</h4>
                                    <p><em>Dévéloppeur innovant et respectueux des délais, avec plus d'expérience dans la conception et le développement de d'interface numérique centré sur l'utilisateur, du concept initial au livrable final et soigné.</em></p>
                                    <ul>
                                        <li>Cotonou, Aibatin, Bénin</li>
                                        <li>(229) 654-0078</li>
                                        <li>Eiggroupe@mail.com</li>
                                    </ul>
                                </div>

                                <h3 className="resume-title">Education</h3>
                                <div className="resume-item">
                                    <h4>Licence en informatique</h4>
                                    <h5>2021 - 2023</h5>
                                    <p><em>EIG Groupe Bénin</em></p>
                                    <p>École internationale</p>
                                </div>
                                <div className="resume-item">
                                    <h4>Photographe Débutant</h4>
                                    <h5>2015 - 2016</h5>
                                    <p><em>UACE</em></p>
                                    <p>Institution internationale </p>
                                </div>
                            </div>
                            <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
                                <h3 className="resume-title">Expérience professionnelle</h3>
                                <div className="resume-item">
                                    <h4>Photographe Débutant</h4>
                                    <h5>2015 - 2017</h5>
                                    <p><em> UACE Event</em></p>
                                    <ul>
                                        <li>Diriger des séances de photo. </li>
                                        <li> Déléguer des tâches aux membres de l'équipe et fournir des conseils sur tous les aspects du projet. </li>
                                        <li>Superviser l’évaluation de tous les matériaux afin d’assurer la qualité et l’exactitude de la conception. </li>
                                    </ul>
                                </div>
                                <div className="resume-item">
                                    <h4>Développeur Web</h4>
                                    <h5>2023 - Présent</h5>
                                    <p><em>Freelancer</em></p>
                                    <ul>
                                        <li>Développement de nombreux programmes web et applications.</li>
                                        <li>Géré des projets ou tâches à un moment donné sous pression. </li>
                                        <li>Recommandé et consulté avec les clients sur des conceptions les plus appropriées. </li>
                                        <li>Création de présentations et propositions de conception pour les clients. </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>



                <section id="services" className="services">
                    <div className="container">

                        <div className="section-title">
                            <h2>Services</h2>
                            <p>Les services types et prestations.</p>
                        </div>

                        <div className="row">
                            <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up">
                                <div className="icon"><i className="bi bi-briefcase"></i></div>
                                <h4 className="title"><a href="">Gestin de projet</a></h4>
                                <p className="description">Planification  Coordination Suivi et contrôle Gestion des risques Communication </p>
                            </div>
                            <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up" data-aos-delay="100">
                                <div className="icon"><i className="bi bi-card-checklist"></i></div>
                                <h4 className="title"><a href="">Développeur web</a></h4>
                                <p className="description"> Conception de site web et d'application</p>
                            </div>
                            <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up" data-aos-delay="200">
                                <div className="icon"><i className="bi bi-bar-chart"></i></div>
                                <h4 className="title"><a href="">Référencements</a></h4>
                                <p className="description"> SEO - Search Engine Optimization  SEA - Search Engine Advertising</p>
                            </div>
                            <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up" data-aos-delay="300">
                                <div className="icon"><i className="bi bi-binoculars"></i></div>
                                <h4 className="title"><a href="">Test et Sécurité</a></h4>
                                <p className="description">Analyse des vulnérabilités Test d'injection SQ Test de cross-site scripting Test de sécurité côté serveur  Test d'authentification et d'autorisation Test de déni de service (DDoS)</p>
                            </div>
                            <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up" data-aos-delay="400">
                                <div className="icon"><i className="bi bi-brightness-high"></i></div>
                                <h4 className="title"><a href="">Photographe</a></h4>
                                <p className="description">Compétences  Spécialisation  Équipement  Networking </p>
                            </div>
                            <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up" data-aos-delay="500">
                                <div className="icon"><i className="bi bi-calendar4-week"></i></div>
                                <h4 className="title"><a href="">Logiciel</a></h4>
                                <p className="description">Conceptions</p>
                            </div>
                        </div>

                    </div>
                </section>



                <section id="contact" className="contact">
                    <div className="container">

                        <div className="section-title">
                            <h2>Contact</h2>
                            <p>Coordonnées pour prise de contact où envoyer un message</p>
                        </div>

                        <div className="row" data-aos="fade-in">

                            <div className="col-lg-5 d-flex align-items-stretch">
                                <div className="info">
                                    <div className="address">
                                        <i className="bi bi-geo-alt"></i>
                                        <h4>Emplacement:</h4>
                                        <p>Cotonou, BÉNIN</p>
                                    </div>

                                    <div className="email">
                                        <i className="bi bi-envelope"></i>
                                        <h4>Email:</h4>
                                        <p>Justeazoman@gmail.com</p>
                                    </div>

                                    <div className="phone">
                                        <i className="bi bi-phone"></i>
                                        <h4>Apell:</h4>
                                        <p>+229 623 982</p>
                                    </div>

                                    <iframe src="https://www.google.com/maps/place/Maria+gleta/@6.4298867,2.3265514,17z/data=!4m15!1m8!3m7!1s0x1024a813a88fcd89:0xd25ba224e25535c!2sRte+de+Maria+Gl%C3%A9ta,+Godomey!3b1!8m2!3d6.4298814!4d2.3291317!16s%2Fg%2F1hhn6j61c!3m5!1s0x1024a977fdec43c7:0x2337eb4e96db4aa0!8m2!3d6.4298814!4d2.3291317!16s%2Fg%2F11vb7l_vjl?entry=ttu" frameborder="0" style={{ border: '0', width: '100%', height: '290px' }} allowfullscreen></iframe>
                                </div>

                            </div>

                            <div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
                                <form action="forms/contact.php" method="post" role="form" className="php-email-form">
                                    <div className="row">
                                        <div className="form-group col-md-6">
                                            <label for="name">Votre Name</label>
                                            <input type="text" name="name" className="form-control" id="name" required />
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label for="name">Votre Email</label>
                                            <input type="email" className="form-control" name="email" id="email" required />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label for="name">Sujet</label>
                                        <input type="text" className="form-control" name="subject" id="subject" required />
                                    </div>
                                    <div className="form-group">
                                        <label for="name">Message</label>
                                        <textarea className="form-control" name="message" rows="10" required></textarea>
                                    </div>
                                    <div className="my-3">
                                        <div className="loading">Chargement</div>
                                        <div className="error-message"></div>
                                        <div className="sent-message">Votre message a été envoyé. Merci!</div>
                                    </div>
                                    <div className="text-center"><button type="submit">Envoyer le message</button></div>
                                </form>
                            </div>

                        </div>

                    </div>
                </section>

            </main>


            <footer id="footer">
                <div className="container">
                    <div className="copyright">
                        &copy; Copyright <strong><span>iJuste</span></strong>
                    </div>
                    <div className="credits">
                        {/*<!-- All the links in the footer should remain intact. -->*/}
                        {/*<!-- You can delete the links only if you purchased the pro version. -->*/}
                        {/*<!-- Licensing information: https://bootstrapmade.com/license/ -->*/}

                        Designed by <a href="">MadeByiJuste</a>
                    </div>
                </div>
            </footer>

        </>
    );
}
