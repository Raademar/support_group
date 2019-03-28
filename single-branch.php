<?php get_header(); ?>

<div class="row mt-5">
    <div class="col">

      <?php if (have_posts()): ?>
      
          <?php while (have_posts()): the_post(); ?>
            <div class="row">            
              <div class="col-9">
								<h1>
										<?php the_title(); ?>
										hejsan
									</h1>
									<?php the_content(); ?>  
									<?php if (get_field('email')): ?>
										<p>Contact: <a href="mailto:<?php the_field('email'); ?>"><?php the_field('email'); ?></a></p>
									<?php endif; ?>
									<?php if (get_field('facebook_account_for_the_branch')): ?>
										<p><a href="<?php the_field('facebook_account_for_the_branch'); ?>">Facebook account</a></p>
									<?php endif; ?>
              
            </div><!-- /row -->
              
            
          <?php endwhile; ?>

      <?php endif; ?>
      
    
    </div><!-- /col -->
</div><!-- /row -->

<?php $branches = get_posts([
			'post_type' => 'branches',
		]); ?>

<div class="row">
	<div class="col">
		<ul>
			<?php foreach($branches as $student): ?>
				<li>
					<a href="<?php echo $branch->guid; ?>"> <?php echo $branch->post_title ?> </a>
				</li>
			<?php endforeach; ?>
		</ul>
	</div>
</div>

<?php get_footer(); ?>