<?php get_header(); ?>

<section class="training-content">
    <div class="container">
        <div class="row justify-content-between">
			<?php if(!get_field('preview_hide')): ?>
            <div class="col-xl-6 col-lg-7 col-md-12 col-sm-12">
                <div class="training-content__header">
                    <img src="<?php the_field("preview_image"); ?>">
                </div>
				<?php if(!get_field('facts_hide')): ?>
                <div class="training-content__info">
                    <?php the_field("preview_date"); ?>, <?php the_field("preview_time"); ?> | <?php the_field("preview_person"); ?> Teilnehmer
                </div>
				<?php endif; ?>
                <div class="training-content__headline">
                    <h1><?php the_title(); ?></h1>
                </div>
                <div class="training-content__desc">
                    <?php the_field("text"); ?>
                </div>
                <div class="training-content__facts">
                    <?php the_field("facts"); ?>
                </div>
                
                <div class="training-content__member">
                    <?php while(have_rows("members")): the_row(); ?>
                    <div class="member">
                        <div class="image"><img src="<?php the_sub_field("image"); ?>"></div>
                        <div class="info">
                            <span><?php the_sub_field("title"); ?></span>
                            <?php the_sub_field("name"); ?><br /><?php the_sub_field("position"); ?>
                        </div>
                    </div>
                    <?php endwhile; ?>
                </div>
            </div>
			<?php endif; ?>
			<?php if(!get_field('form_hide')): ?>
            <div class="col-xl-4 col-lg-5 col-md-12 col-sm-12">
                <div class="training-content__application">
                    <div class="main-title">Schulung anfragen</div>
                    <?php $partner = get_field("partner"); ?>
                    <div class="contact">
                        <div class="image"><img src="<?php echo $partner["image"]; ?>"></div>
                        <div class="name"><span><?php echo $partner["title"]; ?></span><?php echo $partner["name"]; ?><br /><?php echo $partner["position"]; ?></div>
                    </div>
                    <form action="<?php bloginfo('template_directory'); ?>/submit.php" method="POST" class="ajax-form" enctype="multipart/form-data">
                        <div class="form-group">
                            <div class="title"><?php pll_e("Deine Daten"); ?></div>
                            <div class="row">
                                <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                                    <input type="email" placeholder="<?php pll_e("E-Mail Address"); ?>*" name="email" required>
                                </div>
                                <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                                    <input type="text" placeholder="<?php pll_e("Company"); ?>*" name="company" required>
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
                            <label class="checkbox">
                                <input type="checkbox" required>
                                <span></span>
                                <?php pll_e("I accept the privacy policy."); ?>
                            </label>
                        </div>
                        <div class="form-group">
                            <input type="hidden" name="rec-email" value="<?php the_field("email"); ?>">
                            <input type="hidden" name="form-action" value="training-register">
                            <input type="hidden" name="training" value="<?php the_title(); ?>">
                            <button type="submit" class="button filled primary"><?php pll_e("Register now"); ?></button>
                        </div>
                        <div class="form-group">
                            <div class="response success"><?php pll_e("Your request has been sent."); ?></div>
                            <div class="response error"><?php pll_e("Your request could not be sent."); ?></div>
                        </div>
                    </form>
                </div>
            </div>
			<?php endif; ?>
        </div>
    </div>
</section>

<?php get_footer(); ?>