<?php
/* Template Name: News */
get_header();
?>

<?php if(!get_field('header_hide')): ?>
<section class="image-header" style="background-image:url(<?php the_field("header_backgroundimage"); ?>);">
    <div class="container">
        <div class="row align-items-center">
            <div class="col-xl-6 col-lg-6 col-md-8 col-sm-12">
                <h1>
                    <?php the_title(); ?>
                    <span> <?php the_field("header_text"); ?></span>
                </h1>
            </div>
        </div>
    </div>
</section>
<?php endif; ?>


<section class="news-overview">
    <div class="news-overview__filter">
        <div class="container">
            <div class="row">
                <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                    <label>
                        <span class="text"><?php pll_e("Filter by"); ?></span>
                        <select class="custom-select" data-filter>
                            <option value="*"><?php pll_e("All"); ?></option>
                            <?php print_news_filter(); ?>
                        </select>
                    </label>
                </div>
            </div>
        </div>
    </div>
    <div class="news-overview__news">
        <div class="container">
            <div class="row">
                <?php print_news(); ?>
            </div>
        </div>
    </div>
    <div class="news-button d-flex align-items-center justify-content-center mt-lg-5 pt-lg-5 pt-0 mt-4">
        <a href="" class="button outline primary news-btn"><?php pll_e("Load More"); ?></a>
    </div>
</section>

<?php if(!get_field('news_bottom_hide')): ?>
<section class="news-request">
    <div class="container">
        <div class="row align-items-center justify-content-between">
            <div class="col-xl-4 col-lg-4 col-md-12 col-sm-12 text-center">
                <h2><?php the_field('news_bottom_title'); ?></h2>
                <p><?php the_field('news_bottom_content'); ?></p>
            </div>
            <div class="col-xl-4 col-lg-5 col-md-12 col-sm-12">
                <div class="news-request__form">
                    <div class="main-title"><?php pll_e("Press"); ?></div>
                    <div class="contact">
                        <div class="image"><img src="<?php the_field('contact_person_image','option'); ?>"></div>
                        <div class="name">
                            <span><?php the_field('contact_person_address','option'); ?></span>
                            <?php the_field('contact_person_name','option'); ?>
                        </div>
                    </div>
                    <form action="<?php bloginfo('template_directory'); ?>/submit.php" method="POST" class="ajax-form">
                        <div class="form-group">
                            <div class="title"><?php pll_e("Your data"); ?></div>
                            <div class="row">
                                <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                                    <input type="text" placeholder="<?php pll_e("Company"); ?>" name="company">
                                </div>
                                <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                                    <input type="text" placeholder="<?php pll_e("Firstname"); ?>*" name="firstname" required>
                                </div>
                                <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                                    <input type="text" placeholder="<?php pll_e("Lastname"); ?>*" name="lastname" required>
                                </div>
                                <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                                    <input type="email" placeholder="<?php pll_e("E-Mail Address"); ?>*" name="email" required>
                                </div>
                                <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                                    <input type="text" placeholder="<?php pll_e("Phone"); ?>" name="phone">
                                </div>
                                <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                                    <textarea rows="5" placeholder="<?php pll_e("Message"); ?>*"  name="message" required></textarea>
                                </div>
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="checkbox">
                                <input type="checkbox" required>
                                <span></span>
                                <?php pll_e("I accept the privacy policy."); ?>
                            </label>
                        </div>
                        <div class="form-group">
                            <input type="hidden" name="form-action" value="news">
                            <button type="submit" class="button filled white"><?php pll_e("Send message"); ?></button>
                        </div>
                        <div class="form-group">
                            <div class="response success"><?php pll_e("Your request has been sent."); ?></div>
                            <div class="response error"><?php pll_e("Your request could not be sent."); ?></div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</section>
<?php endif; ?>

<?php get_footer(); ?>