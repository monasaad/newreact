function Reason_Card(probs) {
    return (
      <div style={{width: '215px', height: '150px', backgroundColor: 'black', border: '1px solid red', borderRadius: '10%'}}>
        <div style={{margin:'20px'}}>
            
            <div style={{display:'inline-block', backgroundColor: '#03BFCA', width: '20px', height: '20px', borderRadius: '50%'}}>
                <img src={probs.img}/>
            </div>

            <h3 style={{display:'inline', color: 'white'}}>{probs.title}</h3>
            <p style={{textAlign: 'left'}}>{probs.des}</p>
        </div>
      </div>
    );
  }
  
  export default Reason_Card;
  