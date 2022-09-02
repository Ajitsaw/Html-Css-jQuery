<?php get_header(); ?>

<section class="news-content">
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-xl-8 col-lg-10 col-md-12 col-sm-12">
                <?php if(have_rows('content')): ?>
                    <?php while(have_rows('content')): the_row(); ?>
                        <?php if(get_row_layout() == 'image'): ?>
                            <div class="news-content__section image">
                                <img src="<?php the_sub_field("image"); ?>">
                            </div>                            
                        <?php elseif(get_row_layout() == 'text'): ?>
                            <div class="news-content__section text">
                                <?php the_sub_field("text"); ?>
                            </div>
                        <?php elseif(get_row_layout() == 'gallery'): ?>
                            <div class="news-content__section gallery">
                                <?php while(have_rows("gallery")): the_row(); ?>
                                <a href="<?php the_sub_field("image"); ?>" data-lightbox="gallery" class="image">
                                    <img src="<?php the_sub_field("image"); ?>">
                                </a>
                                <?php endwhile; ?>
                            </div>
                        <?php elseif(get_row_layout() == 'video'): ?>
                            <div class="news-content__section video">
                                <iframe src="https://www.youtube.com/embed/<?php the_sub_field("youtube"); ?>" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                <div class="desc"><?php the_sub_field("desc"); ?></div>
                            </div>
                        <?php endif; ?>
                    <?php endwhile; ?>
                <?php endif; ?>
            </div>
        </div>
    </div>
</section>

<section class="news-footer">
    <div class="container">
        <div class="row">
            <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                <div class="news-footer__categories">
                    <div class="title"><?php pll_e("Topics"); ?>:</div>
                    <?php print_news_cats(); ?>
                </div>
                <div class="news-footer__share">
                    <?php pll_e("Recommend and share now:"); ?>
                    <ul>
                        <li><a href="http://www.facebook.com/sharer.php?u=<?php the_permalink(); ?>" target="_blank"><i class="fab fa-facebook-f"></i></a></li>
                        <li><a href="http://www.linkedin.com/shareArticle?mini=true&amp;url=<?php the_permalink(); ?>" target="_blank"><i class="fab fa-linkedin-in"></i></a></li>
                        <li><a href="https://twitter.com/share?url=<?php the_permalink(); ?>&amp;text=<?php the_title(); ?>;hashtags=EBG" target="_blank"><i class="fab fa-twitter"></i></a></li>
                        <li><a href="WhatsApp://send?text=<?php the_title(); ?>" target="_blank"><i class="fab fa-whatsapp"></i></a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</section>

<?php get_template_part( 'parts/content', 'cta' ); ?>

<section class="news-overview">
    <div class="news-overview__text">
        <div class="container">
            <div class="row">
                <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 text-center">
                    <h2><?php pll_e("Articles on similar topics"); ?></h2>
                </div>
            </div>
        </div>
    </div>
    <div class="news-overview__news">
        <div class="container">
            <div class="row">
                <?php print_news(4, get_the_category()[0]->term_id); ?>
            </div>
        </div>
    </div>
</section>

<?php get_footer(); ?>