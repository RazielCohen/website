// Signature pad + waiver gate + registration submit, shared by every course-detail page.
(function(){
  var canvas = document.getElementById('sigCanvas');
  if(!canvas) return;
  var ctx = canvas.getContext('2d');
  var drawing = false, hasSignature = false, lastX = 0, lastY = 0;

  function resizeCanvas(){
    var ratio = window.devicePixelRatio || 1;
    var rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * ratio;
    canvas.height = rect.height * ratio;
    ctx.scale(ratio, ratio);
    ctx.strokeStyle = '#1d1d16';
    ctx.lineWidth = 2;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
  }
  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);

  function pos(e){
    var rect = canvas.getBoundingClientRect();
    var cx = e.touches ? e.touches[0].clientX : e.clientX;
    var cy = e.touches ? e.touches[0].clientY : e.clientY;
    return {x: cx - rect.left, y: cy - rect.top};
  }
  function start(e){
    drawing = true;
    var p = pos(e);
    lastX = p.x; lastY = p.y;
    e.preventDefault();
  }
  function move(e){
    if(!drawing) return;
    var p = pos(e);
    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(p.x, p.y);
    ctx.stroke();
    lastX = p.x; lastY = p.y;
    hasSignature = true;
    updateGate();
    e.preventDefault();
  }
  function end(){ drawing = false; }

  canvas.addEventListener('mousedown', start);
  canvas.addEventListener('mousemove', move);
  canvas.addEventListener('mouseup', end);
  canvas.addEventListener('mouseleave', end);
  canvas.addEventListener('touchstart', start, {passive:false});
  canvas.addEventListener('touchmove', move, {passive:false});
  canvas.addEventListener('touchend', end);

  document.getElementById('clearSig').addEventListener('click', function(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    hasSignature = false;
    updateGate();
  });

  var ackCheck = document.getElementById('ackCheck');
  var eligCheck = document.getElementById('eligCheck');
  var sigName = document.getElementById('sigName');
  var submitBtn = document.getElementById('submitBtn');
  var gateNote = document.getElementById('gateNote');
  var sigStatus = document.getElementById('sigStatus');
  var regSuccess = document.getElementById('regSuccess');

  function updateGate(){
    sigStatus.textContent = hasSignature ? 'Signature captured' : 'Draw your signature above';
    sigStatus.classList.toggle('signed', hasSignature);
    var ready = ackCheck.checked && eligCheck.checked && sigName.value.trim().length > 1 && hasSignature;
    submitBtn.disabled = !ready;
    gateNote.textContent = ready ? 'Ready to submit' : 'Complete the waiver above to enable registration';
  }

  ackCheck.addEventListener('change', updateGate);
  eligCheck.addEventListener('change', updateGate);
  sigName.addEventListener('input', updateGate);

  // scroll-to-bottom hint
  var termsBox = document.getElementById('termsBox');
  var scrollHint = document.getElementById('scrollHint');
  termsBox.addEventListener('scroll', function(){
    if(termsBox.scrollTop + termsBox.clientHeight >= termsBox.scrollHeight - 10){
      scrollHint.style.opacity = '0';
    } else {
      scrollHint.style.opacity = '1';
    }
  });

  // Submission: no backend wired up yet (this preview stores nothing). In the
  // WordPress build this posts to the Airtable form + waiver storage backend.
  submitBtn.addEventListener('click', function(){
    if(submitBtn.disabled) return;
    submitBtn.disabled = true;
    submitBtn.textContent = 'Submitted ✓';
    gateNote.textContent = 'Registration recorded for this preview session.';
    if(regSuccess) regSuccess.classList.add('visible');
  });
})();
