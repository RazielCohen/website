<?php
/**
 * Tactical Rabbi child theme functions
 * Parent: Hello Elementor
 */

add_action( 'wp_enqueue_scripts', 'tactical_rabbi_enqueue' );
function tactical_rabbi_enqueue() {
    // Parent theme styles
    wp_enqueue_style(
        'hello-elementor-style',
        get_template_directory_uri() . '/style.css'
    );
    // Child theme styles (includes Google Fonts import + all TR classes)
    wp_enqueue_style(
        'tactical-rabbi-style',
        get_stylesheet_uri(),
        [ 'hello-elementor-style' ],
        '1.0'
    );
}

/**
 * Register Course custom post type.
 * Each course gets its own post; the course-detail Elementor template
 * is assigned to this CPT so all course pages share one layout.
 */
add_action( 'init', 'tactical_rabbi_register_cpt' );
function tactical_rabbi_register_cpt() {
    register_post_type( 'tr_course', [
        'labels' => [
            'name'               => 'Courses',
            'singular_name'      => 'Course',
            'add_new_item'       => 'Add New Course',
            'edit_item'          => 'Edit Course',
            'new_item'           => 'New Course',
            'view_item'          => 'View Course',
            'search_items'       => 'Search Courses',
            'not_found'          => 'No courses found',
        ],
        'public'       => true,
        'has_archive'  => false,
        'show_in_rest' => true,
        'supports'     => [ 'title', 'editor', 'thumbnail', 'custom-fields' ],
        'menu_icon'    => 'dashicons-welcome-learn-more',
        'rewrite'      => [ 'slug' => 'courses' ],
    ] );
}

/**
 * Register custom meta fields for each course.
 * These appear in the WordPress editor sidebar and are available
 * as Elementor dynamic tags when you edit the course-detail template.
 */
add_action( 'init', 'tactical_rabbi_register_meta' );
function tactical_rabbi_register_meta() {
    $fields = [
        'tr_category'   => 'Course category (e.g. Pistol, Rifle)',
        'tr_duration'   => 'Duration (e.g. 4 Hours)',
        'tr_location'   => 'Location (e.g. Henryville, PA)',
        'tr_skill_level'=> 'Skill level (e.g. Beginner, Advanced)',
        'tr_group_size' => 'Group size (e.g. Up to 8)',
        'tr_price'      => 'Price (e.g. $275)',
        'tr_price_note' => 'Price sub-label (e.g. per student)',
        'tr_covers'     => 'What it covers (newline-separated list)',
        'tr_bring'      => 'What to bring (newline-separated list)',
        'tr_airtable_url' => 'Airtable embed URL for registration form',
    ];

    foreach ( $fields as $key => $description ) {
        register_post_meta( 'tr_course', $key, [
            'show_in_rest'  => true,
            'single'        => true,
            'type'          => 'string',
            'description'   => $description,
        ] );
    }
}

/**
 * Expose custom meta to Elementor dynamic tags.
 * With Elementor Free, use a Custom HTML widget and echo the meta directly
 * via a shortcode (see README). With Elementor Pro you can use the
 * built-in "Post Custom Field" dynamic tag instead.
 */
add_shortcode( 'tr_meta', 'tactical_rabbi_meta_shortcode' );
function tactical_rabbi_meta_shortcode( $atts ) {
    $atts = shortcode_atts( [ 'key' => '' ], $atts );
    if ( empty( $atts['key'] ) ) return '';
    return esc_html( get_post_meta( get_the_ID(), sanitize_key( $atts['key'] ), true ) );
}
