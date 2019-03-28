<?php 
declare(strict_types=1);
add_action('init', function () {
    register_post_type('activities', [
        'has_archive' => true,
        'labels' => [
            'add_new_item' => __('Add New Activity'),
            'edit_item' => __('Edit Activity'),
            'name' => __('Activities'),
            'search_items' => __('Search Activities'),
            'singular_name' => __('Activity'),
        ],
				'supports' => [
            'title',
            'editor',
            'thumbnail',
        ],
        'menu_icon' => 'dashicons-universal-access-alt',
        'menu_position' => 20,
        'public' => true,
    ]);
});