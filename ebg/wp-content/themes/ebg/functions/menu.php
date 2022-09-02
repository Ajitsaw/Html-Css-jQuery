<?php

// Register Menues

register_nav_menus(
	array(
		'main-nav' 		=> 'Hauptnavigation',
		'top-nav' 		=> 'Topnav',
        'secondary-nav' 		=> 'Sekundärnavigation',
		'footer-general-nav' 	=> 'Footernav (Allgemein)',
        'footer-products-nav' 	=> 'Footernav (Produkte)',
        'footer-service-nav' 	=> 'Footernav (Service)',
	)
);

// Show open jobs (career)

add_filter('wp_nav_menu_objects', 'my_wp_nav_menu_objects', 10, 2);

function my_wp_nav_menu_objects($items, $args) {
	foreach($items as &$item) {
		$menu_option = get_field('menu_options', $item);
		if($menu_option) {
			$item->title .= '<span class="counter">'.get_job_counter().'</span>';
		}
	}
	return $items;
}

// Main Nav

function main_nav() {
	wp_nav_menu(array(
		'container'			=> '',
        'container_class'   => false,
		'menu_id'			=> false,
		'menu_class'		=> false,
		'theme_location'	=> 'main-nav',
		'depth'				=> 0,
		'fallback_cb'		=> '',
        'walker'			=> new Main_Walker()
	));
}

// Main Walker

class Main_Walker extends Walker_Nav_Menu {
	function start_el(&$output, $item, $depth, $args) {
		if($depth == 0) {
			$output .= '<li class="'.implode(" ", $item->classes).'"><a href="'.$item->url.'">'.$item->title;
			if($args->walker->has_children) {
				$output .= '<i class="fal fa-angle-down"></i>';
			}
            $output .= '</a>';
		} elseif($depth == 1) {
			$output .= '<li class="'.implode(" ", $item->classes).'"><a href="'.$item->url.'" class="title">'.$item->title.'</a>';
		}
	}
}

// Top Nav (General)

function ebg_top_nav() {
	wp_nav_menu(array(
		'container'			=> 'nav',
        'container_class'   => 'top-nav',
		'menu_id'			=> false,
		'menu_class'		=> false,
		'theme_location'	=> 'top-nav',
		'depth'				=> 0,
		'fallback_cb'		=> ''
	));
}


// Secondary Nav

function secondary_nav() {
	wp_nav_menu(array(
		'container'			=> '',
        'container_class'   => false,
		'menu_id'			=> false,
		'menu_class'		=> false,
		'theme_location'	=> 'secondary-nav',
		'depth'				=> 0,
		'fallback_cb'		=> ''
	));
}

// Footer Nav (General)

function ebg_footer_general_nav() {
	wp_nav_menu(array(
		'container'			=> 'nav',
        'container_class'   => 'footer-nav',
		'menu_id'			=> false,
		'menu_class'		=> false,
		'theme_location'	=> 'footer-general-nav',
		'depth'				=> 0,
		'fallback_cb'		=> ''
	));
}

// Footer Nav (Products)

function ebg_footer_products_nav() {
	wp_nav_menu(array(
		'container'			=> 'nav',
        'container_class'   => 'footer-nav',
		'menu_id'			=> false,
		'menu_class'		=> false,
		'theme_location'	=> 'footer-products-nav',
		'depth'				=> 0,
		'fallback_cb'		=> ''
	));
}

// Footer Nav (Service)

function ebg_footer_service_nav() {
	wp_nav_menu(array(
		'container'			=> 'nav',
        'container_class'   => 'footer-nav',
		'menu_id'			=> false,
		'menu_class'		=> false,
		'theme_location'	=> 'footer-service-nav',
		'depth'				=> 0,
		'fallback_cb'		=> ''
	));
}

?>