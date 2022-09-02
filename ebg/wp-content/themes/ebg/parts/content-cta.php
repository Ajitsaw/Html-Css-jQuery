<section class="cta">
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-xl-6 col-lg-8 col-md-10 col-sm-12 text-center">
                <h2><?php the_field("cta_headline", "option"); ?></h2>
                <?php the_field("cta_text", "option"); ?>
                <a href="<?php the_field("cta_link", "option"); ?>" class="button outline white"><?php the_field("cta_link_name", "option"); ?></a>
            </div>
        </div>
    </div>
</section>