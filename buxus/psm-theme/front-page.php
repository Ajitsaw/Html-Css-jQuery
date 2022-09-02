<?php
    /* Template Name: Home */
    get_header();
?>

<section class="welcome-one" id="section1">
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div class="text-block">
                    <div class="heading">
                        <h2><?php the_field('s1_big_headline_1'); ?></h2>
                        <h2 class="yellow"><?php the_field('s1_big_headline_2'); ?></h2>
                    </div>
                </div>
            </div>
        </div>
        <div class="welcome-one-content">
            <a href="#section2" class="arrow"><img src="<?php bloginfo('template_directory'); ?>/assets/img/down-arrow.png" alt=""></a>
            <div class="row align-items-center">
                <div class="col-lg-4">
                    <div class="block-image">
                        <img src="<?php the_field('s1_img'); ?>" alt="">
                    </div>
                </div>
                <div class="col-lg-6 offset-lg-1">
                    <div class="text-block">
                        <div class="heading">
                            <h4><?php the_field('s1_headline_1'); ?></h4>
                            <h4><?php the_field('s1_headline_2'); ?></h4>
                        </div>
                        <div class="block-para">
                            <?php the_field('s1_text'); ?>
                        </div>
                        <a href="#section5" class="button-text"><i class="ti-arrow-right"></i>Kontakt aufnehmen</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<section class="welcome-two" id="section2">
    <div class="container">
        <div class="row">
            <div class="col-md-10">
                <div class="text-block d-flex justify-content-end">
                    <div class="heading">
                        <h2><?php the_field('s2_big_headline_1'); ?></h2>
                        <h2 class="yellow"><?php the_field('s2_big_headline_2'); ?></h2>
                    </div>
                </div>
            </div>
        </div>
        <div class="welcome-two-content">
            <div class="row flex-column-reverse flex-lg-row">
                <div class="col-lg-6 offset-lg-1">
                    <div class="text-block">
                        <div class="heading">
                            <h4><?php the_field('s2_headline_1'); ?></h4>
                            <h4><?php the_field('s2_headline_2'); ?></h4>
                        </div>
                        <div class="block-para">
                            <?php the_field('s2_text'); ?>
                            
                        </div>
                        <a href="" class="button sidemenu"><span>Jetzt spenden</span></a>
                        <!-- <a href="<?php //the_field('donate_list'); ?>" class="button-text" target="_blank"><i class="ti-arrow-right"></i>Spender_innenliste herunterladen</a> -->
                    </div>
                </div>
                <div class="col-lg-4 offset-lg-1">
                    <div class="block-image">
                        <a href="#section3" class="arrow"><img src="<?php bloginfo('template_directory'); ?>/assets/img/down-arrow.png" alt=""></a>
                        <img src="<?php the_field('s2_img'); ?>" alt="">
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<section class="partner" id="section3">
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div class="text-block">
                    <div class="heading">
                        <h2>WIR WERDEN GEFÖRDERT</h2>
                    </div>
                </div>
            </div>
        </div>
        <div class="partner-block">
            <div class="row">
                <div class="col-lg-10 offset-lg-1">
                    <div class="text-block">
                        <div class="heading">
                            <h4>Hauptförder_innen</h4>
                        </div>
                    </div>
                    <div class="partner-holder">
                        <?php
                            while(have_rows('partner_1'))
                            {
                                the_row();
                                $logo = get_sub_field('logo');
                                $website = get_sub_field('website');
                                $partner = get_sub_field('partner');
                                $description = get_sub_field('description');

                                if(!empty($logo))
                                {
                                    if(!empty($website))
                                    {
                                        echo '<div class="partner-holder-single">
                                                <a href="'.$website.'" target="_blank"><img src="'.$logo.'" alt=""></a>
                                              </div>';
                                    }
                                    else
                                    {
                                        echo '<div class="partner-holder-single">
                                                <img src="'.$logo.'" alt="">
                                              </div>';
                                    }
                                }
                                else
                                {
                                    echo '<div class="partner-holder-single">
                                            <div class="partner-holder-single-text">
                                                <strong>'.$partner.'</strong>
                                                <div>'.$description.'</div>
                                            </div>
                                          </div>';
                                }
                            }
                        ?>
                    </div>
                </div>
            </div>
        </div>
        <div class="partner-block">
            <div class="row">
                <div class="col-lg-10 offset-lg-1">
                    <div class="text-block">
                        <div class="heading">
                            <h4>Premium & Top Förder_innen und Partner_innen</h4>
                        </div>
                    </div>
                    <div class="partner-holder">
                        <?php
                            while(have_rows('partner_2'))
                            {
                                the_row();
                                $logo = get_sub_field('logo');
                                $website = get_sub_field('website');
                                $partner = get_sub_field('partner');
                                $description = get_sub_field('description');

                                if(!empty($logo))
                                {
                                    if(!empty($website))
                                    {
                                        echo '<div class="partner-holder-single">
                                                <a href="'.$website.'" target="_blank"><img src="'.$logo.'" alt=""></a>
                                              </div>';
                                    }
                                    else
                                    {
                                        echo '<div class="partner-holder-single">
                                                <img src="'.$logo.'" alt="">
                                              </div>';
                                    }
                                }
                                else
                                {
                                    echo '<div class="partner-holder-single">
                                            <div class="partner-holder-single-text">
                                                <strong>'.$partner.'</strong><br/>
                                                <div>'.$description.'</div>
                                            </div>
                                          </div>';
                                }
                            }
                        ?>
                    </div>
                </div>
            </div>
        </div>
        <div class="partner-block">
            <div class="row">
                <div class="col-lg-10 offset-lg-1">
                    <div class="text-block">
                        <div class="heading">
                            <h4>Weitere Förder_innen</h4>
                        </div>
                    </div>
                    <div class="partner-holder">
                        <?php
                            while(have_rows('partner_3'))
                            {
                                the_row();
                                $logo = get_sub_field('logo');
                                $website = get_sub_field('website');
                                $partner = get_sub_field('partner');
                                $description = get_sub_field('description');

                                if(!empty($logo))
                                {
                                    if(!empty($website))
                                    {
                                        echo '<div class="partner-holder-single">
                                                <a href="'.$website.'" target="_blank"><img src="'.$logo.'" alt=""></a>
                                              </div>';
                                    }
                                    else
                                    {
                                        echo '<div class="partner-holder-single">
                                                <img src="'.$logo.'" alt="">
                                              </div>';
                                    }
                                }
                                else
                                {
                                    echo '<div class="partner-holder-single">
                                            <div class="partner-holder-single-text">
                                                <strong>'.$partner.'</strong><br/>
                                                <div>'.$description.'</div>
                                            </div>
                                          </div>';
                                }
                            }
                        ?>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<section class="image-section p-0">
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div class="image-section-holder">
                    <div class="image-section-holder-left">
                        <img src="<?php the_field('partner_img_1'); ?>" alt="">
                        <a href="#section4" class="arrow"><img src="<?php bloginfo('template_directory'); ?>/assets/img/down-arrow.png" alt=""></a>
                    </div>
                    <div class="image-section-holder-right">
                        <img src="<?php the_field('partner_img_2');?>" alt="">
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<section class="welcome-one welcome-one-three pt-0" id="section4">
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div class="text-block">
                    <div class="heading">
                        <h2><?php the_field('s3_big_headline_1'); ?></h2>
                        <h2 class="yellow"><?php the_field('s3_big_headline_2'); ?></h2>
                    </div>
                </div>
            </div>
        </div>
        <div class="welcome-one-content">
            <div class="row align-items-center">
                <div class="col-lg-4">
                    <div class="block-image">
                        <img src="<?php the_field('s3_img'); ?>" alt="">
                    </div>
                </div>
                <div class="col-lg-6 offset-lg-1">
                    <div class="text-block">
                        <div class="heading">
                            <h4><?php the_field('s3_headline_1'); ?></h4>
                            <h4><?php the_field('s3_headline_2'); ?></h4>
                        </div>
                        <div class="block-para">
                            <?php the_field('s3_text'); ?>
                        </div>
                        <a href="" class="button-text sidemenu"><i class="ti-arrow-right"></i>Jetzt spenden</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<section class="download pt-0">
    <div class="container">
        <div class="row">
            <div class="col-lg-10 offset-lg-1">
                <div class="text-block">
                    <div class="heading">
                        <h4>
                            Für mehr Infos, laden Sie
                        </h4>
                        <h4>
                            unsere Broschüren herunter
                        </h4>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <?php
                while(have_rows('downloads'))
                {
                    the_row();
                    $img = get_sub_field('img');
                    $download = get_sub_field('download');
                    echo '<div class="col-lg-3 col-md-6">
                            <div class="download-single">
                                <div class="download-single-image">
                                    <img src="'.$img.'" alt="">
                                </div>
                                <a href="'.$download.'" target="_blank" class="download-single-button">
                                    <img src="'.get_bloginfo('template_directory').'/assets/img/download.png" alt="">
                                </a>
                            </div>
                          </div>';
                }
            ?>
        </div>
    </div>
