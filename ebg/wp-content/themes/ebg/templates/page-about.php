<?php
/* Template Name: Über uns */
get_header();
?>
<?php if(!get_field('header_hide')): ?>
<section class="image-header" style="background-image:url(<?php the_field("header_backgroundimage"); ?>);">
    <div class="container">
        <div class="row align-items-center">
            <div class="col-xl-6 col-lg-6 col-md-8 col-sm-12">
                <h1>
                    <?php the_field("header_headline"); ?><br />
                    <span><?php the_field("header_sub_heading"); ?></span>
                </h1>
                <?php $button = get_field('header_button'); ?>
                <a href="<?php echo $button['link'] ?>" class="button outline primary"><?php echo $button['text'] ?></a>
            </div>
        </div>
    </div>
</section>
<?php endif; ?>

<div class="video-overlay" data-overlay="video">
    <div class="video-overlay__close"><i class="fal fa-times"></i></div>
    <div class="video-overlay__video">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/<?php the_field("text_video_youtube"); ?>"
            title="YouTube video player" frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen></iframe>
    </div>
</div>

<?php if(!get_field('text_video_hide')): ?>
<section class="about-text">
    <div class="container">
        <div class="row align-items-center justify-content-between">
            <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                <h2><?php the_field("text_video_headline"); ?></h2>
                <?php the_field("text_video_text"); ?>
            </div>
            <div class="col-xl-5 col-lg-6 col-md-12 col-sm-12">
                <div class="about-text__video">
                    <div class="trigger" data-overlay-trigger="video"><i class="fas fa-play"></i></div>
                    <img src="<?php the_field("text_video_thumbnail"); ?>">
                </div>
            </div>
        </div>
    </div>
</section>
<?php endif; ?>

<?php if(!get_field('quote_hide')): ?>
<section class="about-quote">
    <div class="container">
        <div class="row">
            <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 text-center">
                <div class="about-quote__title"><?php the_field("quote"); ?></div>
                <div class="about-quote__subtitle"><?php the_field("quote_name"); ?><br /><?php the_field("quote_position"); ?></div>
            </div>
        </div>
    </div>
</section>
<?php endif; ?>

<?php if(!get_field('image_text_hide_1')): ?>
<section class="image-text">
    <div class="container">
        <div class="row align-items-center justify-content-between flex-column-reverse flex-lg-row">
            <div class="col-xl-5 col-lg-5 col-md-12 col-sm-12">
                <h2><?php the_field("image_text_headline_4"); ?></h2>
                <?php the_field("image_text_text_4"); ?>
                <?php $button = get_field("image_text_button_2"); ?>
                <?php if(get_field("image_text_button_2")): ?>
                <a href="<?php echo $button["link_1"]; ?>" class="button outline primary"><?php echo $button["text_1"]; ?></a>
                <?php endif; ?>
            </div>
            <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                <div class="image no-shadow"><img src="<?php the_field("image_text_image_2"); ?>" alt=""></div>
            </div>
        </div>
    </div>
</section>
<?php endif; ?>

<?php if(!get_field('facts_hide')): ?>
<section class="about-facts" id="counter">
    <div class="container">
        <div class="row justify-content-between">
            <?php $mitarbeiter = get_field('mitarbeiter') ?>
            <div class="col-xl-auto col-lg-auto col-md-6 col-sm-12">
                <div class="fact">
                    <div class="d-flex flex-row justify-content-center align-items-center countup">
                        <span data-count="<?php echo $mitarbeiter['value'] ?>">0</span>
                        <span class="col-auto counter"><?php echo $mitarbeiter['unit'] ?></span>
                    </div>
                    <?php echo $mitarbeiter['text'] ?>
                </div>
            </div>
            <?php $jahre_tradition = get_field('jahre_tradition') ?>
            <div class="col-xl-auto col-lg-auto col-md-6 col-sm-12">
                <div class="fact">
                    <div class="d-flex flex-row justify-content-center align-items-center countup ">
                        <span data-count="<?php echo (date("Y") - $jahre_tradition['value']) ?>">0</span>
                        <span class="col-auto counter"><?php echo $jahre_tradition['unit'] ?></span>
                    </div>
                    <?php echo $jahre_tradition['text'] ?>
                </div>
            </div>
            <?php $prozent_export = get_field('prozent_export') ?>
            <div class="col-xl-auto col-lg-auto col-md-6 col-sm-12">
                <div class="fact">
                    <div class="d-flex flex-row justify-content-center align-items-center countup">
                        <span data-count="<?php echo $prozent_export['value'] ?>" 
                        >0</span>
                        <span class="col-auto counter"><?php echo $prozent_export['unit'] ?></span>
                    </div>
                    <?php echo $prozent_export['text'] ?>
                </div>
            </div>
            <?php $auslandsvertretungen = get_field('auslandsvertretungen') ?>
            <div class="col-xl-auto col-lg-auto col-md-6 col-sm-12">
                <div class="fact">
                    <div class="d-flex flex-row justify-content-center align-items-center countup">
                        <span data-count="<?php echo $auslandsvertretungen['value'] ?>" 
                        >0</span>
                        <span class="col-auto counter"><?php echo $auslandsvertretungen['unit'] ?></span>
                    </div>
                    <?php echo $auslandsvertretungen['text'] ?>
                </div>
            </div>
            <?php $familie = get_field('familie') ?>
            <div class="col-xl-auto col-lg-auto col-md-6 col-sm-12">
                <div class="fact">
                    <div class="d-flex flex-row justify-content-center align-items-center countup">
                        <span data-count="<?php echo $familie['value'] ?>" 
                        >0</span>
                        <span class="col-auto counter"><?php echo $familie['unit'] ?></span>
                    </div>
                    <?php echo $familie['text'] ?>
                </div>
            </div>
        </div>
    </div>
