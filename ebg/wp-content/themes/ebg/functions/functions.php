<?php

// Print job table

function print_jobs_table() {
    $args = array('post_type' => 'jobs', 'posts_per_page' => -1, 'order' => 'ASC', 'orderby' => 'menu_order');
    $loop = new WP_Query($args);
    while($loop->have_posts()) {
        $loop->the_post();
		echo '<tr data-job data-type="'.get_field("type").'" data-department="'.get_field("department").'" data-location="'.get_field("location").'">
                    <td><div class="title">'.get_the_title().'</div></td>
                    <td>'.get_field("type").'</td>
                    <td>'.get_field("department").'</td>
                    <td>'.get_field("location").'</td>
                    <td><a href="'.get_the_permalink().'" class="button outline primary">'.pll__("Details").'</a></td>
                </tr>';
    }
    wp_reset_postdata();
}

// Print job tiles

function print_jobs_tiles() {
    $args = array('post_type' => 'jobs', 'posts_per_page' => -1, 'order' => 'ASC', 'orderby' => 'menu_order');
    $loop = new WP_Query($args);
    // $img = get_field('logo');
    while($loop->have_posts()) {
        $loop->the_post();
		echo '<div class="col-xl-3 col-lg-4 col-md-6 col-sm-12" data-job data-type="'.get_field("type").'" data-department="'.get_field("department").'" data-location="'.get_field("location").'">
                <div class="job">
                    <div class="info">
                        <div class="type"><img src="'.get_field('logo').'" alt=""></div>
                        <div class="title">'.get_the_title().'</div>
                        <div class="department">'.pll__("Department").': '.get_field("department").'</div>
                        <div class="location">'.pll__("Location").': '.get_field("location").'</div>
                    </div>
                    <div class="action">
                        <a href="'.get_the_permalink().'" class="button outline primary">'.pll__("Details").'</a>
                    </div>
                </div>
            </div>';
    }
    wp_reset_postdata();
}

// Print job filter

function print_job_filter($type) {
    $filter = array();
    $args = array('post_type' => 'jobs', 'posts_per_page' => -1, 'order' => 'ASC', 'orderby' => 'menu_order');
    $loop = new WP_Query($args);
    while($loop->have_posts()) {
        $loop->the_post();
        array_push($filter, get_field($type));
    }
    wp_reset_postdata();
    $filter = array_unique($filter);
    echo '<select class="custom-select" data-filter="'.$type.'">';
    echo '<option value="*">'.pll__("All").'</option>';
    foreach($filter as $item) {
        echo '<option value="'.$item.'">'.$item.'</option>';
    }
    echo '</select>';
}

// Print job counter

function print_job_counter() {
    $counter = wp_count_posts('jobs');
    echo $counter->publish;
}

// get job counter

function get_job_counter() {
    $counter = wp_count_posts('jobs');
    return $counter->publish;
}

// Count references

function count_references($slider, $sector) {
	$i = 0;

	$args = array('post_type' => 'references');
	$loop = new WP_Query($args);

	while($loop->have_posts()) {
		$loop->the_post();

		if($sector == 'all') {
			$i++;
		} else {
			$sectors = get_field('sectors');
			if(in_array($sector, $sectors)) {
				$i++;
			}
		}
	}
	
	wp_reset_postdata();
	
	$slides_per_slider = ceil($i / $slider);
	return $slides_per_slider;
}

// Print references

function print_references($slider, $sector) {
    // count references

    $slides = 0;

	$args = array('post_type' => 'references', 'posts_per_page' => -1);
	$loop = new WP_Query($args);

	while($loop->have_posts()) {
		$loop->the_post();

		if($sector == 'all') {
			$slides++;
		} else {
			$sectors = get_field('sectors');
			if(in_array($sector, $sectors)) {
				$slides++;
			}
		}
	}
	
	wp_reset_postdata();
	
	$slides_per_slider = ceil($slides / $slider);

    // get posts

    if($sector == 'all') {
        $posts = get_posts(array(
            'post_type' => 'references',
            'numberposts'	=> -1
        ));
    } else {
        $posts = get_posts(array(
            'post_type' => 'references',
            'numberposts'	=> -1,
            'meta_query' => array(
                array(
                    'key' => 'sectors',
                    'value' => $sector,
                    'compare' => 'LIKE'
                )
            )
        ));
    }

    $counter = 0;

    // for each slider

    for($i = 0; $i < $slider; $i++) {
        if($i % 2) {
            echo '<div class="customers__slider swiper-container reversed">';
        } else {
            echo '<div class="customers__slider swiper-container">';
        }
        echo '<div class="slider swiper-wrapper">';

        for($n = 0; $n < $slides_per_slider; $n++) {
            if($posts[$counter]) {
                $sectors_name = array();
                $sectors = get_field("sectors", $posts[$counter]->ID);
                foreach($sectors as $sector) {
                    array_push($sectors_name, get_the_title($sector));
                }
                echo '<div class="customer swiper-slide">
                        <img src="'.get_field('logo', $posts[$counter]->ID).'" class="logo">
                        <div class="title"><span>'.get_the_title($posts[$counter]->ID).'</span>'.get_field("sector", $posts[$counter]->ID).'</div>
                    </div>';
                $counter++;
            }
        }

        echo '</div>';
        echo '</div>';
    }
}

