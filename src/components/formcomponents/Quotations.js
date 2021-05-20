import React, { Component } from 'react';
import PlanComponent from './QuotationComponents/PlanComponent';
import {PricingTable, PricingSlot, PricingDetail} from 'react-pricing-table';
 

class Example extends React.Component {
 
    render() {
      return  <PricingTable  highlightColor='#f44336'> ... </PricingTable>
    }
  }

class Quotations extends Component {
    constructor(props) {
        super(props);
        this.state = {containedCount: 0};
    }

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
                Authorization: 'Y3VybGVjOlM0enE3ZkRCVVFNYTNGcGV4UmZF',
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
                        
<PricingTable  highlightColor='#1976D2'>
    <PricingSlot  onClick={this.submit} buttonText='Choose This Plan' title='eMedic Plan 20' priceText='RM 45.99/month'>
        <PricingDetail>with <b>RM20,000</b> annual limit</PricingDetail>
        <PricingDetail> Cover for hospitalization<b> in Malaysia only</b>, up to RM20,000, including surgery, ambulance, ICU and prescription</PricingDetail>
        <PricingDetail> Cashless admission to AXA panel hospital</PricingDetail>
        <PricingDetail>Cover for room and board up to RM250 a day (choose any room type that is available within this budget)</PricingDetail>
    </PricingSlot>
    <PricingSlot highlighted onClick={this.submit} buttonText='Choose This Plan' title='eMedic Plan 50' priceText='RM 48.99/month'>
        <PricingDetail> with <b>RM50,000</b> annual limit</PricingDetail>
        <PricingDetail> Cover for hospitalization<b> in Malaysia only</b>, up to RM50,000, including surgery, ambulance, ICU and prescription</PricingDetail>
        <PricingDetail>Cashless admission to AXA panel hospital</PricingDetail>
        <PricingDetail> Cover for room and board up to RM250 a day (choose any room type that is available within this budget)</PricingDetail>
    </PricingSlot>
    <PricingSlot  onClick={this.submit} buttonText='Choose This Plan' title='eMedic Plan 100' priceText='RM 51.99/month'>
        <PricingDetail>with <b>RM100,000</b> annual limit</PricingDetail>
        <PricingDetail> Cover for hospitalization <b>in Malaysia only</b>, up to RM100,000, including surgery, ambulance, ICU and prescription</PricingDetail>
        <PricingDetail>Cashless admission to AXA panel hospital</PricingDetail>
        <PricingDetail> Cover for room and board up to RM250 a day (choose any room type that is available within this budget)</PricingDetail>
    </PricingSlot>
</PricingTable>



                    </div>
                </div>
                
                <div className="plan-div">
                    {this.state.data
                        ? this.state.data.map((individualPlan, index) => (
                                <PlanComponent
                                    key={individualPlan["plan_detail_id"]}
                                    basePriceMonthly={
                                        individualPlan["base_price_monthly"]
                                    }
                                    planDetailId={
                                        individualPlan["plan_detail_id"]
                                    }
                                    plan={individualPlan["plan"]}
                                    index={index}
                                />
                            ))
                        : null}
                </div>
            </div>
        );
    }
}

export default Quotations;