</section>
<?php endif; ?>

<?php if(!get_field('image_text_hide_2')): ?>
<section class="image-text">
    <div class="container">
        <div class="row align-items-center justify-content-between flex-column-reverse flex-lg-row">
            <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                <h2><?php the_field("image_text_headline_1"); ?></h2>
                <?php the_field("image_text_text_1"); ?>
                <div class="row split-row">
                    <div class="col-md-6">
                        <h5><?php the_field("image_text_headline_2"); ?></h5>
                        <?php the_field("image_text_text_2"); ?>
                    </div>
                    <div class="col-md-6">
                        <h5><?php the_field("image_text_headline_3"); ?></h5>
                        <?php the_field("image_text_text_3"); ?>
                    </div>
                </div>
            </div>
            <div class="col-xl-5 col-lg-6 col-md-12 col-sm-12">
                <div class="image no-shadow"><img src="<?php the_field("image_text_image_1"); ?>"></div>
            </div>
        </div>
    </div>
</section>
<?php endif; ?>

<?php if(!get_field('image_collection_hide')): ?>
<section class="image-collection">
    <div class="image-collection__grid">
        <div class="left">
            <div class="image" data-parallax="scroll" data-speed="0.1" data-image-src="<?php the_field("image_left"); ?>"></div>
        </div>
        <div class="center">
            <div class="image" data-parallax="scroll" data-speed="0.1" data-image-src="<?php the_field("image_center"); ?>"></div>
        </div>
        <div class="right_top">
            <div class="image" data-parallax="scroll" data-speed="0.1" data-image-src="<?php the_field("image_right_top"); ?>"></div>
        </div>
        <div class="right_bottom">
            <div class="image" data-parallax="scroll" data-speed="0.1" data-image-src="<?php the_field("image_right_bottom"); ?>"></div>
        </div>
    </div>
</section>
<?php endif; ?>

<?php if(!get_field('surf_hide')): ?>
<section class="product-service surf">
    <?php $bg = get_field("background_image") ?>
    <div class="image">
        <img src="<?php echo $bg['url'] ?>" alt="<?php echo $bg['alt'] ?>">
    </div>
    <div class="container">
        <div class="row justify-content-between">
            <div class="col-xl-5 col-lg-6 col-md-6 col-sm-12">
                <div class="product-service__nav">
                    <h2><?php the_field("surf_headline"); ?></h2>
                    <ul class="tabs">
                        <?php $i = 0; while(have_rows("surf")): the_row(); ?>
                        <?php if($i == 0): ?>
                        <li class="active"><?php the_sub_field("tab_title"); ?></li>
                        <?php else: ?>
                        <li><?php the_sub_field("tab_title"); ?></li>
                        <?php endif; ?>
                        <?php $i++; endwhile; ?>
                    </ul>
                </div>
            </div>
            <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                <div class="product-service__tabs">
                    <?php $i = 0; while(have_rows("surf")): the_row(); ?>
                    <?php if($i == 0): ?>
                    <div class="tab active">
                        <div class="images">
                            <?php while(have_rows("repeater_image")): the_row();
                            $img = get_sub_field('image');
                            ?>
                            <div class="img">
                                <img src="<?php echo $img['url'] ?>" alt="<?php echo $img['alt'] ?>">
                            </div>
                            <?php endwhile; ?>
                        </div>

                        <div class="title"><?php the_sub_field("title"); ?></div>
                        <div class="desc"><?php the_sub_field("text"); ?></div>
                    </div>
                    <?php else: ?>
                    <div class="tab">
                        <div class="images">
                            <?php while(have_rows("repeater_image")): the_row();
                            $img = get_sub_field('image');
                            ?>
                            <div class="img">
                                <img src="<?php echo $img['url'] ?>" alt="<?php echo $img['alt'] ?>">
                            </div>
                            <?php endwhile; ?>
                        </div>
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
<?php endif; ?>