</section>

<section class="text-expand pt-0">
    <div class="container">
        <div class="row">
            <div class="col-lg-10 offset-lg-1">
                <div class="text-block center-block">
                    <div class="heading heading-full mb-0">
                        <h2><?php the_field('s5_headline'); ?></h2>
                    </div>
                </div>
                <div class="text-block center-block position-relative">
                    <div class="block-para mb-0">
                        <?php the_field('s5_text'); ?>
                    </div>
                    <a href="#" class="expand arrow"><img src="<?php bloginfo('template_directory'); ?>/assets/img/down-arrow.png" alt=""></a>
                </div>
            </div>
        </div>
    </div>
</section>

<section class="image-section image-section-reverse p-0">
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div class="image-section-holder">
                    <div class="image-section-holder-left">
                        <img src="<?php the_field('s5_img'); ?>" alt="">
                    </div>
                    <div class="image-section-holder-right">
                        <img src="<?php the_field('s5_img_2'); ?>" alt="">
                        <a href="<?php the_field('360_url'); ?>" class="button" target="_blank"><span>Zur 360° Ansicht</span></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<section class="text-expand">
    <div class="container">
        <div class="row">
            <div class="col-lg-10 offset-lg-1">
                <div class="text-block center-block">
                    <div class="heading heading-full mb-0">
                        <h2 class="yellow"><?php the_field('s5_headline_2'); ?></h2>
                    </div>
                </div>
                <div class="text-block center-block position-relative">
                    <div class="block-para mb-0">
                        <?php the_field('s5_text_2'); ?>
                    </div>
                    <a href="#" class="expand arrow"><img src="<?php bloginfo('template_directory'); ?>/assets/img/down-arrow.png" alt=""></a>
                </div>
            </div>
        </div>
    </div>
