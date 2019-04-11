<?php 
declare(strict_types=1);
add_action('init', function () {
    register_post_type('about', [
        'has_archive' => true,
        'labels' => [
            'add_new_item' => __('Add New About page'),
            'edit_item' => __('Edit About'),
            'name' => __('about'),
            'search_items' => __('Search about'),
            'singular_name' => __('About'),
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
        'label' => 'about'
    ]);
});