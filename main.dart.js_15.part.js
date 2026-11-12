((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var A,C,B={
aEi(d,e){return new B.Tp(e,d,null)},
Tp:function Tp(d,e,f){this.w=d
this.x=e
this.a=f},
amo:function amo(d,e,f){this.a=d
this.b=e
this.c=f},
yQ:function yQ(d,e,f,g,h){var _=this
_.e=d
_.f=e
_.r=f
_.c=g
_.a=h},
a0L:function a0L(d,e){var _=this
_.c=_.b=_.a=_.CW=_.ay=_.p1=null
_.d=$
_.e=d
_.r=_.f=null
_.w=e
_.z=_.y=null
_.Q=!1
_.as=!0
_.at=!1},
Je:function Je(d,e,f,g,h,i,j){var _=this
_.q=d
_.O=e
_.R=f
_.a5=g
_.v$=h
_.dy=i
_.b=_.fy=null
_.c=0
_.y=_.d=null
_.z=!0
_.Q=null
_.as=!1
_.at=null
_.ay=$
_.ch=j
_.CW=!1
_.cx=$
_.cy=!0
_.db=!1
_.dx=$},
awZ:function awZ(d,e){this.a=d
this.b=e},
awY:function awY(d){this.a=d},
La:function La(){},
a3i:function a3i(){},
a3j:function a3j(){}}
A=c[0]
C=c[2]
B=a.updateHolder(c[13],B)
B.Tp.prototype={
E(d){var x,w,v,u=null,t={},s=A.aNW(d,C.ap,!1)
t.a=this.x
x=A.aK_(d,C.ap)
w=x?A.RA(d):u
v=A.aEe(s,C.a7,w,C.am,!1,C.aM,u,this.w,u,u,u,new B.amo(t,this,s))
A.oW(d)
return x&&w!=null?A.aJZ(v):v}}
B.yQ.prototype={
aH(d){var x=new B.Je(this.e,this.f,this.r,A.af(),null,new A.aM(),A.af())
x.aF()
x.saW(null)
return x},
aO(d,e){var x
e.shc(this.e)
e.siz(this.f)
x=this.r
if(x!==e.R){e.R=x
e.au()
e.b6()}},
c2(){return new B.a0L(this,C.a6)}}
B.a0L.prototype={}
B.Je.prototype={
shc(d){if(d===this.q)return
this.q=d
this.a6()},
siz(d){var x=this,w=x.O
if(d===w)return
if(x.y!=null)w.K(x.gxX())
x.O=d
if(x.y!=null)d.W(x.gxX())
x.a6()},
aed(){this.au()
this.b6()},
ev(d){if(!(d.b instanceof A.cF))d.b=new A.cF()},
an(d){this.a5E(d)
this.O.W(this.gxX())},
af(){this.O.K(this.gxX())
this.a5F()},
geD(){return!0},
gaj2(){switch(A.bc(this.q).a){case 0:var x=this.gt().a
break
case 1:x=this.gt().b
break
default:x=null}return x},
gy8(){var x=this,w=x.v$
if(w==null)return 0
switch(A.bc(x.q).a){case 0:w=w.gt().a-x.gt().a
break
case 1:w=w.gt().b-x.gt().b
break
default:w=null}return Math.max(0,A.ir(w))},
Pz(d){var x
switch(A.bc(this.q).a){case 0:x=new A.ag(0,1/0,d.c,d.d)
break
case 1:x=new A.ag(d.a,d.b,0,1/0)
break
default:x=null}return x},
bg(d){var x=this.v$
x=x==null?null:x.ae(C.aR,d,x.gbQ())
return x==null?0:x},
bc(d){var x=this.v$
x=x==null?null:x.ae(C.ak,d,x.gbs())
return x==null?0:x},
bf(d){var x=this.v$
x=x==null?null:x.ae(C.aS,d,x.gbP())
return x==null?0:x},
be(d){var x=this.v$
x=x==null?null:x.ae(C.at,d,x.gbF())
return x==null?0:x},
cf(d){var x=this.v$
if(x==null)return new A.B(A.A(0,d.a,d.b),A.A(0,d.c,d.d))
return d.bh(x.ae(C.E,this.Pz(d),x.gc0()))},
bA(){var x,w,v=this,u=y.a.a(A.v.prototype.gZ.call(v)),t=v.v$
if(t==null)v.fy=new A.B(A.A(0,u.a,u.b),A.A(0,u.c,u.d))
else{t.c4(v.Pz(u),!0)
v.fy=u.bh(v.v$.gt())}t=v.O.at
if(t!=null)if(t>v.gy8()){t=v.O
x=v.gy8()
w=v.O.at
w.toString
t.HU(x-w)}else{t=v.O
x=t.at
x.toString
if(x<0)t.HU(0-x)}v.O.uM(v.gaj2())
v.O.qC(0,v.gy8())},
ui(d){var x,w=this
switch(w.q.a){case 0:x=new A.h(0,d-w.v$.gt().b+w.gt().b)
break
case 3:x=new A.h(d-w.v$.gt().a+w.gt().a,0)
break
case 1:x=new A.h(-d,0)
break
case 2:x=new A.h(0,-d)
break
default:x=null}return x},
SV(d){var x,w,v=this
switch(v.R.a){case 0:return!1
case 1:case 2:case 3:x=d.a
if(!(x<0)){w=d.b
x=w<0||x+v.v$.gt().a>v.gt().a||w+v.v$.gt().b>v.gt().b}else x=!0
return x}},
aE(d,e){var x,w,v,u,t,s=this
if(s.v$!=null){x=s.O.at
x.toString
w=s.ui(x)
x=new B.awZ(s,w)
v=s.a5
if(s.SV(w)){u=s.cx
u===$&&A.a()
t=s.gt()
v.sam(d.kX(u,e,new A.r(0,0,0+t.a,0+t.b),x,s.R,v.a))}else{v.sam(null)
x.$2(d,e)}}},
l(){this.a5.sam(null)
this.e4()},
cW(d,e){var x,w=this.O.at
w.toString
x=this.ui(w)
e.d1(x.a,x.b,0,1)},
n6(d){var x=this,w=x.O.at
w.toString
w=x.SV(x.ui(w))
if(w){w=x.gt()
return new A.r(0,0,0+w.a,0+w.b)}return null},
cC(d,e){var x,w=this
if(w.v$!=null){x=w.O.at
x.toString
return d.ks(new B.awY(w),w.ui(x),e)}return!1},
pF(d,e,f,g){var x,w,v,u,t,s,r,q,p,o,n=this,m=null
A.bc(n.q)
if(g==null)g=d.gkV()
if(!(d instanceof A.w)){x=n.O.at
x.toString
return new A.oU(x,g)}w=A.dc(d.aS(n.v$),g)
v=n.v$.gt()
switch(n.q.a){case 0:x=w.d
x=new A.h7(n.gt().b,v.b-x,x-w.b)
break
case 3:x=w.c
x=new A.h7(n.gt().a,v.a-x,x-w.a)
break
case 1:x=w.a
x=new A.h7(n.gt().a,x,w.c-x)
break
case 2:x=w.b
x=new A.h7(n.gt().b,x,w.d-x)
break
default:x=m}u=x.a
t=m
s=m
r=x.b
q=x.c
s=q
t=r
p=u
o=t-(p-s)*e
return new A.oU(o,w.dg(n.ui(o)))},
CC(d,e,f){return this.pF(d,e,null,f)},
eK(d,e,f,g){var x=this
if(!x.O.r.gmW())return x.xd(d,e,f,g)
x.xd(d,null,f,A.aKp(d,e,f,x.O,g,x))},
tf(){return this.eK(C.b7,null,C.x,null)},
nU(d){return this.eK(C.b7,null,C.x,d)},
pO(d,e,f){return this.eK(d,null,e,f)},
nV(d,e){return this.eK(C.b7,d,C.x,e)},
I9(d){var x,w,v=this,u=v.gy8(),t=v.O.at
t.toString
x=u-t
switch(v.q.a){case 0:v.gt()
v.gt()
u=v.gt()
t=v.gt()
w=v.O.at
w.toString
return new A.r(0,0-x,0+u.a,0+t.b+w)
case 1:v.gt()
u=v.O.at
u.toString
v.gt()
return new A.r(0-u,0,0+v.gt().a+x,0+v.gt().b)
case 2:v.gt()
v.gt()
u=v.O.at
u.toString
return new A.r(0,0-u,0+v.gt().a,0+v.gt().b+x)
case 3:v.gt()
v.gt()
u=v.gt()
t=v.O.at
t.toString
return new A.r(0-x,0,0+u.a+t,0+v.gt().b)}},
$iE6:1}
B.La.prototype={
an(d){var x
this.du(d)
x=this.v$
if(x!=null)x.an(d)},
af(){this.dv()
var x=this.v$
if(x!=null)x.af()}}
B.a3i.prototype={}
B.a3j.prototype={}
var z=a.updateTypes(["y(y)","yQ(V,im)","~()","~({curve:fB,descendant:v?,duration:aS,rect:r?})"])
B.amo.prototype={
$2(d,e){return new B.yQ(this.c,e,C.a7,this.a.a,null)},
$S:z+1}
B.awZ.prototype={
$2(d,e){var x=this.a.v$
x.toString
d.dq(x,e.T(0,this.b))},
$S:13}
B.awY.prototype={
$2(d,e){return this.a.v$.cv(d,e)},
$S:15};(function aliases(){var x=B.La.prototype
x.a5E=x.an
x.a5F=x.af})();(function installTearOffs(){var x=a._instance_0u,w=a._instance_1u,v=a.installInstanceTearOff
var u
x(u=B.Je.prototype,"gxX","aed",2)
w(u,"gbQ","bg",0)
w(u,"gbs","bc",0)
w(u,"gbP","bf",0)
w(u,"gbF","be",0)
v(u,"gpN",0,0,null,["$4$curve$descendant$duration$rect","$0","$1$rect","$3$curve$duration$rect","$2$descendant$rect"],["eK","tf","nU","pO","nV"],3,0,0)})();(function inheritance(){var x=a.mixinHard,w=a.mixin,v=a.inherit,u=a.inheritMany
v(B.Tp,A.ac)
u(A.jp,[B.amo,B.awZ,B.awY])
v(B.yQ,A.aU)
v(B.a3i,A.x3)
v(B.a3j,B.a3i)
v(B.a0L,B.a3j)
v(B.La,A.w)
v(B.Je,B.La)
x(B.La,A.aG)
w(B.a3i,A.Di)
w(B.a3j,A.UW)})()
A.jc(b.typeUniverse,JSON.parse('{"yQ":{"aU":[],"at":[],"e":[]},"Tp":{"ac":[],"e":[]},"a0L":{"b1":[],"bd":[],"V":[]},"Je":{"w":[],"aG":["w"],"E6":[],"v":[],"ao":[]}}'))
var y={a:A.W("ag")}};
(a=>{a["uDNSRDRkF6GSnRdSaIeIiq9mkTc="]=a.current})($__dart_deferred_initializers__);