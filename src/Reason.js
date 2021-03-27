import Reason_Comment from './Reason_Comment';
import Reason_Card from './Reason_Card';

function Reason() {
    return (
      <div className='section_three'>
      <div style={{ margin: '150px 50px'}}>
        {/* add icons */}
          <h2>Why CREW?</h2>
          <h3>Meet the Talent Hack factor. It’s not just a platform: it’s a partnership.</h3>
          <p>Our benefits extend way beyond the business tools. We’ve built a powerful network in this industry and there are perks to being a part of it.  </p>
          <div style={{display: 'flex'}}>
            <Reason_Card img='' title='Branded CREW' des='Brands big and small come to CREW to find talent to partner with'/>
            <Reason_Card img='' title='' des=''/>
            <Reason_Card img='' title='' des=''/>
          </div>
          {/* add slide buttons */}
          {/* <Reason_Comment img='' title='' des=''/>
          <Reason_Comment img='' title='' des=''/>
          <Reason_Comment img='' title='' des=''/> */}

          <div class="main_btn">GET STARTED</div>
        </div>
      </div>
    );
  }
  
export default Reason;
  