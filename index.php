<?php

get_header();
?>

<div class="row">
	<div class="col">
		<?php if(have_posts()): ?>
			<?php while(have_posts()) : the_post(); ?>
			<div class="blog-post">
				<h2 class="blog-post-title">
					<a href="<?php the_permalink(); ?>">
						<?php the_title(); ?>
					</a>
				</h2>
				<?php the_excerpt(); ?>
			</div>
			<?php endwhile; ?>
		<?php else: ?>
		<p>
			<?php __('No posts found.'); ?>
		</p>
		<?php endif; ?>
	</div>
</div>

<?php
get_footer();
