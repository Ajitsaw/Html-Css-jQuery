<?php
/* Template Name: Ansprechpartner */
get_header(); ?>

<?php if(!get_field('partner_hide')): ?>
<section class="contact-persons">
    <div class="contact-persons__text">
        <div class="container">
            <div class="row">
                <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                    <h1>Finden Sie Ihren<br />Ansprechpartner</h1>
                </div>
            </div>
        </div>
    </div>
    <div class="contact-persons__filter">
        <div class="container">
            <div class="row">
                <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                    <label>
                        <span class="text"><?php pll_e("Select department"); ?></span>
                        <select class="custom-select" data-filter>
                            <option value="*"><?php pll_e("All"); ?></option>
                            <?php while(have_rows("departments")): the_row(); ?>
                            <option value="<?php the_sub_field("name"); ?>"><?php the_sub_field("name"); ?></option>
                            <?php endwhile; ?>
                        </select>
                    </label>
                </div>
            </div>
        </div>
    </div>
    <div class="contact-persons__overview">
        <div class="container">
            <div class="row">
                <?php while(have_rows("departments")): the_row(); ?>
                <?php
                $partner = get_sub_field("partner");
                foreach($partner as $post):
                    setup_postdata($post);
                ?>
                <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12" data-department="<?php the_sub_field("name"); ?>">
                    <div class="person">
                        <div class="name"><?php the_title(); ?></div>
                        <div class="position"><?php the_field("position"); ?></div>
                        <div class="image">
                            <img src="<?php the_field("image"); ?>">
                            <div class="data">
                                Tel.: <a href="tel:<?php the_field("cp_phone_no"); ?>"><?php the_field("cp_phone_no"); ?></a>
                                <br />
                                E-Mail Adresse: <a
                                    href="mailto:<?php the_field("cp_email"); ?>"><?php the_field("cp_email"); ?></a>
                            </div>
                        </div>
                    </div>
                </div>
                <?php
                endforeach;
                wp_reset_postdata();
                ?>
                <?php endwhile; ?>
            </div>
        </div>
    </div>
</section>
<?php endif; ?>

<?php get_footer(); ?>