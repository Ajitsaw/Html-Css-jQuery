<?php
/* Template Name: Referenzen */
get_header();
?>

<?php if(!get_field('header_hide')): ?>
<section class="references-header" style="background-image:url(<?php the_field("header_backgroundimage"); ?>);">
    <div class="container">
        <div class="row align-items-center">
            <div class="col-xl-6 col-lg-8 col-md-10 col-sm-12">
                <h1><?php the_field("header_headline"); ?></h1>
                <?php the_field("header_text"); ?>
            </div>
        </div>
    </div>
</section>
<?php endif; ?>

<?php if(!get_field('customers_hide')): ?>
<section class="customers">
    <div class="customers__text">
        <div class="container">
            <div class="row">
                <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                    <h2><?php the_field("customers_headline"); ?></h2>
                </div>
            </div>
        </div>
    </div>
    <?php print_references(3, 'all'); ?>
</section>
<?php endif; ?>

<?php if(!get_field('testis_hide')): ?>
<section class="testimonials">
    <div class="container">
        <div class="row">
            <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 text-center">
                <h2><?php the_field("testis_headline"); ?></h2>
            </div>
        </div>
    </div>
    <div class="testimonials__slider swiper-container">
        <div class="slider swiper-wrapper">
            <?php while(have_rows("testimonials")): the_row(); ?>
            <div class="testimonial swiper-slide">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-xl-7 col-lg-10 col-md-12 col-sm-12">
                            <div class="row align-items-center justify-content-between">
                                <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 text-center order-2 order-md-1">
                                    <div class="text"><?php the_sub_field("text"); ?></div>
                                    <div class="name"><?php the_sub_field("name"); ?><span><?php the_sub_field("position"); ?></span></div>
                                </div>
                                <div class="col-xl-5 col-lg-5 col-md-5 col-sm-12 order-1 order-md-2">
                                    <div class="image"><img src="<?php the_sub_field("image"); ?>"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <?php endwhile; ?>
        </div>
        <div class="bullets"></div>
    </div>
</section>
<?php endif; ?>

<?php if(!get_field('casestudies_hide')): ?>
<section class="news-overview grey-bg">
    <div class="news-overview__text">
        <div class="container">
            <div class="row">
                <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 text-center">
                    <h2><?php the_field("casestudies_headline"); ?></h2>
                </div>
            </div>
        </div>
    </div>
    <div class="news-overview__news">
        <div class="container">
            <div class="row">
               <?php print_news(4, array(14)); ?>
            </div>
        </div>
    </div>
</section>
<?php endif; ?>

<?php get_footer(); ?>