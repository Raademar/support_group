<?php
declare(strict_types=1);

show_admin_bar( false );


add_action('after_setup_theme', function () {
	add_theme_support('title-tag');
	add_theme_support( 'post-thumbnails' ); 
});

// Register student custom post type.
require get_template_directory().'/post-types/branches.php';
require get_template_directory().'/post-types/activities.php';

// register custom fields for Student post type
if (function_exists('acf_add_local_field_group')) {
  acf_add_local_field_group([
  	'key' => 'branch_info',
  	'title' => 'Branch info',
  	'fields' => [
  		[
  			'key' => 'branch_info_email',
  			'label' => 'Email',
  			'name' => 'email',
  			'type' => 'email',
  			'instructions' => 'Fill out the branch contact email',
  			'required' => 1,
  		],
  		[
  			'key' => 'branch_facebook_account',
  			'label' => 'Facebook account for the branch',
  			'name' => 'facebook_account_for_the_branch',
  			'type' => 'url',
  			'instructions' => 'Add the url to the branch Facebook account',
  			'required' => 0,
  		],
  	],
  	'location' => [
  		[
  			[
  				'param' => 'post_type',
  				'operator' => '==',
  				'value' => 'branches',
  			],
  		],
  	],
  ]);
}