</section>

<secttion class="slider p-0">
    <div class="slider-tab">
        <div class="container">
            <div class="row">
                <div class="col-lg-11 offset-lg-1">
                    <div class="slider-list">
                        <?php
                            while(have_rows('history'))
                            {
                                the_row();
                                $year = get_sub_field('year');
                                $description = get_sub_field('description');

                                echo '<div class="slider-list-single">
                                        <div class="slider-list-content text-white">
                                            <h4>'.$year.'</h4>
                                            <p>'.$description.'</p>
                                        </div>
                                        <span class="dots"></span>
                                      </div>';
                            }
                        ?>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="slider-content">

        <?php
            while(have_rows('history'))
            {
                the_row();
                $headline_1 = get_sub_field('headline_1');
                $headline_2 = get_sub_field('headline_2');
                $text = get_sub_field('text');
                $slider = get_sub_field('slider');

                echo '<div class="slider-content-single">
                        <div class="sliders">
                            <div class="sliders-holder">';

                foreach($slider['slider'] as $img_slider)
                {
                    echo '<div class="sliders-holder-single">
                            <img src="'.$img_slider['img'].'" alt="">
                          </div>';
                }

                echo        '</div>
                        </div>
                        <div class="sliders-holder-arrow">
                            <div class="sliders-holder-arrow__left">
                                <i class="ti-arrow-left"></i>
                            </div>
                            <div class="sliders-holder-arrow__right">
                                <i class="ti-arrow-right"></i>
                            </div>
                        </div>
                        <div class="slider-content-single-text">
                            <div class="text-block">
                                <div class="heading">
                                    <h4>'.$headline_1.'</h4>
                                    <h4>'.$headline_2.'</h4>
                                </div>
                                <div class="block-para mb-0">'.$text.'</div>
                            </div>
                        </div>
                      </div>';
            }
        ?>
    </div>
</secttion>

<section class="welcome-one">
    <div class="container">
        <div class="row">
            <div class="col-lg-10 offset-lg-1">
                <div class="text-block">
                    <div class="heading">
                        <h2><?php the_field('s6_big_headline_1') ?></h2>
                        <h2 class="yellow"><?php the_field('s6_big_headline_2') ?></h2>
                    </div>
                </div>
            </div>
        </div>
        <div class="welcome-one-content">
            <a href="#section5" class="arrow"><img src="<?php bloginfo('template_directory'); ?>/assets/img/down-arrow.png" alt=""></a>
            <div class="row align-items-center">
                <div class="col-lg-4">
                    <div class="block-image">
                        <img src="<?php the_field('s6_img') ?>" alt="">
                    </div>
                </div>
                <div class="col-lg-6 offset-lg-1">
                    <div class="text-block">
                        <div class="heading">
                            <h4><?php the_field('s6_headline_1') ?></h4>
                            <h4><?php the_field('s6_headline_2') ?></h4>
                        </div>
                        <div class="block-para mb-0">
                            <?php the_field('s6_text') ?>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<section class="home-contact" id="section5">
    <div class="container">
        <div class="row">
            <div class="col-lg-10 offset-lg-1">
                <div class="home-contact-holder">
                    <div class="form-holder">
                        <div class="text-block">
                            <div class="heading">
                                <h4>Kontakt aufnehmen</h4>
                            </div>
                            <div class="block-para">
                                <p>Sie haben noch Fragen zu unserem Projekt oder möchten sich engagieren? Dann zögern Sie nicht uns zu kontaktieren!</p>
                            </div>
                        </div>
                        <?php echo do_shortcode('[contact-form-7 id="45" title="Kontaktformular"]'); ?>
                    </div>
                    <div class="home-contact-image">
                        <img src="<?php bloginfo('template_directory'); ?>/assets/img/w5n.jpg" alt="">
                    </div>
                </div>

            </div>
        </div>
    </div>

</section>



<?php get_footer(); ?>
