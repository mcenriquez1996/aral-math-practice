/* ARAL Math Practice - figure library (renderFig)
   -------------------------------------------------
   Reconstructs the figure-essential worksheet artwork as clean, offline, theme-aware
   INLINE SVG (strokes use currentColor; shaded/fill parts use the app accent var), so no
   raster image assets are bundled. Each worksheet item (or a worksheet) carries a small
   `fig` spec {kind, ...}; renderFig(spec) returns an SVG/HTML string.

   FAITHFULNESS: the spec encodes exactly what the official DepEd/OSSFF figure shows (the
   count, the shape, the time, the fraction, the angle, the reading) - so the learner reads
   the SAME thing off the reconstructed figure and the stored answer matches the official
   Tutor's-Guide key. The spec is answer-authoritative where the answer is derivable from it
   (count->n, fraction->shaded/total, base10->value, clock->h:m); the generator cross-checks
   that against the transcribed official key and logs any conflict.

   Supported kinds:
     count    {n, icon}                        -> grid of n icons (answer = n)
     fraction {shape:'circle'|'bar'|'grid', total, shaded}  (answer = shaded/total)
     shape    {name}                           -> a plane shape (identify)
     polygon  {sides, regular}                 -> an n-gon, regular or irregular
     solid    {name}                           -> a solid figure (identify)
     angle    {deg, labels?:[A,B,C]}           -> an angle (identify type / name)
     line     {rel}                            -> point/line/segment/ray/parallel/...
     base10   {th?,h,t,o}                      -> base-ten blocks (answer = value)
     clock    {h, m}                           -> analog clock (answer = time)
     thermo   {value, unit?, min?, max?, step?, digital?}  -> thermometer (answer = value)
     calendar {month, year?, firstDow, days, highlight?}   -> a month grid
*/
(function(global){
  'use strict';
  function esc(s){ return String(s==null?'':s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;'); }
  function svg(vb,inner,cls,maxw){
    var w=vb[2], h=vb[3];
    return '<svg class="fig '+(cls||'')+'" viewBox="0 0 '+w+' '+h+'" width="'+w+'" height="'+h+'" '+
      'style="max-width:'+(maxw||Math.min(w,320))+'px" xmlns="http://www.w3.org/2000/svg" role="img">'+inner+'</svg>';
  }
  var ACC='var(--accent)';           // shaded / fill
  var ACC2='var(--accent-dk)';
  function po  (pts){ return pts.map(function(p){return p[0]+','+p[1];}).join(' '); }

  /* ---------------------------------------------------------------- icons (for counting) */
  // each returns an SVG fragment drawn inside a cell centred at (cx,cy) with radius r
  var ICON={
    circle:function(x,y,r){ return '<circle cx="'+x+'" cy="'+y+'" r="'+(r*0.8)+'" fill="'+ACC+'" stroke="currentColor" stroke-width="1.5"/>'; },
    ball:function(x,y,r){ return '<circle cx="'+x+'" cy="'+y+'" r="'+r2(r*0.8)+'" fill="'+ACC+'" stroke="currentColor" stroke-width="1.5"/>'+
      '<path d="M '+r2(x-r*0.8)+' '+y+' q '+r2(r*0.8)+' -'+r2(r*0.55)+' '+r2(r*1.6)+' 0" fill="none" stroke="currentColor" stroke-width="1.1"/>'+
      '<path d="M '+r2(x-r*0.8)+' '+y+' q '+r2(r*0.8)+' '+r2(r*0.55)+' '+r2(r*1.6)+' 0" fill="none" stroke="currentColor" stroke-width="1.1"/>'; },
    dot:function(x,y,r){ return '<circle cx="'+x+'" cy="'+y+'" r="'+(r*0.7)+'" fill="currentColor"/>'; },
    square:function(x,y,r){ var s=r*1.4; return '<rect x="'+(x-s/2)+'" y="'+(y-s/2)+'" width="'+s+'" height="'+s+'" rx="2" fill="'+ACC+'" stroke="currentColor" stroke-width="1.5"/>'; },
    triangle:function(x,y,r){ return '<polygon points="'+poo([[x,y-r],[x-r*0.9,y+r*0.75],[x+r*0.9,y+r*0.75]])+'" fill="'+ACC+'" stroke="currentColor" stroke-width="1.5"/>'; },
    star:function(x,y,r){ var p=[],i; for(i=0;i<10;i++){ var ang=-Math.PI/2+i*Math.PI/5, rr=(i%2?r*0.45:r); p.push([x+rr*Math.cos(ang), y+rr*Math.sin(ang)]); } return '<polygon points="'+poo(p)+'" fill="'+ACC+'" stroke="currentColor" stroke-width="1.2"/>'; },
    heart:function(x,y,r){ var d='M '+x+' '+(y+r*0.85)+' C '+(x-r*1.4)+' '+(y-r*0.4)+' '+(x-r*0.5)+' '+(y-r*1.1)+' '+x+' '+(y-r*0.25)+' C '+(x+r*0.5)+' '+(y-r*1.1)+' '+(x+r*1.4)+' '+(y-r*0.4)+' '+x+' '+(y+r*0.85)+' Z'; return '<path d="'+d+'" fill="'+ACC+'" stroke="currentColor" stroke-width="1.2"/>'; },
    moon:function(x,y,r){ return '<path d="M '+(x+r*0.5)+' '+(y-r*0.85)+' A '+r+' '+r+' 0 1 0 '+(x+r*0.5)+' '+(y+r*0.85)+' A '+(r*0.8)+' '+(r*0.8)+' 0 1 1 '+(x+r*0.5)+' '+(y-r*0.85)+' Z" fill="'+ACC+'" stroke="currentColor" stroke-width="1.2"/>'; },
    smiley:function(x,y,r){ return '<circle cx="'+x+'" cy="'+y+'" r="'+r+'" fill="none" stroke="currentColor" stroke-width="1.5"/>'+
      '<circle cx="'+(x-r*0.35)+'" cy="'+(y-r*0.2)+'" r="'+(r*0.12)+'" fill="currentColor"/>'+
      '<circle cx="'+(x+r*0.35)+'" cy="'+(y-r*0.2)+'" r="'+(r*0.12)+'" fill="currentColor"/>'+
      '<path d="M '+(x-r*0.45)+' '+(y+r*0.25)+' Q '+x+' '+(y+r*0.75)+' '+(x+r*0.45)+' '+(y+r*0.25)+'" fill="none" stroke="currentColor" stroke-width="1.5"/>'; },
    flower:function(x,y,r){ var s='',i; for(i=0;i<6;i++){ var a=i*Math.PI/3; s+='<circle cx="'+(x+r*0.6*Math.cos(a))+'" cy="'+(y+r*0.6*Math.sin(a))+'" r="'+(r*0.42)+'" fill="'+ACC+'" stroke="currentColor" stroke-width="1"/>'; } return s+'<circle cx="'+x+'" cy="'+y+'" r="'+(r*0.4)+'" fill="'+ACC2+'" stroke="currentColor" stroke-width="1"/>'; },
    sun:function(x,y,r){ var s='',i; for(i=0;i<8;i++){ var a=i*Math.PI/4; s+='<line x1="'+(x+r*0.75*Math.cos(a))+'" y1="'+(y+r*0.75*Math.sin(a))+'" x2="'+(x+r*1.1*Math.cos(a))+'" y2="'+(y+r*1.1*Math.sin(a))+'" stroke="currentColor" stroke-width="1.5"/>'; } return s+'<circle cx="'+x+'" cy="'+y+'" r="'+(r*0.65)+'" fill="'+ACC+'" stroke="currentColor" stroke-width="1.2"/>'; },
    cloud:function(x,y,r){ return '<path d="M '+(x-r)+' '+(y+r*0.5)+' a '+(r*0.5)+' '+(r*0.5)+' 0 0 1 '+(r*0.1)+' -'+(r*0.95)+' a '+(r*0.55)+' '+(r*0.55)+' 0 0 1 '+(r*1.0)+' -'+(r*0.2)+' a '+(r*0.5)+' '+(r*0.5)+' 0 0 1 '+(r*0.85)+' '+(r*0.6)+' a '+(r*0.45)+' '+(r*0.45)+' 0 0 1 -'+(r*0.15)+' '+(r*0.75)+' Z" fill="'+ACC+'" stroke="currentColor" stroke-width="1.2"/>'; },
    leaf:function(x,y,r){ return '<path d="M '+x+' '+(y-r)+' C '+(x+r)+' '+(y-r*0.4)+' '+(x+r)+' '+(y+r*0.6)+' '+x+' '+(y+r)+' C '+(x-r)+' '+(y+r*0.6)+' '+(x-r)+' '+(y-r*0.4)+' '+x+' '+(y-r)+' Z" fill="'+ACC+'" stroke="currentColor" stroke-width="1.2"/><line x1="'+x+'" y1="'+(y-r)+'" x2="'+x+'" y2="'+(y+r)+'" stroke="currentColor" stroke-width="1"/>'; },
    apple:function(x,y,r){ return '<circle cx="'+x+'" cy="'+(y+r*0.1)+'" r="'+(r*0.85)+'" fill="'+ACC+'" stroke="currentColor" stroke-width="1.3"/><line x1="'+x+'" y1="'+(y-r*0.7)+'" x2="'+x+'" y2="'+(y-r*1.05)+'" stroke="currentColor" stroke-width="1.5"/><path d="M '+x+' '+(y-r*0.85)+' q '+(r*0.5)+' -'+(r*0.3)+' '+(r*0.7)+' '+(r*0.1)+'" fill="'+ACC2+'" stroke="currentColor" stroke-width="1"/>'; },
    fish:function(x,y,r){ return '<path d="M '+(x-r)+' '+y+' Q '+x+' '+(y-r*0.7)+' '+(x+r*0.7)+' '+y+' Q '+x+' '+(y+r*0.7)+' '+(x-r)+' '+y+' Z" fill="'+ACC+'" stroke="currentColor" stroke-width="1.2"/><polygon points="'+poo([[x+r*0.7,y],[x+r*1.15,y-r*0.45],[x+r*1.15,y+r*0.45]])+'" fill="'+ACC+'" stroke="currentColor" stroke-width="1.2"/><circle cx="'+(x-r*0.55)+'" cy="'+(y-r*0.12)+'" r="'+(r*0.1)+'" fill="currentColor"/>'; },
    bird:function(x,y,r){ return '<path d="M '+(x-r)+' '+y+' Q '+x+' '+(y-r)+' '+(x+r)+' '+y+'" fill="none" stroke="currentColor" stroke-width="2"/><path d="M '+(x-r)+' '+(y+r*0.5)+' Q '+x+' '+(y-r*0.5)+' '+(x+r)+' '+(y+r*0.5)+'" fill="none" stroke="currentColor" stroke-width="2"/>'; },
    balloon:function(x,y,r){ return '<ellipse cx="'+x+'" cy="'+(y-r*0.15)+'" rx="'+(r*0.7)+'" ry="'+(r*0.85)+'" fill="'+ACC+'" stroke="currentColor" stroke-width="1.3"/><line x1="'+x+'" y1="'+(y+r*0.68)+'" x2="'+x+'" y2="'+(y+r*1.1)+'" stroke="currentColor" stroke-width="1"/>'; },
    /* Objects the official worksheets name by word. Without these normIcon
       falls back to a plain circle, so a learner counting "dogs" sees
       identical blobs. Kept simple so they read at about 18px. */
    dog:function(x,y,r){ return '<ellipse cx="'+r2(x-r*0.62)+'" cy="'+r2(y+r*0.05)+'" rx="'+r2(r*0.2)+'" ry="'+r2(r*0.45)+'" fill="'+ACC+'" stroke="currentColor" stroke-width="1.1"/>'+
      '<ellipse cx="'+r2(x+r*0.62)+'" cy="'+r2(y+r*0.05)+'" rx="'+r2(r*0.2)+'" ry="'+r2(r*0.45)+'" fill="'+ACC+'" stroke="currentColor" stroke-width="1.1"/>'+
      '<ellipse cx="'+x+'" cy="'+r2(y+r*0.08)+'" rx="'+r2(r*0.68)+'" ry="'+r2(r*0.6)+'" fill="'+ACC+'" stroke="currentColor" stroke-width="1.3"/>'+
      '<circle cx="'+r2(x-r*0.26)+'" cy="'+r2(y-r*0.1)+'" r="'+r2(r*0.09)+'" fill="currentColor"/><circle cx="'+r2(x+r*0.26)+'" cy="'+r2(y-r*0.1)+'" r="'+r2(r*0.09)+'" fill="currentColor"/>'+
      '<ellipse cx="'+x+'" cy="'+r2(y+r*0.34)+'" rx="'+r2(r*0.16)+'" ry="'+r2(r*0.12)+'" fill="currentColor"/>'; },
    cat:function(x,y,r){ return '<polygon points="'+poo([[x-r*0.6,y-r*0.2],[x-r*0.52,y-r*0.95],[x-r*0.1,y-r*0.45]])+'" fill="'+ACC+'" stroke="currentColor" stroke-width="1.1"/>'+
      '<polygon points="'+poo([[x+r*0.6,y-r*0.2],[x+r*0.52,y-r*0.95],[x+r*0.1,y-r*0.45]])+'" fill="'+ACC+'" stroke="currentColor" stroke-width="1.1"/>'+
      '<circle cx="'+x+'" cy="'+r2(y+r*0.1)+'" r="'+r2(r*0.62)+'" fill="'+ACC+'" stroke="currentColor" stroke-width="1.3"/>'+
      '<circle cx="'+r2(x-r*0.24)+'" cy="'+r2(y)+'" r="'+r2(r*0.08)+'" fill="currentColor"/><circle cx="'+r2(x+r*0.24)+'" cy="'+r2(y)+'" r="'+r2(r*0.08)+'" fill="currentColor"/>'+
      '<line x1="'+r2(x-r*0.62)+'" y1="'+r2(y+r*0.3)+'" x2="'+r2(x-r*0.15)+'" y2="'+r2(y+r*0.22)+'" stroke="currentColor" stroke-width="0.9"/>'+
      '<line x1="'+r2(x+r*0.62)+'" y1="'+r2(y+r*0.3)+'" x2="'+r2(x+r*0.15)+'" y2="'+r2(y+r*0.22)+'" stroke="currentColor" stroke-width="0.9"/>'; },
    carabao:function(x,y,r){ return '<path d="M '+r2(x-r*0.3)+' '+r2(y-r*0.42)+' q -'+r2(r*0.75)+' -'+r2(r*0.5)+' -'+r2(r*0.95)+' '+r2(r*0.25)+'" fill="none" stroke="currentColor" stroke-width="2"/>'+
      '<path d="M '+r2(x+r*0.3)+' '+r2(y-r*0.42)+' q '+r2(r*0.75)+' -'+r2(r*0.5)+' '+r2(r*0.95)+' '+r2(r*0.25)+'" fill="none" stroke="currentColor" stroke-width="2"/>'+
      '<ellipse cx="'+x+'" cy="'+r2(y+r*0.18)+'" rx="'+r2(r*0.5)+'" ry="'+r2(r*0.62)+'" fill="'+ACC+'" stroke="currentColor" stroke-width="1.3"/>'+
      '<circle cx="'+r2(x-r*0.18)+'" cy="'+r2(y+r*0.46)+'" r="'+r2(r*0.07)+'" fill="currentColor"/><circle cx="'+r2(x+r*0.18)+'" cy="'+r2(y+r*0.46)+'" r="'+r2(r*0.07)+'" fill="currentColor"/>'; },
    snake:function(x,y,r){ return '<path d="M '+r2(x-r*0.95)+' '+r2(y+r*0.55)+' q '+r2(r*0.5)+' -'+r2(r*0.75)+' '+r2(r*0.95)+' -'+r2(r*0.1)+' q '+r2(r*0.42)+' '+r2(r*0.62)+' '+r2(r*0.9)+' -'+r2(r*0.35)+'" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"/>'+
      '<circle cx="'+r2(x+r*0.85)+'" cy="'+r2(y-r*0.45)+'" r="'+r2(r*0.22)+'" fill="'+ACC+'" stroke="currentColor" stroke-width="1.1"/>'; },
    grasshopper:function(x,y,r){ return '<ellipse cx="'+r2(x+r*0.1)+'" cy="'+r2(y+r*0.12)+'" rx="'+r2(r*0.62)+'" ry="'+r2(r*0.3)+'" fill="'+ACC+'" stroke="currentColor" stroke-width="1.2"/>'+
      '<circle cx="'+r2(x-r*0.62)+'" cy="'+r2(y+r*0.02)+'" r="'+r2(r*0.24)+'" fill="'+ACC+'" stroke="currentColor" stroke-width="1.1"/>'+
      '<path d="M '+r2(x+r*0.15)+' '+r2(y+r*0.3)+' l '+r2(r*0.3)+' '+r2(r*0.45)+' l -'+r2(r*0.5)+' '+r2(r*0.2)+'" fill="none" stroke="currentColor" stroke-width="1.5"/>'+
      '<line x1="'+r2(x-r*0.72)+'" y1="'+r2(y-r*0.18)+'" x2="'+r2(x-r*1.0)+'" y2="'+r2(y-r*0.6)+'" stroke="currentColor" stroke-width="1.1"/>'; },
    truck:function(x,y,r){ return '<rect x="'+r2(x-r*0.95)+'" y="'+r2(y-r*0.45)+'" width="'+r2(r*1.1)+'" height="'+r2(r*0.85)+'" rx="2" fill="'+ACC+'" stroke="currentColor" stroke-width="1.2"/>'+
      '<path d="M '+r2(x+r*0.15)+' '+r2(y+r*0.4)+' v -'+r2(r*0.55)+' h '+r2(r*0.4)+' l '+r2(r*0.4)+' '+r2(r*0.35)+' v '+r2(r*0.2)+' Z" fill="'+ACC+'" stroke="currentColor" stroke-width="1.2"/>'+
      '<circle cx="'+r2(x-r*0.5)+'" cy="'+r2(y+r*0.52)+'" r="'+r2(r*0.2)+'" fill="none" stroke="currentColor" stroke-width="1.5"/>'+
      '<circle cx="'+r2(x+r*0.6)+'" cy="'+r2(y+r*0.52)+'" r="'+r2(r*0.2)+'" fill="none" stroke="currentColor" stroke-width="1.5"/>'; },
    bottle:function(x,y,r){ return '<path d="M '+r2(x-r*0.2)+' '+r2(y-r*0.95)+' h '+r2(r*0.4)+' v '+r2(r*0.35)+' q 0 '+r2(r*0.2)+' '+r2(r*0.18)+' '+r2(r*0.32)+' v '+r2(r*0.95)+' q 0 '+r2(r*0.2)+' -'+r2(r*0.2)+' '+r2(r*0.2)+' h -'+r2(r*0.56)+' q -'+r2(r*0.2)+' 0 -'+r2(r*0.2)+' -'+r2(r*0.2)+' v -'+r2(r*0.95)+' q 0 -'+r2(r*0.12)+' '+r2(r*0.18)+' -'+r2(r*0.32)+' Z" fill="'+ACC+'" stroke="currentColor" stroke-width="1.2"/>'; },
    jug:function(x,y,r){ return '<rect x="'+r2(x-r*0.55)+'" y="'+r2(y-r*0.6)+'" width="'+r2(r*1.0)+'" height="'+r2(r*1.45)+'" rx="3" fill="'+ACC+'" stroke="currentColor" stroke-width="1.2"/>'+
      '<path d="M '+r2(x+r*0.45)+' '+r2(y-r*0.25)+' q '+r2(r*0.45)+' '+r2(r*0.3)+' 0 '+r2(r*0.62)+'" fill="none" stroke="currentColor" stroke-width="1.5"/>'+
      '<rect x="'+r2(x-r*0.28)+'" y="'+r2(y-r*0.92)+'" width="'+r2(r*0.56)+'" height="'+r2(r*0.32)+'" rx="2" fill="'+ACC2+'" stroke="currentColor" stroke-width="1.1"/>'; },
    basket:function(x,y,r){ return '<path d="M '+r2(x-r*0.85)+' '+r2(y-r*0.1)+' L '+r2(x+r*0.85)+' '+r2(y-r*0.1)+' L '+r2(x+r*0.58)+' '+r2(y+r*0.78)+' L '+r2(x-r*0.58)+' '+r2(y+r*0.78)+' Z" fill="'+ACC+'" stroke="currentColor" stroke-width="1.3"/>'+
      '<path d="M '+r2(x-r*0.62)+' '+r2(y-r*0.12)+' q '+r2(r*0.62)+' -'+r2(r*1.0)+' '+r2(r*1.24)+' 0" fill="none" stroke="currentColor" stroke-width="1.5"/>'; },
    plate:function(x,y,r){ return '<ellipse cx="'+x+'" cy="'+r2(y+r*0.12)+'" rx="'+r2(r*0.95)+'" ry="'+r2(r*0.72)+'" fill="'+ACC+'" stroke="currentColor" stroke-width="1.3"/>'+
      '<ellipse cx="'+x+'" cy="'+r2(y+r*0.12)+'" rx="'+r2(r*0.6)+'" ry="'+r2(r*0.44)+'" fill="none" stroke="currentColor" stroke-width="1"/>'; },
    jacket:function(x,y,r){ return '<path d="M '+r2(x-r*0.35)+' '+r2(y-r*0.8)+' h '+r2(r*0.7)+' l '+r2(r*0.55)+' '+r2(r*0.3)+' v '+r2(r*0.55)+' h -'+r2(r*0.3)+' v '+r2(r*0.85)+' h -'+r2(r*1.2)+' v -'+r2(r*0.85)+' h -'+r2(r*0.3)+' v -'+r2(r*0.55)+' Z" fill="'+ACC+'" stroke="currentColor" stroke-width="1.2"/>'+
      '<line x1="'+x+'" y1="'+r2(y-r*0.8)+'" x2="'+x+'" y2="'+r2(y+r*0.9)+'" stroke="currentColor" stroke-width="1"/>'; },
    flashlight:function(x,y,r){ return '<rect x="'+r2(x-r*0.15)+'" y="'+r2(y-r*0.3)+'" width="'+r2(r*0.95)+'" height="'+r2(r*0.6)+'" rx="2" fill="'+ACC+'" stroke="currentColor" stroke-width="1.2"/>'+
      '<path d="M '+r2(x-r*0.15)+' '+r2(y-r*0.55)+' L '+r2(x-r*0.62)+' '+r2(y-r*0.75)+' L '+r2(x-r*0.62)+' '+r2(y+r*0.75)+' L '+r2(x-r*0.15)+' '+r2(y+r*0.55)+' Z" fill="'+ACC2+'" stroke="currentColor" stroke-width="1.2"/>'+
      '<line x1="'+r2(x+r*0.45)+'" y1="'+r2(y-r*0.3)+'" x2="'+r2(x+r*0.45)+'" y2="'+r2(y+r*0.3)+'" stroke="currentColor" stroke-width="1"/>'; }
  };
  function poo(pts){ return pts.map(function(p){ return r2(p[0])+','+r2(p[1]); }).join(' '); }
  function r2(n){ return Math.round(n*100)/100; }
  var ICON_ALIAS={ fishes:'fish', fishe:'fish', balls:'ball', dots:'dot', stars:'star', hearts:'heart', moons:'moon', crescent:'moon', smileys:'smiley', smiley_face:'smiley', face:'smiley', faces:'smiley', flowers:'flower', suns:'sun', clouds:'cloud', leaves:'leaf', leafs:'leaf', apples:'apple', baby:'smiley', babies:'smiley', children:'smiley', kids:'smiley', parrot:'bird', parrots:'bird', birds:'bird', tree:'leaf', trees:'leaf', candy:'circle', candies:'circle', box:'square', boxes:'square', cube:'square', squares:'square', triangles:'triangle', balloons:'balloon', egg:'balloon', eggs:'balloon', beachball:'ball', beachballs:'ball', dogs:'dog', cats:'cat', carabaos:'carabao', snakes:'snake', grasshoppers:'grasshopper', trucks:'truck', bottles:'bottle', milk:'bottle', jugs:'jug', waterjug:'jug', waterjugs:'jug', baskets:'basket', plates:'plate', pancake:'plate', pancakes:'plate', jackets:'jacket', flashlights:'flashlight', torch:'flashlight', tent:'triangle', tents:'triangle', matchbox:'square', matchboxes:'square' };

  function normIcon(ic){ ic=(ic||'circle').toString().toLowerCase().replace(/[^a-z_]/g,''); ic=ICON_ALIAS[ic]||ic; return ICON[ic]?ic:'circle'; }
  // one group of n icons -> {svg, w, h}; strike = number of trailing icons crossed out (subtraction pictures)
  function countGroup(n, icon, strike, maxW){
    n=Math.max(0,n|0); strike=Math.max(0,strike|0); icon=normIcon(icon);
    var per = n<=5 ? Math.max(1,n) : (n<=12 ? Math.ceil(n/2) : 8);
    if(per>8) per=8; if(per<1) per=1;
    var cell = n>20?34:(n>12?40:46), pad=6;
    // Keep the natural width inside maxW so a phone never has to shrink the
    // picture. A figure wider than the screen gets scaled down by the browser,
    // and at 65% a Grade 2 learner can no longer tell an apple from a balloon.
    // Wrap onto more rows instead of growing wider.
    var fit = Math.max(1, Math.floor(((maxW||300) - pad*2) / cell));
    if(per > fit) per = fit;
    var r=cell*0.4, rows=Math.max(1,Math.ceil(n/per)), s='currentColor';
    var W=per*cell+pad*2, H=rows*cell+pad*2, inner='';
    for(var i=0;i<n;i++){ var col=i%per, row=Math.floor(i/per); var cx=pad+col*cell+cell/2, cy=pad+row*cell+cell/2; inner+=ICON[icon](cx,cy,r);
      if(i>=n-strike){ inner+='<line x1="'+(cx-r)+'" y1="'+(cy-r)+'" x2="'+(cx+r)+'" y2="'+(cy+r)+'" stroke="'+s+'" stroke-width="2"/><line x1="'+(cx-r)+'" y1="'+(cy+r)+'" x2="'+(cx+r)+'" y2="'+(cy-r)+'" stroke="'+s+'" stroke-width="2"/>'; } }
    return {svg:inner, w:W, h:H};
  }
  function drawCount(f){
    // multi-group picture addition/subtraction: {groups:[{n,icon,strike?}], op:'+'|'-'}
    if(Array.isArray(f.groups) && f.groups.length){
      var op=f.op||'+', gap=30, x=6, maxH=0, parts=[];
      // Share the width budget between the groups so the whole picture, both
      // groups plus the operator, still fits a phone without being scaled down.
      var budget = Math.max(90, Math.floor((300 - gap*(f.groups.length-1)) / f.groups.length));
      f.groups.forEach(function(g){ parts.push(countGroup(g.n, g.icon||f.icon, g.strike, budget)); });
      maxH=Math.max.apply(null, parts.map(function(p){return p.h;}));
      var inner='', cx=x;
      parts.forEach(function(p,i){ var oy=(maxH-p.h)/2; inner+='<g transform="translate('+r2(cx)+','+r2(oy+6)+')">'+p.svg+'</g>'; cx+=p.w;
        if(i<parts.length-1){ inner+='<text x="'+r2(cx+gap/2)+'" y="'+r2(maxH/2+12)+'" text-anchor="middle" fill="currentColor" font-size="26" font-weight="700">'+(op==='-'?'&#8722;':'+')+'</text>'; cx+=gap; } });
      return svg([0,0,cx+6,maxH+14], inner, 'fig-count', cx+6);
    }
    var g0=countGroup(f.n, f.icon, f.strike);
    return svg([0,0,g0.w,g0.h], g0.svg, 'fig-count', g0.w);
  }

  /* ---------------------------------------------------------------- bundles (count by 10s/50s/100s: labeled discs) */
  function drawBundle(f){
    var units=(f.units||[]).slice().sort(function(a,b){return (b.value|0)-(a.value|0);});
    var discs=[]; units.forEach(function(u){ for(var i=0;i<(u.count|0);i++) discs.push(u.value|0); });
    if(!discs.length) return '';
    var cell=54, r=22, pad=8, s='currentColor';
    // Same rule as the counting pictures: wrap onto another row rather than
    // growing past a phone's width, so the labels inside the discs stay legible.
    var perFit=Math.max(1, Math.floor((300-pad*2)/cell));
    var per=Math.min(discs.length, discs.length<=6?discs.length:6, perFit);
    var rows=Math.ceil(discs.length/per), W=per*cell+pad*2, H=rows*cell+pad*2, inner='';
    discs.forEach(function(v,i){ var col=i%per, row=Math.floor(i/per), cx=pad+col*cell+cell/2, cy=pad+row*cell+cell/2;
      var fs=(String(v).length>=5?9.5:(String(v).length>=4?11:13));
      inner+='<circle cx="'+cx+'" cy="'+cy+'" r="'+r+'" fill="'+ACC+'" fill-opacity="0.16" stroke="'+s+'" stroke-width="1.6"/>';
      inner+='<text x="'+cx+'" y="'+(cy+4)+'" text-anchor="middle" fill="'+s+'" font-size="'+fs+'" font-weight="700">'+v+'</text>'; });
    return svg([0,0,W,H],inner,'fig-bundle',Math.min(W,320));
  }

  /* ---------------------------------------------------------------- segments (compare lengths / congruence) */
  function drawSegments(f){
    var L=(f.lengths||[]).map(Number).filter(function(x){return isFinite(x)&&x>0;}); if(!L.length) return '';
    var maxL=Math.max.apply(null,L)||1, W=250, s='currentColor', scale=(W-56)/maxL, rowH=38, H=L.length*rowH+8;
    var inner='', labels=['A','B','C','D'];
    L.forEach(function(len,i){ var y=20+i*rowH, x1=22, x2=22+len*scale;
      inner+='<line x1="'+x1+'" y1="'+y+'" x2="'+r2(x2)+'" y2="'+y+'" stroke="'+s+'" stroke-width="2.6"/>'+
        '<circle cx="'+x1+'" cy="'+y+'" r="3" fill="'+s+'"/><circle cx="'+r2(x2)+'" cy="'+y+'" r="3" fill="'+s+'"/>'+
        '<text x="'+(x1-6)+'" y="'+(y+4)+'" text-anchor="end" fill="'+s+'" font-size="12" font-weight="600">'+(labels[i]||'')+'</text>'; });
    return svg([0,0,W,H],inner,'fig-segments',260);
  }

  /* ---------------------------------------------------------------- fractions */
  function drawFraction(f){
    var total=Math.max(1,f.total|0), shaded=Math.max(0,Math.min(total,f.shaded|0)), shape=(f.shape||'circle');
    if(shape==='bar'||shape==='rectangle'){
      var W=240,H=64,x0=6,y0=6,bw=W-12,bh=H-12,cw=bw/total,inner='';
      for(var i=0;i<total;i++){ inner+='<rect x="'+(x0+i*cw)+'" y="'+y0+'" width="'+cw+'" height="'+bh+'" fill="'+(i<shaded?ACC:'none')+'" stroke="currentColor" stroke-width="1.5"/>'; }
      return svg([0,0,W,H],inner,'fig-frac',260);
    }
    if(shape==='grid'){
      // lay total cells as near-square grid, shade first `shaded`
      var cols=Math.ceil(Math.sqrt(total)), rows=Math.ceil(total/cols), cs=44, gx=6,gy=6, g='';
      for(var k=0;k<total;k++){ var c=k%cols, rr=Math.floor(k/cols); g+='<rect x="'+(gx+c*cs)+'" y="'+(gy+rr*cs)+'" width="'+cs+'" height="'+cs+'" fill="'+(k<shaded?ACC:'none')+'" stroke="currentColor" stroke-width="1.5"/>'; }
      return svg([0,0,cols*cs+12,rows*cs+12],g,'fig-frac',Math.min(cols*cs+12,300));
    }
    // A named polygon cut into `total` wedges from its centre, e.g. g4 WS4 #18 asks
    // "what fraction of the HEXAGON is shaded" and must not be drawn as a circle.
    if(SHAPE_SIDES[shape]){
      var pn=SHAPE_SIDES[shape], pcx=64, pcy=64, pr=56;
      var vs=regPoly(pcx,pcy,pr,pn, -Math.PI/2 + (pn%2===0 ? Math.PI/pn : 0));
      // perimeter points: `total` evenly spaced positions around the polygon outline
      var per=[], seg, t, j;
      for(j=0;j<total;j++){
        t=j*pn/total; seg=Math.floor(t)%pn;
        var fr=t-Math.floor(t), p1=vs[seg], p2=vs[(seg+1)%pn];
        per.push([p1[0]+(p2[0]-p1[0])*fr, p1[1]+(p2[1]-p1[1])*fr]);
      }
      var wedge='';
      for(j=0;j<total;j++){
        var A=per[j], Bp=per[(j+1)%total], mid=[];
        // include any polygon vertices that fall between A and B so the wedge hugs the outline
        var tA=j*pn/total, tB=(j+1)*pn/total;
        for(var v=Math.ceil(tA); v<tB; v++) mid.push(vs[v%pn]);
        var path='M '+r2(pcx)+' '+r2(pcy)+' L '+r2(A[0])+' '+r2(A[1]);
        mid.forEach(function(m){ path+=' L '+r2(m[0])+' '+r2(m[1]); });
        path+=' L '+r2(Bp[0])+' '+r2(Bp[1])+' Z';
        wedge+='<path d="'+path+'" fill="'+(j<shaded?ACC:'none')+'" stroke="currentColor" stroke-width="1.5"/>';
      }
      return svg([0,0,128,128],wedge,'fig-frac',150);
    }
    // circle (pie)
    var R=56,cx=64,cy=64,sec=''; var a0=-Math.PI/2, da=2*Math.PI/total;
    for(var s=0;s<total;s++){ var a1=a0+s*da, a2=a0+(s+1)*da; var x1=cx+R*Math.cos(a1),y1=cy+R*Math.sin(a1),x2=cx+R*Math.cos(a2),y2=cy+R*Math.sin(a2); var large=(da>Math.PI)?1:0; sec+='<path d="M '+cx+' '+cy+' L '+r2(x1)+' '+r2(y1)+' A '+R+' '+R+' 0 '+large+' 1 '+r2(x2)+' '+r2(y2)+' Z" fill="'+(s<shaded?ACC:'none')+'" stroke="currentColor" stroke-width="1.5"/>'; }
    return svg([0,0,128,128],sec,'fig-frac',150);
  }

  /* ---------------------------------------------------------------- plane shapes */
  function regPoly(cx,cy,R,n,rot){ var p=[],i; rot=rot||-Math.PI/2; for(i=0;i<n;i++){ var a=rot+i*2*Math.PI/n; p.push([cx+R*Math.cos(a), cy+R*Math.sin(a)]); } return p; }
  var SHAPE_SIDES={ triangle:3, 'equilateral triangle':3, square:4, quadrilateral:4, pentagon:5, hexagon:6, heptagon:7, octagon:8, nonagon:9, decagon:10 };
  function drawShapeNamed(name){
    name=String(name||'').toLowerCase().trim();
    var W=140,H=130,cx=70,cy=66,inner='';
    var stroke='stroke="currentColor" stroke-width="2" fill="'+ACC+'" fill-opacity="0.18"';
    if(name==='circle'){ inner='<circle cx="'+cx+'" cy="'+cy+'" r="52" '+stroke+'/>'; }
    else if(name==='oval'||name==='ellipse'){ inner='<ellipse cx="'+cx+'" cy="'+cy+'" rx="60" ry="40" '+stroke+'/>'; }
    else if(name==='semicircle'||name==='semi-circle'||name==='half circle'){ inner='<path d="M 14 '+cy+' A 56 56 0 0 1 126 '+cy+' Z" '+stroke+'/>'; }
    else if(name==='rectangle'||name==='oblong'){ inner='<rect x="14" y="36" width="112" height="60" '+stroke+'/>'; }
    else if(name==='square'){ inner='<rect x="24" y="14" width="92" height="92" '+stroke+'/>'; }
    else if(name==='right triangle'||name==='right-angled triangle'){ inner='<polygon points="'+poo([[20,110],[20,20],[120,110]])+'" '+stroke+'/>'; }
    else if(name==='rhombus'||name==='diamond'){ inner='<polygon points="'+poo([[cx,10],[126,cy],[cx,122],[14,cy]])+'" '+stroke+'/>'; }
    else if(name==='parallelogram'){ inner='<polygon points="'+poo([[36,96],[124,96],[104,30],[16,30]])+'" '+stroke+'/>'; }
    else if(name==='trapezoid'||name==='trapezium'){ inner='<polygon points="'+poo([[30,96],[110,96],[92,34],[48,34]])+'" '+stroke+'/>'; }
    else if(name==='kite'){ inner='<polygon points="'+poo([[cx,8],[118,56],[cx,124],[22,56]])+'" '+stroke+'/>'; }
    else if(name==='star'){ inner=ICON.star(cx,cy,56).replace('fill="'+ACC+'"','fill="'+ACC+'" fill-opacity="0.18"'); }
    else if(name==='crescent'||name==='moon'){ inner=ICON.moon(cx,cy,52); }
    else if(name==='heart'){ inner=ICON.heart(cx,cy,48); }
    else if(SHAPE_SIDES[name]){ inner='<polygon points="'+poo(regPoly(cx,cy,56,SHAPE_SIDES[name]))+'" '+stroke+'/>'; }
    else { inner='<polygon points="'+poo(regPoly(cx,cy,56,5))+'" '+stroke+'/>'; }
    return svg([0,0,W,H],inner,'fig-shape',150);
  }
  function drawPolygon(f){
    var n=Math.max(3,f.sides|0), reg=(f.regular!==false), cx=75,cy=72,R=60, pts, i;
    if(reg){
      // Even-sided regular polygons sit flat (a 4-gon reads as a square, not a diamond);
      // odd-sided ones point up, which is how they are conventionally drawn.
      pts=regPoly(cx,cy,R,n, -Math.PI/2 + (n%2===0 ? Math.PI/n : 0));
    } else {
      // Deterministic irregular (no RNG), varying BOTH the angular step and the radius.
      // Perturbing the radius alone while leaving vertices evenly spaced still reads as
      // "roughly regular", which left "is this regular or irregular?" a coin flip for the
      // learner. Uneven steps make the SIDE LENGTHS and interior angles visibly unequal.
      // Vertices still sweep monotonically around the centre, so the polygon stays simple
      // (never self-intersecting) for any side count.
      var steps=[], tot=0;
      for(i=0;i<n;i++){ var s=0.55+0.90*(((i*7+3)%5)/4); steps.push(s); tot+=s; }
      pts=[]; var a=-Math.PI/2;
      for(i=0;i<n;i++){
        var k=0.52+0.48*(((i*37+11)%13)/13);
        pts.push([cx+R*k*Math.cos(a), cy+R*k*Math.sin(a)]);
        a += steps[i]*2*Math.PI/tot;
      }
    }
    return svg([0,0,150,144],'<polygon points="'+poo(pts)+'" stroke="currentColor" stroke-width="2" fill="'+ACC+'" fill-opacity="0.18"/>','fig-shape',160);
  }

  /* ---------------------------------------------------------------- solid figures */
  function drawSolid(f){
    var name=String(f.name||'').toLowerCase().trim(), s='currentColor';
    function L(x1,y1,x2,y2,d){ return '<line x1="'+x1+'" y1="'+y1+'" x2="'+x2+'" y2="'+y2+'" stroke="'+s+'" stroke-width="1.8"'+(d?' stroke-dasharray="4 3"':'')+'/>'; }
    var fillA='fill="'+ACC+'" fill-opacity="0.15"';
    var W=160,H=150,inner='';
    if(name==='cube'){
      var a=16,b=40,w=84;
      inner='<rect x="'+a+'" y="'+(b)+'" width="'+w+'" height="'+w+'" '+fillA+' stroke="'+s+'" stroke-width="1.8"/>'+
        L(a,b,a+34,b-28)+L(a+w,b,a+w+34,b-28)+L(a+w,b+w,a+w+34,b+w-28)+
        '<line x1="'+(a+34)+'" y1="'+(b-28)+'" x2="'+(a+w+34)+'" y2="'+(b-28)+'" stroke="'+s+'" stroke-width="1.8"/>'+
        '<line x1="'+(a+w+34)+'" y1="'+(b-28)+'" x2="'+(a+w+34)+'" y2="'+(b+w-28)+'" stroke="'+s+'" stroke-width="1.8"/>'+
        L(a,b+w,a+34,b+w-28,true)+L(a+34,b+w-28,a+w+34,b+w-28,true)+L(a+34,b-28,a+34,b+w-28,true);
    } else if(name==='rectangular prism'||name==='cuboid'||name==='rectangular-prism'||name==='box'){
      var x=14,y=52,ww=100,hh=62,dx=30,dy=24;
      inner='<rect x="'+x+'" y="'+y+'" width="'+ww+'" height="'+hh+'" '+fillA+' stroke="'+s+'" stroke-width="1.8"/>'+
        L(x,y,x+dx,y-dy)+L(x+ww,y,x+ww+dx,y-dy)+L(x+ww,y+hh,x+ww+dx,y+hh-dy)+
        '<line x1="'+(x+dx)+'" y1="'+(y-dy)+'" x2="'+(x+ww+dx)+'" y2="'+(y-dy)+'" stroke="'+s+'" stroke-width="1.8"/>'+
        '<line x1="'+(x+ww+dx)+'" y1="'+(y-dy)+'" x2="'+(x+ww+dx)+'" y2="'+(y+hh-dy)+'" stroke="'+s+'" stroke-width="1.8"/>'+
        L(x,y+hh,x+dx,y+hh-dy,true)+L(x+dx,y+hh-dy,x+ww+dx,y+hh-dy,true)+L(x+dx,y-dy,x+dx,y+hh-dy,true);
    } else if(name==='cylinder'){
      inner='<ellipse cx="80" cy="30" rx="44" ry="15" '+fillA+' stroke="'+s+'" stroke-width="1.8"/>'+
        '<path d="M 36 30 L 36 118 A 44 15 0 0 0 124 118 L 124 30" '+fillA+' stroke="'+s+'" stroke-width="1.8"/>'+
        '<path d="M 36 118 A 44 15 0 0 1 124 118" fill="none" stroke="'+s+'" stroke-width="1.8" stroke-dasharray="4 3"/>';
    } else if(name==='cone'){
      inner='<path d="M 80 14 L 36 118 A 44 15 0 0 0 124 118 Z" '+fillA+' stroke="'+s+'" stroke-width="1.8"/>'+
        '<path d="M 36 118 A 44 15 0 0 1 124 118" fill="none" stroke="'+s+'" stroke-width="1.8" stroke-dasharray="4 3"/>';
    } else if(name==='sphere'){
      inner='<circle cx="80" cy="74" r="56" '+fillA+' stroke="'+s+'" stroke-width="1.8"/>'+
        '<ellipse cx="80" cy="74" rx="56" ry="18" fill="none" stroke="'+s+'" stroke-width="1.4" stroke-dasharray="4 3"/>';
    } else if(name==='square pyramid'||name==='pyramid'||name==='square-pyramid'){
      inner='<polygon points="'+poo([[80,12],[20,110],[140,110]])+'" '+fillA+' stroke="'+s+'" stroke-width="1.8"/>'+
        '<path d="M 20 110 Q 80 134 140 110" fill="none" stroke="'+s+'" stroke-width="1.8"/>'+
        L(80,12,80,122,true)+L(20,110,80,122,true)+L(140,110,80,122,true);
    } else if(name==='rectangular pyramid'||name==='rectangular-pyramid'){
      var bx=[[30,120],[116,120],[140,96],[54,96]], apx=[84,18];
      inner='<polygon points="'+poo(bx)+'" '+fillA+' stroke="'+s+'" stroke-width="1.8"/>'+
        L(bx[0][0],bx[0][1],apx[0],apx[1])+L(bx[1][0],bx[1][1],apx[0],apx[1])+L(bx[2][0],bx[2][1],apx[0],apx[1])+
        L(bx[3][0],bx[3][1],apx[0],apx[1],true);
    } else if(name==='pentagonal prism'||name==='pentagonal-prism'){
      var fp=regPoly(48,78,36,5,-Math.PI/2), dx2=44, dy2=-8, bp=fp.map(function(p){return [p[0]+dx2,p[1]+dy2];});
      inner='<polygon points="'+poo(bp)+'" fill="none" stroke="'+s+'" stroke-width="1.5" stroke-dasharray="4 3"/>'+
        '<polygon points="'+poo(fp)+'" '+fillA+' stroke="'+s+'" stroke-width="1.8"/>';
      fp.forEach(function(p,i){ inner+=L(p[0],p[1],bp[i][0],bp[i][1], p[0]<46); });
    } else if(name==='triangular prism'||name==='triangular-prism'){
      inner='<polygon points="'+poo([[26,112],[70,34],[114,112]])+'" '+fillA+' stroke="'+s+'" stroke-width="1.8"/>'+
        L(70,34,128,30)+L(114,112,150,100)+L(26,112,62,100,true)+
        '<line x1="128" y1="30" x2="150" y2="100" stroke="'+s+'" stroke-width="1.8"/>'+
        L(62,100,128,30,true)+L(62,100,150,100,true);
    } else {
      inner='<text x="80" y="74" text-anchor="middle" fill="'+s+'" font-size="13">'+esc(f.name||'solid')+'</text>';
    }
    return svg([0,0,W,H],inner,'fig-solid',170);
  }

  /* ---------------------------------------------------------------- angles */
  function drawAngle(f){
    var deg=Math.max(1,Math.min(359,+f.deg||45)), L=92;
    var rad=deg*Math.PI/180;
    // Size the box around the rays instead of fixing the vertex. An obtuse ray sweeps back
    // past the vertex, so a fixed vertex pushed it (and its label) off the left edge.
    var dx2=L*Math.cos(-rad), dy2=L*Math.sin(-rad);
    var padL=26, padR=26, padT=24, padB=22;
    var minX=Math.min(0,dx2), maxX=Math.max(L,dx2);
    var minY=Math.min(0,dy2), maxY=Math.max(0,dy2);
    var vx=padL-minX, vy=padT-minY;
    var W=Math.ceil(vx+maxX+padR), H=Math.ceil(vy+maxY+padB);
    var ex1=vx+L, ey1=vy;                       // ray 1: along +x
    var ex2=vx+dx2, ey2=vy+dy2;                 // ray 2: up by deg
    var lab=f.labels||null, s='currentColor';
    var inner='<line x1="'+vx+'" y1="'+vy+'" x2="'+r2(ex1)+'" y2="'+r2(ey1)+'" stroke="'+s+'" stroke-width="2"/>'+
      '<line x1="'+vx+'" y1="'+vy+'" x2="'+r2(ex2)+'" y2="'+r2(ey2)+'" stroke="'+s+'" stroke-width="2"/>';
    if(Math.abs(deg-90)<0.5){ var m=16; inner+='<path d="M '+(vx+m)+' '+vy+' L '+(vx+m)+' '+(vy-m)+' L '+vx+' '+(vy-m)+'" fill="none" stroke="'+s+'" stroke-width="1.5"/>'; }
    else { var ar=28; inner+='<path d="M '+(vx+ar)+' '+vy+' A '+ar+' '+ar+' 0 0 0 '+r2(vx+ar*Math.cos(-rad))+' '+r2(vy+ar*Math.sin(-rad))+'" fill="none" stroke="'+s+'" stroke-width="1.5"/>'; }
    inner+='<circle cx="'+vx+'" cy="'+vy+'" r="2.5" fill="'+s+'"/>';
    inner+='<circle cx="'+r2(ex1)+'" cy="'+r2(ey1)+'" r="2.5" fill="'+s+'"/>';
    inner+='<circle cx="'+r2(ex2)+'" cy="'+r2(ey2)+'" r="2.5" fill="'+s+'"/>';
    if(lab&&lab.length===3){
      // keep the ray-2 label on the outside of the ray whichever way it points
      inner+='<text x="'+r2(ex2+(dx2<0?-15:6))+'" y="'+r2(ey2-3)+'" fill="'+s+'" font-size="13" font-weight="600">'+esc(lab[0])+'</text>';
      inner+='<text x="'+r2(vx-15)+'" y="'+r2(vy+14)+'" fill="'+s+'" font-size="13" font-weight="600">'+esc(lab[1])+'</text>';
      inner+='<text x="'+r2(ex1+4)+'" y="'+r2(ey1+5)+'" fill="'+s+'" font-size="13" font-weight="600">'+esc(lab[2])+'</text>';
    }
    return svg([0,0,W,H],inner,'fig-angle',180);
  }

  /* ---------------------------------------------------------------- lines & relationships */
  function arrow(x,y,ang){ var a=ang, h=7; return '<path d="M '+x+' '+y+' L '+(x-h*Math.cos(a-0.4))+' '+(y-h*Math.sin(a-0.4))+' M '+x+' '+y+' L '+(x-h*Math.cos(a+0.4))+' '+(y-h*Math.sin(a+0.4))+'" fill="none" stroke="currentColor" stroke-width="2"/>'; }
  function drawLine(f){
    var rel=String(f.rel||f.name||'line').toLowerCase().replace(/[_-]/g,' ').trim(), s='currentColor', W=210,H=90, inner='', lab=f.labels||null;
    function seg(x1,y1,x2,y2,w){ return '<line x1="'+x1+'" y1="'+y1+'" x2="'+x2+'" y2="'+y2+'" stroke="'+s+'" stroke-width="'+(w||2)+'"/>'; }
    function dot(x,y){ return '<circle cx="'+x+'" cy="'+y+'" r="3" fill="'+s+'"/>'; }
    function tick(x,y,ang,n){ var o=''; ang=ang||Math.PI/2; for(var i=0;i<(n||1);i++){ var off=(i-(n-1)/2)*5; var mx=x+off*Math.cos(0), my=y; o+='<line x1="'+(mx-5*Math.cos(ang))+'" y1="'+(my-5*Math.sin(ang))+'" x2="'+(mx+5*Math.cos(ang))+'" y2="'+(my+5*Math.sin(ang))+'" stroke="'+s+'" stroke-width="1.6"/>'; } return o; }
    if(rel==='point'){ inner=dot(105,45)+'<text x="112" y="40" fill="'+s+'" font-size="13" font-weight="600">'+esc((lab&&lab[0])||'A')+'</text>'; }
    else if(rel==='line'){ inner=seg(20,45,190,45)+arrow(190,45,0)+arrow(20,45,Math.PI); }
    else if(rel==='line segment'||rel==='segment'){ inner=seg(30,45,180,45)+dot(30,45)+dot(180,45); }
    else if(rel==='ray'){ inner=seg(30,45,190,45)+dot(30,45)+arrow(190,45,0); }
    else if(rel==='parallel'||rel==='parallel lines'){ inner=seg(20,30,190,30)+arrow(190,30,0)+arrow(20,30,Math.PI)+seg(20,62,190,62)+arrow(190,62,0)+arrow(20,62,Math.PI); }
    else if(rel==='intersecting'||rel==='intersecting lines'){ inner=seg(24,22,186,68)+seg(24,68,186,22); }
    else if(rel==='perpendicular'||rel==='perpendicular lines'){ inner=seg(20,66,190,66)+seg(105,14,105,78)+'<path d="M 105 54 L 117 54 L 117 66" fill="none" stroke="'+s+'" stroke-width="1.5"/>'; }
    else if(rel==='congruent'||rel==='congruent segments'||rel==='congruent line segments'){ inner=seg(24,30,120,30)+dot(24,30)+dot(120,30)+tick(72,30,Math.PI/2,1)+seg(70,64,186,64)+dot(70,64)+dot(186,64)+tick(128,64,Math.PI/2,1); }
    else { inner=seg(20,45,190,45)+arrow(190,45,0)+arrow(20,45,Math.PI); }
    return svg([0,0,W,H],inner,'fig-line',210);
  }

  /* ---------------------------------------------------------------- base-ten blocks */
  function drawBase10(f){
    var th=Math.max(0,f.th|0), h=Math.max(0,f.h|0), t=Math.max(0,f.t|0), o=Math.max(0,f.o|0);
    var u=6, gap=14, x=4, maxH=0, groups=[]; var s='currentColor';
    function flat(ox){ var g='<rect x="'+ox+'" y="4" width="'+(10*u)+'" height="'+(10*u)+'" fill="'+ACC+'" fill-opacity="0.18" stroke="'+s+'" stroke-width="1.4"/>'; for(var i=1;i<10;i++){ g+='<line x1="'+(ox+i*u)+'" y1="4" x2="'+(ox+i*u)+'" y2="'+(4+10*u)+'" stroke="'+s+'" stroke-width="0.6"/>'; g+='<line x1="'+ox+'" y1="'+(4+i*u)+'" x2="'+(ox+10*u)+'" y2="'+(4+i*u)+'" stroke="'+s+'" stroke-width="0.6"/>'; } return g; }
    function rod(ox){ var g='<rect x="'+ox+'" y="4" width="'+u+'" height="'+(10*u)+'" fill="'+ACC+'" fill-opacity="0.18" stroke="'+s+'" stroke-width="1.2"/>'; for(var i=1;i<10;i++){ g+='<line x1="'+ox+'" y1="'+(4+i*u)+'" x2="'+(ox+u)+'" y2="'+(4+i*u)+'" stroke="'+s+'" stroke-width="0.6"/>'; } return g; }
    function unit(ox,oy){ return '<rect x="'+ox+'" y="'+oy+'" width="'+u+'" height="'+u+'" fill="'+ACC+'" fill-opacity="0.3" stroke="'+s+'" stroke-width="1"/>'; }
    var cx=x, inner='';
    // thousands cube (draw as a shaded big square with 3D hint) - rarely used
    for(var c=0;c<th;c++){ inner+='<rect x="'+cx+'" y="4" width="'+(10*u)+'" height="'+(10*u)+'" fill="'+ACC+'" fill-opacity="0.3" stroke="'+s+'" stroke-width="1.6"/><line x1="'+cx+'" y1="4" x2="'+(cx+10)+'" y2="-6" stroke="'+s+'" stroke-width="1.2"/>'; cx+=10*u+gap; }
    for(var hh=0;hh<h;hh++){ inner+=flat(cx); cx+=10*u+gap; }
    for(var tt=0;tt<t;tt++){ inner+=rod(cx); cx+=u+5; }
    if(t>0) cx+=gap-5;
    // ones stacked in up-to-5 columns
    var oc=0; var obx=cx; for(var oo=0;oo<o;oo++){ var col=oo%2, row=Math.floor(oo/2); inner+=unit(obx+col*(u+2), 4+row*(u+2)); }
    if(o>0) cx=obx+2*(u+2)+gap;
    var W=Math.max(cx+4, 60), H=4+10*u+8;
    return svg([0,0,W,H],inner,'fig-base10',Math.min(W,340));
  }

  /* ---------------------------------------------------------------- analog clock */
  function drawClock(f){
    var h=((f.h%12)+12)%12, m=((f.m%60)+60)%60, cx=70,cy=70,R=60, s='currentColor', inner='';
    inner+='<circle cx="'+cx+'" cy="'+cy+'" r="'+R+'" fill="none" stroke="'+s+'" stroke-width="2.5"/>';
    for(var i=0;i<12;i++){ var a=i*Math.PI/6; var r1=R-(i%3===0?10:6), r2a=R-2; inner+='<line x1="'+r2(cx+r1*Math.sin(a))+'" y1="'+r2(cy-r1*Math.cos(a))+'" x2="'+r2(cx+r2a*Math.sin(a))+'" y2="'+r2(cy-r2a*Math.cos(a))+'" stroke="'+s+'" stroke-width="'+(i%3===0?2:1)+'"/>'; }
    [12,3,6,9].forEach(function(num){ var a=(num%12)*Math.PI/6, rr=R-20; inner+='<text x="'+r2(cx+rr*Math.sin(a))+'" y="'+r2(cy-rr*Math.cos(a)+5)+'" text-anchor="middle" fill="'+s+'" font-size="13" font-weight="600">'+num+'</text>'; });
    var ha=(h+m/60)*Math.PI/6, ma=m*Math.PI/30;
    inner+='<line x1="'+cx+'" y1="'+cy+'" x2="'+r2(cx+R*0.5*Math.sin(ha))+'" y2="'+r2(cy-R*0.5*Math.cos(ha))+'" stroke="'+s+'" stroke-width="3.5" stroke-linecap="round"/>';
    inner+='<line x1="'+cx+'" y1="'+cy+'" x2="'+r2(cx+R*0.78*Math.sin(ma))+'" y2="'+r2(cy-R*0.78*Math.cos(ma))+'" stroke="'+s+'" stroke-width="2.3" stroke-linecap="round"/>';
    inner+='<circle cx="'+cx+'" cy="'+cy+'" r="3.5" fill="'+s+'"/>';
    var H=140;
    if(f.period){ var p=String(f.period).toUpperCase(); H=160; inner+='<rect x="'+(cx-22)+'" y="142" width="44" height="16" rx="8" fill="'+ACC+'" fill-opacity="0.18" stroke="'+s+'" stroke-width="1"/><text x="'+cx+'" y="154" text-anchor="middle" fill="'+s+'" font-size="12" font-weight="700">'+esc(p)+'</text>'; }
    return svg([0,0,140,H],inner,'fig-clock',150);
  }

  /* ---------------------------------------------------------------- thermometer */
  function drawThermo(f){
    var val=+f.value, unit=f.unit||'C', min=(f.min!=null?f.min:0), max=(f.max!=null?f.max:50), step=f.step||10, s='currentColor';
    if(f.digital){
      var W=150,H=78;
      var inner='<rect x="6" y="6" width="138" height="66" rx="10" fill="'+ACC+'" fill-opacity="0.12" stroke="'+s+'" stroke-width="2"/>'+
        '<text x="75" y="50" text-anchor="middle" fill="'+s+'" font-size="30" font-weight="700" font-family="monospace">'+esc((Math.round(val*10)/10)+'')+'&#176;'+esc(unit)+'</text>';
      return svg([0,0,W,H],inner,'fig-thermo-d',170);
    }
    var W=120,H=240, tx=44, top=16, bot=200, bulbR=16, tubeW=14;
    if(max<=min) max=min+1; var frac=Math.max(0,Math.min(1,(val-min)/(max-min)));
    var fillY=bot-frac*(bot-top);
    var inner='';
    inner+='<rect x="'+(tx-tubeW/2)+'" y="'+top+'" width="'+tubeW+'" height="'+(bot-top)+'" rx="'+(tubeW/2)+'" fill="none" stroke="'+s+'" stroke-width="2"/>';
    inner+='<circle cx="'+tx+'" cy="'+(bot+bulbR-2)+'" r="'+bulbR+'" fill="'+ACC+'" stroke="'+s+'" stroke-width="2"/>';
    inner+='<rect x="'+(tx-tubeW/2+3)+'" y="'+r2(fillY)+'" width="'+(tubeW-6)+'" height="'+r2(bot-fillY)+'" fill="'+ACC+'"/>';
    inner+='<line x1="'+tx+'" y1="'+r2(fillY)+'" x2="'+tx+'" y2="'+(bot+bulbR-2)+'" stroke="'+ACC+'" stroke-width="'+(tubeW-6)+'"/>';
    var n=Math.round((max-min)/step);
    for(var i=0;i<=n;i++){ var v=min+i*step, y=bot-(i/n)*(bot-top); inner+='<line x1="'+(tx+tubeW/2)+'" y1="'+r2(y)+'" x2="'+(tx+tubeW/2+7)+'" y2="'+r2(y)+'" stroke="'+s+'" stroke-width="1.4"/><text x="'+(tx+tubeW/2+11)+'" y="'+r2(y+4)+'" fill="'+s+'" font-size="11">'+v+'</text>'; }
    inner+='<text x="'+(tx+tubeW/2+30)+'" y="'+(top+6)+'" fill="'+s+'" font-size="11">&#176;'+esc(unit)+'</text>';
    return svg([0,0,W,H],inner,'fig-thermo',120);
  }

  /* ---------------------------------------------------------------- calendar (HTML table) */
  var MONTHS=['January','February','March','April','May','June','July','August','September','October','November','December'];
  function drawCalendar(f){
    var days=f.days|0, first=((f.firstDow|0)%7+7)%7, hl=f.highlight||[];
    var title=(f.month||'')+(f.year?(' '+f.year):'');
    var dow=['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
    var html='<div class="fig-cal"><div class="fig-cal-t">'+esc(title)+'</div><table><thead><tr>';
    dow.forEach(function(d){ html+='<th>'+d+'</th>'; }); html+='</tr></thead><tbody><tr>';
    var cell=0,i;
    for(i=0;i<first;i++){ html+='<td></td>'; cell++; }
    for(var d=1;d<=days;d++){ if(cell%7===0&&cell>0) html+='</tr><tr>'; var on=hl.indexOf(d)>=0; html+='<td'+(on?' class="hl"':'')+'>'+d+'</td>'; cell++; }
    while(cell%7!==0){ html+='<td></td>'; cell++; }
    html+='</tr></tbody></table></div>';
    return html;
  }

  /* ---------------------------------------------------------------- dispatch */
  function renderFig(f){
    if(!f||typeof f!=='object') return '';
    try{
      switch(String(f.kind||'').toLowerCase()){
        case 'count': return drawCount(f);
        case 'bundle': return drawBundle(f);
        case 'segments': return drawSegments(f);
        case 'fraction': return drawFraction(f);
        case 'shape': return drawShapeNamed(f.name);
        case 'polygon': return drawPolygon(f);
        case 'solid': return drawSolid(f);
        case 'angle': return drawAngle(f);
        case 'line': return drawLine(f);
        case 'base10': return drawBase10(f);
        case 'clock': return drawClock(f);
        case 'thermo': case 'thermometer': return drawThermo(f);
        case 'calendar': return drawCalendar(f);
        default: return '';
      }
    }catch(e){ return ''; }
  }
  // the value a spec implies, for generator-side faithfulness cross-check (null if not derivable)
  // Optional q: a fraction figure answers "what fraction is shaded" with shaded/total,
  // but the same figure answers "write the numerator" with just the numerator.
  function figAnswer(f, q){
    if(!f) return null;
    switch(String(f.kind||'').toLowerCase()){
      case 'count': if(Array.isArray(f.groups)&&f.groups.length){ var ns=f.groups.map(function(g){return g.n|0;}); return String(f.op==='-'?ns.slice(1).reduce(function(s,x){return s-x;},ns[0]):ns.reduce(function(s,x){return s+x;},0)); } return String((f.n|0)-(f.strike|0));
      case 'bundle': return String((f.units||[]).reduce(function(s,u){return s+(u.value|0)*(u.count|0);},0));
      case 'fraction': var ql=String(q==null?'':q).toLowerCase();
        if(/\bnumerator\b/.test(ql))   return String(f.shaded|0);
        if(/\bdenominator\b/.test(ql)) return String(f.total|0);
        return (f.shaded|0)+'/'+(f.total|0);
      case 'base10': return String((f.th|0)*1000+(f.h|0)*100+(f.t|0)*10+(f.o|0));
      default: return null;
    }
  }
  global.renderFig=renderFig;
  global.figAnswer=figAnswer;
  global.FIG_ICONS=ICON;
})(typeof window!=='undefined'?window:this);
