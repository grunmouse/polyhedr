const {Vector3} = require('@grunouse/math-vector');

const subtrace = (fun)=>(a, b)=>(fun(a) - fun(b));

const combine = (f, g)=>(x)=>(g(f(x)));

function convex3d(points){
	const alias = Array.form(points, (_, i)=>(i));
	
	alias.sort((a,b)=>(points[a].z - points[b].z);
	const first = alias.shift();
	
	const zAngle = (i)=>(points[i].sub(points[first]).theta());
	
	alias.sort(subtrace(zAngle));
	
	const two = alias.shift();
	
	const eNormal = (vFirstEdge)=>(i)=>(Math.abs(points[i].sub(points[first]).cross(vFirstEdge)))
	const vFirstEdge = points[two].sub(points(first));
	
	const znAngle = combine(eNormal(vFirstEdge), (p)=>Math.abs(p.theta));
	
	alias.sort(subtrace(znAngle));
	
	const three = alias.pop();
	
	const firstFace = [first, two, three];
}