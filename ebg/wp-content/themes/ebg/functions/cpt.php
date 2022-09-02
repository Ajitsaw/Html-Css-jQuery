<?php

/* Jobs */

function cpt_jobs() {
    $labels = array(
        'name'                  => "Jobs",
        'singular_name'         => "Job",
        'menu_name'             => "Jobs",
        'all_items'             => "Alle Jobs",
        'view_item'             => "Job anschauen",
        'add_new_item'          => "Neuen Job hinzufügen",
        'add_new'               => "Hinzufügen",
        'edit_item'             => "Job editieren",
        'update_item'           => "Job updaten",
        'search_items'          => "Job suchen",
        'not_found'             => "Nichts gefunden",
        'not_found_in_trash'    => "Nichts gefunden",
    );
    $args = array(
        'label'                 => "Jobs",
        'description'           => "Die offenen Stellen, welche im Karriere-Bereich angezeigt werden.",
        'labels'                => $labels,
        'supports'              => array('title', 'editor', 'thumbnail', 'revisions', 'custom-fields'),
        'taxonomies'            => false,
        'hierarchical'          => false,
        'public'                => true,
        'show_ui'               => true,
        'show_in_menu'          => true,
        'show_in_nav_menus'     => true,
        'show_in_admin_bar'     => true,
        'menu_position'         => 5,
        'can_export'            => true,
        'rewrite'               => array('slug' => 'stellenangebote', 'with_front' => true, 'pages' => true),
        'has_archive'           => false,
        'exclude_from_search'   => false,
        'publicly_queryable'    => true,
        'query_var'             => true,
        'capability_type'       => 'page',
        'menu_icon'             => 'dashicons-welcome-learn-more',
    );
    register_post_type('jobs', $args);
}
add_action('init', 'cpt_jobs', 0);

/* Referenzen */

function cpt_references() {
    $labels = array(
        'name'                  => "Referenzen",
        'singular_name'         => "Referenz",
        'menu_name'             => "Referenzen",
        'all_items'             => "Alle Referenzen",
        'view_item'             => "Referenz anschauen",
        'add_new_item'          => "Neue Referenz hinzufügen",
        'add_new'               => "Hinzufügen",
        'edit_item'             => "Referenz editieren",
        'update_item'           => "Referenz updaten",
        'search_items'          => "Referenz suchen",
        'not_found'             => "Nichts gefunden",
        'not_found_in_trash'    => "Nichts gefunden",
    );
    $args = array(
        'label'                 => "Referenzen",
        'description'           => "Die Referenzen der Firma EBG.",
        'labels'                => $labels,
        'supports'              => array('title', 'editor', 'thumbnail', 'revisions', 'custom-fields'),
        'taxonomies'            => false,
        'hierarchical'          => false,
        'public'                => true,
        'show_ui'               => true,
        'show_in_menu'          => true,
        'show_in_nav_menus'     => true,
        'show_in_admin_bar'     => true,
        'menu_position'         => 5,
        'can_export'            => true,
        'rewrite'               => array('slug' => 'referenzen', 'with_front' => true, 'pages' => true),
        'has_archive'           => false,
        'exclude_from_search'   => false,
        'publicly_queryable'    => false,
        'query_var'             => true,
        'capability_type'       => 'page',
        'menu_icon'             => 'dashicons-format-status',
    );
    register_post_type('references', $args);
}
add_action('init', 'cpt_references', 0);

/* Branchen */

