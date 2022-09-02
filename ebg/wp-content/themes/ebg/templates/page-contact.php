<?php
/* Template Name: Kontakt */
get_header();
?>

<?php if(!get_field('header_hide')): ?>
<section class="contact-header">
    <div class="container">
        <div class="row justify-content-between">
            <div class="col-xl-6 col-lg-7 col-md-12 col-sm-12">
                <h1><?php the_field("header_headline"); ?></h1>
                <?php the_field("header_text"); ?>
                <div class="address-holder">
                    <?php while(have_rows("address")): the_row(); ?>
                    <address>
                        <i class="fal fa-map-marker-alt"></i>
                        <?php the_sub_field("firma"); ?><br /><?php the_sub_field("strase_+_nr"); ?><br /><?php the_sub_field("plz_+_ort"); ?>
                    </address>
                    <?php endwhile; ?>
                </div>
            </div>
            <div class="col-xl-6 col-lg-5 col-md-12 col-sm-12">
                <div class="image">
                    <img class="m-0 p-0" src="<?php the_field("header_image"); ?>">
                </div>
            </div>
        </div>
        <div class="row">
            <div class="button-group">
                <a href="mailto:<?php the_field("ebg_contact_general_email", "option"); ?>" class="button outline primary"><i class="far fa-envelope"></i><?php the_field("ebg_contact_general_email", "option"); ?></a>
                <a href="tel:<?php the_field("ebg_contact_general_phone", "option"); ?>" class="button outline primary"><i class="far fa-phone-alt"></i><?php the_field("ebg_contact_general_phone", "option"); ?></a>
                <a href="#map" class="button outline primary"><?php pll_e("Approach"); ?></a>
            </div>
        </div>
    </div>
</section>
<?php endif; ?>

<?php if(!get_field('partner_hide')): ?>
<section class="contact-persons">
    <div class="contact-persons__text">
        <div class="container">
            <div class="row">
                <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                    <h2><?php the_field("partner_headline"); ?></h2>
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
                <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12" data-department="<?php the_sub_field("name"); ?>">
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

<?php if(!get_field('google_map_hide')): ?>
<section class="google-map" id="map">
    <div class="container-fluid">
        <div class="row">
            <div class="col-lg-4">
                <div class="google-map-single">
                    <?php $logo1 = get_field('ebg_electro_gmbh_logo'); ?>
                    <?php if($logo1): ?>
                    <div class="logo">
                        <img src="<?php echo $logo1['url'] ?>" alt="<?php echo $logo1['alt'] ?>">
                    </div>
                    <?php endif; ?>
                    <?php the_field("google_map"); ?>
                </div>
            </div>
            <div class="col-lg-4">
                <div class="google-map-single">
                    <?php $logo2 = get_field('ebg_eqs_gmbh_logo'); ?>
                    <?php if($logo2): ?>
                    <div class="logo">
                        <img src="<?php echo $logo2['url'] ?>" alt="<?php echo $logo2['alt'] ?>">
                    </div>
                    <?php endif; ?>
                    <?php the_field("google_map1"); ?>
                </div>
            </div>
            <div class="col-lg-4">
                <div class="google-map-single">
                    <?php $logo3 = get_field('ebg_jung_gmbh_logo'); ?>
                    <?php if($logo3): ?>
                    <div class="logo">
                        <img src="<?php echo $logo3['url'] ?>" alt="<?php echo $logo3['alt'] ?>">
                    </div>
                    <?php endif; ?>
                    <?php the_field("google_map2"); ?>
                </div>
            </div>
        </div>
    </div>
</section>
<?php endif; ?>

<?php if(!get_field('representations_hide')): ?>

<?php $headline = get_field("representations_headline_overlay"); ?>

<?php $city_filter = array(); ?>
<?php while(have_rows("representations_germany")): the_row(); ?>
<?php array_push($city_filter, get_sub_field("city")); ?>
<div class="location-overlay" data-location="<?php the_sub_field("city"); ?>">
    <div class="location-overlay__close"><i class="far fa-times"></i></div>
    <div class="container">
        <div class="row align-items-center justify-content-center">
            <div class="col-xl-8 col-lg-12 col-md-12 col-sm-12">
                <div class="location-overlay__title"><?php echo $headline; ?></div>
                <div class="location-overlay__contact">
                    <?php the_sub_field("contact"); ?>
                </div>
            </div>
        </div>
    </div>
</div>
<?php endwhile; ?>

<?php $country_filter = array(); ?>
<?php while(have_rows("representations_foreign")): the_row(); ?>
<?php array_push($country_filter, get_sub_field("country")); ?>
<div class="location-overlay" data-location="<?php the_sub_field("country"); ?>">
    <div class="location-overlay__close"><i class="far fa-times"></i></div>
    <div class="container">
        <div class="row align-items-center justify-content-center">
            <div class="col-xl-8 col-lg-12 col-md-12 col-sm-12">
                <div class="location-overlay__title"><?php echo $headline; ?></div>
                <div class="location-overlay__contact">
                    <?php the_sub_field("contact"); ?>
                </div>
            </div>
        </div>
    </div>
</div>
<?php endwhile; ?>

<section class="contact-locations" style="background-image:url(<?php the_field("representations_image"); ?>);">
    <div class="container">
        <div class="row">
            <div class="col-xl-4 col-lg-6 col-md-12 col-sm-12">
                <h2><?php the_field("representations_headline"); ?></h2>
                <?php the_field("representations_text"); ?>
            </div>
        </div>
        <div class="row">
            <div class="col-xl-4 col-lg-6 col-md-12 col-sm-12">
                <div class="filter">
                    <label>
                        <span class="text">Land auswählen</span>
                        <select class="custom-select" data-location-country>
                            <option selected disabled><?php pll_e("Alle"); ?></option>
                            <option value="germany">Deutschland</option>
                            <?php foreach($country_filter as $filter): ?>
                                <option value="<?php echo $filter; ?>"><?php echo $filter; ?></option>
                            <?php endforeach; ?>
                        </select>
                    </label>
                    <label class="select-country">
                        <span class="text">Ort auswählen</span>
                        <select class="custom-select" data-location-city>
                            <option selected disabled>Ort auswählen</option>
                            <?php foreach($city_filter as $filter): ?>
                                <option value="<?php echo $filter; ?>"><?php echo $filter; ?></option>
                            <?php endforeach; ?>
                        </select>
                    </label>
                </div>
                <button data-location-search disabled class="button outline primary mt-5" data-location-search disabled>
                    <?php pll_e("Vertretung finden"); ?>
                </button>
                <div class="no-result">
                <?php the_field("text_1st_line"); ?><br />
                <?php the_field("text_2nd_line"); ?>: <a href="mailto:<?php the_field("email"); ?>"><?php the_field("email"); ?></a>
                </div>
            </div>
        </div>
    </div>
</section>
<?php endif; ?>

<?php get_footer(); ?>