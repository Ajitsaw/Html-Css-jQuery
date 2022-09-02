<!doctype html>
<html>

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <link rel="stylesheet" href="<?php bloginfo('template_directory'); ?>/assets/css/app.css">
    <link rel="stylesheet" href="<?php bloginfo('template_directory'); ?>/assets/css/plugin.css">
    <link rel="stylesheet" href="<?php bloginfo('template_directory'); ?>/assets/css/themify-icons.css">
    <?php wp_head(); ?>
</head>

<body>

    <a href="#top-jumper" class="scroll-up"><i class="ti-arrow-up"></i></a>
    <header>
        <div class="container">
            <div class="d-flex align-items-center justify-content-between">
                <div class="header-left">
                    <a href="/" class="logo">
                        <img src="<?php bloginfo('template_directory'); ?>/assets/img/logo.svg" alt="">
                    </a>
                </div>
                <div class="header-right">
                    <a href="" class="button sidemenu d-md-flex d-none"><span><?php pll_e("Donate now"); ?></span></a>
                    <div class="language">
                        <i class="ti-world"></i>
                    </div>
                    <div class="language-box">
                        <?php dynamic_sidebar( 'language' ); ?>
                    </div>
                </div>
            </div>
        </div>

    </header>

    <?php if(is_front_page()) { ?>
    <section class="banner banner-home d-flex align-items-end" id='top-jumper'>
        <div class="banner-video">
            <?php
            $file = get_field('slider_file');
            $file_parts = pathinfo($file);

            switch($file_parts['extension'])
            {
                case "jpg": echo '<img src="'.$file.'">';
                break;

                case "mp4": echo '<video loop="" autoplay="" muted="" playsinline="">
                                    <source src="https://pechschwarzmedia.de/wp-content/uploads/2019/09/PSM_Web_1.mp4">
                                  </video>';
                break;

                case "": // Handle file extension for files ending in '.'
                case NULL: // Handle no file extension
                break;
            }
            ?>

        </div>
        <div class="banner-caption">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="text-block text-white">
                            <a href="#section1" class="arrow"><img src="<?php bloginfo('template_directory'); ?>/assets/img/down-arrow.png" alt=""></a>
                            <div class="heading">
                                <a href="" class="button sidemenu d-md-none d-flex mb-4"><span><?php pll_e("Donate now"); ?></span></a>
                                <h3><?php the_field('slider_headline_1'); ?></h3>
                                <h3><?php the_field('slider_headline_2'); ?></h3>
                            </div>
                            <div class="block-para mb-0">
                                <?php the_field('slider_text'); ?>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <?php } else { ?>
        <?php $slider = get_field('slider'); ?>
    <section class="banner d-flex align-items-end" id='top-jumper' style="background-image: url(<?php echo $slider['slider']; ?>);">
        <div class="banner-caption">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="text-block text-white">
                            <div class="heading heading-full">
                                <h3><?php echo $slider['headline']; ?></h3>
                            </div>
                            <div class="block-para mb-0">
                                <?php echo $slider['text']; ?>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <?php } ?>
