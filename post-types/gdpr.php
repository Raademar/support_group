<?php 
declare(strict_types=1);
add_action('init', function () {
    register_post_type('GDPR', [
        'has_archive' => true,
        'labels' => [
            'add_new_item' => __('Add New GDPR page'),
            'edit_item' => __('Edit GDPR'),
            'name' => __('GDPR'),
            'search_items' => __('Search GDPR'),
            'singular_name' => __('GDPR'),
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
        'label' => 'GDPR'
    ]);
});