// Print news cats

function print_news_cats() {
    $cats = get_the_category();
    foreach($cats as $cat) {
        echo '<span>'.$cat->name.'</span>';
    }
}

// Print sectors

function print_sectors() {
    $args = array('post_type' => 'sectors', 'posts_per_page' => -1, 'order' => 'ASC', 'orderby' => 'menu_order');
    $loop = new WP_Query($args);
    while($loop->have_posts()) {
        $loop->the_post();
        $img = get_field("preview_image");
		echo '<div class="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                    <a href="'.get_the_permalink().'" class="application single-application">
                        <div class="image">
                            <img src="'.$img['url'].'" alt="'.$img['alt'].'">
                        </div>
                        <div class="text">
                            <div class="title">'.get_the_title().'</div>
                            <div class="desc">'.get_field("preview_text").'</div>
                            <!--<a href="'.get_the_permalink().'" class="button outline white">'.pll__("Branch details").'</a>-->
                        </div>
                    </a>
                </div>
                ';
    }
    wp_reset_postdata();
}

// Print index news

function print_news($amount = -1, $cat = false) {
    $args = array('post_type' => 'post', 'posts_per_page' => $amount, 'orderby' => 'date', 'category__in' => $cat, 'post__not_in' => array(get_the_ID()));
    $loop = new WP_Query($args);
    while($loop->have_posts()) {
        $loop->the_post();
        $cat = get_the_category();
		echo '<div class="col-xl-3 col-lg-3 col-md-6 col-sm-12" data-news data-cat="'.$cat[0]->name.'">
                    <div class="news margin">
                        <a href="'.get_the_permalink().'" class="image">
                            <span>'.$cat[0]->name.'</span>
                            <img src="'.get_field('preview_image').'">
                        </a>
                        <div class="text">
                            <div class="title">'.get_the_title().'</div>
                            <div class="desc">'.get_field('preview_text').'</div>
                            <a href="'.get_the_permalink().'">'.pll__("Read more").'</a>
                        </div>
                    </div>
                </div>
                ';
    }
    wp_reset_postdata();
}

// Print start page news

function print_home_news($amount = -1, $cat = false) {
    $args = array('post_type' => 'post', 'category_name' => 'news', 'posts_per_page' => $amount, 'orderby' => 'date', 'category__in' => $cat, 'post__not_in' => array(get_the_ID()));
    $loop = new WP_Query($args);
    while($loop->have_posts()) {
        $loop->the_post();
        $cat = get_the_category();
		echo '<div class="col-xl-3 col-lg-3 col-md-6 col-sm-12" data-news data-cat="'.$cat[0]->name.'">
                    <div class="news margin">
                        <a href="'.get_the_permalink().'" class="image">
                            <span>'.$cat[0]->name.'</span>
                            <img src="'.get_field('preview_image').'">
                        </a>
                        <div class="text">
                            <div class="title">'.get_the_title().'</div>
                            <div class="desc">'.get_field('preview_text').'</div>
                            <a href="'.get_the_permalink().'">'.pll__("Read more").'</a>
                        </div>
                    </div>
                </div>
                ';
    }
    wp_reset_postdata();
}

// Print Product news

function print_news_pro($amount = -1, $cat = false) {
    $args = array('post_type' => 'post', 'category_name' => 'case-studies', 'posts_per_page' => $amount, 'orderby' => 'date', 'category__in' => $cat, 'post__not_in' => array(get_the_ID()));
    $loop = new WP_Query($args);
    while($loop->have_posts()) {
        $loop->the_post();
        $cat = get_the_category();
		echo '<div class="col-xl-3 col-lg-3 col-md-6 col-sm-12" data-news data-cat="'.$cat[0]->name.'">
                    <div class="news margin">
                        <a href="'.get_the_permalink().'" class="image">
                            <span>'.$cat[0]->name.'</span>
                            <img src="'.get_field('preview_image').'">
                        </a>
                        <div class="text">
                            <div class="title">'.get_the_title().'</div>
                            <div class="desc">'.get_field('preview_text').'</div>
                            <a href="'.get_the_permalink().'">'.pll__("Read more").'</a>
                        </div>
                    </div>
                </div>
                ';
    }
    wp_reset_postdata();
}

