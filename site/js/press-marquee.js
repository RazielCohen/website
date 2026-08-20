// Finite ping-pong scroll for press strips (no logo duplication needed)
(function(){
  function initPingPong(track, startDirection){
    var container = track.parentElement;
    var distance = 0;
    var direction = startDirection || 1;
    var paused = false;
    var pos = 0;
    var speed = 40; // px per second
    var pauseAtEnds = 900; // ms pause at each end
    var initialized = false;

    function measure(){
      distance = Math.max(0, track.scrollWidth - container.clientWidth);
      if(!initialized){
        if(direction === -1){ pos = distance; track.style.transform = 'translateX(-' + pos + 'px)'; }
        initialized = true;
      }
    }
    measure();
    window.addEventListener('resize', measure);

    container.addEventListener('mouseenter', function(){ paused = true; });
    container.addEventListener('mouseleave', function(){ paused = false; });

    var last = null;
    var waiting = 0;
    function step(ts){
      if(last === null) last = ts;
      var dt = ts - last;
      last = ts;
      if(!paused && distance > 0){
        if(waiting > 0){
          waiting -= dt;
        } else {
          pos += direction * speed * (dt / 1000);
          if(pos >= distance){ pos = distance; direction = -1; waiting = pauseAtEnds; }
          if(pos <= 0){ pos = 0; direction = 1; waiting = pauseAtEnds; }
          track.style.transform = 'translateX(-' + pos + 'px)';
        }
      }
      requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }
  document.querySelectorAll('.press-track').forEach(function(track){
    initPingPong(track, track.classList.contains('reverse') ? -1 : 1);
  });
})();
