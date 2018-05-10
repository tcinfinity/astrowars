var c, ctx;

(function() {
  c = document.getElementById('canvas');
  ctx = c.getContext('2d');

  resize();
  ctx.fillStyle = '#eee';
  ctx.fillRect(0, 0, c.width, c.height);
})();

function resize() {
  c.width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  c.height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
}