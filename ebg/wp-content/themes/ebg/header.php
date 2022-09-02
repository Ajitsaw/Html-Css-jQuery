<!DOCTYPE html>
<html lang="de">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <?php wp_head(); ?>
</head>
<body>

    <div class="sitemap">
        <nav>
            <?php
            if (function_exists('yoast_breadcrumb')) {
                yoast_breadcrumb('<ul>','</ul>');
            }
            ?>
        </nav>
    </div>

    <div class="overlay">
        <div class="overlay__close">
            <i class="fal fa-times"></i>
        </div>
        <div class="overlay__left">
            <nav class="main-nav">
                <?php main_nav(); ?>
            </nav>
        </div>
        <div class="overlay__right">
            <div class="top">
                <div class="companies">
                    <div class="companies__title"><?php the_field("group_logo_title", "option"); ?></div>
                    <div class="companies__logos row">
                        <?php while(have_rows("ebg_group_logo_dropdown", "option")): the_row(); ?>
                            <div class="col-lg-3">
                                <a href="<?php the_sub_field("ebg_group_logo_link", "option"); ?>">
                                    <img src="<?php the_sub_field("ebg_group_logo_image", "option"); ?>">
                                </a>
                            </div>
                        <?php endwhile; ?>
                    </div>
                </div>
            </div>
            <!-- <div class="bottom">
                <div class="slogan">
                    <div class="slogan__text">team made</div>
                    <div class="slogan__sub">Unser Anspruch.<br />Lösungen im Team.</div>
                </div>
            </div> -->
        </div>
    </div>

    <div class="contact-overlay">
        <div class="contact-overlay__content">
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
                            <input type="text" placeholder="<?php pll_e("Name"); ?>*" name="fullname" required>
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
                            <label class="checkbox mb-2">
                                <input type="checkbox" required>
                                <span></span>
								<?php pll_e("I accept the privacy policy."); ?>
                            </label>
							 <label class="checkbox">
                                <input type="checkbox">
                                <span></span>
								<?php pll_e("I would like to subscribe to the EBG Newsletter."); ?>
                            </label>
                        </div>
                        <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                            <input type="hidden" name="form-action" value="request">
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
        <div class="contact-overlay__toggle"><i class="far fa-comment-alt-lines"></i></div>
    </div>

    <div class="click-to-top">
        <i class="fas fa-chevron-up"></i>
    </div>

    <header>
        <div class="container-fluid">
            <div class="row align-items-center justify-content-end">
                <nav class="top-general-nav d-none d-lg-block">
                    <?php ebg_top_nav(); ?>
                </nav>
            </div>
            <div class="row align-items-center justify-content-between">
                <div class="col-xl-auto col-lg-auto col-md-auto col-sm-auto col-auto">
                    <div class="logo-holder">
                        <a href="<?php echo home_url(); ?>" class="logo">
                            <img src="<?php the_field("header_logo", "option"); ?>">
                        </a>
                        <?php $logo1 = get_field('header_logo_1', "option"); ?>
                        <a href="<?php echo esc_url($logo1['link']); ?>" class="logo smaller" target="_blank">
                            <img src="<?php echo esc_url($logo1['image']['url']); ?>" alt="<?php echo esc_attr($logo1['image']['alt']); ?>">
                        </a>
                        <?php $logo2 = get_field('header_logo_2', "option"); ?>
                        <a href="<?php echo esc_url($logo2['link']); ?>" class="logo smaller" target="_blank">
                            <img src="<?php echo esc_url($logo2['image']['url']); ?>" alt="<?php echo esc_attr($logo2['image']['alt']); ?>">
                        </a>
                    </div>
                </div>
                <div class="col-xl-auto col-lg-auto col-md-auto col-sm-auto col-auto d-flex align-items-center">
                    <nav class="main-nav d-none d-lg-block">
                        <?php main_nav(); ?>
                    </nav>
                    <nav class="lang-menu">
                        <?php
                        $langs = pll_the_languages(array('raw' => 1));
                        $lang_items = array();
                        foreach($langs as $lang) {
                            if($lang["current_lang"]) {
                                $lang_current = '<div class="current-lang"><img src="'.$lang["flag"].'"><span><i class="fal fa-angle-down"></i></span></div>';
                            }
                            array_push($lang_items, '<li><a href="'.$lang["url"].'"><img src="'.$lang["flag"].'">'.$lang["name"].'</a></li>');
                        }
                        ?>
                        <?php echo $lang_current; ?>
                        <ul>
                            <?php
                            foreach($lang_items as $item) {
                                echo $item;
                            }
                            ?>
                        </ul>
                    </nav>
                    <div class="nav-toggle">
                        <span></span>
                    </div>
                </div>
            </div>
        </div>
        <a href="tel:<?php the_field("ebg_contact_general_phone", "option"); ?>" class="header__call"><?php pll_e("Call now"); ?>: <?php the_field("ebg_contact_general_phone", "option"); ?></a>
    </header>