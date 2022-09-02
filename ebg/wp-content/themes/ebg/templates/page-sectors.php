<?php
/* Template Name: Anwendungen */
get_header();
?>

<?php if(!get_field('cta_hide')): ?>
<section class="applications-overview">
    <div class="container">
        <div class="row">
            <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                <h1><?php the_title(); ?></h1>
            </div>
        </div>
    </div>
    <div class="applications-overview__overview">
        <div class="container">
            <div class="row">
                <?php print_sectors(); ?>
                <?php $cta = get_field("overview_cta"); ?>
                <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                    <div class="application-cta single-application">
                        <div class="inner">
                            <div class="title"><?php echo $cta["title"]; ?></div>
                            <a href="<?php echo $cta["link"]; ?>" class="button outline white"><?php the_field("cta_link_name", "option"); ?></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<?php endif; ?>

<?php get_template_part( 'parts/content', 'cta' ); ?>

<?php get_footer(); ?>