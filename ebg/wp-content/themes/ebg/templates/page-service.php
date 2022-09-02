<?php
/* Template Name: Service */
get_header();
?>

<section class="service-header">
    <div class="container">
        <div class="row justify-content-between">
            <div class="col-xl-5 col-lg-6 col-md-12 col-sm-12">
                <h1><?php the_field("header_headline"); ?></h1>
                <ul class="service-header__facts">
                    <?php while(have_rows("header_facts")): the_row(); ?>
                    <li><span><img src="<?php the_sub_field("icon"); ?>"></span><div class="caption"><?php the_sub_field("text"); ?></div></li>
                    <?php endwhile; ?>
                </ul>
            </div>
            <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                <div class="image"><img src="<?php the_field("header_image"); ?>"></div>
            </div>
        </div>
    </div>
</section>

<section class="service-persons">
    <div class="service-persons__text">
        <div class="container">
            <div class="row">
                <div class="col-xl-4 col-lg-12 col-md-12 col-sm-12">
                    <h2><?php the_field("contactpersons_headline"); ?></h2>
                </div>
            </div>
        </div>
    </div>
    <div class="service-persons__persons">
        <div class="container">
            <div class="row">
                <?php
                $partner = get_field('contactpersons_partner');
                foreach($partner as $post):
                    setup_postdata($post);
                ?>
                <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                    <div class="person">
                        <div class="image"><img src="<?php the_field("image"); ?>"></div>
                        <div class="name"><?php the_title(); ?></div>
                        <div class="position"><?php the_field("position"); ?></div>
                        <ul class="contact">
                            <li><i class="far fa-phone-alt"></i><a href="tel:<?php the_field("phone"); ?>"><?php the_field("phone"); ?></a></li>
                            <li><i class="far fa-envelope"></i><a href="mailto:<?php the_field("email"); ?>"><?php the_field("email"); ?></a></li>
                        </ul>
                    </div>
                </div>
                <?php
                endforeach;
                wp_reset_postdata();
                ?>
            </div>
        </div>
    </div>
</section>

<section class="image-grid">
    <div class="image-grid__grid">
        <div class="bottom_left">
            <div class="image">
                <img src="<?php the_field("image_left"); ?>">
            </div>
        </div>
        <div class="bottom_center">
            <div class="image">
                <img src="<?php the_field("image_center"); ?>">
            </div>
        </div>
        <div class="bottom_right_top">
            <div class="image">
                <img src="<?php the_field("image_right_top"); ?>">
            </div>
        </div>
        <div class="bottom_right_bottom">
            <div class="image">
                <img src="<?php the_field("image_right_bottom"); ?>">
            </div>
        </div>
    </div>
</section>

<section class="service-overview">
    <div class="container">
        <div class="row align-items-center justify-content-between">
            <div class="col-xl-5 col-lg-6 col-md-6 col-sm-12">
                <div class="service-overview__nav">
                    <h2><?php the_field("service_headline"); ?></h2>
                    <ul class="tabs">
                        <?php $i = 0; while(have_rows("service")): the_row(); ?>
                        <?php if($i == 0): ?>
                            <li class="active"><?php the_sub_field("title"); ?></li>
                        <?php else: ?>
                            <li><?php the_sub_field("title"); ?></li>
                        <?php endif; ?>
                        <?php $i++; endwhile; ?>
                    </ul>
                </div>
            </div>
            <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                <div class="service-overview__tabs">
                    <?php $i = 0; while(have_rows("service")): the_row(); ?>
                    <?php if($i == 0): ?>
                        <div class="tab active">
                            <div class="title"><?php the_sub_field("title"); ?></div>
                            <div class="desc"><?php the_sub_field("text"); ?></div>
                        </div>
                    <?php else: ?>
                        <div class="tab">
                            <div class="title"><?php the_sub_field("title"); ?></div>
                            <div class="desc"><?php the_sub_field("text"); ?></div>
                        </div>
                    <?php endif; ?>
                    <?php $i++; endwhile; ?>
                </div>
            </div>
        </div>
    </div>
</section>

<section class="service-numbers">
    <div class="service-numbers__text">
        <div class="container">
            <div class="row">
                <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                    <h2><?php the_field("service_headline"); ?></h2>
                </div>
            </div>
        </div>
    </div>
    <div class="service-numbers__numbers">
        <div class="text">
            <?php the_field("service_text"); ?>
        </div>
        <div class="numbers">
            <ul>
                <?php while(have_rows("service_numbers")): the_row(); ?>
                <li><span><?php the_sub_field("title"); ?></span><a href="tel:<?php the_sub_field("number"); ?>"><?php the_sub_field("number"); ?></a></li>
                <?php endwhile; ?>
            </ul>
        </div>
        <div class="hint">
            <?php the_field("service_hint"); ?>
        </div>
    </div>
</section>

<?php get_footer(); ?>