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

        for (let i = 0; i <= vals; i++) {
            let label = $('<label>'+(i-5)+'</label>');
            label.css('left',(i/vals*100)+'%');
            label.addClass('slider-label');

            let tick = $('<div></div>');
            tick.css('left',(i/vals*100)+'%');
            tick.addClass('tick');

            $( "#slider-range" ).append(label);
            $( "#slider-range" ).append(tick);
        }
      });
  });