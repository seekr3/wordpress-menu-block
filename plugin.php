<?php
/*
Plugin Name: Menu Item Block
Author AB
*/

function loadMyBlock() {
  wp_enqueue_script(
    'blocks',
    plugin_dir_url(__FILE__) . 'dist/main.js',
    array('wp-blocks','wp-editor')
  );
}
   
add_action('enqueue_block_editor_assets', 'loadMyBlock');
