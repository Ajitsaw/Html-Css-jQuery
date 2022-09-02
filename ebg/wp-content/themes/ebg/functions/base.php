<?php

// Theme Support

add_theme_support('post-thumbnails');
add_theme_support('title-tag');

// Allow SVG-Upload
function kb_svg ( $svg_mime ){
	$svg_mime['svg'] = 'image/svg+xml';
	return $svg_mime;
}

add_filter( 'upload_mimes', 'kb_svg' );

function kb_ignore_upload_ext($checked, $file, $filename, $mimes){

 if(!$checked['type']){
 $wp_filetype = wp_check_filetype( $filename, $mimes );
 $ext = $wp_filetype['ext'];
 $type = $wp_filetype['type'];
 $proper_filename = $filename;

 if($type && 0 === strpos($type, 'image/') && $ext !== 'svg'){
 $ext = $type = false;
 }

 $checked = compact('ext','type','proper_filename');
 }

 return $checked;
}

add_filter('wp_check_filetype_and_ext', 'kb_ignore_upload_ext', 10, 4);

// Styles / Scripts

function ebg_styles_scripts() {
    wp_enqueue_style( 'swiper', get_template_directory_uri() . '/assets/node_modules/swiper/swiper-bundle.min.css',false,false,'all');
    wp_enqueue_style( 'select2', get_template_directory_uri() . '/assets/node_modules/select2/dist/css/select2.min.css',false,false,'all');
    wp_enqueue_style( 'lightbox2', get_template_directory_uri() . '/assets/node_modules/lightbox2/dist/css/lightbox.min.css',false,false,'all');
    wp_enqueue_style( 'fontawesome', get_template_directory_uri() . '/assets/css/all.css',false,false,'all');
    wp_enqueue_style( 'app', get_template_directory_uri() . '/assets/css/app.css',false,false,'all');
    wp_enqueue_style( 'style', get_template_directory_uri() . '/style.css',false,false,'all');

    wp_enqueue_script( 'jquerycustom', get_template_directory_uri() . '/assets/node_modules/jquery/dist/jquery.min.js',false,false,true);
    //wp_enqueue_script( 'plugin', get_template_directory_uri() . '/assets/js/plugin.js',false,false,true);
    wp_enqueue_script( 'bootstrap', get_template_directory_uri() . '/assets/node_modules/bootstrap/dist/js/bootstrap.js',false,false,true);
    wp_enqueue_script( 'swiper', get_template_directory_uri() . '/assets/node_modules/swiper/swiper-bundle.min.js',false,false,true);
    wp_enqueue_script( 'gsap', get_template_directory_uri() . '/assets/node_modules/gsap/dist/gsap.min.js',false,false,true);
    wp_enqueue_script( 'waypoints', get_template_directory_uri() . '/assets/node_modules/waypoints/lib/jquery.waypoints.min.js',false,false,true);
    //wp_enqueue_script( 'counterup', get_template_directory_uri() . '/assets/node_modules/counterup/jquery.counterup.min.js',false,false,true);
    wp_enqueue_script( 'lightbox2', get_template_directory_uri() . '/assets/node_modules/lightbox2/dist/js/lightbox.min.js',false,false,true);
    wp_enqueue_script( 'select2', get_template_directory_uri() . '/assets/node_modules/select2/dist/js/select2.min.js',false,false,true);
    wp_enqueue_script( 'parallax', get_template_directory_uri() . '/assets/js/parallax.min.js',false,false,true);
    //wp_enqueue_script( 'counter', get_template_directory_uri() . '/assets/js/purecounter.js');
    wp_enqueue_script( 'all', get_template_directory_uri() . '/assets/js/all.js',false,false,true);
    wp_enqueue_script( 'app', get_template_directory_uri() . '/assets/js/app.js',false,false,true);
    
}
add_action( 'wp_enqueue_scripts', 'ebg_styles_scripts' );

// Theme Options

