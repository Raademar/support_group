<?php 
declare(strict_types=1);
add_action('init', function () {
    register_post_type('partners', [
        'has_archive' => true,
        'labels' => [
            'add_new_item' => __('Add New partners'),
            'edit_item' => __('Edit partners'),
            'name' => __('partners'),
            'search_items' => __('Search partners'),
            'singular_name' => __('partners'),
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
        'label' => 'partners'
    ]);
});