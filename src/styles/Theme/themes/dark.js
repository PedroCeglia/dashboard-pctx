// Dark Thema
const darkBackgroundColor = [
    "#000000",
    "#22263b",
    "#50547c",
    "#8888c6",
    "#cac3ff",
]
const darkColor = [
    "#F6F7F7", // Light 
    "#333333",  // Dark
    "#ffffff", // White
    "#000000"  // Black

]
const darkTheme = {
    type:"dark",
    backgroundColor:darkBackgroundColor,
    color:darkColor,
    getDarkColorRGBA:(opacityField)=>{
        return `rgba(48,48,48,${opacityField})`
    },
    getLightColorRGBA:(opacityField)=>{
        return `rgba(245,245,245,${opacityField})`
    }
}
export default darkTheme
