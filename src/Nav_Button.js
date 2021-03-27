import Nav_Links from './Nav_Links'
import React,{useState} from 'react'

function Nav_Button() {
    function myFunction() {
        var x = document.getElementById("list");
        // x.style.width = '500px'
        if (x.style.display === "block") {
          x.style.display = "none";
        } else {
          x.style.display = "block";
        }
      }
      function openNav() {
        document.getElementById("list").style.width = "30vw";
        // document.body.style.backgroundColor = "red";

      }
      
      function closeNav() {
        document.getElementById("list").style.width = "0";
        // document.body.style.backgroundColor = "red";

      }
    return (
        <div class="nav_btn">

            <span class="list">
              <img onClick={openNav} src="./images/list.svg" width='20px'/>
            </span>

            <span class="list">
                <div id='list' style={{transition:'0.5s', position: 'fixed', width:'0',height:'100vh', top: '0', right: '0', backgroundColor: 'black'}}>
                    <div style={{marginTop:'200px'}} >
                        <img onClick={closeNav} src='./images/close.svg' width='15px' style={{position: 'absolute', top:'30px', left:'15px'}}/>
                        <a style={{display:'block', padding: '10px'}}>Resources</a>
                        <a style={{display:'block', padding: '10px'}}>Resources</a>
                        <a style={{display:'block', padding: '10px'}}>Resources</a>
                        <Nav_Links style={{display:'block'}} label='hi there'/>
                        <Nav_Links label='hi there'/>
                        
                    </div>
                </div>
            </span>
            <span class="btn">Log in</span>
            <span class="btn blue">Sign up</span>
            {/* <script>
                function myFunction() {
                document.getElementById("list").style.display==='none' }
            </script> */}
        </div>
    );
  }

// class Page extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = {showWarning: true}
//       this.handleToggleClick = this.handleToggleClick.bind(this);
//     }
  
//     handleToggleClick() {
//       this.setState(prevState => ({
//         showWarning: !prevState.showWarning
//       }));
//     }
  
//     render() {
//       return (
//         <div>
//           <WarningBanner warn={this.state.showWarning} />
//           <button onClick={this.handleToggleClick}>
//             {this.state.showWarning ? 'Hide' : 'Show'}
//           </button>
//         </div>
//       );
//     }
//   }
  
//   ReactDOM.render(
//     <Page />,
//     document.getElementById('root')
//   );

  export default Nav_Button;
  