import React, { Component } from 'react';
import ConfirmData from '../Page4components/ConfirmData';
import SensitiveData from '../Page4components/SensitiveData';
import PlanComponent from './QuotationComponents/PlanComponent';


class Quotations extends Component {
    constructor(props) {
        super(props);
        this.state = {containedCount: 0,
                      step: 1,
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
                      state_id : '' ,
                      address_2 : '',
                      paymentmethod : '' ,
                      bank : '' ,};
    }

  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  };

  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  };

  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  };

    calculateAge() {
        let birthDate = new Date(parseInt(this.props['date-of-birth']['year']), parseInt(this.props['date-of-birth']['month']), parseInt(this.props['date-of-birth']['day']));
        let now = new Date();
        let currentYear = now.getFullYear();
        let birthYear = birthDate.getFullYear();
        let age = currentYear - birthYear;
        if (now < new Date(birthDate.setFullYear(currentYear))) {
            age = age - 1;
        }
        return age;
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

    async getIndividualQuotation() {
        let url = `https://medical-api-uat.learnmyprotection.com/api/v1/quotations/${this.calculateAge()}/${this.props.gender}`;
        let accessToken = await this.loginToAPI();
        let response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': accessToken
            }
        });

        let commits = await response.json();
        return commits;
    }

    /*async getFamilyQuotation() {
        console.log(this.state['family-members']);
        let familyData = Object.values(this.state['family-members']).map((obj) => delete obj.relation);
        console.log(familyData);
        console.log({familyData});
        console.log(JSON.stringify({familyData}));
        
        let url = 'https://medical-api-uat.learnmyprotection.com/api/v1/quotations';
        let accessToken = await this.loginToAPI();
        let response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': accessToken
            },
            body: JSON.stringify(familyData)
        });

        let commits = await response.json();
        return commits;
    }*/

    async generateQuote() {
        let res;
        if (this.props['plan-type'] === 'individual') {
            res = await this.getIndividualQuotation();
        } else if (this.props['plan-type'] === 'family') {
            res = await this.getFamilyQuotation();
        }
        return res;
    }

    componentDidMount() {
        this.generateQuote().then((result) => {
            this.setState({data: result.data})
        });
    }

    componentDidUpdate() {
        let offsetWidth = '';

        if (this.props.backBtnRef.current && this.props.backButton && !this.state.offsetWidth) {
            offsetWidth = `-${this.props.backBtnRef.current.getBoundingClientRect().width}px`
            this.setState({'offsetWidth': offsetWidth});
        }
    }

    render() {

        const { step } = this.state
        const { name, dob, identification_no, email,phone,gender,is_citizen,plan_detail_id,is_heavymachineworker,address_1, postcode, state_id, address_2,bank,paymentmethod } = this.state;
        const values = { name, dob, identification_no, email,phone,gender,is_citizen,plan_detail_id,is_heavymachineworker,address_1, postcode, state_id , address_2,bank,paymentmethod};

        switch (step) {
            case 1:
        return (
            
            <div className="form-component-quote">
                <div
                    className="form-header-wrapper"
                    style={{
                        position: "relative",
                        display: "flex",
                        right: `${parseInt(
                            this.props.backBtnRef.current.getBoundingClientRect()
                                .width
                        ) / 2}px`,
                        left: "50%",
                        transform: "translateX(-50%)"
                    }}
                >
                    <div className="form-header">
                        <div
                            style={{
                                position: "fixed",
                                display: "inline-block",
                                left: this.state.offsetWidth
                            }}
                        >
                            {this.state.containedCount === 0
                                ? this.props.backButton
                                : null}
                        </div>
                        <p1>Choose Your Preferred Plan</p1>                   
                    </div>
                </div>
                
                <div className="plan-div">
                    {this.state.data ? this.state.data.map((individualPlan, index) => (
                                <PlanComponent
                                    key={individualPlan["plan_detail_id"]}
                                    basePriceMonthly={
                                        individualPlan["base_price_monthly"]
                                    }
                                    basePriceYearly={individualPlan["base_price_yearly"]}
                                    planDetailId={
                                        individualPlan["plan_detail_id"]
                                    }
                                    plan={individualPlan["plan"]}
                                    index={index}
                                    nextStep={this.nextStep}
                                    handleChange={this.handleChange}
                                    values={values}
                                />
                            ))
                        : null}
                </div>
            </div>
        )


        case 2: 
        return (
            <div  >
                <div >
                     <div className="form-header">
                        <div >
                            {this.props.backButton}
                        </div> 
                        <h1></h1>             
                    </div>              
                </div>
                <div className="plan-div">
                {this.state.data.map((individualPlan) => (
            <SensitiveData
            basePriceMonthly={individualPlan["base_price_monthly"]}
            basePriceYearly={individualPlan["base_price_yearly"]}
            plan={individualPlan["plan"]}
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values} /> 
            ))}
    </div>
</div>
        )


        case 3: 
        return (
            <div  >
            <div >
                 <div className="form-header">
                    <div >
                        {this.props.backButton}
                    </div> 
                    <h1></h1>             
                </div>              
            </div>
            <div className="plan-div">
            {this.state.data.map((individualPlan) => (
            <ConfirmData
            key={individualPlan["plan_detail_id"]}
            basePriceYearly={individualPlan["base_price_yearly"]}
            basePriceMonthly={
            individualPlan["base_price_monthly"] }
            planDetailId={
            individualPlan["plan_detail_id"]}
            plan={individualPlan["plan"]}
            nextStep={this.nextStep}
            prevStep={this.prevStep} 
            values={values}/>
            ))}
            </div>
        </div>
        )


        default :
        return <h1>lol</h1>
                                }
                                
    }
}

export default Quotations;