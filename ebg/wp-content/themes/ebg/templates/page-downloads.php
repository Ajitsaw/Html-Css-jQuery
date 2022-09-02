<?php
/* Template Name: Download */
get_header();
?>

<section class="downloads">
	<?php if(!get_field('banner_hide')): ?>
    <div class="downloads__text">
        <div class="container">
            <div class="row">
                <div class="col-xl-6 col-lg-6 col-md-8 col-sm-12">
                    <h1><?php the_title(); ?></h1>
                    <?php the_field("banner_text"); ?>
                </div>
            </div>
        </div>
    </div>
	<?php endif; ?>
	<?php if(!get_field('pro_hide')): ?>
    <div class="downloads__brochures">
        <div class="container">
            <div class="row">
                <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                    <h2><?php the_field("pro_heading"); ?></h2>
                    <div class="overview">
                        <?php while(have_rows("pro_repeater")): the_row(); 
                        $img = get_sub_field('p_image');
                        ?>
                        <div class="download">
                            <a href="<?php the_sub_field("download_file"); ?>">
                                <img src="<?php echo $img['url']; ?>" alt="<?php echo $img['alt']; ?>">
                            </a>
                            <div class="title"><?php the_sub_field("heading"); ?></div>
                            <div class="desc">
                                <?php the_sub_field("text"); ?>
                            </div>
                            <a href="<?php the_sub_field("download_file"); ?>" class="action" download><i class="far fa-arrow-down"></i><?php pll_e("Download now"); ?></a>
                        </div>
                        <?php endwhile; ?>
                    </div>
                </div>
            </div>
        </div>
    </div>
	<?php endif; ?>
	<?php if(!get_field('bla_hide')): ?>
    <div class="downloads__datasheets">
        <div class="container">
            <div class="row">
                <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                    <h2><?php the_field("bla_heading"); ?></h2>
                    <div class="filter">
                        <label>
                            <span class="text">Produkttyp</span>
                            <?php
                                $filter = array();
                                while(have_rows('bla_repeater')) {
                                    the_row();
                                    $single_filter = get_sub_field("filter");
                                    array_push($filter, $single_filter);
                                }
                                $filter = array_unique($filter, SORT_REGULAR);
                            ?>
                            <select class="custom-select" data-filter>
                                <option value="*">Alle</option>
                                <?php
                                foreach($filter as $single) {
                                    echo '<option value="'.$single.'">'.$single.'</option>';
                                }
                                ?>
                            </select>
                        </label>
                    </div>
                    <div class="overview">
                        <?php while(have_rows("bla_repeater")): the_row(); ?>
                        <div class="download" data-download data-type="<?php the_sub_field("filter"); ?>">
                            <div class="title"><?php the_sub_field("heading"); ?></div>
                            <div class="desc"><?php the_sub_field("text"); ?></div>
                            <a href="<?php the_sub_field("download_file"); ?>" class="action" download><i class="far fa-arrow-down"></i><?php pll_e("Download now"); ?></a>
                        </div>
                        <?php endwhile; ?>
                    </div>
                </div>
            </div>
        </div>
    </div>
	<?php endif; ?>
</section>

<?php get_footer(); ?>