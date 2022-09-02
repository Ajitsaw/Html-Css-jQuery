<?php
/* Template Name: Training */
get_header();
?>

<?php if(!get_field('header_hide')): ?>
<section class="image-header" style="background-image:url(<?php the_field("header_backgroundimage"); ?>);">
    <div class="container">
        <div class="row align-items-center">
            <div class="col-xl-6 col-lg-6 col-md-8 col-sm-12">
                <h1><?php the_title(); ?>
                <span><?php the_field("header_text"); ?></span>
                </h1>
            </div>
        </div>
    </div>
</section>
<?php endif; ?>

<section class="trainings-overview">
    <div class="container">
        <div class="row">
            <?php print_training(); ?>
        </div>
    </div>
</section>

<?php if(!get_field('cta_hide')): ?>
<section class="training-register">
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-xl-8 col-lg-10 col-md-12 col-sm-12 text-center">
                <h2><?php the_field("heading"); ?></h2>
                <?php the_field("text"); ?>
                    <form action="<?php bloginfo('template_directory'); ?>/submit.php" method="POST" class="ajax-form">
                        <div class="row">
                            <div class="col-xl-8 col-lg-8 col-md-12 col-sm-12">
                                <input type="text" placeholder="<?php pll_e("Name"); ?>*" name="name" required>
                            </div>
                            <div class="col-xl-4 col-lg-8 col-md-12 col-sm-12">
                                <input type="text" placeholder="<?php pll_e("Phone"); ?>" name="phone">
                            </div>
                            <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                                <input type="email" placeholder="<?php pll_e("E-Mail Address"); ?>*" name="email" required>
                            </div>
                            <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                                <textarea rows="5" placeholder="<?php pll_e("Message"); ?>*" name="message" required></textarea>
                            </div>
                            <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                                <div class="submit">
                                    <label class="checkbox">
                                        <input type="checkbox" required>
                                        <span></span>
                                        <?php pll_e("I accept the privacy policy."); ?>
                                    </label>
                                    <input type="hidden" name="form-action" value="training">
                                    <button type="submit" class="button outline white"><?php pll_e("Send request"); ?></button>
                                </div>
                            </div>
                            <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                                <div class="response success"><?php pll_e("Your request has been sent."); ?></div>
                                <div class="response error"><?php pll_e("Your request could not be sent."); ?></div>
                            </div>
                        </div>
                    </form>
            </div>
        </div>
    </div>
</section>
<?php endif; ?>

<?php get_footer(); ?>