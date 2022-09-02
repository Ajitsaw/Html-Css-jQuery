<?php get_header(); ?>

<div class="callback-overlay">
    <div class="callback-overlay__content">
        <div class="close"><i class="fal fa-times"></i></div>
        <div class="top">
            <div class="title"><?php the_field("ebg_cta_call_title", "option"); ?><span>👋</span></div>
            <div class="text"><?php the_field("ebg_cta_call_text", "option"); ?></div>
        </div>
        <div class="bottom">
            <form action="<?php bloginfo('template_directory'); ?>/submit.php" method="POST" class="ajax-form">
                <div class="title"><?php the_field("ebg_cta_call_title_form", "option"); ?></div>
                <div class="hint"><?php pll_e("Fields marked with * are required"); ?></div>
                <div class="row">
                    <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                        <input type="text" placeholder="<?php pll_e("Name"); ?>*" name="name" required>
                    </div>
                    <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6">
                        <input type="email" placeholder="<?php pll_e("E-Mail Address"); ?>*" name="email" required>
                    </div>
                    <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6">
                        <input type="text" placeholder="<?php pll_e("Phone"); ?>" name="phone">
                    </div>
                    <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                        <textarea rows="5" placeholder="<?php pll_e("Message"); ?>*" name="message" required></textarea>
                    </div>
                    <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                        <label class="checkbox">
                            <input type="checkbox" required>
                            <span></span>
                            <?php pll_e("I accept the privacy policy."); ?>
                        </label>
                    </div>
                    <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                        <input type="hidden" name="form-action" value="product">
                        <input type="hidden" name="product" value="<?php the_title(); ?>">
                        <button type="submit"><i class="far fa-angle-right"></i><?php pll_e("Send message"); ?></button>
                    </div>
                    <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                        <div class="response success"><?php pll_e("Your request has been sent."); ?></div>
                        <div class="response error"><?php pll_e("Your request could not be sent."); ?></div>
                    </div>
                </div>
            </form>
            <div class="credit">Powered by <strong>pechschwarz Media</strong></div>
        </div>
    </div>
</div>

<?php if(!get_field('header_hide')): ?>
<section class="product-header">
    <div class="container">
        <div class="row justify-content-between align-items-center">
            <div class="col-xl-7 col-lg-6 col-md-12 col-sm-12">
                <h1><?php the_title(); ?></h1>
                <?php the_field("header_text"); ?>
                <?php if(get_field('header_text_listing')): ?>
                <ul class="facts">
                    <?php while(have_rows("header_text_listing")): the_row(); ?>
                    <li><i class="far fa-check"></i><?php the_sub_field("text"); ?></li>
                    <?php endwhile; ?>
                </ul>
                <?php endif; ?>
                <button class="button outline primary" toggle-callback>Jetzt anfragen</button>
            </div>
            <div class="col-xl-5 col-lg-6 col-md-12 col-sm-12">
                <div class="image">
                    <img src="<?php the_field("header_image"); ?>">
                </div>
            </div>
        </div>
    </div>
</section>
<?php endif; ?>

<?php if(!get_field('content_hide')): ?>
<?php if(have_rows('content')): ?>
<?php while(have_rows('content')): the_row(); ?>
<?php if(get_row_layout() == 'image-data'): ?>
<section class="image-text pb-0">
    <div class="container">
        <div class="row align-items-center justify-content-between">
            <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                <div class="image no-shadow"><img src="<?php the_sub_field("data_image"); ?>" alt=''></div>
            </div>
            <div class="col-xl-5 col-lg-5 col-md-12 col-sm-12">
                <h2><?php the_sub_field("data_title"); ?></h2>
                <?php the_sub_field("data_content"); ?>
            </div>
        </div>
    </div>
</section>
<?php elseif(get_row_layout() == 'video'): ?>
<section class="product-video">
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-xl-8 col-lg-10 col-md-12 col-sm-12">
                <div class="product-video__video mt-0">
                    <iframe src="https://www.youtube.com/embed/<?php the_sub_field("youtube"); ?>"
                        title="YouTube video player" frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen></iframe>
                </div>
            </div>
        </div>
    </div>
</section>
<?php elseif(get_row_layout() == 'benefits'): ?>
<section class="product-benefits">
    <div class="product-benefits__text">
        <div class="container">
            <div class="row">
                <div class="col-xl-6 col-lg-8 col-md-10 col-sm-12">
                    <h2><?php the_sub_field("headline"); ?></h2>
                    <?php the_sub_field("benefits_text"); ?>
                </div>
            </div>
        </div>
    </div>
    <div class="product-benefits__overview">
        <div class="container">
            <div class="row">
                <?php while(have_rows("benefits")): the_row(); ?>
                <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                    <div class="benefit">
                        <div class="title"><img
                                src="<?php the_sub_field("icon"); ?>"><span><?php the_sub_field("title"); ?></span>
                        </div>
                        <div class="desc"><?php the_sub_field("text"); ?></div>
                    </div>
                </div>
                <?php endwhile; ?>
            </div>
        </div>
    </div>
</section>
<?php elseif(get_row_layout() == 'related_products'): ?>
<section class="product-overview">
    <div class="product-overview__text">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                    <h2><?php the_sub_field("headline"); ?></h2>
                </div>
            </div>
        </div>
    </div>
    <div class="product-overview__products">
        <div class="container">
            <div class="row">
                <?php print_related_products($post->ID); ?>
            </div>
        </div>
    </div>
</section>
<?php elseif(get_row_layout() == 'images'): ?>
<section class="image-collection">
    <div class="image-collection__grid">
        <div class="left">
            <div class="image" class="parallax-window" data-parallax="scroll" data-z-index="2"
                data-image-src="<?php the_sub_field("image_left"); ?>">

            </div>
        </div>
        <div class="center">
            <div class="image" class="parallax-window" data-parallax="scroll" data-z-index="2"
                data-image-src="<?php the_sub_field("image_center"); ?>">
            </div>
        </div>
        <div class="right_top">
            <div class="image" class="parallax-window" data-parallax="scroll" data-z-index="2"
                data-image-src="<?php the_sub_field("image_right_top"); ?>">
            </div>
        </div>
        <div class="right_bottom">
            <div class="image" class="parallax-window" data-parallax="scroll" data-z-index="2"
                data-image-src="<?php the_sub_field("image_right_bottom"); ?>">
            </div>
        </div>
    </div>
</section>
<?php elseif(get_row_layout() == 'references'): ?>
<section class="customers">
    <?php print_references(2, "all"); ?>
</section>
<?php elseif(get_row_layout() == 'news'): ?>
<section class="news-overview" style="background:#fff;">
    <div class="news-overview__text">
        <div class="container">
            <div class="row">
                <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 text-center">
                    <h2><?php the_sub_field("headline"); ?></h2>
                </div>
            </div>
        </div>
    </div>
    <div class="news-overview__news">
        <div class="container">
            <div class="row">
                <?php print_news_pro(4); ?>
            </div>
        </div>
    </div>
</section>
<?php endif; ?>
<?php endwhile; ?>
<?php endif; ?>
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
                <div class="col-xl-12 col-lg-12 col-md-12 col-sm-27">
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