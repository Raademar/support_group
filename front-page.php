<?php

get_header();

?>

<div class="row">
	<div class="col">
		<?php if(have_posts()): ?>
			<?php while(have_posts()) : the_post(); ?>
			<div class="blog-post">
				<h1 class="blog-post-title">
					<?php the_title(); ?>
				</h1>
				<?php the_content(); ?>
			</div>
			<?php endwhile; ?>
		<?php else: ?>
			<p>
				<?php __('Page not found.'); ?>
			</p>
		<?php endif; ?>
	</div>
</div>
<div class="row mt-5">
	<?php
			$posts = get_posts([
				'numberposts' => 2,
			]);
	?>
	<?php if($posts): ?>
		<?php	foreach($posts as $current_post) : $post = $current_post; setup_postdata($post); ?>
			<div class="col-2">
				<?php the_post_thumbnail('thumbnail'); ?>
			</div>
			<div class="col-10">
				<h3><?php	the_title(); ?> </h3>
			</div>
		<?php endforeach; ?>
	<?php endif; ?>
</div>
<div class="row mt-5">
	<div class="col-10">
		<a href="<?php echo get_post_type_archive_link( 'branches' ); ?>"> Visit the blog </a>
		

	</div>
</div>

		


<?php
get_footer();
