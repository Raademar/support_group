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
//   		[
//   			'key' => 'branch_facebook_account',
//   			'label' => 'Facebook account for the branch',
//   			'name' => 'facebook_account_for_the_branch',
//   			'type' => 'url',
//   			'instructions' => 'Add the url to the branch Facebook account',
//   			'required' => 0,
// 			],
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
                                'url' => $menu_item->url
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
    return $content;
}

// Hook into the Plugin API
add_filter('the_content', 'rm_wpautop', 9);