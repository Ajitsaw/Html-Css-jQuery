<?php get_header(); ?>

<?php if(!get_field('header_hide')): ?>
<section class="image-header small" style="background-image:url(<?php the_field("header_backgroundimage"); ?>);">
    <div class="container">
        <div class="row align-items-center">
            <div class="col-xl-6 col-lg-6 col-md-8 col-sm-12">
                <h1><?php the_title(); ?></h1>
                <?php the_field("header_text"); ?>
            </div>
        </div>
    </div>
</section>
<?php endif; ?>

<?php if(!get_field('image_text_hide')): ?>
<section class="image-text">
    <div class="container">
        <div class="row align-items-center justify-content-between">
            <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                <div class="image"><img src="<?php the_field("image_text_image"); ?>"></div>
            </div>
            <div class="col-xl-5 col-lg-5 col-md-12 col-sm-12">
                <h2><?php the_field("image_text_headline"); ?></h2>
                <?php the_field("image_text_text"); ?>
            </div>
        </div>
    </div>
</section>
<?php endif; ?>

<?php if(!get_field('products_hide')): ?>
<section class="product-overview grey-bg">
    <div class="product-overview__related-products">
        <div class="container">
            <div class="row">
                <h2><?php the_field("products_headline"); ?></h2>
                <?php print_sector_products($post->ID); ?>
            </div>
        </div>
    </div>
</section>
<?php endif; ?>

<?php if(!get_field('faq_hide')): ?>
<section class="faq white-bg">
    <div class="container">
        <div class="row">
            <div class="col-xl-12">
                <h2><?php the_field("faq_headline"); ?></h2>
                <?php the_field("faq_text"); ?>
            </div>
        </div>
    </div>
    <div class="faq__accordion">
        <div class="container">
            <div class="row">
                <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                    <?php while(have_rows("faq")): the_row(); ?>
                    <div class="accordion">
                        <div class="acc-title"><?php the_sub_field("title"); ?><span></span></div>
                        <div class="acc-content">
                            <div class="inner">
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

<?php get_template_part( 'parts/content', 'cta' ); ?>

<?php get_footer(); ?>