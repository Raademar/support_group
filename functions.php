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
require get_template_directory().'/post-types/about.php';

// // register custom fields for Student post type
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
		
		add_action( 'init', 'my_branch_cpt' );
		function my_branch_cpt() {
			$args = array(
				'public'       => true,
				'show_in_rest' => true,
				'label'        => 'Branches'
			);
			register_post_type( 'branches', $args );
		}
		
		function my_rest_prepare_branches($data, $post, $request) {
			$_data = $data->data;
			
			$fields = get_fields($post->ID);
			// die(var_dump($fields));
			foreach ($fields as $key => $value){
				$_data[$key] = get_field($key, $post->ID);
			}
			$data->data = $_data;
			
			return $data;
		}

		add_filter("rest_prepare_branches", 'my_rest_prepare_branches', 10, 3);
		
		
		/* Register function to run at rest_api_init hook */
		add_action( 'rest_api_init', function () {
			/* Setup siteurl/wp-json/menus/v2/header */
			register_rest_route( 'menus/v2', '/header', array(
				'methods' => 'GET',
				'callback' => 'header_menu',
				'args' => array(
					'id' => array(
						'validate_callback' => function($param, $request, $key) {
							return is_numeric( $param );
						}
					),
					)
					) );
				} );
				
				register_nav_menus( array(
					'sgn_menu' => 'Support Group Header Menu',
					) );
					
					function header_menu( $data ) {
						/* Verify that menu locations are available in your WordPress site */
						if (($locations = get_nav_menu_locations()) && isset($locations[ 'sgn_menu' ])) {
							
							/* Retrieve the menu in location sgn_menu */
							$menu = wp_get_nav_menu_object($locations['sgn_menu']);
							
							/* Create an empty array to store our JSON */
							$menuItems = array();
							
							/* If the menu isn't empty, start process of building an array, otherwise return a 404 error */
							if (!empty($menu)) {
								
								/* Assign array of navigation items to $menu_items variable */
								$menu_items = wp_get_nav_menu_items($menu->term_id);
								
								/* if $menu_items isn't empty */
								if ($menu_items) {
									
									/* for each menu item, verify the menu item has no parent and then push the menu item to the $menuItems array */
									foreach ($menu_items as $key => $menu_item) {
										if ($menu_item->menu_item_parent == 0) {
											array_push(
												$menuItems, array(
													'title' => $menu_item->title,
													'url' => $menu_item->url,
													'slug' => $menu_item->slug
													)
												);
											}
										}
									}
								}
							} else {
								return new WP_Error(
									'no_menus',
									'Could not find any menus',
									array(
										'status' => 404
										)
									);
								}
								
								/* Return array of list items with title and url properties */
								return $menuItems;
					}
							
					add_theme_support( 'custom-logo' );
					
					function themename_custom_logo_setup() {
						$defaults = array(
						);
						add_theme_support( 'custom-logo', $defaults );
					}
					add_action( 'after_setup_theme', 'themename_custom_logo_setup' );
							
							
					function get_latest_logo() {
						
						$custom_logo_id = get_theme_mod( 'custom_logo' );
						$logo = wp_get_attachment_image_src( $custom_logo_id , "thumbnail" );
						$logolol = [
							'current_site_logo' => $logo[0]
						];
						if (empty($logo)) {
							return new WP_Error( 'empty_category', 'there is no post in this category', array('status' => 404) );
							
						}
						
						$response = new WP_REST_Response($logolol);
						$response->set_status(200);
						
						return $response;
					}
							
							
					add_action('rest_api_init', 'custom_logo_api' );
					
					function custom_logo_api() {
						register_rest_route( 'sgn/v1', 'site_logo',array(
							'methods'  => 'GET',
							'callback' => 'get_latest_logo'
						));
					};
							
							
							
					function rm_wpautop($content) {
						global $post;
						// Remove the filter
						remove_filter('the_content', 'wpautop');
						remove_filter('the_excerpt', 'wpautop');
						return $content;
					}
					
					// Hook into the Plugin API
					add_filter('the_content', 'rm_wpautop', 9);
							
							
					function support_group_customize_register($wp_customize) {
						$wp_customize->add_section('about_us', [
							'title' => __('What we do', 'SGN'),
							'description' => sprintf(__('Options for about us', 'SGN')),
							'priority' => 130
						]);
						
						// Add setting for title
						$wp_customize->add_setting('about_us_image_one_title', [
							'default' => _x('Hope and opportuneties', 'SGN'),
							'type' => 'theme_mod'
						]);
						// Add control for title
						$wp_customize->add_control('about_us_image_one_title', [
							'label' => __('Title for first item', 'SGN'),
							'section' => 'about_us',
							'priority' => 1
						]);
						
						// Add setting for image
						$wp_customize->add_setting('about_us_image_one_image', [
							'default' => get_bloginfo('template_directory').'/img/about_us_image_one.jpg', 'SGN',
							'type' => 'theme_mod'
						]);
						// Add control for image
						$wp_customize->add_control(new WP_Customize_Image_Control($wp_customize, 'about_us_image_one_image', [
							'label' => __('Image for first item', 'SGN'),
							'section' => 'about_us',
							'settings' => 'about_us_image_one_image',
							'priority' => 2
						]));

						// Add setting for text
						$wp_customize->add_setting('about_us_image_one_text', [
							'default' => _x('We believe in the future. Togehter we have the power to make it bright.', 'SGN'),
							'type' => 'theme_mod'
						]);
						// Add control for text
						$wp_customize->add_control('about_us_image_one_text', [
							'label' => __('Text for first item', 'SGN'),
							'section' => 'about_us',
							'priority' => 3
						]);
						
						// Add setting for title two
						$wp_customize->add_setting('about_us_image_two_title', [
							'default' => _x('A future for everyone', 'SGN'),
							'type' => 'theme_mod'
						]);
						// Add control for title two
						$wp_customize->add_control('about_us_image_two_title', [
							'label' => __('Title for second item', 'SGN'),
							'section' => 'about_us',
							'priority' => 4
						]);
						
						// Add setting for image two
						$wp_customize->add_setting('about_us_image_two_image', [
							'default' => get_bloginfo('template_directory').'/img/about_us_image_two.jpg', 'SGN',
							'type' => 'theme_mod'
						]);
						// Add control for image two
						$wp_customize->add_control(new WP_Customize_Image_Control($wp_customize, 'about_us_image_two_image', [
							'label' => __('Image for second item', 'SGN'),
							'section' => 'about_us',
							'settings' => 'about_us_image_two_image',
							'priority' => 5
						]));

						// Add setting for text two
						$wp_customize->add_setting('about_us_image_two_text', [
							'default' => _x('We believe in the future. Togehter we have the power to make it bright.', 'SGN'),
							'type' => 'theme_mod'
						]);
						// Add control for text two
						$wp_customize->add_control('about_us_image_two_text', [
							'label' => __('Text for second item', 'SGN'),
							'section' => 'about_us',
							'priority' => 6
						]);
						
						// Add setting for title three
						$wp_customize->add_setting('about_us_image_three_title', [
							'default' => _x('A future for everyone', 'SGN'),
							'type' => 'theme_mod'
						]);
						// Add control for title three
						$wp_customize->add_control('about_us_image_three_title', [
							'label' => __('Title for third item', 'SGN'),
							'section' => 'about_us',
							'priority' => 7
						]);
						
						// Add setting for image three
						$wp_customize->add_setting('about_us_image_three_image', [
							'default' => get_bloginfo('template_directory').'/img/about_us_image_three.jpg', 'SGN',
							'type' => 'theme_mod'
						]);
						// Add control for image three
						$wp_customize->add_control(new WP_Customize_Image_Control($wp_customize, 'about_us_image_three_image', [
							'label' => __('Image for third item', 'SGN'),
							'section' => 'about_us',
							'settings' => 'about_us_image_three_image',
							'priority' => 8
						]));

						// Add setting for text three
						$wp_customize->add_setting('about_us_image_three_text', [
							'default' => _x('We believe in the future. Togehter we have the power to make it bright.', 'SGN'),
							'type' => 'theme_mod'
						]);
						// Add control for text three
						$wp_customize->add_control('about_us_image_three_text', [
							'label' => __('Text for third item', 'SGN'),
							'section' => 'about_us',
							'priority' => 9
						]);

					}

					add_action('customize_register', 'support_group_customize_register');

					// Get the custom about us cards and expose to the api

					function get_about_us_cards() {
						
						$about_us_image_one_title = get_theme_mod( 'about_us_image_one_title', 'Hope and opportuneties' );
						$about_us_image_one_text = get_theme_mod( 'about_us_image_one_text', 'We believe in the future. Togehter we have the power to make it bright.' );
						$about_us_image_one_image = get_theme_mod( 'about_us_image_one_image', get_bloginfo('template_url').'/img/about_us_image_one.jpg' );

						$about_us_image_two_title = get_theme_mod( 'about_us_image_two_title', 'A future for everyone' );
						$about_us_image_two_text = get_theme_mod( 'about_us_image_two_text', 'We believe in the future. Togehter we have the power to make it bright.' );
						$about_us_image_two_image = get_theme_mod( 'about_us_image_two_image', get_bloginfo('template_url').'/img/about_us_image_two.jpg' );

						$about_us_image_three_title = get_theme_mod( 'about_us_image_three_title', 'Shared experiences' );
						$about_us_image_three_text = get_theme_mod( 'about_us_image_three_text', 'We believe in the future. Togehter we have the power to make it bright.' );
						$about_us_image_three_image = get_theme_mod( 'about_us_image_three_image', get_bloginfo('template_url').'/img/about_us_image_three.jpg' );

						$data = [
							'card_one' => [
								'heading' => $about_us_image_one_title,
								'text' => $about_us_image_one_text,
								'image' => $about_us_image_one_image
							],
							'card_two' => [
								'heading' => $about_us_image_two_title,
								'text' => $about_us_image_two_text,
								'image' => $about_us_image_two_image
							],
							'card_three' => [
								'heading' => $about_us_image_three_title,
								'text' => $about_us_image_three_text,
								'image' => $about_us_image_three_image
							],
						];

						if (empty($data)) {
							return new WP_Error( 'empty_category', 'there is no data in the custom about us.', array('status' => 404) );
							
						}
						
						$response = new WP_REST_Response($data);
						$response->set_status(200);
						
						return $response;
					}

					add_action('rest_api_init', 'custom_about_us' );
					
					function custom_about_us() {
						register_rest_route( 'sgn/v1', 'about_us',array(
							'methods'  => 'GET',
							'callback' => 'get_about_us_cards'
						));
					};

	add_action( 'init', 'my_activities_cpt' );

	function my_activities_cpt() {
			$args = array(
				'public'       => true,
				'show_in_rest' => true,
				'label'        => 'activities'
			);
			register_post_type( 'activities', $args );
	}


	function custom_excerpt_length( $length ) {
		return 10;
	}
	add_filter( 'excerpt_length', 'custom_excerpt_length', 999 );