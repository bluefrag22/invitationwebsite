
function Headertext({header, tagline}) {
    return(
        <section style={{textAlign: 'left', display:'flex', justifyContent:'center', flexDirection:'column', alignItems:'center'}}>

            <h1 style={{color:'#F93EE6', fontSize:'20px', margin: '0px 0pxx 0px 10px', fontFamily:'  font-family: "Poppins", serif;'}}>{header}</h1>

            <p style={{color:'white', fontSize:'13px', margin:'10px 15px 0px 0px'}}> {tagline}</p>
        </section>
    )
}

export default Headertext;