function views_embed_view_ajax_load(target, nid, name, display) {
  setTimeout(function(){ 
    jQuery(target).load("views_embed_view_ajax/" + nid + '/' + name + '/' + display);
  }, 10);
}