if(function_exists('acf_add_options_page')) {
	acf_add_options_page(array(
		'page_title' 	=> 'Allgemeine Einstellungen',
		'menu_title'	=> 'EBG',
		'menu_slug' 	=> 'ebg-theme-settings',
		'capability'	=> 'edit_posts',
        'redirect'		=> true,
        'position'      => '2',
        'icon_url'      => 'dashicons-admin-site-alt3',
    ));
    acf_add_options_sub_page(array(
		'page_title' 	=> 'Allgemeine Einstellungen',
        'menu_title'	=> 'Allgemein',
        'menu_slug' 	=> 'ebg-theme-main-settings',
        'parent_slug'	=> 'ebg-theme-settings',
        'update_button' => "Speichern",
        'updated_message' => "Einstellungen gespeichert",
	));
	acf_add_options_sub_page(array(
		'page_title' 	=> 'Kontakt Einstellungen',
        'menu_title'	=> 'Kontakt',
        'menu_slug' 	=> 'ebg-theme-contact-settings',
        'parent_slug'	=> 'ebg-theme-settings',
        'update_button' => "Speichern",
        'updated_message' => "Einstellungen gespeichert",
    ));
    acf_add_options_sub_page(array(
		'page_title' 	=> 'CTA Einstellungen',
        'menu_title'	=> 'CTA',
        'menu_slug' 	=> 'ebg-theme-cta-settings',
        'parent_slug'	=> 'ebg-theme-settings',
        'update_button' => "Speichern",
        'updated_message' => "Einstellungen gespeichert",
	));
	 acf_add_options_sub_page(array(
		'page_title' 	=> 'Formulare',
        'menu_title'	=> 'Formulare',
        'menu_slug' 	=> 'ebg-theme-form-settings',
        'parent_slug'	=> 'ebg-theme-settings',
        'update_button' => "Speichern",
        'updated_message' => "Einstellungen gespeichert",
	));
    acf_add_options_sub_page(array(
        'page_title'    => 'Presse Ansprechpartner',
        'menu_title'    => 'Presse',
        'menu_slug'     => 'ebg-theme-presse-settings',
        'parent_slug'   => 'ebg-theme-settings',
        'update_button' => "Speichern",
        'updated_message' => "Einstellungen gespeichert",
    ));
}

// Favicon

function favicon() {
    echo   '<link rel="apple-touch-icon" sizes="60x60" href="'.get_template_directory_uri().'/assets/icons/apple-touch-icon.png">
            <link rel="icon" type="image/png" sizes="32x32" href="'.get_template_directory_uri().'/assets/icons/favicon-32x32.png">
            <link rel="icon" type="image/png" sizes="16x16" href="'.get_template_directory_uri().'/assets/icons/favicon-16x16.png">
            <link rel="manifest" href="'.get_template_directory_uri().'/assets/icons/site.webmanifest">
            <link rel="mask-icon" href="'.get_template_directory_uri().'/assets/icons/safari-pinned-tab.svg" color="#727779">
            <meta name="msapplication-TileColor" content="#b91d47">
            <meta name="theme-color" content="#ffffff">';
}
add_action( 'wp_head', 'favicon' );

// Translation (strings)