<?php if(!get_field('image_text_hide_3')): ?>
<section class="image-text">
    <div class="container">
        <div class="row align-items-end justify-content-between">
            <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                <div class="image no-shadow max-img"><img src="<?php the_field("image_text_image"); ?>"></div>
            </div>
            <div class="col-xl-5 col-lg-5 col-md-12 col-sm-12">
                <h2><?php the_field("image_text_headline"); ?></h2>
                <?php the_field("image_text_text"); ?>
            </div>
        </div>
    </div>
</section>
<?php endif; ?>

<?php if(!get_field('partners_hide')): ?>
<section class="about-logos">
    <div class="container">
        <div class="row align-items-center justify-content-between">
            <?php while(have_rows("about_our_partners")): the_row(); ?>
            <div class="col-xl-auto col-lg-auto col-md-auto col-sm-12 text-center">
                <a href='<?php the_sub_field("partners_website_link"); ?>' class="about-logos__logo" target="_blank">
                    <img src="<?php the_sub_field("partners_logo"); ?>">
                </a>
            </div>
            <?php endwhile; ?>
        </div>
    </div>
</section>
<?php endif; ?>

<?php if(!get_field('about_download_hide')): ?>
<section class="about-certs">
    <div class="container">
        <div class="row align-items-center justify-content-between">
            <div class="col-xl-5 col-lg-6 col-md-12 col-sm-12 mt-4 mt-lg-0">
                <div class="about-certs__certs">
                    <?php while(have_rows("about_download_block")): the_row(); ?>
                    <div class="cert">
                        <?php if(get_sub_field("heading")): ?>
                            <a href="<?php the_sub_field("about_download_link"); ?>" target="_blank">
                                <h5><?php the_sub_field("heading"); ?></h5>
                            </a>
                        <?php endif; ?>
                        <a href="<?php the_sub_field("about_download_bild"); ?>" class="fancybox" data-fancybox="cert"><img src="<?php the_sub_field("about_download_bild"); ?>"></a>
                        <a href="<?php the_sub_field("about_download_link"); ?>" class="action" target="_blank"><i class="far fa-arrow-down"></i><?php pll_e("Download now"); ?></a>
                    </div>
                    <?php endwhile; ?>
                </div>
            </div>
            <div class="col-xl-5 col-lg-5 col-md-12 col-sm-12">
                <h2><?php the_field("about_download_headline"); ?></h2>
                <?php the_field("about_download_text"); ?>
            </div>
        </div>
    </div>
</section>
<?php endif; ?>

<?php if(!get_field('image_hide')): ?>
<section class="">
    <img src="<?php the_field("image_banner"); ?>" class="img-fluid w-100"  />
</section>
<?php endif; ?>

<?php if(!get_field('history_hide')): ?>
<section class="about-history">
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-xl-6 col-lg-8 col-md-10 col-sm-12 text-center">
                <h2><?php the_field("history_headline"); ?></h2>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="row">
            <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                <div class="about-history__timeline">
                    <?php while(have_rows("history")): the_row(); ?>
                    <div class="stop">
                        <div class="box">
                            <div class="title"><img src="<?php the_sub_field("image"); ?>"><?php the_sub_field("year"); ?></div>
                            <div class="desc">
                                <?php the_sub_field("text"); ?>
                            </div>
                        </div>
                    </div>
                    <?php endwhile; ?>
                </div>
            </div>
        </div>
    </div>
</section>
<?php endif; ?>

<?php if(!get_field('image_text_hide_4')): ?>
<section class="image-text">
    <div class="container">
        <div class="row align-items-center justify-content-between">
            <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                <div class="image no-shadow"><img src="<?php the_field("image_text_image_4"); ?>" alt=""></div>
            </div>
            <div class="col-xl-5 col-lg-5 col-md-12 col-sm-12">
                <h2><?php the_field("image_text_headline_6"); ?></h2>
                <?php the_field("image_text_text_6"); ?>
                <!-- <?php //$button = get_field("image_text_button_4"); ?>
                <?php //if(get_field("image_text_button_4")): ?>
                <a href="<?php echo $button["link_1"]; ?>" class="button outline primary"><?php echo $button["text_1"]; ?></a>
                <?php //endif; ?> -->
            </div>
        </div>
    </div>
</section>
<?php endif; ?>

<?php get_footer(); ?>