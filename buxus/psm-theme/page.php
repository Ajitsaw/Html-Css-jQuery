<?php get_header(); ?>

<section>
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div class="default-block">
                    <div class="text-block">
                        <div class="heading heading-full">
                            <h3>
                                <?php the_title(); ?>
                            </h3>
                        </div>
                    </div>
                    <?php the_content(); ?>
                </div>
            </div>
        </div>
    </div>
</section>

<?php get_footer(); ?>
