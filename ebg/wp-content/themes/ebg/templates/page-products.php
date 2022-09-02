<?php
/* Template Name: Produkte */
get_header();
?>

<?php if(!get_field('overview_hide')): ?>
<section class="category-overview">
    <div class="category-overview__text">
        <div class="container">
            <div class="row">
                <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                    <h1><?php the_field("overview_headline"); ?></h1>
                </div>
            </div>
        </div>
    </div>
    <div class="category-overview__overview">
        <div class="container">
            <div class="row">
                <?php print_productcategories(); ?>
                <?php $cta = get_field("overview_cta"); ?>
                <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                    <div class="category-cta single-cat">
                        <div class="title"><?php echo $cta["title"]; ?></div>
                        <a href="<?php echo $cta["link"]; ?>" class="button outline white"><?php the_field("cta_link_name", "option"); ?></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<?php endif; ?>

<?php if(!get_field('service_hide')): ?>
<section class="product-service page-product">
    <div id="services"></div>
    <div class="container">
        <div class="row justify-content-between">
            <div class="col-xl-5 col-lg-6 col-md-6 col-sm-12">
                <div class="product-service__nav">
                    <h2><?php the_field("service_headline"); ?></h2>
                    <ul class="tabs">
                        <?php $i = 0; while(have_rows("service")): the_row(); ?>
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
                    <?php $i = 0; while(have_rows("service")): the_row(); ?>
                    <?php if($i == 0): ?>
                    <div class="tab active">
                        <div class="images">
                            <?php while(have_rows("repeater_image")): the_row();
                            $img = get_sub_field('image');
                            ?>
                            <div class="img">
                                <img src="<?php echo $img['url'] ?>" alt="<?php echo $img['alt'] ?>">
                                <a href="<?php echo $img['url'] ?>" class="plus fancybox" data-fancybox="img"><i class="fal fa-plus"></i></a>
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
                                <a href="<?php echo $img['url'] ?>" class="plus fancybox" data-fancybox="img"><i class="fal fa-plus"></i></a>
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

<?php if(!get_field('produkt_hide')): ?>
<section class="image-text">
    <div class="container">
        <div class="row align-items-center justify-content-between flex-column-reverse flex-lg-row">
            <div class="col-xl-5 col-lg-5 col-md-12 col-sm-12">
                <h2><?php the_field("produkt_Headline"); ?></h2>
                <?php the_field("produkt_content"); ?>
                <?php $cta = get_field("produkt_button"); ?>
                <a href="<?php echo $cta["link"]; ?>" class="button primary outline"><?php echo $cta["text"]; ?></a>
            </div>
            <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                <div class="image"><img src="<?php the_field("produkt_bild"); ?>" alt=""></div>
            </div>
        </div>
    </div>
</section>
<?php endif; ?>

<?php if(!get_field('image_hide')): ?>
<?php if(get_field('image_left_top') || get_field('image_left_bottom') || get_field('image_center') || get_field('image_right')): ?>
<section class="image-collection product-grid">
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
<?php endif; ?>
<?php endif; ?>

<?php if(!get_field('produkt_faq_hide')): ?>
<section class="faq white-bg">
    <div class="container">
        <div class="row">
            <div class="col-xl-12">
                <h2><?php the_field("produkt_faq_headline"); ?></h2>
                <?php the_field("produkt_faq_text"); ?>
            </div>
        </div>
    </div>
    <div class="faq__accordion">
        <div class="container">
            <div class="row">
                <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                    <?php while(have_rows("produkt_faq")): the_row(); ?>
                    <div class="accordion">
                        <div class="acc-title"><?php the_sub_field("produkt_titel"); ?><span></span></div>
                        <div class="acc-content">
                            <div class="inner">
                                <?php the_sub_field("produkt_text"); ?>
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