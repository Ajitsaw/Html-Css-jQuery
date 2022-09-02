<?php
/* Template Name: Karriere */
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
                <?php $button1 = get_field("header_button_1") ?>
                
                <a href="#scroll" class="button outline primary"><?php echo $button1['text_1'] ?></a>
                
            </div>
        </div>
    </div>
</section>
<?php endif; ?>

<?php if(!get_field('jobs_hide')): ?>
<section class="jobs-overview">
    <div class="container">
        <div class="row">
            <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                <h2><?php the_field("jobs_headline"); ?></h2>
            </div>
        </div>
    </div>
    <div class="jobs-overview__filter">
        <div class="container">
            <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                <div class="filter">
                    <label>
                        <span class="text"><?php pll_e("Type"); ?></span>
                        <?php print_job_filter("type"); ?>
                    </label>
                    <label>
                        <span class="text"><?php pll_e("Department"); ?></span>
                        <?php print_job_filter("department"); ?>
                    </label>
                    <label>
                        <span class="text"><?php pll_e("Location"); ?></span>
                        <?php print_job_filter("location"); ?>
                    </label>
                    <button class="button filled primary" data-reset><?php pll_e("Reset filter"); ?></button>
                </div>
            </div>
        </div>
    </div>
    <div class="jobs-overview__status">
        <div class="container">
            <div class="row">
                <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                    <strong><span><?php print_job_counter(); ?></span> <?php pll_e("vacancies"); ?></strong>
                    <?php pll_e("found"); ?>
                </div>
            </div>
        </div>
    </div>
    <div class="jobs-overview__jobs">
        <div class="select-view d-none d-md-block">
            <div class="container">
                <div class="row">
                    <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 text-end">
                        <button data-view="table"><i class="far fa-line-columns"></i></button>
                        <button class="active" data-view="grid"><i class="fas fa-grip-horizontal"></i></button>
                    </div>
                </div>
            </div>
        </div>
        <div class="overview" data-view="table" style="display:none;">
            <div class="container">
                <div class="row">
                    <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                        <table>
                            <thead>
                                <tr>
                                    <td><?php pll_e("vacancies"); ?></td>
                                    <td><?php pll_e("Type"); ?></td>
                                    <td><?php pll_e("Department"); ?></td>
                                    <td><?php pll_e("Location"); ?></td>
                                    <td></td>
                                </tr>
                            </thead>
                            <tbody>
                                <?php print_jobs_table(); ?>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        <div class="overview" data-view="grid">
            <div class="container">
                <div class="row">
                    <?php print_jobs_tiles(); ?>
                </div>
            </div>
        </div>
    </div>
</section>

<section class="image-text pt-0" id="scroll">
    <div class="container">
        <div class="row align-items-center justify-content-between flex-column-reverse flex-lg-row">
            <div class="col-xl-5 col-lg-5 col-md-12 col-sm-12">
                <!-- <h2><?php //the_field("image_text_heading"); ?></h2> -->
                <?php the_field("image_text_text"); ?>
            </div>
            <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                <div class="image no-shadow"><img src="<?php the_field("image_text_image"); ?>"></div>
            </div>
        </div>
    </div>
</section>
<?php endif; ?>

<?php if(!get_field('benefits_hide')): ?>
<section class="career-benefits">
    <div class="career-benefits__text">
        <div class="container">
            <div class="row">
                <div class="col-xl-6 col-lg-8 col-md-10 col-sm-12">
                    <h2><?php the_field("benefits_headline"); ?></h2>
                    <?php the_field("benefits_text"); ?>
                </div>
            </div>
        </div>
    </div>
    <div class="career-benefits__overview">
        <div class="container">
            <div class="row">
                <?php while(have_rows("benefits")): the_row(); ?>
                <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                    <div class="benefit">
                        <div class="top">
                            <div class="icon"><img src="<?php the_sub_field("icon"); ?>"></div>
                            <div class="title"><?php the_sub_field("title"); ?></div>
                        </div>
                        <div class="text">
                            <?php the_sub_field("text"); ?>
                        </div>
                        
                    </div>
                </div>
                <?php endwhile; ?>
            </div>
        </div>
    </div>
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
            <?php while(have_rows("testis_slider")): the_row(); ?>
            <div class="testimonial swiper-slide">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-xl-7 col-lg-10 col-md-12 col-sm-12">
                            <div class="row align-items-center justify-content-between">
                                <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 text-center order-2 order-md-1">
                                    <div class="text"><?php the_sub_field("text"); ?></div>
                                    <div class="name">
                                        <?php the_sub_field("name"); ?><span><?php the_sub_field("position"); ?></span>
                                    </div>
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

