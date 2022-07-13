$(function() {
    $( "#slider-range" ).slider({
      range: true,
      min: -5,
      max: 5,
      step: 1,
      values: [ -2, 1 ],
    })
    .each(function() {
        // Reference post: https://stackoverflow.com/questions/10224856/jquery-ui-slider-labels-under-slider

        let sliderOptions = $(this).data().uiSlider.options;
        let vals = sliderOptions.max - sliderOptions.min;

        for (var i = 0; i <= vals; i++) {
          var el = $('<label>'+(i-5)+'</label>');
          el.css('position', 'absolute')
          el.css('left',(i/vals*100)+'%');
          el.css('bottom','20px');
          $( "#slider-range" ).append(el);
          
        }
      });
  });