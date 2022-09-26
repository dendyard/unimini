<?php 
	if(!function_exists("show_current_class")) {
		function show_current_class($args = "",$class = "active") {
			// Getting CI class instance.
            $CI = get_instance();
            // Getting router class to active.
            $act_class = $CI->router->fetch_class();
            
			if($act_class == $args) {
				echo $class;
			}
		}
	}
 ?>