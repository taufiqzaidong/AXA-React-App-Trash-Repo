import React, { Component } from 'react'

export class SensitiveData extends Component {



  constructor(props) {
    super(props);
    this.state = {
      name: '',
      dob: '',
      identification_no: '',
      email: '',
      phone: '',
      gender: '',
      is_citizen: '',
      plan_detail_id: '',
      is_heavymachineworker: '',
      address_1: '',
      postcode: '',
      state_id: '',
      address_2: ''
    };

  }

  onClick(event) {
    this.continue();
    this.CreateIndividualOrder();
  }


  continue = e => {
    this.props.nextStep();
  };
  back = e => {
    this.props.prevStep();
  };


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


  async CreateIndividualOrder() {
    let url = 'https://medical-api-uat.learnmyprotection.com/api/v1/orders';
    let accessToken = await this.loginToAPI();
    let response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-access-token': accessToken
      },
      body: JSON.stringify({
        "name": this.props.values.name,
        "dob": "1999-09-03",
        "identification_no": "990903-08-5523",
        "email": this.props.values.email,
        "phone": this.props.values.phone,
        "gender": this.props.gender,
        "is_citizen": 1,
        "detail": {
          "plan_detail_id": 1,
          "is_heavymachineworker": 0,
          "address_1": this.props.values.address_1,
          "address_2": this.props.values.address_2,
          "postcode": this.props.values.postcode,
          "affiliate_id": "string",
          "source": "axaweb",
          "state_id": 1,
          "underwritings": [
            {
              "underwriting_id": 1,
              "status": 1
            }],
          "tcs": [{
            "tc_id": 1,
            "status": 1
          }
          ],
          "add_ons": [
            {
              "add_on_id": 1,
              "status": 1
            }
          ]
        }
      })
    });

    let commits = await response.json();

    return commits.token
  }




  render() {

    const { values, handleChange } = this.props;



    return (


      <div className={'image-wrapper2 '}>
        <br /> <br /> <br /> <br /> <br /> <br /> <br />

        <div className={'content-box'}>

          <div className={'left-box'}>

            <div className={'personal-details-sgmnt'} style={{ fontWeight: 500 }}>Personal Information</div>
            <br />
            <table className={'personal-details-table'}>
              <tr>
                <th>NAME</th>
                <th>IC NO.</th>
              </tr>
              <tr>
                <td>
                  <input onChange={handleChange('name')}
                    defaultValue={values.name} type="text" placeholder="Enter your Full Name" maxlength="80" ></input>
                </td>
                <td>
                  <input onChange={handleChange('identification_no')}
                    defaultValue={values.identification_no} type="text" placeholder="XXXXXX-XX-XXXX" maxlength="14" ></input>
                </td>
              </tr>
              <br />
              <tr>
                <th>DATE OF BIRTH</th>
                <th></th>
              </tr>
              <tr>
                <td>
                  <input onChange={handleChange('dob')}
                    defaultValue={values.dob} type="date" placeholder="Day / Month / Year"></input>
                </td>
              </tr>
              <br />
              <tr>
                <th>ADDRESS</th>
                <th></th>
              </tr>
              <tr>
                <td>
                  <input onChange={handleChange('address_1')}
                    defaultValue={values.address_1} type="text" placeholder="Address line 1" size="50"></input>
                </td>
              </tr>
              <br />
              <tr>
                <td>
                  <input onChange={handleChange('address_2')}
                    defaultValue={values.address_2} type="text" placeholder="Address line 2" size="50"></input>
                </td>
              </tr>
              <br />
              <tr>
                <th>STATE</th>
                <th>POSTCODE</th>
              </tr>
              <tr>
                <td>
                  <select onChange={handleChange('state_id')}
                    defaultValue={values.state_id} class="sel-input">
                    <option value="">Select a state</option>
                    <option value="Johor">Johor</option>
                    <option value="Kedah">Kedah</option>
                    <option value="Kelantan">Kelantan</option>
                    <option value="Melaka">Melaka</option>
                    <option value="Negeri Sembilan">Negeri Sembilan</option>
                    <option value="Pahang">Pahang</option>
                    <option value="Perak">Perak</option>
                    <option value="Perlis">Perlis</option>
                    <option value="Pulau Pinang">Pulau Pinang</option>
                    <option value="Sabah">Sabah</option>
                    <option value="Sarawak">Sarawak</option>
                    <option value="Selangor">Selangor</option>
                    <option value="Terengganu">Terengganu</option>
                    <option value="Kuala Lumpur">WP Kuala Lumpur</option>
                    <option value="Labuan">WP Labuan</option>
                    <option value="Putrajaya">WP Putrajaya</option>
                  </select>
                </td>
                <td>
                  <input onChange={handleChange('postcode')}
                    defaultValue={values.postcode}
                    type="text" placeholder="00000" maxlength="5"></input>
                </td>
              </tr>
            </table>
            <br />
            <br />

            <div className={'payment-information-sgmnt'} style={{ fontWeight: 500 }}>Payment Information</div>
            <br />
            <table className={'personal-details-table'}>
              <tr>
                <th>PAYMENT METHOD</th>
                <th>SELECT YOUR BANK</th>
              </tr>
              <tr>
                <td>
                  <select onChange={handleChange('paymentmethod')}
                    defaultValue={values.paymentmethod} class="sel-input">
                    <option value="">Select payment method</option>
                    <option value="Online Banking">Online Banking</option>
                    <option value="Credit Card">Credit Card</option>
                  </select>
                </td>
                <td>
                  <select onChange={handleChange('bank')}
                    defaultValue={values.bank} class="sel-input">
                    <option value="">Select bank</option>
                    <option value="AffinOnline">AffinOnline</option>
                    <option value="Alliance Online">Alliance Online</option>
                    <option value="AmOnline<">AmOnline</option>
                    <option value="Bank Islam">Bank Islam</option>
                    <option value="Bank Rakyat Internet Banking">Bank Rakyat Internet Banking</option>
                    <option value="Bank Muamalat">Bank Muamalat</option>
                    <option value="CIMB Click">CIMB Click</option>
                    <option value="Hong Leong Online">Hong Leong Online</option>
                    <option value="HSBC">HSBC</option>
                    <option value="Maybank2U">Maybank2U</option>
                    <option value="Maybank2E">Maybank2E</option>
                    <option value="OCBC">OCBC</option>
                    <option value="Public Bank">Public Bank</option>
                    <option value="RHB Online">RHB Online</option>
                    <option value="Standard Chartered Bank">Standard Chartered Bank</option>
                    <option value="UOB">UOB</option>
                  </select>
                </td>
              </tr>
              <br />
            </table>

            <br />


            <div className={'payment-method-sgmnt'} style={{ fontWeight: 500 }}>Contact Information</div>
            <br/>
            <table className={'personal-details-table'}>
              <tr>
                <th>EMAIL ADDRESS</th>
                <th>CONFIRM EMAIL ADDRESS</th>
              </tr>
              <tr>
                <td>
                <input onChange={handleChange('email')}
                    defaultValue={values.email} type="text" placeholder="youremail@email.com" ></input>
                </td>
                <td>
                <input type="text" placeholder="youremail@email.com" ></input>
                </td>
              </tr>
              <br />
              <tr>
                <th>PHONE NO</th>
                <th></th>
              </tr>
              <tr>
                <td>
                <input onChange={handleChange('phone')}
                  defaultValue={values.phone}
                  type="text" placeholder="+60 123456789" maxlength="14" ></input>
                </td>
              </tr>
              </table>
          </div>
          <div className={'right-box'}>

            <div className={'your-plan-txt'} style={{ fontWeight: 500 }}><center><span>Your Plan</span></center></div>
            <br />
            <br />
            <br />
            <br />
            <div classname={'form-plan-title'} ><center><h1 style={{ fontWeight: 700 }, { color: '#FE8484' }}>{`eMedic ${this.props.plan.name}`}</h1> </center></div>

            <div className={'plan-info'} style={{ fontSize: 13 }}>
              <ul className='plan-description'>
                <li>
                  <span>
                    Cover for hospitalisation expenses{" "}
                    <strong>in Malaysia only,</strong> up to
                    RM{` ${this.props.plan["annual_limit"].toLocaleString()}`}, including surgery, ambulance, ICU and
                    prescription drugs<br /><br />
                  </span>
                </li>
                <li>
                  Cashless admission to <a href="https://www.axa.com.my/hospital-panel-life" target="_blank">AXA panel hospitals</a><br /><br />
                </li>
                <li>
                  Cover for room and board up to RM{` ${this.props.plan["annual_limit"].toLocaleString()}`} a day (choose any room type that is available within this budget)
                </li>
              </ul> <br /><br />
              <div style={{ color: '#004EFF' }}><h4>eMedic Annual Limit</h4></div>
              <br />
              <div style={{ color: '#004EFF' }}><center><h1 style={{fontSize:35}}>RM {this.props.basePriceMonthly}</h1></center></div>

              <br />
              <br/>
              <center>

                <button onClick={this.back} className={'change-btn'}>Change Plan</button>

                <button onClick={() => this.CreateIndividualOrder().then(this.continue)} className={'submit-btn'}>Proceed</button>
              </center>
            </div>



          </div>
        </div>
      </div>




    );

  }
}

export default SensitiveData;
