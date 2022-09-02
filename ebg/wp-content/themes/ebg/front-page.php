<?php get_header(); ?>

<?php if(get_field("home_video_youtube")): ?>
<div class="video-overlay" data-overlay="video-1" style="display:none;">
    <div class="video-overlay__close"><i class="fal fa-times"></i></div>
    <div class="video-overlay__video">
        <iframe name="fancybox-frame1630368667917" class="fancybox-iframe" allowfullscreen="allowfullscreen"
            allow="fullscreen"
            src="https://www.youtube-nocookie.com/embed/<?php the_field("home_video_youtube"); ?>?rel=0?version=3&controls=0&&showinfo=0&loop=1"
            scrolling="no"></iframe>
    </div>
</div>
<?php endif; ?>

<section class="home-slider">
    <div class="home-slider__image" style="background-image:url(<?php the_field("banner_background_image"); ?>);"></div>
    <div class="home-slider__text">
        <h1><?php the_field("banner_heading"); ?>
            <span><?php the_field("banner_sub_heading"); ?></span>
        </h1>
        <a href="/kontakt/" class="button outline primary">Kontakt aufnehmen</a>
    </div>
</section>

<section class="home-video">
    <div class="container">
        <div class="row justify-content-end">
            <div class="col-xl-4 col-lg-6 col-md-8 col-sm-12">
                <?php if(get_field("home_video_video")): ?>
                <div class="home-video__video">
                    <div class="slogan"><?php the_field("ebg_team_made", "option"); ?></div>
                    <div class="trigger" data-overlay-trigger="video-1"><i class="fas fa-play"></i></div>
                    <!-- <video autoplay loop playsinline>
                        <source src="<?php the_field("home_video_video"); ?>">
                    </video> -->
                    <?php $video_img = get_field('home_video_video'); ?>
                    <img src="<?php echo $video_img['url'] ?>" alt="<?php echo $video_img['alt'] ?>">
                </div>
                <?php endif; ?>
            </div>
        </div>
    </div>
</section>

<section class="home-facts" id="counter">
    <div class="container">
        <div class="row justify-content-between">
            <?php $data1 = get_field("data_1"); ?>
            <?php if(get_field("data_1")): ?>
            <div class="col-xl-auto col-lg-auto col-md-4 col-sm-12">
                <div class="fact">
                    <div class="counter-holder countup"><span data-count="<?php echo $data1["value"]; ?>">0</span><div class="unit"><?php echo $data1["unit"]; ?></div></div>
                    <?php echo $data1["desc"]; ?>
                </div>
            </div>
            <?php endif; ?>
            <?php if(get_field("data_2")): ?>
            <?php $data2 = get_field("data_2"); ?>
            <div class="col-xl-auto col-lg-auto col-md-4 col-sm-12">
                <div class="fact">
                    <div class="counter-holder countup"><span data-count="<?php echo $data2["value"]; ?>">0</span><div class="unit"><?php echo $data2["unit"]; ?></div></div>
                    <?php echo $data2["desc"]; ?>
                </div>
            </div>
            <?php endif; ?>
            <?php if(get_field("data_3")): ?>
            <?php $data3 = get_field("data_3"); ?>
            <div class="col-xl-auto col-lg-auto col-md-4 col-sm-12">
                <div class="fact">
                <div class="counter-holder countup"><span data-count="<?php echo $data3["value"]; ?>">0</span><div class="unit"><?php echo $data3["unit"]; ?></div></div>
                    <?php echo $data3["desc"]; ?>
                </div>
            </div>
            <?php endif; ?>
            <?php if(get_field("data_4")): ?>
            <?php $data4 = get_field("data_4"); ?>
            <div class="col-xl-auto col-lg-auto col-md-4 col-sm-12">
                <div class="fact">
                <div class="counter-holder countup"><span data-count="<?php echo $data4["value"]; ?>">0</span><div class="unit"><?php echo $data4["unit"]; ?></div></div>
                    <?php echo $data4["desc"]; ?>
                </div>
            </div>
            <?php endif; ?>
            <?php if(get_field("data_5")): ?>
            <?php $data5 = get_field("data_5"); ?>
            <div class="col-xl-auto col-lg-auto col-md-4 col-sm-12">
                <div class="fact">
                <div class="counter-holder countup"><span data-count="<?php echo $data5["value"]; ?>">0</span><?php echo $data5["unit"]; ?></div>
                    <?php echo $data5["desc"]; ?>
                </div>
            </div>
            <?php endif; ?>
        </div>
    </div>
