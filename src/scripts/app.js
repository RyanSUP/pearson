$(function() {
    $( "#slider-range" ).slider({
      range: true,
      min: -5,
      max: 5,
      step: 1,
      values: [ -2, 1 ],
    })
    .each(function() {

        //
        // Add labels to slider whose values 
        // are specified by min, max and whose
        // step is set to 1
        //
      
        // Get the options for this slider
        var opt = $(this).data().uiSlider.options;
        console.log(opt)
        // Get the number of possible values
        var vals = opt.max - opt.min;
        console.log(vals)
        // Space out values
        for (var i = 0; i <= vals; i++) {
          
          var el = $('<label>'+(i-5)+'</label>');
          el.css('position', 'absolute')
          el.css('left',(i/vals*100)+'%');
          $( "#slider-range" ).append(el);
          
        }
      });
  });