<?php
/* Template Name: Stellenangebote */
get_header();
?>

<?php if(!get_field('offers_hide')): ?>
<section class="jobs-overview">
    <div class="container">
        <div class="row">
            <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                <h2><?php the_field("headline"); ?></h2>
            </div>
        </div>
    </div>
    <div class="jobs-overview__filter">
        <div class="container">
            <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                <div class="filter">
                    <label>
                        <span class="text"><?php pll_e("Type"); ?></span>
                        <?php print_job_filter("type"); ?>
                    </label>
                    <label>
                        <span class="text"><?php pll_e("Department"); ?></span>
                        <?php print_job_filter("department"); ?>
                    </label>
                    <label>
                        <span class="text"><?php pll_e("Location"); ?></span>
                        <?php print_job_filter("location"); ?>
                    </label>
                    <button class="button filled primary" data-reset><?php pll_e("Reset filter"); ?></button>
                </div>
            </div>
        </div>
    </div>
    <div class="jobs-overview__status">
        <div class="container">
            <div class="row">
                <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                    <?php print_job_counter(); ?> <?php pll_e("vacancies"); ?> <?php pll_e("found"); ?>
                </div>
            </div>
        </div>
    </div>
    <div class="jobs-overview__jobs">
        <div class="select-view d-none d-md-block">
            <div class="container">
                <div class="row">
                    <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 text-end">
                        <button class="active" data-view="table"><i class="far fa-line-columns"></i></button>
                        <button data-view="grid"><i class="fas fa-grip-horizontal"></i></button>
                    </div>
                </div>
            </div>
        </div>
        <div class="overview" data-view="table">
            <div class="container">
                <div class="row">
                    <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                        <table>
                            <thead>
                                <tr>
                                    <td><?php pll_e("vacancies"); ?></td>
                                    <td><?php pll_e("Type"); ?></td>
                                    <td><?php pll_e("Department"); ?></td>
                                    <td><?php pll_e("Location"); ?></td>
                                    <td></td>
                                </tr>
                            </thead>
                            <tbody>
                                <?php print_jobs_table(); ?>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        <div class="overview" data-view="grid" style="display:none;">
            <div class="container">
                <div class="row">
                    <?php print_jobs_tiles(); ?>
                </div>
            </div>
        </div>
    </div>
</section>
<?php endif; ?>

<?php get_template_part( 'parts/content', 'cta' ); ?>

<?php get_footer(); ?>