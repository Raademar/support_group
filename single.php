
<?php get_header(); ?>

<div class="row mt-5">
    <div class="col">

      <?php if (have_posts()): ?>
      
          <?php while (have_posts()): the_post(); ?>
              
              <h1><?php the_title(); ?></h1>

              <?php the_content(); ?>
              
              <div class="float-left">
               <?php previous_post_link(); ?>
             </div>
             
             <div class="float-right">
               <?php next_post_link(); ?>
             </div>
            
          <?php endwhile; ?>

      <?php endif; ?>
      
    
    </div><!-- /col -->
</div><!-- /row -->

<?php get_footer(); ?>