<?php if(!get_field('career_hide')): ?>
<?php
$i = 1;
while(have_rows("career_quote")): the_row();
?>
<div class="video-overlay" data-overlay="video-<?php echo $i ?>">
    <div class="video-overlay__close"><i class="fal fa-times"></i></div>
    <div class="video-overlay__video">
        <iframe width="560" height="315"
            src="https://www.youtube.com/embed/<?php the_sub_field("career_quote_youtube_video"); ?>"
            title="YouTube video player" frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen></iframe>
    </div>
</div>
<?php $i++; endwhile; ?>

<section class="career-videos">
    <div class="container">
        <div class="row">
            <?php $i==1; while(have_rows("career_quote")): the_row(); ?>
            <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12">
                <div class="career-videos__video">
                    <div class="thumbnail">
                        <div class="trigger" data-overlay-trigger="video-<?php echo $i ?>"><i class="fas fa-play"></i>
                        </div>
                        <div class="name"><?php the_sub_field("career_quote_author"); ?>
                            <span><?php the_sub_field("career_quote_desig"); ?></span>
                        </div>
                        <img src="<?php the_sub_field("career_quote_video_thumb"); ?>">
                    </div>
                    <div class="desc">"<?php the_sub_field("career_quote_text"); ?>"</div>
                </div>
            </div>
            <?php $i++; endwhile; ?>
        </div>
    </div>
</section>
<?php endif; ?>

<?php if(!get_field('career_data_hide')): ?>
<section class="home-facts" id="counter">
    <div class="container">
        <div class="row justify-content-between">
            <?php $data1 = get_field("career_data_1"); ?>
            <div class="col-xl-auto col-lg-auto col-md-4 col-sm-12">
                <div class="fact">
                    <div class="countup"><span data-count="<?php echo $data1["career_value"]; ?>">0</span><?php echo $data1["unit"]; ?></div>
                    <?php echo $data1["career_desc"]; ?>
                </div>
            </div>
            <?php $data2 = get_field("career_data_2"); ?>
            <div class="col-xl-auto col-lg-auto col-md-4 col-sm-12">
                <div class="fact">
                    <div class="countup"><span data-count="<?php echo $data2["career_value"]; ?>">0</span><?php echo $data2["unit"]; ?></div>
                    <?php echo $data2["career_desc"]; ?>
                </div>
            </div>
            <?php $data3 = get_field("career_data_3"); ?>
            <div class="col-xl-auto col-lg-auto col-md-4 col-sm-12">
                <div class="fact">
                    <div class="countup"><span data-count="<?php echo $data3["career_value"]; ?>">0</span><?php echo $data3["unit"]; ?></div>
                    <?php echo $data3["career_desc"]; ?>
                </div>
            </div>
            <?php $data4 = get_field("career_data_4"); ?>
            <div class="col-xl-auto col-lg-auto col-md-4 col-sm-12">
                <div class="fact">
                    <div class="countup"><span data-count="<?php echo $data4["career_value"]; ?>">0</span><?php echo $data4["unit"]; ?></div>
                    <?php echo $data4["career_desc"]; ?>
                </div>
            </div>
        </div>
    </div>
</section>
<?php endif; ?>

<?php $images_video = get_field("images_video"); ?>

<?php if(!get_field('video_hide')): ?>
<div class="video-overlay" data-overlay="video-4">
    <div class="video-overlay__close"><i class="fal fa-times"></i></div>
    <div class="video-overlay__video">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/<?php echo $images_video["youtube"]; ?>"
            title="YouTube video player" frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen></iframe>
    </div>
</div>

<section class="career-images">
    <div class="career-images__video">
        <div class="trigger" data-overlay-trigger="video-4"><i class="fas fa-play"></i></div>
        <img src="<?php echo $images_video["thumbnail"]; ?>">
    </div>
    <?php if(the_field("career_full_image")): ?>
    <div class="career-images__image">
        <img src="<?php the_field("career_full_image"); ?>">
    </div>
    <?php endif; ?>
</section>
<?php endif; ?>

<?php if(!get_field('process_hide')): ?>
<section class="career-process">
    <div class="container">
        <div class="row">
            <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 text-center">
                <h2><?php the_field("process_headline"); ?></h2>
            </div>
        </div>
    </div>
    <div class="career-process_process">
        <div class="container">
            <div class="row">
                <?php $i = 1; while(have_rows("process")): the_row(); ?>
                <div class="col-xl col-lg col-md-12 col-sm-12">
                    <div class="step <?php the_sub_field("add_class"); ?>">
                        <div class="icon"><img src="<?php the_sub_field("icon"); ?>"><span><?php echo $i; ?></span>
                        </div>
                        <?php the_sub_field("title"); ?>
                    </div>
                </div>
                <?php $i++; endwhile; ?>
            </div>
        </div>
    </div>
</section>
<?php endif; ?>

<?php //get_template_part( 'parts/content', 'cta' ); ?>

<?php get_footer(); ?>