function cpt_sectors() {
    $labels = array(
        'name'                  => "Anwendungen",
        'singular_name'         => "Anwendunge",
        'menu_name'             => "Anwendungen",
        'all_items'             => "Alle Anwendungen",
        'view_item'             => "Anwendunge anschauen",
        'add_new_item'          => "Neue Anwendunge hinzufügen",
        'add_new'               => "Hinzufügen",
        'edit_item'             => "Anwendunge editieren",
        'update_item'           => "Anwendunge updaten",
        'search_items'          => "Anwendunge suchen",
        'not_found'             => "Nichts gefunden",
        'not_found_in_trash'    => "Nichts gefunden",
    );
    $args = array(
        'label'                 => "Anwendungen",
        'description'           => "Die Anwendungen, in denen die Firma EBG tätig ist. Zur Verknüpfung mit anderen Post-Types.",
        'labels'                => $labels,
        'supports'              => array('title', 'editor', 'thumbnail', 'revisions', 'custom-fields'),
        'taxonomies'            => false,
        'hierarchical'          => false,
        'public'                => true,
        'show_ui'               => true,
        'show_in_menu'          => true,
        'show_in_nav_menus'     => true,
        'show_in_admin_bar'     => true,
        'menu_position'         => 5,
        'can_export'            => true,
        'rewrite'               => array('slug' => 'awendungen', 'with_front' => true, 'pages' => true),
        'has_archive'           => false,
        'exclude_from_search'   => false,
        'publicly_queryable'    => true,
        'query_var'             => true,
        'capability_type'       => 'page',
        'menu_icon'             => 'dashicons-networking',
    );
    register_post_type('sectors', $args);
}
add_action('init', 'cpt_sectors', 0);

/* Ansprechpartner */

function cpt_partners() {
    $labels = array(
        'name'                  => "Ansprechpartner",
        'singular_name'         => "Ansprechpartner",
        'menu_name'             => "Ansprechpartner",
        'all_items'             => "Alle Ansprechpartner",
        'view_item'             => "Ansprechpartner anschauen",
        'add_new_item'          => "Neuen Ansprechpartner hinzufügen",
        'add_new'               => "Hinzufügen",
        'edit_item'             => "Ansprechpartner editieren",
        'update_item'           => "Ansprechpartner updaten",
        'search_items'          => "Ansprechpartner suchen",
        'not_found'             => "Nichts gefunden",
        'not_found_in_trash'    => "Nichts gefunden",
    );
    $args = array(
        'label'                 => "Ansprechpartner",
        'description'           => "Verschiedene Ansprechpartner der Firma EBG. Zur Verknüpfung mit anderen Post-Types.",
        'labels'                => $labels,
        'supports'              => array('title', 'editor', 'thumbnail', 'revisions', 'custom-fields'),
        'taxonomies'            => false,
        'hierarchical'          => false,
        'public'                => true,
        'show_ui'               => true,
        'show_in_menu'          => true,
        'show_in_nav_menus'     => true,
        'show_in_admin_bar'     => true,
        'menu_position'         => 5,
        'can_export'            => true,
        'rewrite'               => array('slug' => 'contactpersons', 'with_front' => true, 'pages' => true),
        'has_archive'           => false,
        'exclude_from_search'   => false,
        'publicly_queryable'    => false,
        'query_var'             => true,
        'capability_type'       => 'page',
        'menu_icon'             => 'dashicons-admin-users',
    );
    register_post_type('partners', $args);
}
add_action('init', 'cpt_partners', 0);

/* Products */

function cpt_productcategories() {
    $labels = array(
        'name'                  => "Produktkategorien",
        'singular_name'         => "Produktkategorie",
        'menu_name'             => "Produktkategorien",
        'all_items'             => "Alle Produktkategorien",
        'view_item'             => "Produktkategorie anschauen",
        'add_new_item'          => "Neue Produktkategorie hinzufügen",
        'add_new'               => "Hinzufügen",
        'edit_item'             => "Produktkategorie editieren",
        'update_item'           => "Produktkategorie updaten",
        'search_items'          => "Produktkategorie suchen",
        'not_found'             => "Nichts gefunden",
        'not_found_in_trash'    => "Nichts gefunden",
    );
    $args = array(
        'label'                 => "Produktkategorien",
        'description'           => "Die Produktkategorien der Firma EBG.",
        'labels'                => $labels,
        'supports'              => array('title', 'editor', 'thumbnail', 'revisions', 'custom-fields'),
        'taxonomies'            => false,
        'hierarchical'          => false,
        'public'                => true,
        'show_ui'               => true,
        'show_in_menu'          => true,
        'show_in_nav_menus'     => true,
        'show_in_admin_bar'     => true,
        'menu_position'         => 5,
        'can_export'            => true,
        'rewrite'               => array('slug' => 'produkte', 'with_front' => true, 'pages' => true),
        'has_archive'           => false,
        'exclude_from_search'   => false,
        'publicly_queryable'    => true,
        'query_var'             => true,
        'capability_type'       => 'page',
        'menu_icon'             => 'dashicons-database',
    );
    register_post_type('productcategories', $args);
}
add_action('init', 'cpt_productcategories', 0);

