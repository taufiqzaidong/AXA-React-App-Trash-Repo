import React, { Component } from 'react'

export class SensitiveData extends Component {

 

  constructor(props) {
    super(props);
 

                }

                continue = e => {
                  this.props.nextStep();
                };

                back = e => {
                  this.props.prevStep();
                };

             /*     
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
    } */

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

      const { values , handleChange } = this.props;
     

      
        return (

          
           <div className={'image-wrapper2 '}>
             <br/> <br/> <br/> <br/> <br/> <br/> <br/>
           
        <div className={'content-box'}>
        
        <div className={'left-box'}>
      
        <div className={'personal-details-txt'}style={{fontWeight:500}}>Personal Information</div>
        <div className={'personal-details-table'}>
        <br/> 
        <div className={'name-ic-no'} style={{position:'relative'}}>
          <div className={'name-box'}>
            NAME
            <br/>
            <input onChange={handleChange('name')}
                defaultValue={values.name}  placeholder="Enter your Full Name" maxlength="80" ></input>
          </div>
          <div className={'ic-box'}>
            IC NO.
            <br/>
            <input  onChange={handleChange('identification_no')}
              defaultValue={values.identification_no} type="text" placeholder="XXXXXX-XX-XXXX" maxlength="14" ></input>
          </div>
        </div>
          
          <div className={'dob-box'} style={{position:'relative'}}>
            <label  >DATE OF BIRTH:</label> <br/>
            <input onChange={handleChange('dob')}
                defaultValue={values.dob} type="date" placeholder="Day / Month / Year"></input>
          </div>
         
          <div className={'address-box'} style={{position:'relative'}}>
            <label  >ADDRESS: </label> <br/>
            <input onChange={handleChange('address_1')}
                defaultValue={values.address_1}  type="text" placeholder="Address line 1" size="50"></input><br/>
            <br/>
            <input onChange={handleChange('address_2')}
                defaultValue={values.address_2} type="text" placeholder="Address line 2" size="50"></input>
          </div>

          <div className={'state-postcode-box'} style={{position:'relative'}}>
            <div className={'state-box'}>
              <label  >STATE:</label>
              <br/>
              <select onChange={handleChange('state_id')}
                  defaultValue={values.state_id}  class="sel-input">
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
            </div>
            <div className={'postcode-box'}>
              <label  >POSTCODE:</label>
              <br/>
              <input onChange={handleChange('postcode')}
                defaultValue={values.postcode} 
                type="text" placeholder="00000" maxlength="5"></input>
            </div>
          </div>
              <br/>
              <br/>
              <br/>
         </div>
         <br/>

       <div className={'payment-information-sgmnt'}style={{fontWeight:500}}>Payment Information</div>
       <div className={'payment-info-table'}>
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
        </div>
        <br/>
       
        
<div className={'payment-method-sgmnt'}style={{fontWeight:500}}>Contact Information</div>
<div className={'payment-method-table'}>
        <table >
         <tr/> <label  >EMAIL ADDRESS:</label><br/>
          
        <td/>  <input onChange={handleChange('email')}
              defaultValue={values.email} type="text" placeholder="youremail@email.com" ></input><br/>
        
         <td/> <label  >CONFIRM EMAIL ADDRESS:</label><br/>
          
         <td/> <input type="text" placeholder="youremail@email.com" ></input>
          <br />

          </table>
          
         
          <label  >PHONE NO:</label> <br/>
          <input onChange={handleChange('phone')}
              defaultValue={values.phone}
              type="text" placeholder="+60 123456789" maxlength="14" ></input>
       
            <br />
            <br />
           
            </div>
          
          </div>
          <div className={'right-box'}>
            
            <div className={'your-plan-txt'}style={{fontWeight:500}}><center><span>Your Plan</span></center></div>
            <br/>
            <br/>
            <br/>
            <br/>
            <div classname={'form-plan-title'} ><center><h1 style={{fontWeight:700},{color: '#FBBBB4'}}>{`eMedic ${this.props.plan.name}`}</h1> </center></div>
            
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
                                Cover for room and board up to RM{` ${this.props.plan["annual_limit"].toLocaleString()}`} a day (choose any room type that is available within this budget)
                            </li>
                        </ul> <br/><br/>
                        <div style = {{color:'#004EFF'}}><h4>eMedic Annual Limit</h4></div>
                        <br/>
                        <div style = {{color:'#004EFF'}}><center><h1>RM {this.props.basePriceMonthly}</h1></center></div>

                        <br/>
                        <center>
                          <button onClick={this.back} className = {'change-btn'}>Change Plan</button>
                        <button  onClick={this.continue} className = {'submit-btn'}>Proceed</button>
                        </center>
                </div>
                
                
               
          </div>
        </div>
        </div>
        
        
        
       
        );

}
}

export default SensitiveData;
