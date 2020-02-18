// @media (max-width:) {...}
// @media (max-width:768px) {...}
// @media (max-width:991px) {...}
// @media (max-width:1119px) {...}


export default {
	up(){

	},
	down(size){
		const sizes ={
			xs : "575.98px",
			sm : "767.98px",
			md : "991.98px",
			lg : "1199.98px"

		}
		return `@media (max-width:${sizes[size]})`
	}
}