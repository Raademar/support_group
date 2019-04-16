<?php 
declare(strict_types=1);
add_action('init', function () {
    register_post_type('volunteer', [
        'has_archive' => true,
        'labels' => [
            'add_new_item' => __('Add New Volunteer Perc'),
            'edit_item' => __('Edit Volunteer Perc'),
            'name' => __('Volunteer'),
            'search_items' => __('Search Volunteer Perc'),
            'singular_name' => __('VolunteerPerc'),
        ],
				'supports' => [
            'title',
            'editor',
            'thumbnail',
        ],
        'menu_icon' => 'dashicons-groups',
        'menu_position' => 20,
        'public' => true,
        'show_in_rest' => true,
        'label' => 'Volunteer'
    ]);
});