<footer>
    <div class="footer__top">
        <div class="container">
            <div class="row">
                <div class="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                    <div class="title"><?php pll_e("Contact"); ?></div>
                    <?php while(have_rows("address", "option")): the_row(); ?>
                    <address>
                        <?php the_sub_field("ebg_contact_general_company", "option"); ?>
                        <br />
                        <?php if(get_sub_field("ebg_contact_general_address", "option")): ?>
                            <?php the_sub_field("ebg_contact_general_address", "option"); ?>
                            <br />
                        <?php endif; ?>
                        <?php if(get_sub_field("ebg_contact_general_city", "option")): ?>
                            <?php the_sub_field("ebg_contact_general_city", "option"); ?>
                            <br />
                        <?php endif; ?>
                        <br />
                        <?php if(get_sub_field("ebg_contact_general_phone", "option")): ?>
                            Tel.: <a href="tel:<?php the_sub_field("ebg_contact_general_phone", "option"); ?>" class="tel"><?php the_field("ebg_contact_general_phone", "option"); ?></a>
                            <br />
                        <?php endif; ?>
                        <?php if(get_sub_field("ebg_contact_general_fax", "option")): ?>
                            Fax: <?php the_sub_field("ebg_contact_general_fax", "option"); ?>
                            <br />
                        <?php endif; ?>
                        <?php if(get_sub_field("ebg_contact_general_email", "option")): ?>
                            Mail: <a href="mailto:<?php the_sub_field("ebg_contact_general_email", "option"); ?>"><?php the_field("ebg_contact_general_email", "option"); ?></a>
                        <?php endif; ?>
                    </address>
                    <?php endwhile; ?>
                </div>
                <div class="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                    <div class="title"><?php pll_e("Navigation"); ?></div>
                    <?php ebg_footer_general_nav(); ?>
                </div>
                <div class="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                    <div class="title"><?php pll_e("Products"); ?></div>
                    <?php ebg_footer_products_nav(); ?>
                </div>
                <div class="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                    <div class="title"><?php pll_e("Service"); ?></div>
                    <?php ebg_footer_service_nav(); ?>
                </div>
            </div>
            <div class="row">
                <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                    <nav class="social-nav">
                        <ul>
                            <?php while(have_rows("ebg_general_socialmedia_links", "option")): the_row(); ?>
                            <li><a href="<?php the_sub_field("ebg_social_link"); ?>" target="_blank"><?php the_sub_field("ebg_social_icon"); ?></a></li>
                            <?php endwhile; ?>
                        </ul>
                    </nav>
                    <div class="copyright">
                        <a href="https://www.ebg-electro.de/ueber-uns/" target="_blank">EBG group GmbH</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="footer__bottom">
        <div class="container">
            <div class="row align-items-center justify-content-between">
                <div class="col-xl-auto col-lg-auto col-md-auto col-sm-auto">
                    <a href="<?php echo home_url(); ?>" class="footer-logo">
                        <img src="<?php the_field("footer_logo_o", "option"); ?>">
                    </a>
                </div>
                <div class="col-xl-auto col-lg-auto col-md-auto col-sm-auto d-none d-sm-block">
                    <div class="footer-slogan">team made</div>
                </div>
            </div>
        </div>
    </div>
</footer>

<?php wp_footer(); ?>
</body>

</html>