import React, { Component } from 'react'

export class SensitiveData extends Component {

 

  constructor(props) {
    super(props);

    
    
    
    this.state = {  
                name :'',
                dob : '',
                identification_no : '',
                email : '',
                phone : '',
                gender : '',
                is_citizen : '',
                plan_detail_id : '',
                is_heavymachineworker : '',
                address_1 : '',
                postcode : '',
                state_id : '',
                   }; 

                }

                  
                async loginToAPI() {
                  let url = 'https://medical-api-uat.learnmyprotection.com/api/v1/login';
                  let response = await fetch(url, {
                      method: 'POST',
                      headers: {
                          Authorization: 'Basic c3RldmVAY3VybGVjLmNvbTo0I3c0N0ptcEVqWmVtSmpA',
                          'Content-Type': 'application/json',
                      }
                  });
          
                  let commits = await response.json();
                          
                  return commits.token
              }

      handleChange = (event) => {
        this.setState({
          
          name: event.target.value,
          dob : event.target.value
        
        });
                }

      handleSubmit = (event) => {

          fetch('https://medical-api-uat.learnmyprotection.com/api/v1/orders', {
            method: 'POST',
            headers: {
              Authorization: 'Basic c3RldmVAY3VybGVjLmNvbTo0I3c0N0ptcEVqWmVtSmpA',
              'Content-Type': 'application/json',
              'x-access-token' : 'accessToken',
          }
          
          })
          body: JSON.stringify(this.state)
          .then(function(response) {
            console.log(response)
            return response.json();
          });
    
        event.preventDefault();
    } 

/* async CreateIndividualOrder() {
let url = 'https://medical-api-uat.learnmyprotection.com/api/v1/orders';
let accessToken = await this.loginToAPI();
let response = await fetch(url, {
method: 'POST',
headers: {
    
    Authorization: 'Basic c3RldmVAY3VybGVjLmNvbTo0I3c0N0ptcEVqWmVtSmpA',
    'Content-Type': 'application/json',
    'x-access-token' : accessToken
}
});

let commits = await response.json();
    
return commits.token
} */

      
    render() {

     let backgroundColor='#FFFFFF';
      
      switch(this.props.index) {
        case 0:
            backgroundColor = '#FFFFFF'
            break;
        case 1:
            backgroundColor = "#FFFFFF"
            break;
        case 2:
            backgroundColor = '#FFFFFF'
            break;
        default:
            backgroundColor= '#FFFFFF'
            break; 
    }

      
        return (

          
           
        <div className={'content-box'}>
        <div className={'left-box'}>
      <form>  
         <div ><center><h2  ><span>Personal Details</span></h2><br/> <br/></center></div>
        
         <table >
         <tr/> <label  >NAME: </label> 
          <td/><input   placeholder="Enter your Full Name" maxlength="80" ></input>
        
          <td/>  <label  >IC NO:</label>
          <td/>  <input  type="text" placeholder="XXXXXX-XX-XXXX" maxlength="14" ></input>
            </table>

            <br />
            
          
          <label  >DATE OF BIRTH:</label> <br/>
          <input type="date" placeholder="Day / Month / Year"  ></input>
          
         
          <br/>
          <br />
          <label  >ADDRESS: </label> <br/>
          <input type="text" placeholder="Address line 1" size="50"></input><br/>
          <br/>
          <input type="text" placeholder="Address line 2" size="50"></input>
          
            <br />
            <br />

          <label  >STATE:</label>
          <select class="sel-input">
                                <option value="">Select a state</option>
                                <option value="1">Johor</option>
                                <option value="2">Kedah</option>
                                <option value="3">Kelantan</option>
                                <option value="4">Melaka</option>
                                <option value="5">Negeri Sembilan</option>
                                <option value="6">Pahang</option>
                                <option value="7">Perak</option>
                                <option value="8">Perlis</option>
                                <option value="9">Pulau Pinang</option>
                                <option value="10">Sabah</option>
                                <option value="11">Sarawak</option>
                                <option value="12">Selangor</option>
                                <option value="13">Terengganu</option>
                                <option value="14">WP Kuala Lumpur</option>
                                <option value="15">WP Labuan</option>
                                <option value="16">WP Putrajaya</option>
            </select>
       


          <label  >POSTCODE:</label>
          <input 
              type="text" placeholder="00000" maxlength="5"></input>

              <br/>
              <br/>

         

       <h4> <span>Payment Information</span></h4> 
<table>
         <tr/> <label className="font-label"  >PAYMENT METHOD:</label>
          <br />
          <td/><select class="sel-input">
                                <option value="">Select payment method</option>
                                <option value="2">Online Banking</option>
                                <option value="3">Credit Card</option>
          </select>
          <br/>
         <td/> <label  >BANK:</label> <br/>
         <td/> <select class="sel-input">
                                <option value="">Select bank</option>
                                <option value="1">AffinOnline</option>
                                <option value="2">Alliance Online</option>
                                <option value="3">AmOnline</option>
                                <option value="4">Bank Islam</option>
                                <option value="5">Bank Rakyat Internet Banking</option>
                                <option value="6">Bank Muamalat</option>
                                <option value="8">CIMB Click</option>
                                <option value="9">Hong Leong Online</option>
                                <option value="10">HSBC</option>
                                <option value="12">Maybank2U</option>
                                <option value="13">Maybank2E</option>
                                <option value="14">OCBC</option>
                                <option value="15">Public Bank</option>
                                <option value="16">RHB Online</option>
                                <option value="17">Standard Chartered Bank</option>
                                <option value="18">UOB</option>
           </select><br></br>
           </table>
        
       

          <h4  ><span>Payment Method</span></h4>

        <table >
         <tr/> <label  >EMAIL ADDRESS:</label><br/>
          
        <td/>  <input type="text" placeholder="youremail@email.com" ></input><br/>
        
         <td/> <label  >CONFIRM EMAIL ADDRESS:</label><br/>
          
         <td/> <input type="text" placeholder="youremail@email.com" ></input>
          <br />

          </table>
         
          <label  >PHONE NO:</label> <br/>
          <input 
              type="text" placeholder="+60 123456789" maxlength="14" ></input>
       
            <br />
            <br />
           
          </form>
          
          </div>
          <div className={'right-box'}>
            <center><h2>Your Plan</h2></center>
            <br/>
            <br/>
            <br/>
            <br/>
            <div ><center><h1>{`eMedic Plan`} </h1></center></div>
            
                    <div className={'plan-info'} style={{fontSize: 13}}>
                        <ul className='plan-description'>
                            <li>
                                <span>
                                    Cover for hospitalisation expenses{" "}
                                    <strong>in Malaysia only,</strong> up to
                                    RM{`XX`}, including surgery, ambulance, ICU and
                                    prescription drugs<br/><br/>
                                </span>
                            </li>
                            <li>
                                Cashless admission to <a href="https://www.axa.com.my/hospital-panel-life" target="_blank">AXA panel hospitals</a><br/><br/>
                            </li>
                            <li>
                                Cover for room and board up to RM250 a day (choose any room type that is available within this budget)
                            </li>
                        </ul> <br/><br/>
                        <div style = {{color:'blue'}}><h4>eMedic Annual Limit</h4></div>
                        <br/>
                        <div style = {{color:'blue'}}><center><h1>RM XX,XXX</h1></center></div>
                </div><br/>
                <center>
                <button className = {'submit-btn'}>Change Plan</button>
                <button className = {'change-btn'}>Submit</button>
                </center>
          </div>
        </div>
        
        
        
       
        );

}
}

export default SensitiveData;