// Print news filter

function print_news_filter() {
    $filter = array();
    $args = array('post_type' => 'post', 'posts_per_page' => $amount, 'orderby' => 'date', 'category__in' => $cat, 'post__not_in' => array(get_the_ID()));
    $loop = new WP_Query($args);
    while($loop->have_posts()) {
        $loop->the_post();
        $cat = get_the_category();
        array_push($filter, $cat[0]->name);
    }
    wp_reset_postdata();
    $filter = array_unique($filter);
    foreach($filter as $filter_single) {
        echo '<option value="'.$filter_single.'">'.$filter_single.'</option>';
    }
}

// Print training

function print_training() {
    $args = array('post_type' => 'training', 'posts_per_page' => -1, 'order' => 'ASC', 'orderby' => 'menu_order');
    $loop = new WP_Query($args);
    while($loop->have_posts()) {
        $loop->the_post();
        echo '<div class="col-xl-3 col-lg-4 col-md-6 col-sm-12" data-news data-cat="news">
                    <div class="training">
                        <a href="'.get_the_permalink().'" class="image">
                            <img src="'.get_field('preview_image').'">
                        </a>
                        <div class="text">
                            <div class="title">'.get_the_title().'</div>
                            <div class="info">
                                Datum: '.get_field('preview_date').'<br />
                                Uhrzeit: '.get_field('preview_time').'<br />
                                '.get_field('preview_person').' Teilnehmer
                            </div>
                            <div class="desc">'.get_field('preview_text').'</div>
                            <a href="'.get_the_permalink().'">'.pll__("Details").'</a>
                        </div>
                    </div>
                </div>';
    }
    wp_reset_postdata();
}

// Print products

function print_productcategories() {
    $args = array('post_type' => 'productcategories', 'posts_per_page' => -1);
    $loop = new WP_Query($args);
     while($loop->have_posts()) {
        $loop->the_post();
        $sectors = get_field("sectors");
        $sectors_filter = array();
        foreach($sectors as $sector) {
            array_push($sectors_filter, $sector->ID);
        }
        
        echo '<div class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                    <div class="category single-cat">
                        <div class="image"><img src="'.get_field("image").'"></div>
                        <div class="text">
                            <div class="title">'.get_the_title().'</div>
                            <a href="'.get_the_permalink().'" class="button outline primary">'.pll__("To Overview").'</a>
                        </div>
                        
                    </div>
                </div>';
        
    }
    wp_reset_postdata();
}

// Print related products

function print_related_products($id) {
    $args = array('post_type' => 'products', 'posts_per_page' => -1);
    $loop = new WP_Query($args);
    while($loop->have_posts()) {
        $loop->the_post();
        $cats = get_field("cats");
        if(in_array($id, $cats)) {
            echo '<div class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                    <div class="product">
                        <a href="'.get_field("datasheet").'" target="_blank" class="image" style="display:block;"><img src="'.get_field("preview_image").'"></a>
                        <div class="title">'.get_the_title().'</div>
                        <div class="category">'.get_the_title($id).'</div>
                        <a href="'.get_field("catalog", "option")["url"].'#page='.get_field("datasheet_number").'" target="_blank" class="action">'.pll__("Product details").'</a>
                    </div>
                </div>';
            }
    }
    wp_reset_postdata();
}

// Print sector products

function print_sector_products($id) {
    $filter = array();
    $args = array('post_type' => 'productcategories', 'posts_per_page' => -1);
    $loop = new WP_Query($args);
    while($loop->have_posts()) {
        $loop->the_post();
        $sectors = get_field("sectors");
        if(in_array($id, $sectors)) {
            array_push($filter, get_the_ID());
        }
    }
    wp_reset_postdata();

    $args = array('post_type' => 'products', 'posts_per_page' => -1);
    $loop = new WP_Query($args);
    while($loop->have_posts()) {
        $loop->the_post();
        $cats = get_field("cats");
        $status = false;

        foreach($cats as $cat) {
            if(in_array($cat, $filter)) {
                $status = true;
            }
        }

        if($status) {
            echo '<div class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                    <div class="product">
                        <a href="'.get_field("datasheet").'" target="_blank" class="image" style="display:block;"><img src="'.get_field("preview_image").'"></a>
                        <div class="title">'.get_the_title().'</div>
                        <div class="category">'.get_the_title($cats[0]).'</div>
                        <a href="'.get_field("datasheet").'" target="_blank" class="action">'.pll__("Product details").'</a>
                    </div>
                </div>';
            }
    }
    wp_reset_postdata();
}

?>