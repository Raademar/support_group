<?php /* Template Name: Branches */

get_header();
?>

<div class="row">
	<div class="col">
		<?php if(have_posts()): ?>
			<?php while(have_posts()) : the_post(); ?>
			<div class="blog-post">
				<h2 class="blog-post-title">
					<?php the_title(); ?>
				</h2>
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

<?php $branches = get_posts([
			'post_type' => 'branches',
		]); ?>

<div class="row">
	<div class="col">
		<ul>
			<?php foreach($branches as $branch): ?>
			<?php $skills = get_the_terms($branch, 'skill'); ?>
				<li>
					<a href="<?php echo $branch->guid; ?>"> <?php echo $branch->post_title ?> </a>
				</li>
			<?php endforeach; ?>
		</ul>
	</div>
</div>
<?php
get_footer();