/* Products */

function cpt_products() {
    $labels = array(
        'name'                  => "Produkte",
        'singular_name'         => "Produkt",
        'menu_name'             => "Produkte",
        'all_items'             => "Alle Produkte",
        'view_item'             => "Produkt anschauen",
        'add_new_item'          => "Neues Produkt hinzufügen",
        'add_new'               => "Hinzufügen",
        'edit_item'             => "Produkt editieren",
        'update_item'           => "Produkt updaten",
        'search_items'          => "Produkt suchen",
        'not_found'             => "Nichts gefunden",
        'not_found_in_trash'    => "Nichts gefunden",
    );
    $args = array(
        'label'                 => "Produkt",
        'description'           => "Die Produkte der Firma EBG.",
        'labels'                => $labels,
        'supports'              => array('title', 'editor', 'thumbnail', 'revisions', 'custom-fields'),
        'taxonomies'            => false,
        'hierarchical'          => false,
        'public'                => true,
        'show_ui'               => true,
        'show_in_menu'          => true,
        'show_in_nav_menus'     => true,
        'show_in_admin_bar'     => true,
        'menu_position'         => 5,
        'can_export'            => true,
        'rewrite'               => array('slug' => 'produktesingle', 'with_front' => true, 'pages' => true),
        'has_archive'           => false,
        'exclude_from_search'   => false,
        'publicly_queryable'    => false,
        'query_var'             => true,
        'capability_type'       => 'page',
        'menu_icon'             => 'dashicons-format-gallery',
    );
    register_post_type('products', $args);
}
add_action('init', 'cpt_products', 0);

/* Training */

function cpt_training() {
    $labels = array(
        'name'                  => "Schulungen",
        'singular_name'         => "Schulungen",
        'menu_name'             => "Schulungen",
        'all_items'             => "Alle Schulungen",
        'view_item'             => "Schulungen anschauen",
        'add_new_item'          => "Neues Schulungen hinzufügen",
        'add_new'               => "Hinzufügen",
        'edit_item'             => "Schulungen editieren",
        'update_item'           => "Schulungen updaten",
        'search_items'          => "Schulungen suchen",
        'not_found'             => "Nichts gefunden",
        'not_found_in_trash'    => "Nichts gefunden",
    );
    $args = array(
        'label'                 => "Schulungen",
        'description'           => "Die Schulungen der Firma EBG.",
        'labels'                => $labels,
        'supports'              => array('title', 'editor', 'thumbnail', 'revisions', 'custom-fields'),
        'taxonomies'            => false,
        'hierarchical'          => false,
        'public'                => true,
        'show_ui'               => true,
        'show_in_menu'          => true,
        'show_in_nav_menus'     => true,
        'show_in_admin_bar'     => true,
        'menu_position'         => 5,
        'can_export'            => true,
        'rewrite'               => array('slug' => 'schulungen', 'with_front' => true, 'pages' => true),
        'has_archive'           => false,
        'exclude_from_search'   => false,
        'publicly_queryable'    => true,
        'query_var'             => true,
        'capability_type'       => 'page',
        'menu_icon'             => 'dashicons-welcome-learn-more',
    );
    register_post_type('training', $args);
}
add_action('init', 'cpt_training', 0);

?>