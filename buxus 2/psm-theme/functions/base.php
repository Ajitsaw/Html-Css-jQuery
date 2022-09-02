<?php

// Theme Support

add_theme_support('post-thumbnails');
add_theme_support('title-tag');

// Styles / Scripts


function psm_theme_styles_scripts() {
    wp_enqueue_style( 'themify', get_template_directory_uri() . '/assets/css/themify-icons.css',false,false,'all');
    wp_enqueue_style( 'plugin', get_template_directory_uri() . '/assets/css/plugin.css',false,false,'all');
    wp_enqueue_style( 'app', get_template_directory_uri() . '/assets/css/app.css',false,false,'all');
    wp_enqueue_style( 'style', get_template_directory_uri() . '/style.css',false,false,'all');

    wp_enqueue_script( 'jquerycustom', get_template_directory_uri() . '/assets/js/jquery.min.js',false,false,true);
    wp_enqueue_script( 'bootstrap', get_template_directory_uri() . '/assets/js/bootstrap.js',false,false,true);
    wp_enqueue_script( 'plugin', get_template_directory_uri() . '/assets/js/plugin.js',false,false,true);
    wp_enqueue_script( 'app', get_template_directory_uri() . '/assets/js/app.js',false,false,true);
}
add_action( 'wp_enqueue_scripts', 'psm_theme_styles_scripts' );

// Theme Options

if(function_exists('acf_add_options_page')) {
	acf_add_options_page(array(
		'page_title' 	=> 'Allgemeine Einstellungen',
		'menu_title'	=> 'PSM Theme',
		'menu_slug' 	=> 'psm-theme-settings',
		'capability'	=> 'edit_posts',
        'redirect'		=> true,
        'position'      => '2',
        'icon_url'      => 'dashicons-admin-site-alt3',
        'update_button' => __('Speichern', 'acf'),
        'updated_message' => __("Einstellungen gespeichert.", 'acf'),
    ));
    acf_add_options_sub_page(array(
		'page_title' 	=> 'Allgemeine Einstellungen',
        'menu_title'	=> 'Allgemein',
        'menu_slug' 	=> 'psm-theme-main-settings',
		'parent_slug'	=> 'psm-theme-settings',
	));
	acf_add_options_sub_page(array(
		'page_title' 	=> 'Footer Einstellungen',
        'menu_title'	=> 'Footer',
        'menu_slug' 	=> 'psm-theme-footer-settings',
		'parent_slug'	=> 'psm-theme-settings',
	));
}

// Favicon

function favicon() {
    echo   '<link rel="icon" type="image/png" href="'.get_bloginfo('template_directory').'/assets/img/favicon.png">
            <link rel="manifest" href="'.get_bloginfo('template_directory').'/assets/icons/manifest.json">
            <meta name="msapplication-TileColor" content="#ffffff">
            <meta name="theme-color" content="#ffffff">';
}
add_action( 'wp_head', 'favicon' );


function buxus_widgets_init() {
	register_sidebar(
		array(
			'name'          => esc_html__( 'Language', 'buxus' ),
			'id'            => 'language',
			'description'   => esc_html__( 'Add widgets here.', 'buxus' ),
			'before_widget' => '<section id="%1$s" class="widget %2$s">',
			'after_widget'  => '</section>',
			'before_title'  => '<h2 class="widget-title">',
			'after_title'   => '</h2>',
		)
	);
}
add_action( 'widgets_init', 'buxus_widgets_init' );



