<?php get_header(); ?>

<div class="row mt-5">
    <div class="col">

      <?php if (have_posts()): ?>
      
          <?php while (have_posts()): the_post(); ?>
            <div class="row">
            
              <div class="col-3 thumbnail">
                <?php if (has_post_thumbnail()) {
                  the_post_thumbnail('medium');
                } ?>
              </div>
            
              <div class="col-9">
                <h1 <?php if (get_field('color_profile')) : ?>style="color: <?php the_field('color_profile'); ?>"<?php endif; ?>>
                  <?php the_title(); ?>
                </h1>
                <?php the_content(); ?>  
                <?php if (get_field('email')): ?>
                  <p>Contact: <a href="mailto:<?php the_field('email'); ?>"><?php the_field('email'); ?></a></p>
                <?php endif; ?>
                <?php if (get_field('github_profile')): ?>
                  <p><a href="<?php the_field('github_profile'); ?>">Github Profile</a></p>
                <?php endif; ?>
                
              </div>
              
            </div><!-- /row -->
              
            
          <?php endwhile; ?>

      <?php endif; ?>
      
    
    </div><!-- /col -->
</div><!-- /row -->

<?php get_footer(); ?>