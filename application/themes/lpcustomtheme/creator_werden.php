<?php
defined('C5_EXECUTE') or die("Access Denied.");
$this->inc('elements/header.php');
?>
    <header id="home" class="header text-center text-lg-left overflow-hidden mt-7 mt-lg-0">
        <div class="container-wide">
            <div class="row align-items-center h-100 py-7">
                <div class="col-lg-5 offset-lg-1">
                    <div class="px-3 px-lg-7 px-xl-0">
                        <h1 class="display-4 lh-1 fw-900">Die perfekte Plattform für erfolgreiche Influencer Kampagnen</h1>
                        <p class="lead-3 mt-5 mb-8">Hier findet jedes Unternehmen einfach und zielgerichtet passende Influencer für starke Kampagnen</p>
                        <p class="lead-3 text-more-link mt-0 mt-md-4">
                            <a href="#mehr-erfahren" title="Mehr erfahren" class="link-more link-more-red text-primary">Kampagne starten</a>
                        </p>
                    </div>
                </div>
                <div class="col-lg-5 ml-auto">
                    <!--<div class="w-full pt-12 pr-4 object-contain object-center flex justify-center items-center" x-data="{
                            list: [
                                                                    {
                                        vid_index: 0,
                                        timestamp: 0
                                    },
                                                                    {
                                        vid_index: 1,
                                        timestamp: 8000
                                    },
                                                                    {
                                        vid_index: 2,
                                        timestamp: 17000
                                    },
                                                            ],
                            lastTime: 0,
                            activeIndex: 0,
                            handlePlayerTime() {
                                this.lastTime = $refs.videoPlayer.currentTime * 1000;
                                this.activeIndex = this.list.find(item => item.timestamp < this.lastTime).vid_index;
                            }
                        }" x-init="
                            list.sort((i,o) => o.timestamp - i.timestamp);
                            $refs.videoPlayer.ontimeupdate = () => handlePlayerTime();
                        ">
                        <div class="relative w-1/2">
                            <img x-transition.duration.500ms.scale.70="" class="transition-all absolute top-0 left-0 w-full h-full" x-show="activeIndex === 0" src="https://assets.speekly.io/germany/lp-marken/naughty-nuts-briefing-fuer-ugc-videos.svg" style="display: none;">


                            <img class="w-full h-full" x-show="activeIndex === 0" src="https://assets.speekly.io/germany/lp-marken/naughty-nuts-briefing-fuer-ugc-videos.svg" style="visibility: hidden; opacity: 0; display: none;">
                            <img x-transition.duration.500ms.scale.70="" class="transition-all absolute top-0 left-0 w-full h-full" x-show="activeIndex === 1" src="https://assets.speekly.io/sternenlicht-projektor-briefing-fur-ugc-videos.svg">


                            <img class="w-full h-full" x-show="activeIndex === 1" src="https://assets.speekly.io/sternenlicht-projektor-briefing-fur-ugc-videos.svg" style="visibility: hidden; opacity: 0;">
                            <img x-transition.duration.500ms.scale.70="" class="transition-all absolute top-0 left-0 w-full h-full" x-show="activeIndex === 2" src="https://assets.speekly.io/black-apple-cider-briefing-fuer-ugc-videos.svg" style="display: none;">


                            <img class="w-full h-full" x-show="activeIndex === 2" src="https://assets.speekly.io/black-apple-cider-briefing-fuer-ugc-videos.svg" style="visibility: hidden; opacity: 0; display: none;">
                        </div>
                        <div class="relative z-0 max-w-[50%] shrink flex justify-center items-center rounded-[48px]">
                            <div class="absolute w-[calc(100%+24px)] h-[calc(100%+24px)] -z-10 rounded-[34px] sm:rounded-[40px] md:rounded-[48px] overflow-hidden bg-black/10 backdrop-blur-xl">
                            </div>
                            <video x-ref="videoPlayer" class="realtive bg-white w-full h-full p-2 rounded-[28px] sm:rounded-[36px] md:rounded-[36px]" autoplay="autoplay" playsinline="playsinline" preload="metadata" muted="muted" loop="loop">


                                <source src="https://assets.speekly.io/speekly-header.webm" type="video/webm">


                                <source src="https://assets.speekly.io/speekly-header.mp4" type="video/mp4">
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>-->
                    <img class="mt-5 shadow-3" src="<?php echo $view->getThemePath() ?>/assets/images/simply-hooked-heroshot.jpg" alt="Simply Hooked, Heroshot">
                </div>
            </div>
        </div>
    </header>

    <main>
        <div class="section bg-gray overflow-hidden mt-md-7 mt-lg-0">
            <div class="container text-center">
                <h2 class="display-4 fw-900 lh-1">Brands und Agenturen <br>die uns vertrauen</h2>
                <div class="slider-arrows-flash-dark px-8 slick-slider mt-7" data-provide="slider" data-autoplay="true" data-slides-to-show="6" data-dots="false" data-arrows="true">
                    <div><img src="<?php echo $view->getThemePath() ?>/assets/img/partner/1.png" alt="partner 1"></div>
                    <div><img src="<?php echo $view->getThemePath() ?>/assets/img/partner/2.png" alt="partner 2"></div>
                    <div><img src="<?php echo $view->getThemePath() ?>/assets/img/partner/3.png" alt="partner 3"></div>
                    <div><img src="<?php echo $view->getThemePath() ?>/assets/img/partner/4.png" alt="partner 4"></div>
                    <div><img src="<?php echo $view->getThemePath() ?>/assets/img/partner/5.png" alt="partner 5"></div>
                    <div><img src="<?php echo $view->getThemePath() ?>/assets/img/partner/6.png" alt="partner 6"></div>
                    <div><img src="<?php echo $view->getThemePath() ?>/assets/img/partner/7.png" alt="partner 7"></div>
                </div>
            </div>
            <div class="container-wide mt-9" style="margin-left: 17%;">
                <div class="text-left">
                    <div class="google-badge bg-white p-5 d-inline-block shadow-3" style="margin-bottom: -45px;">
                        <div class="w-50px float-left">
                            <img class="w-50px" src="<?php echo $view->getThemePath() ?>/assets/images/google-superzeichen.png" alt="Google Superzeichen">
                        </div>
                        <div class="w-120 float-left ml-2">
                            <p class="mb-0 small-1">Google Bewertungen</p>
                            <p class="mb-0">4.8
                                <img alt="Stern Icon" class="w-20px" src="<?php echo $view->getThemePath() ?>/assets/images/google-star.svg"><img alt="Stern Icon" class="w-20px" src="<?php echo $view->getThemePath() ?>/assets/images/google-star.svg"><img alt="Stern Icon" class="w-20px" src="<?php echo $view->getThemePath() ?>/assets/images/google-star.svg"><img alt="Stern Icon" class="w-20px" src="<?php echo $view->getThemePath() ?>/assets/images/google-star.svg"><img alt="Stern Icon" class="w-20px" src="<?php echo $view->getThemePath() ?>/assets/images/google-star.svg">
                            </p>
                            <p class="mb-0 small-3"><a target="_blank" href="https://www.google.com/search?q=jutta+wieder&rlz=1C5CHFA_enDE998DE1014&oq=jutta+wieder&aqs=chrome.0.35i39i650j46i175i199i512j69i59l2j35i39j69i60l3.2731j0j7&sourceid=chrome&ie=UTF-8"><span class="text-dark">59 Google-Rezensionen</span></a></p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container-wide">
                <div class="hs__wrapper mt-8">
                    <div class="hs__header row">
                        <div class="col-12 text-left position-absolute mb-n-hs">
                            <div class="hs__arrows"><a class="arrow arrow-prev disabled"></a></div>
                        </div>
                        <div class="col-12 text-right position-absolute mb-n-hs">
                            <div class="hs__arrows"><a class="arrow arrow-next"></a></div>
                        </div>
                    </div>
                    <ul class="hs">
                        <li class="hs__item w-350 mw-350 text-left">
                            <div class="card bg-transparent h-100">
                                <div class="card-body m-0 p-0">
                                    <div class="rating mb-3">
                                        <label class="fa fa-star active text-yellow"></label>
                                        <label class="fa fa-star active text-yellow"></label>
                                        <label class="fa fa-star active text-yellow"></label>
                                        <label class="fa fa-star active text-yellow"></label>
                                        <label class="fa fa-star active text-yellow"></label>
                                    </div>
                                    <p class="mb-5">In einem Markt mit vielen schwarzen (Agentur-) Schafen sind die Jungs von SimplyCooked eine echte Bereicherung. Unglaublich professionell, effizient und zu jeder Zeit eine erstklassige Kommunikation. Ich schätze die Zusammenarbeit mit ihnen sehr und kann sie euch wärmstens empfehlen!</p></div>
                                <div class="card-footer bg-transparent bt-0 m-0 p-0">
                                    <div class="media align-items-center pb-0">
                                        <img class="avatar avatar-xs mr-3" src="<?php echo $view->getThemePath() ?>/assets/images/avatar.jpg" alt="Avatar">
                                        <div class="media-body lh-1">
                                            <p class="fw-400 small-1 mb-1">Julian, Let's Cook</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li class="hs__item w-350 mw-350 text-left">
                            <div class="card bg-transparent h-100">
                                <div class="card-body m-0 p-0">
                                    <div class="rating mb-3">
                                        <label class="fa fa-star active text-yellow"></label>
                                        <label class="fa fa-star active text-yellow"></label>
                                        <label class="fa fa-star active text-yellow"></label>
                                        <label class="fa fa-star active text-yellow"></label>
                                        <label class="fa fa-star active text-yellow"></label>
                                    </div>
                                    <p class="mb-5">Wir arbeiten erst seit kurzem mit Simply-Hooked zusammen. Zusammenfassend ist zusagen, dass wir noch nie ein so dynamisches und engagiertes Team erlebt haben. Die Motivation schwappt direkt über und die Projekte werden perfekt ausgeführt!</p>
                                </div>
                                <div class="card-footer bg-transparent bt-0 m-0 p-0">
                                    <div class="media align-items-center pb-0">
                                        <img class="avatar avatar-xs mr-3" src="<?php echo $view->getThemePath() ?>/assets/images/avatar.jpg" alt="Avatar">
                                        <div class="media-body lh-1">
                                            <p class="fw-400 small-1 mb-1">Kreuzers</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li class="hs__item w-350 mw-350 text-left">
                            <div class="card bg-transparent h-100">
                                <div class="card-body m-0 p-0">
                                    <div class="rating mb-3">
                                        <label class="fa fa-star active text-yellow"></label>
                                        <label class="fa fa-star active text-yellow"></label>
                                        <label class="fa fa-star active text-yellow"></label>
                                        <label class="fa fa-star active text-yellow"></label>
                                        <label class="fa fa-star active text-yellow"></label>
                                    </div>
                                    <p class="mb-5">Simply-Hooked hat es mir erstmals ermöglicht, eine Online-Präsenz aufzubauen. Zu Anfang ganz klein, dann wurde es immer weiter skaliert.</p>
                                </div>
                                <div class="card-footer bg-transparent bt-0 m-0 p-0">
                                    <div class="media align-items-center pb-0">
                                        <img class="avatar avatar-xs mr-3" src="<?php echo $view->getThemePath() ?>/assets/images/avatar.jpg" alt="Avatar">

                                        <div class="media-body lh-1">
                                            <p class="fw-400 small-1 mb-1">Remstaler Stolz</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li class="hs__item w-350 mw-350 text-left">
                            <div class="card bg-transparent h-100">
                                <div class="card-body m-0 p-0">
                                    <div class="rating mb-3">
                                        <label class="fa fa-star active text-yellow"></label>
                                        <label class="fa fa-star active text-yellow"></label>
                                        <label class="fa fa-star active text-yellow"></label>
                                        <label class="fa fa-star active text-yellow"></label>
                                        <label class="fa fa-star active text-yellow"></label>
                                    </div>
                                    <p class="mb-5">Wir arbeiten erst seit kurzem mit Simply-Hooked zusammen. Zusammenfassend ist zusagen, dass wir noch nie ein so dynamisches und engagiertes Team erlebt haben. Die Motivation schwappt direkt über und die Projekte werden perfekt ausgeführt!</p>
                                </div>
                                <div class="card-footer bg-transparent bt-0 m-0 p-0">
                                    <div class="media align-items-center pb-0">
                                        <img class="avatar avatar-xs mr-3" src="<?php echo $view->getThemePath() ?>/assets/images/avatar.jpg" alt="Avatar">
                                        <div class="media-body lh-1">
                                            <p class="fw-400 small-1 mb-1">Kreuzers</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>

                    </ul>
                </div>
                <p class="mt-7" style="margin-left: 17%;">
                    <a target="_blank" href="#" class="text-uppercase link-more-dark small text-dark mt-8">Weitere Kundenstimmen (Google Reviews)</a>
                </p>
            </div>
        </div>
        <!--<section class="section">
            <div class="container">
                <div class="section-header">
                    <h2 class="display-4 fw-900">Simply zur Kampagne</h2>
                </div>

                <div class="slider-arrows-flash-dark px-10 slick-slider mt-7 slider-dots-line" data-provide="slider" data-autoplay="true" data-slides-to-show="1" data-dots="true" data-arrows="true">
                    <div>
                        <div class="row align-items-center">
                            <div class="col-md-6">
                                <p class="fw-400 small-1 text-uppercase ls-2">Schritt 1/5</p>
                                <h3 class="fw-900 lh-1">Registrierung kostenlos durchführen</h3>
                                <p class="lead-3 fw-400">Gebt eure Kontaktdaten an, um ein Profil zu erstellen.</p>
                            </div>
                            <div class="col-md-6 text-center">
                                <img class="w-60 h-60" src="<?php /*echo $view->getThemePath() */?>/assets/images/simply-hooked-step-1-registrierung-v2.png" alt="">
                            </div>
                        </div>
                    </div>
                    <div>
                        <div class="row align-items-center">
                            <div class="col-md-6">
                                <p class="fw-400 small-1 text-uppercase ls-2">Schritt 2/5</p>
                                <h3 class="fw-900 lh-1">Erstellung eines Kampagnenbriefings</h3>
                                <p class="lead-3 fw-400">Damit alle Creator wissen, wonach ihr sucht.</p>
                            </div>
                            <div class="col-md-6 text-center">
                                <img class="w-60 h-60" src="<?php /*echo $view->getThemePath() */?>/assets/images/simply-hooked-step-2-kampagne-erstellen.png" alt="">
                            </div>
                        </div>
                    </div>
                    <div>
                        <div class="row align-items-center">
                            <div class="col-md-6">
                                <p class="fw-400 small-1 text-uppercase ls-2">Schritt 3/5</p>
                                <h3 class="fw-900 lh-1">Bewerbungen annehmen</h3>
                                <p class="lead-3 fw-400">Entscheidet selbst, welcher Influencer zu euch passt.</p>
                            </div>
                            <div class="col-md-6 text-center">
                                <img class="w-60 h-60" src="<?php /*echo $view->getThemePath() */?>/assets/images/simply-hooked-step-3-bewerbung-annehmen.png" alt="">
                            </div>
                        </div>
                    </div>
                    <div>
                        <div class="row align-items-center">
                            <div class="col-md-6">
                                <p class="fw-400 small-1 text-uppercase ls-2">Schritt 4/5</p>
                                <h3 class="fw-900 lh-1">Kampagnenmanagement</h3>
                                <p class="lead-3 fw-400">Plant eure Kampagne schnell und einfach über den Chat. IHR BESTIMMT DEN PREIS!</p>
                            </div>
                            <div class="col-md-6 text-center">
                                <img class="w-60 h-60" src="<?php /*echo $view->getThemePath() */?>/assets/images/simply-hooked-step-4-kampagnenmanagement.png" alt="">
                            </div>
                        </div>
                    </div>
                    <div>
                        <div class="row align-items-center">
                            <div class="col-md-6">
                                <p class="fw-400 small-1 text-uppercase ls-2">Schritt 5/5</p>
                                <h3 class="fw-900 lh-1">Startet eure Kampagne</h3>
                                <p class="lead-3 fw-400">Ihr zahlt nur für die tatsächlich kooperierenden Influencer.</p>
                            </div>
                            <div class="col-md-6 text-center">
                                <img class="w-60 h-60" src="<?php /*echo $view->getThemePath() */?>/assets/images/simply-hooked-step-5-kampagnenstart.png" alt="">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>-->
        <section id="qualitaetsstandards" class="section overflow-hidden pt-0">
            <div class="side-scroll section-c">
                <div class="container-fluid z-index-10">
                    <div class="row gap-y">
                        <div class="col-12 col-md-12 mx-auto text-center">
                            <div class="side-scroll-container">
                                <div class="container-fluid text-left">
                                    <h2 class="ls-2 fw-900 display-4">Simply zur Kampagne</h2>
                                </div>
                                <div class="side-scroll-list-wrapper trigger mt-8 mh-400">
                                    <ul class="list-unstyled side-scroll-list cards px-lg-9 mh-400">
                                        <li class="side-scroll-item card-c text-left">
                                            <div class="card shadow-3">
                                                <div class="card-body p-7">
                                                    <div class="row align-items-center">
                                                        <div class="col-md-6">
                                                            <p class="fw-400 small-1 text-uppercase ls-2">Schritt 1/5</p>
                                                            <h3 class="fw-900 lh-1">Registrierung kostenlos durchführen</h3>
                                                            <p class="lead-3 fw-400">Gebt eure Kontaktdaten an, um ein Profil zu erstellen.</p>
                                                        </div>
                                                        <div class="col-md-6 text-center">
                                                            <img class="w-60 h-60" src="<?php echo $view->getThemePath() ?>/assets/images/simply-hooked-step-1-registrierung-v2.png" alt="">
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li class="side-scroll-item card-c text-left">
                                            <div class="card shadow-3">
                                                <div class="card-body p-7">
                                                    <div class="row align-items-center">
                                                        <div class="col-md-6">
                                                            <p class="fw-400 small-1 text-uppercase ls-2">Schritt 2/5</p>
                                                            <h3 class="fw-900 lh-1">Erstellung eines Kampagnenbriefings</h3>
                                                            <p class="lead-3 fw-400">Damit alle Creator wissen, wonach ihr sucht.</p>
                                                        </div>
                                                        <div class="col-md-6 text-center">
                                                            <img class="w-60 h-60" src="<?php echo $view->getThemePath() ?>/assets/images/simply-hooked-step-2-kampagne-erstellen.png" alt="">
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li class="side-scroll-item card-c text-left">
                                            <div class="card shadow-3">
                                                <div class="card-body p-7">
                                                    <div class="row align-items-center">
                                                        <div class="col-md-6">
                                                            <p class="fw-400 small-1 text-uppercase ls-2">Schritt 3/5</p>
                                                            <h3 class="fw-900 lh-1">Bewerbungen annehmen</h3>
                                                            <p class="lead-3 fw-400">Entscheidet selbst, welcher Influencer zu euch passt.</p>
                                                        </div>
                                                        <div class="col-md-6 text-center">
                                                            <img class="w-60 h-60" src="<?php echo $view->getThemePath() ?>/assets/images/simply-hooked-step-3-bewerbung-annehmen.png" alt="">
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li class="side-scroll-item card-c text-left">
                                            <div class="card shadow-3">
                                                <div class="card-body p-7">
                                                    <div class="row align-items-center">
                                                        <div class="col-md-6">
                                                            <p class="fw-400 small-1 text-uppercase ls-2">Schritt 4/5</p>
                                                            <h3 class="fw-900 lh-1">Kampagnenmanagement</h3>
                                                            <p class="lead-3 fw-400">Plant eure Kampagne schnell und einfach über den Chat. IHR BESTIMMT DEN PREIS!</p>
                                                        </div>
                                                        <div class="col-md-6 text-center">
                                                            <img class="w-60 h-60" src="<?php echo $view->getThemePath() ?>/assets/images/simply-hooked-step-4-kampagnenmanagement.png" alt="">
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li class="side-scroll-item card-c text-left">
                                            <div class="card shadow-3">
                                                <div class="card-body p-7">
                                                    <div class="row align-items-center">
                                                        <div class="col-md-6">
                                                            <p class="fw-400 small-1 text-uppercase ls-2">Schritt 5/5</p>
                                                            <h3 class="fw-900 lh-1">Abwicklung der Kampagne</h3>
                                                            <p class="lead-3 fw-400">Einfacher Erhalt der Zahlungen.</p>
                                                        </div>
                                                        <div class="col-md-6 text-center">
                                                            <img class="w-60 h-60" src="<?php echo $view->getThemePath() ?>/assets/images/simply-hooked-step-5-kampagnenstart.png" alt="">
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li class="side-scroll-item card-c text-left">
                                            <div class="row align-items-center">
                                                <div class="col-md-12 text-center">
                                                    <img class="w-150" src="<?php echo $view->getThemePath() ?>/assets/images/icon-simply-hooked-rgb.svg" alt="">
                                                    <h3 class="display-1 fw-900 lh-1">Startet eure Kampagne</h3><br><br>
                                                    <a href="#mehr-erfahren" title="Mehr erfahren" class="link-more link-more-red text-primary">Kampagne starten</a>
                                                </div>
                                            </div>
                                        </li>

                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!--<div class="row mb-7">
                        <div class="col-md-12">
                            <div class="text-center">
                                <p class="ls-3 text-black">technische exzellenz</p>
                            </div>
                        </div>
                    </div>-->
                </div>
            </div>
        </section>

        <section class="section overflow-hidden bg-gray ml-4">
            <div class="container-wide">
                <div class="">
                    <h2 class="display-4 fw-900">Vorteile der SimplyHooked App</h2>
                </div>
            </div>
            <div class="container">
                <div class="row mt-7 gap-y">
                    <div class="col-md-4">
                        <div class="card shadow-3 h-100">
                            <div class="card-body">
                                <img src="<?php echo $view->getThemePath() ?>/assets/images/aufgabe-icon.svg" class="card-img w-50px" alt="">
                                <p class="lead-3 mt-5">keine überteuerten Agenturen</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="card shadow-3 h-100">
                            <div class="card-body">
                                <img src="<?php echo $view->getThemePath() ?>/assets/images/aufgabe-icon.svg" class="card-img w-50px" alt="">
                                <p class="lead-3 mt-5">finde einfach neue Kampagnen</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="card shadow-3 h-100">
                            <div class="card-body">
                                <img src="<?php echo $view->getThemePath() ?>/assets/images/aufgabe-icon.svg" class="card-img w-50px" alt="">
                                <p class="lead-3 mt-5">baue langfristige Partnerschaften auf</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="card shadow-3 h-100">
                            <div class="card-body">
                                <img src="<?php echo $view->getThemePath() ?>/assets/images/aufgabe-icon.svg" class="card-img w-50px" alt="">
                                <p class="lead-3 mt-5">kommuniziere direkt mit Unternehmen</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="card shadow-3 h-100">
                            <div class="card-body">
                                <img src="<?php echo $view->getThemePath() ?>/assets/images/aufgabe-icon.svg" class="card-img w-50px" alt="">
                                <p class="lead-3 mt-5">Einfache Bezahlung</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="card shadow-3 h-100">
                            <div class="card-body">
                                <img src="<?php echo $view->getThemePath() ?>/assets/images/aufgabe-icon.svg" class="card-img w-50px" alt="">
                                <p class="lead-3 mt-5">kompetente Video-Beratung </p>
                            </div>
                        </div>
                    </div>
                    <!--<div class="col-md-12">
                        <img src="<?php /*echo $view->getThemePath() */?>/assets/images/heroshot-tmp.jpg" alt="...">
                    </div>-->
                </div>
            </div>
        </section>
        <section class="section">
            <div class="container">
                <div class="section-header">
                    <h2 class="display-4 fw-900 lh-1">Das sagen unsere Influencer <br>über SimplyHooked</h2>
                </div>
                <div class="row">
                    <div class="col-md-4 offset-md-2">
                        <div class="video-wrapper rounded-lg">
                            <video controls autoplay muted poster="<?php echo $view->getThemePath() ?>/assets/images/vertrieb-aussendienst-heroshot-v1.jpg">
                                <source src="https://www.skouz.de/application/themes/skouz.de/assets/videos/SKZ_Webcontent_Startseite.mp4" type="video/mp4">
                            </video>
                        </div>
                        <p class="lead mt-5">In einem Markt mit vielen schwarzen (Agentur-) Schafen sind die Jungs von SimplyCooked eine echte Bereicherung. Unglaublich professionell, effizient und zu jeder Zeit eine erstklassige Kommunikation. Ich schätze die Zusammenarbeit mit ihnen sehr und kann sie euch wärmstens empfehlen!</p>
                    </div>
                    <div class="col-md-4">
                        <div class="video-wrapper rounded-lg">
                            <video controls autoplay muted poster="<?php echo $view->getThemePath() ?>/assets/images/vertrieb-aussendienst-heroshot-v1.jpg">
                                <source src="https://www.skouz.de/application/themes/skouz.de/assets/videos/SKZ_Webcontent_Startseite.mp4" type="video/mp4">
                            </video>
                        </div>
                        <p class="lead mt-5">In einem Markt mit vielen schwarzen (Agentur-) Schafen sind die Jungs von SimplyCooked eine echte Bereicherung. Unglaublich professionell, effizient und zu jeder Zeit eine erstklassige Kommunikation. Ich schätze die Zusammenarbeit mit ihnen sehr und kann sie euch wärmstens empfehlen!</p>
                    </div>
                </div>
            </div>
        </section>

    </main>
<?php $this->inc('elements/footer.php'); ?>