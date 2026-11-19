/* ARAL symbolic-algebra engine (salg).
   Grades polynomial / exponent-law / factoring answers by exact math, not string match.
   A VALUE is a rational function {num, den} of multivariate polynomials with rational coefficients;
   equality is cross-multiplication (num1*den2 == num2*den1), so no multivariate gcd is needed.
   Handles: integers/decimals, variables (single letters), + - * / ^ (integer, incl. negative) and parentheses,
   implicit multiplication (3x, xy, (x+1)(x+2)). Reusable in Node and embeddable in the browser. */
(function(root){
var SAFE=9007199254740991;
function gcd(a,b){a=Math.abs(a);b=Math.abs(b);while(b){var t=a%b;a=b;b=t;}return a||1;}
// rational coefficient {n,d}; returns null on overflow so callers can fall back
function F(n,d){ if(d===undefined)d=1; if(d===0)return null; if(!isFinite(n)||!isFinite(d))return null; if(d<0){n=-n;d=-d;} var g=gcd(n,d)||1; n/=g; d/=g; if(Math.abs(n)>SAFE||d>SAFE)return null; return {n:n,d:d}; }
function Fadd(a,b){return (a&&b)?F(a.n*b.d+b.n*a.d,a.d*b.d):null;}
function Fmul(a,b){return (a&&b)?F(a.n*b.n,a.d*b.d):null;}
function Fneg(a){return a?{n:-a.n,d:a.d}:null;}
function Fzero(a){return a&&a.n===0;}
function Feq(a,b){return a&&b&&a.n*b.d===b.n*a.d;}
function parseNum(s){ s=String(s); if(/^\d+$/.test(s))return F(parseInt(s,10),1); var m=s.match(/^(\d*)\.(\d+)$/); if(m){var ip=m[1]||'0',fp=m[2];return F(parseInt(ip+fp,10),Math.pow(10,fp.length));} return null; }

// --- polynomial: map monomialKey -> {c:Frac, e:{var:exp}} ---
function mkey(e){ var ks=[]; for(var v in e){ if(e[v]!==0) ks.push(v); } ks.sort(); return ks.map(function(v){return v+'^'+e[v];}).join('*'); }
function pConst(f){ if(!f||Fzero(f))return {}; return {'':{c:f,e:{}}}; }
function pVar(v){ var e={}; e[v]=1; var p={}; p[mkey(e)]={c:F(1),e:e}; return p; }
function pClean(p){ var o={}; for(var k in p){ if(p[k]&&!Fzero(p[k].c))o[k]=p[k]; } return o; }
function pAddTerm(p,c,e){ if(!c||Fzero(c))return p; var k=mkey(e); if(p[k]){ var nc=Fadd(p[k].c,c); if(!nc){p.__bad=1;return p;} if(Fzero(nc))delete p[k]; else p[k]={c:nc,e:p[k].e}; } else p[k]={c:c,e:e}; return p; }
function pAdd(a,b){ if(!a||!b||a.__bad||b.__bad)return {__bad:1}; var p={}; for(var k in a)if(k!=='__bad')pAddTerm(p,a[k].c,a[k].e); for(var j in b)if(j!=='__bad')pAddTerm(p,b[j].c,b[j].e); return p.__bad?{__bad:1}:p; }
function pNeg(a){ if(!a||a.__bad)return {__bad:1}; var p={}; for(var k in a)if(k!=='__bad')p[k]={c:Fneg(a[k].c),e:a[k].e}; return p; }
function pMul(a,b){ if(!a||!b||a.__bad||b.__bad)return {__bad:1}; var p={}; for(var ka in a){ if(ka==='__bad')continue; for(var kb in b){ if(kb==='__bad')continue; var c=Fmul(a[ka].c,b[kb].c); if(!c)return {__bad:1}; var e={},v; for(v in a[ka].e)e[v]=(e[v]||0)+a[ka].e[v]; for(v in b[kb].e)e[v]=(e[v]||0)+b[kb].e[v]; pAddTerm(p,c,e); if(p.__bad)return {__bad:1}; } } return p; }
function pPow(a,k){ if(k<0)return {__bad:1}; var r=pConst(F(1)); for(var i=0;i<k;i++){ r=pMul(r,a); if(r.__bad)return {__bad:1}; } return r; }
function pIsZero(p){ if(!p||p.__bad)return false; for(var k in p){ if(k!=='__bad'&&!Fzero(p[k].c))return false; } return true; }
function pConstVal(p){ if(!p||p.__bad)return null; var ks=[]; for(var k in p){ if(k!=='__bad'&&!Fzero(p[k].c))ks.push(k); } if(ks.length===0)return F(0); if(ks.length===1&&ks[0]==='')return p[''].c; return null; }
function pEq(a,b){ a=pClean(a); b=pClean(b); var ka=Object.keys(a).filter(function(k){return k!=='__bad';}), kb=Object.keys(b).filter(function(k){return k!=='__bad';}); if(ka.length!==kb.length)return false; for(var i=0;i<ka.length;i++){ if(!b[ka[i]]||!Feq(a[ka[i]].c,b[ka[i]].c))return false; } return true; }

// --- value: {num:poly, den:poly} ---
function vC(f){ return {num:pConst(f),den:pConst(F(1))}; }
function vV(v){ return {num:pVar(v),den:pConst(F(1))}; }
function bad(x){ return !x||x.num.__bad||x.den.__bad; }
function vAdd(x,y){ if(bad(x)||bad(y))return null; return {num:pAdd(pMul(x.num,y.den),pMul(y.num,x.den)),den:pMul(x.den,y.den)}; }
function vNeg(x){ if(bad(x))return null; return {num:pNeg(x.num),den:x.den}; }
function vSub(x,y){ var ny=vNeg(y); return ny?vAdd(x,ny):null; }
function vMul(x,y){ if(bad(x)||bad(y))return null; return {num:pMul(x.num,y.num),den:pMul(x.den,y.den)}; }
function vDiv(x,y){ if(bad(x)||bad(y)||pIsZero(y.num))return null; return {num:pMul(x.num,y.den),den:pMul(x.den,y.num)}; }
function vPow(x,k){ if(bad(x))return null; if(k>=0)return {num:pPow(x.num,k),den:pPow(x.den,k)}; return {num:pPow(x.den,-k),den:pPow(x.num,-k)}; }
function vInt(x){ if(bad(x))return null; var dv=pConstVal(x.den); if(!dv||!Feq(dv,F(1)))return null; if(pIsZero(x.num))return 0; var nv=pConstVal(x.num); if(!nv||nv.d!==1)return null; return nv.n; }

// --- tokenize (with implicit multiplication) ---
function tokenize(s){ s=String(s).replace(/×/g,'*').replace(/÷/g,'/').replace(/−/g,'-').replace(/·/g,'*'); if(!s.trim())return null;
  var toks=[],i=0,n=s.length;   // NOTE: whitespace is NOT stripped - a space between values is implicit multiplication (e.g. "z^0 4z^2" = z^0 * 4z^2), so numbers must not merge across it
  while(i<n){ var c=s[i];
    if(c===' '||c==='\t'||c==='\n'){ i++; continue; }
    if(/[0-9.]/.test(c)){ var m=/^[0-9]*\.[0-9]+|^[0-9]+/.exec(s.slice(i)); if(!m)return null; toks.push({t:'num',v:m[0]}); i+=m[0].length; continue; }
    if(/[a-zA-Z]/.test(c)){ toks.push({t:'var',v:c}); i++; continue; }
    if('+-*/^()'.indexOf(c)>=0){ toks.push({t:c}); i++; continue; }
    return null; }
  var out=[];
  for(var j=0;j<toks.length;j++){ out.push(toks[j]); var a=toks[j],b=toks[j+1]; if(!b)continue;
    var aEnd=(a.t==='num'||a.t==='var'||a.t===')'); var bStart=(b.t==='num'||b.t==='var'||b.t==='('); if(aEnd&&bStart)out.push({t:'*'}); }
  return out;
}
function parse(str){ var toks=tokenize(str); if(!toks||!toks.length)return null; var p=0;
  function peek(){return toks[p];} function eat(){return toks[p++];}
  function pExpr(){ var a=pTerm(); if(!a)return null; while(peek()&&(peek().t==='+'||peek().t==='-')){ var op=eat().t; var b=pTerm(); if(!b)return null; a=(op==='+')?vAdd(a,b):vSub(a,b); if(!a)return null; } return a; }
  function pTerm(){ var a=pFactor(); if(!a)return null; while(peek()&&(peek().t==='*'||peek().t==='/')){ var op=eat().t; var b=pFactor(); if(!b)return null; a=(op==='*')?vMul(a,b):vDiv(a,b); if(!a)return null; } return a; }
  function pFactor(){ if(peek()&&peek().t==='-'){ eat(); var u=pFactor(); return u?vNeg(u):null; } if(peek()&&peek().t==='+'){ eat(); return pFactor(); }
    var base=pBase(); if(!base)return null;
    if(peek()&&peek().t==='^'){ eat(); var exp=pFactor(); if(!exp)return null; var k=vInt(exp); if(k===null)return null; return vPow(base,k); } return base; }
  function pBase(){ var tk=peek(); if(!tk)return null;
    if(tk.t==='num'){ eat(); var f=parseNum(tk.v); return f?vC(f):null; }
    if(tk.t==='var'){ eat(); return vV(tk.v); }
    if(tk.t==='('){ eat(); var e=pExpr(); if(!e)return null; if(!peek()||peek().t!==')')return null; eat(); return e; } return null; }
  var r=pExpr(); if(!r||p!==toks.length||bad(r))return null; return r; }

function equal(s1,s2){ var a=parse(s1),b=parse(s2); if(!a||!b)return null; if(pIsZero(a.den)||pIsZero(b.den))return null; var lhs=pMul(a.num,b.den),rhs=pMul(b.num,a.den); if(lhs.__bad||rhs.__bad)return null; return pEq(lhs,rhs); }
// is the string a factored form: a single product term containing a genuine polynomial factor (not an expanded sum)?
function isProductForm(str){ var toks=tokenize(str); if(!toks)return false; var depth=0,prev=null,i,t;
  for(i=0;i<toks.length;i++){ t=toks[i]; if(t.t==='(')depth++; else if(t.t===')')depth--; else if((t.t==='+'||t.t==='-')&&depth===0&&prev&&(prev.t==='num'||prev.t==='var'||prev.t===')'))return false; prev=t; }
  depth=0; for(i=0;i<toks.length;i++){ t=toks[i]; if(t.t==='(')depth++; else if(t.t===')')depth--; else if((t.t==='+'||t.t==='-')&&depth>=1){ var pv=toks[i-1]; if(pv&&(pv.t==='num'||pv.t==='var'||pv.t===')'))return true; } } return false; }

// --- equation equivalence + substitution (for solve/evaluate/inequality items) ---
function Fpow(a,k){ var r=F(1); if(k>=0){ for(var i=0;i<k;i++){ r=Fmul(r,a); if(!r)return null; } } else { var inv=F(a.d,a.n); if(!inv)return null; for(var j=0;j<-k;j++){ r=Fmul(r,inv); if(!r)return null; } } return r; }
function polyOf(v){ if(bad(v))return null; var dc=pConstVal(v.den); if(dc===null||Fzero(dc))return null; var inv=F(dc.d,dc.n); if(!inv)return null; var p={}; for(var k in v.num){ if(k==='__bad')continue; var c=Fmul(v.num[k].c,inv); if(!c)return null; if(!Fzero(c))p[k]={c:c,e:v.num[k].e}; } return p; }
function proportional(P1,P2){ P1=pClean(P1); P2=pClean(P2); var k1=Object.keys(P1),k2=Object.keys(P2); if(k2.length===0)return k1.length===0; if(k1.length!==k2.length)return false; var kk=k2[0]; if(!P1[kk])return false; var k=F(P1[kk].c.n*P2[kk].c.d,P1[kk].c.d*P2[kk].c.n); if(!k||Fzero(k))return false; for(var i=0;i<k2.length;i++){ var key=k2[i]; if(!P1[key])return false; var kc=Fmul(k,P2[key].c); if(!Feq(P1[key].c,kc))return false; } return true; }
function eqEquiv(e1,e2){ var s1=String(e1).split('='),s2=String(e2).split('='); if(s1.length!==2||s2.length!==2)return null; var a0=parse(s1[0]),a1=parse(s1[1]),b0=parse(s2[0]),b1=parse(s2[1]); if(!a0||!a1||!b0||!b1)return null; var d1=vSub(a0,a1),d2=vSub(b0,b1); if(!d1||!d2)return null; var P1=polyOf(d1),P2=polyOf(d2); if(!P1||!P2)return null; return proportional(P1,P2); }
function numVal(s){ var f=parseMixed(s); if(f)return f; var v=parse(s); if(!v)return null; var dv=pConstVal(v.den),nv=pConstVal(v.num); if(dv===null||nv===null||Fzero(dv))return null; return F(nv.n*dv.d,nv.d*dv.n); }
function parseMixed(s){ s=String(s==null?'':s).trim().replace(/,/g,''); var m=s.match(/^(-?)(\d+)\s+(\d+)\/(\d+)$/); if(m){ var sg=m[1]==='-'?-1:1,w=+m[2],n=+m[3],d=+m[4]; if(!d)return null; return F(sg*(w*d+n),d); } return null; }
function substEval(expr,vals){ var v=parse(expr); if(!v)return null; function sp(p){ var acc=F(0); for(var k in p){ if(k==='__bad')continue; var c=p[k].c; for(var vv in p[k].e){ if(p[k].e[vv]===0)continue; var val=vals[vv]; if(!val)return null; var pw=Fpow(val,p[k].e[vv]); if(!pw)return null; c=Fmul(c,pw); if(!c)return null; } acc=Fadd(acc,c); if(!acc)return null; } return acc; } var nn=sp(v.num),dd=sp(v.den); if(nn==null||dd==null||Fzero(dd))return null; return F(nn.n*dd.d,nn.d*dd.n); }
function Fcmp(a,b){ var x=a.n*b.d-b.n*a.d; return x<0?-1:(x>0?1:0); }

// --- render a value to a clean, re-parseable canonical string (engine-authoritative answers) ---
function degOf(e){ var s=0; for(var v in e)s+=e[v]; return s; }
function monStr(e){ var vs=[]; for(var v in e){ if(e[v]>0)vs.push(e[v]===1?v:v+'^'+e[v]); } vs.sort(); return vs.join(''); }
function renderPoly(p){ var terms=[]; for(var k in p){ if(k==='__bad')continue; if(Fzero(p[k].c))continue; terms.push({k:k,c:p[k].c,e:p[k].e}); }
  if(!terms.length)return '0';
  terms.sort(function(a,b){ var da=degOf(a.e),db=degOf(b.e); if(da!==db)return db-da; return a.k<b.k?-1:1; });
  var out='';
  terms.forEach(function(t,i){ var ms=monStr(t.e); var neg=t.c.n<0; var ac={n:Math.abs(t.c.n),d:t.c.d};
    var coef = (ac.d===1)?(ac.n===1&&ms?'':String(ac.n)):'('+ac.n+'/'+ac.d+')';
    var body = ms?(coef+ms):(ac.d===1?String(ac.n):'('+ac.n+'/'+ac.d+')');
    if(i===0) out += (neg?'-':'')+body; else out += (neg?' - ':' + ')+body; });
  return out; }
function scalePoly(p,f){ var o={}; for(var k in p){ if(k==='__bad')continue; var c=Fmul(p[k].c,f); if(!c)return null; if(!Fzero(c))o[k]={c:c,e:p[k].e}; } return o; }
function terms(p){ var a=[]; for(var k in p){ if(k==='__bad')continue; if(!Fzero(p[k].c))a.push(p[k]); } return a; }
function renderRatMono(coef, exps){ var sign=coef.n<0?'-':''; var cn=Math.abs(coef.n), cd=coef.d; var numV=[],denV=[]; var vs=Object.keys(exps).sort();
  vs.forEach(function(v){ var e=exps[v]; if(e>0)numV.push(e===1?v:v+'^'+e); else if(e<0)denV.push(e===-1?v:v+'^'+(-e)); });
  var numS = numV.length ? ((cn===1?'':String(cn))+numV.join('')) : String(cn);
  if(denV.length===0 && cd===1) return sign+numS;
  var denS = (cd===1?'':String(cd))+denV.join(''); if(denS==='')denS='1';
  var denFactors = denV.length + (cd!==1?1:0); var d = denFactors>1?'('+denS+')':denS;
  return sign+numS+'/'+d; }
function render(v){ if(bad(v))return null; var dc=pConstVal(v.den);
  if(dc!==null){ if(Fzero(dc))return null; var np=scalePoly(v.num,F(dc.d,dc.n)); if(!np)return null; return renderPoly(np); }
  var nt=terms(v.num), dt=terms(v.den);
  if(nt.length===0) return '0';
  if(nt.length===1 && dt.length===1){ var coef=F(nt[0].c.n*dt[0].c.d, nt[0].c.d*dt[0].c.n); if(!coef)return null; var exps={},v2; for(v2 in nt[0].e)exps[v2]=(exps[v2]||0)+nt[0].e[v2]; for(v2 in dt[0].e)exps[v2]=(exps[v2]||0)-dt[0].e[v2]; return renderRatMono(coef,exps); }
  var ns=renderPoly(v.num), ds=renderPoly(v.den); if(ns==null||ds==null)return null;
  return '('+ns+')/('+ds+')'; }
function simplify(str){ var v=parse(str); if(!v)return null; return render(v); }
// solve a linear equation lhs=rhs for the single variable `vn`; returns the solution Frac or null
function linSolve(lhs,rhs,vn){ var a0=parse(lhs),a1=parse(rhs); if(!a0||!a1)return null; var d=vSub(a0,a1); if(!d)return null; var P=polyOf(d); if(!P)return null; var m=F(0),c=F(0),okk=true;
  for(var k in P){ if(k==='__bad')continue; var e=P[k].e||{}; var vs=[]; for(var v in e){ if(e[v]!==0)vs.push(v); }
    if(vs.length===0){ c=P[k].c; } else if(vs.length===1&&vs[0]===vn&&e[vn]===1){ m=P[k].c; } else { okk=false; } }
  if(!okk||Fzero(m))return null; return F(-c.n*m.d, c.d*m.n); }

var API={parse:parse,equal:equal,isProductForm:isProductForm,eqEquiv:eqEquiv,numVal:numVal,substEval:substEval,render:render,simplify:simplify,linSolve:linSolve,F:F,Feq:Feq,Fcmp:Fcmp};
if(typeof module!=='undefined'&&module.exports)module.exports=API; else root.SALG=API;
})(typeof self!=='undefined'?self:this);
