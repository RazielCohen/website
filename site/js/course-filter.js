(function(){
  var chips = document.querySelectorAll('.filter-chip');
  var cards = document.querySelectorAll('.course-card[data-category]');
  if(!chips.length || !cards.length) return;

  chips.forEach(function(chip){
    chip.addEventListener('click', function(){
      chips.forEach(function(c){ c.classList.remove('active'); });
      chip.classList.add('active');
      var filter = chip.dataset.filter;
      cards.forEach(function(card){
        var cats = (card.dataset.category || '').split(',');
        var show = filter === 'all' || cats.indexOf(filter) !== -1;
        card.style.display = show ? '' : 'none';
      });
    });
  });
})();
