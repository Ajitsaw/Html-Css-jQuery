<?php get_header(); ?>

<!-- <section class="image-header small" style="background-image:url(<?php the_field("header_backgroundimage"); ?>);">
    <div class="container">
        <div class="row align-items-end">
            <div class="col-xl-6 col-lg-6 col-md-8 col-sm-12">
                <h1><?php the_title(); ?></h1>
            </div>
        </div>
    </div>
</section> -->

<?php if(!get_field("content_hide")):?>
<section class="job-content">
    <div class="container">
        <div class="row align-items-end">
            <div class="col-xl-6 col-lg-6 col-md-8 col-sm-12 mb-lg-5 mb-2">
                <h1><?php the_title(); ?></h1>
            </div>
        </div>
        <div class="row justify-content-between">
            <div class="col-xl-6 col-lg-7 col-md-12 col-sm-12">
                <?php if(have_rows('content')): ?>
                <?php while(have_rows('content')): the_row(); ?>
                <?php if(get_row_layout() == 'text'): ?>
                <div class="job-content__section">
                    <?php if(get_sub_field('headline')): ?>
                    <h2><?php the_sub_field('headline'); ?></h2>
                    <?php endif; ?>
                    <?php the_sub_field('text'); ?>
                </div>
                <?php endif; ?>
                <?php endwhile; ?>
                <?php endif; ?>
            </div>
			<?php if(!get_field("application_hide")):?>
            <div class="col-xl-4 col-lg-5 col-md-12 col-sm-12">
                <div class="job-content__application" id="apply-jumper">
                    <div class="main-title"><?php pll_e("Interested?"); ?></div>
                    <div class="contact">
                        <?php $contact = get_field("application_contact"); ?>
                        <div class="image"><img src="<?php echo $contact["image"]; ?>"></div>
                        <div class="name">
                            <span><?php pll_e("Ansprechpartner"); ?></span><?php echo $contact["name"]; ?><br /><?php echo $contact["position"]; ?>
                        </div>
                    </div>
                    <form action="<?php bloginfo('template_directory'); ?>/submit.php" method="POST" class="career-form" enctype="multipart/form-data">
                        <div class="form-group">
                            <div class="title"><?php pll_e("Ihre Daten"); ?></div>
                            <div class="row">
                                <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                                    <input type="email" placeholder="<?php pll_e("E-Mail Address"); ?>*" name="email" required>
                                </div>
                                <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                                    <input type="text" placeholder="<?php pll_e("Firstname"); ?>*" name="firstname" required>
                                </div>
                                <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                                    <input type="text" placeholder="<?php pll_e("Lastname"); ?>*" name="lastname" required>
                                </div>
                                <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                                    <input type="text" placeholder="<?php pll_e("Phone"); ?>*" name="phone" required>
                                </div>
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="title"><?php pll_e("Documents"); ?></div>
                            <label class="file">
                                <input type="file" name="resume" required>
                                <button class="button filled white"><i class="far fa-paperclip"></i><?php pll_e("CV / Resume"); ?></button>
                                <div class="success"><i class="far fa-check"></i></div>
                            </label>
                            <label class="file">
                                <input type="file" name="cover" required>
                                <button class="button filled white "><i class="far fa-paperclip"></i><?php pll_e("Cover letter"); ?></button>
                                <div class="success"><i class="far fa-check"></i></div>
                            </label>
                        </div>
                        <div class="form-group">
                            <label class="checkbox">
                                <input type="checkbox" required>
                                <span></span>
                                <?php pll_e("I accept the privacy policy."); ?>
                            </label>
                        </div>
                        <div class="form-group">
                            <input type="hidden" name="rec-email" value="<?php the_field("application_email"); ?>">
                            <input type="hidden" name="form-action" value="career">
                            <input type="hidden" name="job" value="<?php the_title(); ?>">
                            <button type="submit" class="button filled primary"><?php pll_e("Apply now"); ?></button>
                            <div class="response success"><?php pll_e("Your request has been sent."); ?></div>
                            <div class="response error"><?php pll_e("Your request could not be sent."); ?></div>
                        </div>
                    </form>
                    <nav class="share">
                        <?php pll_e("Recommend and share now:"); ?>
                        <ul>
                            <li><a href="http://www.facebook.com/sharer.php?u=<?php the_permalink(); ?>" target="_blank"><i class="fab fa-facebook-f"></i></a></li>
                            <li><a href="http://www.linkedin.com/shareArticle?mini=true&amp;url=<?php the_permalink(); ?>" target="_blank"><i class="fab fa-linkedin-in"></i></a></li>
                            <li><a href="https://twitter.com/share?url=<?php the_permalink(); ?>&amp;text=<?php the_title(); ?>;hashtags=langguth" target="_blank"><i class="fab fa-twitter"></i></a></li>
                            <li><a href="WhatsApp://send?text=<?php the_title(); ?>" target="_blank"><i class="fab fa-whatsapp" ></i></a></li>
                        </ul>
                    </nav>
                </div>
            </div>
			<?php endif;?>
        </div>
    </div>
</section>
<?php endif;?>

<?php if(!get_field("benefits_hide")):?>
<section class="job-benefits">
    <div class="container">
        <div class="row">
            <div class="col-xl-6 col-lg-6 col-md-8 col-sm-12">
                <h2><?php the_field("benefits_headline"); ?></h2>
                <?php the_field("benefits_text"); ?>
            </div>
        </div>
    </div>
    <div class="job-benefits__overview">
        <div class="container">
            <div class="row justify-content-between">
                <?php while(have_rows("benefits")): the_row(); ?>
                <div class="col-xl-auto col-lg-auto col-md-auto col-sm-6">
                    <div class="benefit">
                        <img src="<?php the_sub_field("icon"); ?>">
                        <span><?php the_sub_field("title"); ?></span>
                    </div>
                </div>
                <?php endwhile; ?>
            </div>
        </div>
    </div>
</section>
<?php endif; ?>

<?php if(!get_field("image_hide")):?>
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
<?php endif;?>

<?php if(!get_field("hide_process")):?>
<section class="job-way">
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-xl-6 col-lg-8 col-md-10 col-sm-12 text-center">
                <h2><?php the_field("process_headline"); ?></h2>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="row">
            <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                <div class="job-way__timeline">
                    <?php while(have_rows("process")): the_row(); ?>
                    <div class="stop">
                        <div class="box">
                            <div class="title"><img
                                    src="<?php the_sub_field("icon"); ?>"><?php the_sub_field("title"); ?></div>
                            <div class="desc"><?php the_sub_field("text"); ?></div>
                        </div>
                    </div>
                    <?php endwhile; ?>
                </div>
            </div>
        </div>
    </div>
</section>
<?php endif;?>

<section class="job-apply d-flex justify-content-center align-items-center py-5">
    <a href="/kontakt/" class="button button-apply"><?php pll_e("Apply now"); ?></a>
</section>

<?php get_template_part( 'parts/content', 'cta' ); ?>

<?php get_footer(); ?>