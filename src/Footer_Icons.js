function Footer_Icons(probs){
    return(
        <div class="footer_icons inline">
           <a class="footer_icon" href={probs.href}>
                <img src={probs.img} width="20px" alt={probs.alt}/>
            </a>
        </div> 
    );
}

export default Footer_Icons;

