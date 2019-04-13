<?php 
declare(strict_types=1);
add_action('init', function () {
    register_post_type('member', [
        'has_archive' => true,
        'labels' => [
            'add_new_item' => __('Add New Member Perc'),
            'edit_item' => __('Edit Member Perc'),
            'name' => __('Member'),
            'search_items' => __('Search Member Perc'),
            'singular_name' => __('MemberPerc'),
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
        'label' => 'Member'
    ]);
});