add_action('init', function() {
    pll_register_string('learn_more', 'Learn more', 'global');
    pll_register_string('details', 'Details', 'global');
    pll_register_string('all', 'All', 'global');
    pll_register_string('read_more', 'Read more', 'global');
    pll_register_string('required_fields', 'Fields marked with * are required', 'global');
    pll_register_string('privacy_accept', 'I accept the privacy policy.', 'global');
    pll_register_string('ebg_newsletter', 'I would like to subscribe to the EBG Newsletter.', 'global');
    pll_register_string('send_request', 'Send request', 'global');
    pll_register_string('send_success', 'Your request has been sent.', 'global');
    pll_register_string('send_error', 'Your request could not be sent.', 'global');
    pll_register_string('filter_by', 'Filter by', 'global');
    pll_register_string('show_more', 'Show more', 'global');
    pll_register_string('company', 'Company', 'global');
    pll_register_string('firstname', 'Firstname', 'global');
    pll_register_string('lastname', 'Lastname', 'global');
    pll_register_string('email_address', 'E-Mail Address', 'global');
    pll_register_string('phone', 'Phone', 'global');
    pll_register_string('message', 'Message', 'global');
    pll_register_string('name', 'Name', 'global');
    pll_register_string('download_now', 'Download now', 'global');
    pll_register_string('register_now', 'Register now', 'global');
    pll_register_string('to_overview', 'To Overview', 'global');
    pll_register_string('call_now', 'Call now', 'global');
    pll_register_string('press', 'Press', 'global');

    pll_register_string('news', 'News', 'news');
    pll_register_string('load_more', 'Load More', 'news');
    pll_register_string('case_studies', 'Case-Studies', 'news');
    pll_register_string('similar_topics', 'Articles on similar topics', 'news');
    pll_register_string('topics', 'Topics', 'news');

    pll_register_string('department', 'Department', 'jobs');
    pll_register_string('location', 'Location', 'jobs');
    pll_register_string('type', 'Type', 'jobs');
    pll_register_string('reset_filter', 'Reset filter', 'jobs');
    pll_register_string('vacancies', 'vacancies', 'jobs');
    pll_register_string('found', 'found', 'jobs');
    pll_register_string('interested', 'Interested?', 'jobs');
    pll_register_string('contact_person', 'Contact person', 'jobs');
    pll_register_string('your_data', 'Your data', 'jobs');
    pll_register_string('branch_details', 'Branch details', 'sectors');
    pll_register_string('documents', 'Documents', 'jobs');
    pll_register_string('resume', 'CV / Resume', 'jobs');
    pll_register_string('cover_letter', 'Cover letter', 'jobs');
    pll_register_string('apply_now', 'Apply now', 'jobs');
    pll_register_string('share_', 'Recommend and share now:', 'jobs');

    pll_register_string('product_details', 'Product details', 'products');
    pll_register_string('competent_partner', 'For professional consulting I am your competent partner.', 'products');
    pll_register_string('application_fields', 'Fields of application', 'products');
    pll_register_string('labeling_process', 'Labeling process', 'products');
    pll_register_string('container_shape', 'Container shape', 'products');
    pll_register_string('running_direction', 'Select running direction', 'products');
    pll_register_string('download_data_sheet', 'Download data sheet', 'products');

    pll_register_string('select_continent', 'Select continent', 'contact');
    pll_register_string('select_country', 'Select country', 'contact');
    pll_register_string('show_contact', 'Show contact', 'contact');
    pll_register_string('select_department', 'Select department', 'contact');
    pll_register_string('arrange_videocall', 'Arrange a video call', 'contact');
    pll_register_string('approach', 'Approach', 'contact');
    pll_register_string('vertretung_finden', 'Vertretung finden', 'contact');
    pll_register_string('region', 'Didn\'t find your region?', 'contact');
    pll_register_string('wenden', 'Wenden Sie sich an', 'contact');

    pll_register_string('found', 'Contact', 'footer');
    pll_register_string('found', 'General', 'footer');
    pll_register_string('found', 'Products', 'footer');
    pll_register_string('found', 'Service', 'footer');

    pll_register_string('contact_us', 'Contact us', 'header');
});

// Breadcrumb

function doublee_filter_yoast_breadcrumb_items($link_output, $link) {
	$new_link_output = '<li>';
	$new_link_output .= '<a href="' . $link['url'] . '" itemprop="url">' . $link['text'] . '</a>';
	$new_link_output .= '</li>';

	return $new_link_output;
}
add_filter( 'wpseo_breadcrumb_single_link', 'doublee_filter_yoast_breadcrumb_items', 10, 2 );

function doublee_filter_yoast_breadcrumb_output($output) {

	$from = '<span>';
	$to = '</span>';
	$output = str_replace( $from, $to, $output );

	return $output;
}
add_filter( 'wpseo_breadcrumb_output', 'doublee_filter_yoast_breadcrumb_output' );

function doublee_filter_yoast_breadcrumb_seperator() {
    return "<li>></li>";
}

add_filter( 'wpseo_breadcrumb_separator', 'doublee_filter_yoast_breadcrumb_seperator' );


add_action('admin_head', 'remove_content_editor');
/**
 * Remove the content editor from pages as all content is handled through Panels
 */
function remove_content_editor()
{
    if((int) get_option('page_on_front')==get_the_ID())
    {
        remove_post_type_support('page', 'editor');
    }
}

?>