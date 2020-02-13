export default {
	root :{
		backgroundColor :"blue",
		height : "100vh",
		display : " flex",
		alignItems : "flex-start",
		justifyContent : "center"

	},
	container :{
		width :"50%",
		display :"flex",
		alignItems : "flex-start",
		flesDirection: "column",
		flexWrap  : "wrap"

	},
	nav :{
		display :"flex",
		width :"100%",
		justifyContent :"space-between",
		color: "white",
		allignItems : "center",
		"& a" : {
			color :"white",
			textDecoration :"none",
			alignItems:"center",
			fontSize:"20px",
			marginTop:"20px",
			color :"#718b97"
		}

	},
	palettes:{
		boxSizing :"border-box",
		width :"100%",
		display :"grid",
		gridTemplateColumns :"repeat(3,30%)",
		gridGap : "5%"

	}

}