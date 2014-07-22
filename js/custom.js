$(document).ready(function () {

  $('a.brand.batavus').sidr({
    name: 'batavus',
    source: function(name) {
      return '<div class="sidr-brand"><img src="images/x.png" class="close">' +
                '<div class="brand-content">' +
                  '<img src="images/desktop/logo\'s merken/batavus logo desktop.png">' +
                  '<div class="brand-menu">' +
                    '<ul>' +
                      '<li><a href="#stadsfietsen-batavus">Stadsfietsen</a></li>' +
                      '<li><a href="#elektrische-fietsen-batavus">Elektrische fietsen</a></li>' +
                      '<li><a href="#kinderfietsen-batavus">Kinderfietsen</a></li>' +
                      '<li class="ext-link"><a href="#" target="_blank"><i class="fa fa-external-link"></i>Batavus</a></li>' +
                    '</ul>' +
                  '</div>' +
                '</div>' +
              '</div>';
    },
    side: 'right'
  });

  $('a.brand.bfk').sidr({
    name: 'bfk',
    source: function(name) {
      return '<div class="sidr-brand"><img src="images/x.png" class="close">' +
                '<div class="brand-content">' +
                  '<img src="images/desktop/logo\'s merken/BFK logo desktop.png">' +
                  '<div class="brand-menu">' +
                    '<ul>' +
                      '<li><a href="#kinderfietsen-bfk">Kinderfietsen</a></li>' +
                      '<li class="ext-link"><a href="#" target="_blank"><i class="fa fa-external-link"></i>BFK</a></li>' +
                    '</ul>' +
                  '</div>' +
                '</div>' +
              '</div>';
    },
    side: 'right'
  });

  $('a.brand.kettler').sidr({
    name: 'kettler',
    source: function(name) {
      return '<div class="sidr-brand"><img src="images/x.png" class="close">' +
                '<div class="brand-content">' +
                  '<img src="images/desktop/logo\'s merken/Kettler logo desktop.png">' +
                  '<div class="brand-menu">' +
                    '<ul>' +
                      '<li><a href="#hometrainers-kettler">Hometrainers</a></li>' +
                      '<li class="ext-link"><a href="#" target="_blank"><i class="fa fa-external-link"></i>Kettler</a></li>' +
                    '</ul>' +
                  '</div>' +
                '</div>' +
              '</div>';
    },
    side: 'right'
  });

  $('a.brand.koga-miyata').sidr({
    name: 'koga-miyata',
    source: function(name) {
      return '<div class="sidr-brand"><img src="images/x.png" class="close">' +
                '<div class="brand-content">' +
                  '<img src="images/desktop/logo\'s merken/koga logo desktop.png">' +
                  '<div class="brand-menu">' +
                    '<ul>' +
                      '<li><a href="#racefietsen-koga-miyata">Racefietsen</a></li>' +
                      '<li><a href="#mountbikes-koga-miyata">Mountbikes</a></li>' +
                      '<li><a href="#stadsfietsen-koga-miyata">Stadsfietsen</a></li>' +
                      '<li><a href="#elektrische-fietsen-koga-miyata">Elektrische fietsen</a></li>' +
                      '<li class="ext-link"><a href="#" target="_blank"><i class="fa fa-external-link"></i> Koga Miyata</a></li>' +
                    '</ul>' +
                  '</div>' +
                '</div>' +
              '</div>';
    },
    side: 'right'
  });

  $('a.brand.ridley').sidr({
    name: 'ridley',
    source: function(name) {
      return '<div class="sidr-brand"><img src="images/x.png" class="close">' +
                '<div class="brand-content">' +
                  '<img src="images/desktop/logo\'s merken/ridley logo desktop.png">' +
                  '<div class="brand-menu">' +
                    '<ul>' +
                      '<li><a href="#racefietsen-ridley">Racefietsen</a></li>' +
                      '<li><a href="#mountbikes-ridley">Mountbikes</a></li>' +
                      '<li class="ext-link"><a href="#" target="_blank"><i class="fa fa-external-link"></i>Ridley</a></li>' +
                    '</ul>' +
                  '</div>' +
                '</div>' +
              '</div>';
    },
    side: 'right'
  });

  $('a.brand.stevens').sidr({
    name: 'stevens',
    source: function(name) {
      return '<div class="sidr-brand"><img src="images/x.png" class="close">' +
                '<div class="brand-content">' +
                  '<img src="images/desktop/logo\'s merken/stevens logo desktop.png">' +
                  '<div class="brand-menu">' +
                    '<ul>' +
                      '<li><a href="#racefietsen-stevens">Racefietsen</a></li>' +
                      '<li><a href="#mountbikes-stevens">Mountbikes</a></li>' +
                      '<li><a href="#stadsfietsen-stevens">Stadsfietsen</a></li>' +
                      '<li><a href="#elektrische-fietsen-stevens">Elektrische fietsen</a></li>' +
                      '<li class="ext-link"><a href="#" target="_blank"><i class="fa fa-external-link"></i>Stevens</a></li>' +
                    '</ul>' +
                  '</div>' +
                '</div>' +
              '</div>';
    },
    side: 'right'
  });

  $('a.brand.trek').sidr({
    name: 'trek',
    source: function(name) {
      return '<div class="sidr-brand"><img src="images/x.png" class="close">' +
                '<div class="brand-content">' +
                  '<img src="images/desktop/logo\'s merken/trek logo desktop.png">' +
                  '<div class="brand-menu">' +
                    '<ul>' +
                      '<li><a href="#racefietsen-trek">Racefietsen</a></li>' +
                      '<li><a href="#mountbikes-trek">Mountbikes</a></li>' +
                      '<li><a href="#stadsfietsen-trek">Stadsfietsen</a></li>' +
                      '<li><a href="#elektrische-fietsen-trek">Elektrische fietsen</a></li>' +
                      '<li><a href="#kinderfietsen-trek">Kinderfietsen</a></li>' +
                      '<li class="ext-link"><a href="http://www.trekbikes.com" target="_blank"><i class="fa fa-external-link"></i> www.trekbikes.com</a></li>' +
                    '</ul>' +
                  '</div>' +
                '</div>' +
              '</div>';
    },
    side: 'right'
  });

  $('.overlay, .close, .sidr a').click(function(){
    $.sidr('close', 'batavus');
    $.sidr('close', 'bfk');
    $.sidr('close', 'kettler');
    $.sidr('close', 'koga-miyata');
    $.sidr('close', 'ridley');
    $.sidr('close', 'stevens');
    $.sidr('close', 'trek');
  });

  function is_mobile(){
    return $(window).width() < 768;
  }

  function is_tablet(){
    return (($(window).width() > 768) && ($(window).width() < 992));
  }

  function is_desktop(){
    return $(window).width() > 992;
  }

  // Marks
  items_wrap = $('#merken .mark-items').outerWidth(true);
  item = $('#merken .mark-item').outerWidth(true);
  columns = (Math.floor(items_wrap/item) > 4) ? 4 : Math.floor(items_wrap/item);
  w_columns = columns * item;
  padding = (Math.floor((items_wrap - w_columns) / 2) - 1);
  $('#merken .mark-items').css('padding', '0 ' + padding + 'px');

  // Popup
  if (!is_desktop()) {
    $('.type-bike').each(function(){
      if ($(this).find('.bike-block.descr').length > 0 && $(this).find('.bike-block.desktop-img').length > 0) {
        var src = $(this).find('.bike-block.desktop-img img').attr('src');
        $(this).find('.bike-block.descr .description p:last').append('<a href="' + src + '" class="visible-xs visible-sm image-popup"><i class="fa fa-camera"></i></a>');
      }
    });
  }

  $('.image-popup').magnificPopup({
    type: 'image',
    closeOnContentClick: true,
    mainClass: 'mfp-img-mobile',
    image: {
      verticalFit: true
    }
  });

  // Side menu
  $('.navbar-toggle').sidr({
    name: 'sidr-main',
    source: '#slidemenu',
    onOpen: function(){
      $('.navbar-fixed-top').animate({left: ($(window).width < 610 ) ? "369px" : "512px" }, 200);
    },
    onClose: function(){
      $('.navbar-fixed-top').animate({left: "0"}, 200);
    }
  });

  $('.overlay, .sidr a').click(function(){
    $.sidr('close', 'sidr-main');
  });

  // Dropdown
  $(document).click(function(event) {
    if ($('.page-content-overlay').is(':visible'))
      $('.page-content-overlay').hide();
    event.stopPropagation();
  });

  $('.dropdown').click(function(){
    if ($('.page-content-overlay').is(':visible'))
      $('.page-content-overlay').hide();
    else
      $('.page-content-overlay').show();
  });

  url_hash = ($(location).attr('hash')) ? $(location).attr('hash') : '#home';
  $('.navbar-nav li').removeClass('active');
  $('.navbar a[href$="' + url_hash + '"]').parent('li').addClass('active'); 

  // Scroll
  $('a[href*=#]').bind("click", function(e){
    var anchor = ($(this).attr('data-scroll')) ? $(this).attr('data-scroll') : $(this).attr('href');
    $('html, body').stop().animate({
       scrollTop: $(anchor).offset().top - $('.navbar-fixed-top').height() + $('.navbar-header .sub-items').height()
    }, 1000);
    e.preventDefault();
  });
  $('.sub-items').on("click", 'a[href*=#]', function(e){
    var anchor = $(this);
    $('html, body').stop().animate({
       scrollTop: $(anchor.attr('href')).offset().top - $('.navbar-fixed-top').height() + $('.navbar-header .sub-items').height()
    }, 1000);
    e.preventDefault();
  });

  // Cache selectors
  var lastId,
      topMenu = $("#slide-nav"),
      topMenuHeight = topMenu.outerHeight()+15,
      // All list items
      menuItems = topMenu.find("a"),
      // Anchors corresponding to menu items
      scrollItems = menuItems.map(function(){
        var item = $($(this).attr("href"));
        if (item.length) {
          item.articles = item.children('.bike-block:not(.bike-block.descr, .bike-block.desktop-img)');
          return item; }
      });

      var subScrollItems = [];
      var subMenuItems = $('.bike-block:not(.bike-block.descr, .bike-block.desktop-img)');
      subScrollItems = subMenuItems.map(function(){
        var item = $($(this).attr("href"));
        if (item.length) {
          item.articles = item.children('.bike-block:not(.bike-block.descr, .bike-block.desktop-img)');
          return item; }
      });

      $('.bike-block:not(.bike-block.descr, .bike-block.desktop-img)').each(function(){
        subScrollItems.push($(this))
      });

  // Bind to scroll
  $(window).scroll(function(){
    // Get container scroll position
    var fromTop = $(this).scrollTop()+topMenuHeight;

    // Get id of current scroll item
    var cur = scrollItems.map(function(){
      if ($(this).offset().top < fromTop)
        return this;
    });
    // Get the id of the current element
    cur = cur[cur.length-1];
    var id = cur && cur.length ? cur[0].id : "";

    $('.page').each(function(){
      if (id == $(this).attr('id')){
        $('.nav.navbar-nav a#'+id).parent('li').addClass('active');
      }
    });

    var cur_sub_item = subScrollItems.map(function(){
      if ($(this).offset().top < fromTop)
        return this;
    });
    cur_sub_item = cur_sub_item[cur_sub_item.length-1];
    var id_sub = cur_sub_item && cur_sub_item.length ? cur_sub_item[0].id : "";

    if (id != 'home')
      $('.navbar-header h2').text(id);
    else
      $('.navbar-header h2').text('Welkom');

    if (cur.articles.length > 0) {
      var submenu = '';
      cur.articles.each(function() {
        var item_name = $(this).find('h3').text();
        var item_id = $(this).attr('id');
        class_active = (id_sub == item_id) ? 'class="active"' : '';
        submenu += '<a href="#'+item_id+'" '+class_active+'>'+item_name+'</a> ';
      });

      if (!is_desktop())
        $('.navbar-fixed-top .sub-items').show().html(submenu);

    } else {
      $('.sub-items').hide();
    }

    if (lastId !== id) {
      lastId = id;
      // Set/remove active class
      menuItems
        .parent().removeClass("active")
        .end().filter("[href=#"+id+"]").parent().addClass("active");
    }
  });

});