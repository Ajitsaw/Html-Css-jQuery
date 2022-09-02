<?php get_header(); ?>

<section class="content">
    <div class="container">
        <div class="row">
            <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                <h1><?php the_title(); ?></h1>
            </div>
        </div>
        <div class="row justify-content-between">
            <div class="col-xl-4 col-lg-4 col-md-12 col-sm-12">
                <?php the_field("content_left"); ?>
            </div>
            <div class="col-xl-7 col-lg-8 col-md-12 col-sm-12">
                <?php the_field("content_right"); ?>
            </div>
        </div>
    </div>
</section>

<?php get_footer(); ?>