</section>

<section class="home-links">
    <div class="container">
        <div class="row">
            <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                <div class="home-links__box">
                    <div class="text">
                        <h4 class="title"><?php the_field("home_about_left_headline"); ?></h4>
                        <?php the_field("home_about_left_text"); ?>
                    </div>
                    <a href="<?php the_field("home_about_left_link"); ?>" class="image">
                        <img src="<?php the_field("home_about_left_bild"); ?>" alt="">
                    </a>
                    <div class="link">
                        <a href="<?php the_field("home_about_left_link"); ?>" class="button outline primary"
                            title="<?php the_field("home_about_left_link_text"); ?>"><?php the_field("home_about_left_link_text"); ?></a>
                    </div>
                </div>
            </div>
            <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                <div class="row">
                    <?php while(have_rows("home_about_right_block")): the_row(); ?>
                    <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                        <div class="home-links__box margin">
                            <div class="text">
                                <h4 class="title"><?php the_sub_field("home_about_right_headline"); ?></h4>
                                <?php the_sub_field("home_about_right_text"); ?>
                            </div>
                            <a href="<?php the_sub_field("home_about_right_link"); ?>" class="image">
                                <img src="<?php the_sub_field("home_about_right_bild"); ?>" alt="">
                            </a>
                            <div class="link">
                                <a href="<?php the_sub_field("home_about_right_link"); ?>"
                                    title="<?php the_sub_field("home_about_right_link_text"); ?>"
                                    class="button outline primary"><?php the_sub_field("home_about_right_link_text"); ?></a>
                            </div>
                        </div>
                    </div>
                    <?php endwhile; ?>
                </div>
            </div>
        </div>
    </div>
</section>

<section class="image-collection">
    <div class="image-collection__grid">
        <div class="left">
            <div class="image" data-parallax="scroll" data-speed="0.1" data-image-src="<?php the_field("image_left_top"); ?>"></div>
        </div>
        <div class="center">
            <div class="image" data-parallax="scroll" data-speed="0.1" data-image-src="<?php the_field("image_left_bottom"); ?>"></div>
        </div>
        <div class="right_top">
            <div class="image" data-parallax="scroll" data-speed="0.1" data-image-src="<?php the_field("image_center"); ?>"></div>
        </div>
        <div class="right_bottom">
            <div class="image" data-parallax="scroll" data-speed="0.1" data-image-src="<?php the_field("image_right"); ?>"></div>
        </div>
    </div>
</section>

<section class="image-text grey-bg">
    <div class="container">
        <div class="row align-items-center justify-content-between flex-lg-row flex-column-reverse">
            <div class="col-xl-5 col-lg-5 col-md-12 col-sm-12">
                <h2><?php the_field("home_about_headline"); ?></h2>
                <?php the_field("home_about_content"); ?>
                <a href="<?php the_field("home_about_link"); ?>" class="button outline primary"
                    title="<?php the_field("home_about_link_text"); ?>">
                    <?php the_field("home_about_link_text"); ?>
                </a>
            </div>
            <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                <div class="image"><img src="<?php the_field("home_about_image"); ?>" alt=""></div>
            </div>
        </div>
    </div>
</section>

<section class="image-text">
    <div class="container">
        <div class="row align-items-center justify-content-between">
            <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                <div class="image"><img src="<?php the_field("home_career_image"); ?>" alt=""></div>
            </div>
            <div class="col-xl-5 col-lg-5 col-md-12 col-sm-12">
                <h2><?php the_field("home_career_headline"); ?></h2>
                <?php the_field("home_career_text"); ?>
                <?php $button = get_field("home_career_button"); ?>
                <a href="<?php echo $button["home_career_link"]; ?>" class="button outline primary"
                    title="<?php echo $button["home_career_btn_text"]; ?>"><?php echo $button["home_career_btn_text"]; ?>
                </a>
            </div>
        </div>
    </div>
</section>

<section class="news-overview grey-bg">
    <div class="news-overview__text">
        <div class="container">
            <div class="row">
                <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 text-left">
                    <h2><?php the_field("news_headline"); ?></h2>
                </div>
            </div>
        </div>
    </div>
    <div class="news-overview__news">
        <div class="container">
            <div class="row">
                <?php print_home_news(4); ?>
            </div>
        </div>
    </div>
</section>

<?php get_template_part( 'parts/content', 'cta' ); ?>

<?php get_footer(); ?>