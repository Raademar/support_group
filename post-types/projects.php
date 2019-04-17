<?php 
declare(strict_types=1);
add_action('init', function () {
    register_post_type('projects', [
        'has_archive' => true,
        'labels' => [
            'add_new_item' => __('Add New projects Perc'),
            'edit_item' => __('Edit projects Perc'),
            'name' => __('projects'),
            'search_items' => __('Search projects Perc'),
            'singular_name' => __('projectsPerc'),
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
        'label' => 'projects'
    ]);
});