

function Detailss({title, content,ddirection}){
    return(
        
        <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', margin:'10px 0px 10px'}}>
            <h1 className="details"  style={{textAlign:'center', fontSize:'12px',padding:'5px'}}> {title}</h1>

            <div className="box" style={{backgroundColor:'white', width:'50px', height:'50px', borderRadius:'10px',display:'flex', justifyContent:'center', alignItems:'center', }} onClick={direction}>

            <p className="boxtext" style={{textAlign:'center', padding:'auto', fontSize:'15px',textTransform:'capitalize',fontWeight:'bolder',padding:'5px'}}>{content}</p>
            </div>
            
        </div>
    )
}

export default Detailss;