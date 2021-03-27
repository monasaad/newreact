function Feature(probs) {
    return (
        <div class="figure">

            <div class="img_blue">
                <img width={probs.width} height="25px;" style={{margin:'12px auto'}} src={probs.src} alt={probs.alt}/>
            </div>

            <div style={{display: 'inline-block'}}>
                <h3 class='left_text'>{probs.title}</h3>
                <p class='left_text'>{probs.para}</p>
            </div>

        </div>
    );
  }
  
export default Feature;
  