// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
import { useState, useEffect, useContext } from "react";
// import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
// import * as React from 'react';
// import app.css
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel  from '@mui/material/FormLabel';
import RadioGroup  from '@mui/material/RadioGroup';
import Radio  from '@mui/material/Radio';
import MenuItem from '@mui/material/MenuItem';
// import Box from "@mui/material/Box";
// import React from 'react';
import TextField from "@mui/material/TextField";
// import Button from "@mui/material/Button";
import './form.css';
function Forms() {
  const currencies = [
    {
      value: 'LLC',
      label: 'LLC',
    },
    {
      value: 'Soul Proprietorship',
      label: 'Soul Proprietorship',
    },
    {
      value: 'Corporation',
      label: 'Corporation',
    },
    {
      value: 'Other',
      label: 'Other',
    },
  ];
  const amount_a_year = [
    {
      value: '$120,000 - $150,000',
      label: '$120,000 - $150,000',
    },
    {
      value: '$150,000 - $200,000',
      label: '$150,000 - $200,000',
    },
    {
      value: '$200,000 - $300,000',
      label: '$200,000 - $300,000',
    },
    {
      value: '$300,000 - $500,000',
      label: '$300,000 - $500,000',
    },
    {
      value: '$500,000 - $750,000',
      label: '$500,000 - $750,000',
    },
    {
      value: '$750,000 and up',
      label: '$750,000 and up',
    },
  ];
  const industry = [
    {
      value: 'Accounting/Finance',
      label: 'Accounting/Finance',
    },
    {
      value: 'Advertising/Public Relations',
      label: 'Advertising/Public Relations',
    },
    {
      value: 'Aerospace/Aviation',
      label: 'Aerospace/Aviation',
    },
    {
      value: 'Arts/Entertainment/Publishing',
      label: 'Arts/Entertainment/Publishing',
    },
    {
      value: 'Automotive',
      label: 'Automotive',
    },
    {
      value: 'Banking/Mortgage',
      label: 'Banking/Mortgage',
    },
    {
      value: 'Business Development',
      label: 'Business Development',
    },{
      value: 'Business Opportunity',
      label: 'Business Opportunity',
    },
    {
      value: 'Clerical/Administrative',
      label: 'Clerical/Administrative',
    },
    {
      value: 'Construction/Facilities',
      label: 'Construction/Facilities',
    },
    {
      value: 'Consumer Goods',
      label: 'Consumer Goods',
    },{
      value: 'Customer-Service',
      label: 'Customer Service',
    },
    {
      value: 'Education/Training',
      label: 'Education/Training',
    },
    {
      value: 'Energy/Utilities',
      label: 'Energy/Utilities',
    },
    {
      value: 'Engineering',
      label: 'Engineering',
    },
    {
      value: 'Government/Military',
      label: 'Government/Military',
    },
    {
      value: 'Green',
      label: 'Green',
    },
    {
      value: 'Healthcare',
      label: 'Healthcare',
    },
    {
      value: 'Hospitality/Travel',
      label: 'Hospitality/Travel',
    },{
      value: 'Human-Resources',
      label: 'Human Resources',
    },
    {
      value: 'Installation/Maintenance',
      label: 'Installation/Maintenance',
    },
    {
      value: 'Insurance',
      label: 'Insurance',
    },
    {
      value: 'Internet',
      label: 'Internet',
    },{
      value: 'Job-Search-Aids',
      label: 'Job Search Aids',
    },
    {
      value: 'Law-Enforcement/Security',
      label: 'Law Enforcement/Security',
    },
    {
      value: 'Legal',
      label: 'Legal',
    },
    {
      value: 'Management/Executive',
      label: 'Management/Executive',
    },{
      value: 'Manufacturing/Operations',
      label: 'Manufacturing/Operations',
    },
    {
      value: 'Marketing',
      label: 'Marketing',
    },
    {
      value: 'Non-Profit/Volunteer',
      label: 'Non-Profit/Volunteer',
    },
    {
      value: 'Pharmaceutical/Biotech',
      label: 'Pharmaceutical/Biotech',
    },
    {
      value: 'Professional Services',
      label: 'Professional Services',
    },
    {
      value: 'QA/Quality Control',
      label: 'QA/Quality Control',
    },{
      value: 'Real Estate',
      label: 'Real Estate',
    },
    {
      value: 'Restaurant/Food Service',
      label: 'Restaurant/Food Service',
    },
    {
      value: 'Retail',
      label: 'Retail',
    },
    {
      value: 'Sales',
      label: 'Sales',
    },{
      value: 'Science/Research',
      label: 'Science/Research',
    },
    {
      value: 'Skilled Labor',
      label: 'Skilled Labor',
    },
    {
      value: 'Technology',
      label: 'Technology',
    },
    {
      value: 'Telecommunications',
      label: 'Telecommunications',
    },
    {
      value: 'Transportation/Logistics',
      label: 'Transportation/Logistics',
    },
    {
      value: 'Other',
      label: 'Other',
    }
  ];
  const states = [
    {
      value: 'AL',
      label: 'Alabama',
    },
    {
      value: 'AK',
      label: 'Alaska',
    },
    {
      value: 'AZ',
      label: 'Arizona',
    },
    {
      value: 'AR',
      label: 'Arizona',
    },
    {
      value: 'CA',
      label: 'California',
    },
    {
      value: 'CO',
      label: 'Colorado',
    },
    {
      value: 'CT',
      label: 'Connecticut',
    },
    {
      value: 'DE',
      label: 'Delaware',
    },
    {
      value: 'FL',
      label: 'Florida',
    },
    {
      value: 'GA',
      label: 'Georgia',
    },
    {
      value: 'HI',
      label: 'Hawaii',
    },
    {
      value: 'ID',
      label: 'Idaho',
    },
    {
      value: 'IL',
      label: 'Illinois',
    },
    {
      value: 'IN',
      label: 'Indiana',
    },
    {
      value: 'IA',
      label: 'Iowa',
    },
    {
      value: 'KS',
      label: 'Kansas',
    },
    {
      value: 'KY',
      label: 'Kentucky',
    },
    {
      value: 'LA',
      label: 'Louisiana',
    },
    {
      value: 'ME',
      label: 'Maine',
    },
    {
      value: 'MD',
      label: 'Maryland',
    },
    {
      value: 'MA',
      label: 'Massachusetts',
    },
    {
      value: 'MI',
      label: 'Michigan',
    },
    {
      value: 'MN',
      label: 'Minnesota',
    },
    {
      value: 'MS',
      label: 'Mississippi',
    },
    {
      value: 'MO',
      label: 'Missouri',
    },
    {
      value: 'MT',
      label: 'Montana',
    },
    {
      value: 'NE',
      label: 'Nebraska',
    },
    {
      value: 'NV',
      label: 'Nevada',
    },
    {
      value: 'NH',
      label: 'New Hampshire',
    },
    {
      value: 'NJ',
      label: 'New Jersey',
    },
    {
      value: 'NM',
      label: 'New Mexico',
    },
    {
      value: 'NY',
      label: 'New York',
    },
    {
      value: 'NC',
      label: 'North Carolina',
    },
    {
      value: 'ND',
      label: 'North Dakota',
    },
    {
      value: 'OH',
      label: 'Ohio',
    },
    {
      value: 'OK',
      label: 'Oklahoma',
    },
    {
      value: 'OR',
      label: 'Oregon',
    },
    {
      value: 'PA',
      label: 'Pennsylvania',
    },
    {
      value: 'RI',
      label: 'Rhode Island',
    },
    {
      value: 'SC',
      label: 'South Carolina',
    },
    {
      value: 'SD',
      label: 'South Dakota',
    },
    {
      value: 'TN',
      label: 'Tennessee',
    },
    {
      value: 'TX',
      label: 'Texas',
    },
    {
      value: 'UT',
      label: 'Utah',
    },
    {
      value: 'TN',
      label: 'Tennessee',
    },
    {
      value: 'VT',
      label: 'Vermont',
    },
    {
      value: 'VA',
      label: 'Virginia',
    },
    {
      value: 'WA',
      label: 'Washington',
    },
    {
      value: 'WV',
      label: 'West Virginia',
    },
    {
      value: 'WI',
      label: 'Wisconsin',
    },
    {
      value: 'WY',
      label: 'Wyoming',
    },
    
  ]
  const handleSubmit = async() => {
    // event.preventDefault();
    // console.log(event)
    // const data = new FormData(event.currentTarget);
    // const values = Object.fromEntries(data.entries());
    // fetch('/submit')

    const [businessName, setBusinessName] = useState("");
    const [DBA, setDBA] = useState("");
    const [entity, setEntity] = useState("");
    const [businessEmail, setBusinessEmail] = useState("");
    const [bussinessPhone, setBussinessPhone] = useState("");
    const [bussinessFax, setBussinessFax] = useState("");
    const [website, setWebsite] = useState("");
    const [federalTaxID_EIN, setFederalTaxID_EIN] = useState("");
    const [dateOfIncorporation, setDateOfIncorporation] = useState("");
    const [industry, setIndustry] = useState("");
    const [businessAddress, setBusinessAddress] = useState("");
    const [cityBusiness, setCityBusiness] = useState("");
    const [stateBusiness, setStateBusiness] = useState("");
    const [zipCodeBusiness, setZipCodeBusiness] = useState("");
    const [fundingAmount, setFundingAmount] = useState("");
    const [anyOtherLoans, setAnyOtherLoans] = useState("");
    const [seasonalBusiness, setSeasonalBusiness] = useState("");
    const [annualGrossSales, setAnnualGrossSales] = useState("");
    const [averageDeposit, setAverageDeposit] = useState("");
    const [ownerName, setOwnerName] = useState("");
    const [ownerNameMiddle, setOwnerNameMiddle] = useState("");
    const [ownerNameLast, setOwnerNameLast] = useState("");
    const [ownerAddress, setOwnerAddress] = useState("");
    const [ownerCity, setOwnerCity] = useState("");
    const [ownerState, setOwnerState] = useState("");
    const [ownerZipCode, setOwnerZipCode] = useState("");
    const [ownerBOD, setOwnerBOD] = useState("");
    const [SSN, setSSN] = useState("");
    const [creditScore, setCreditScore] = useState("");
    const [percentageOfOwnership, setPercentageOfOwnership] = useState("");
    const [msg, setMsg] = useState("");
    console.log('submitting', values);
    // const handleAction = async () => {
        try{
          const response = await axios.post(
            "/form",
            {
              businessName,DBA,entity,businessEmail,bussinessPhone,bussinessFax,website,federalTaxID_EIN,dateOfIncorporation,industry,businessAddress,
              cityBusiness,stateBusiness,zipCodeBusiness,fundingAmount,anyOtherLoans,seasonalBusiness,annualGrossSales,averageDeposit,ownerName,ownerNameMiddle,ownerNameLast,ownerAddress,ownerCity
              ,ownerState,ownerZipCode,ownerBOD,SSN,creditScore,percentageOfOwnership
            },
            {
              withCredentials: true,
              headers: {
                "Content-Type": "application/json",
              },
            }
          );
          console.log(response.data);
          // setAccessToken(response.data);
          // navigate("/");
        }
        catch (e) {
          setMsg(e.response.data.msg);
        }
      // }
  };
  
  return (
    <div className='backgroundForm'>
    <form className="form"method='POST' action='/applied'>
      <Box component={"form"} sx={{ m: 1 }} noValidate autoComplete={"off"}>
        <h1 className='padding-top-bottom'>Business Information</h1>
        <TextField
          sx={{ m: 1 }}
          name="business_name"
          id="business_name"
          type="text"
          label="Business Name"
          helperText="Please enter your Business name."
          variant="outlined"
          size="small"
          required
          onChange={(e) => setBusinessName(e.target.value)}
        />
        <TextField
          sx={{ m: 1 }}
          id="DBA"
          name="dba"
          type="text"
          label="DBA"
          variant="outlined"
          size='small'
          required
          onChange={(e) => setDBA(e.target.value)}
        />
        <TextField
          // sx={{ m: 1.5 }}
          // width='8px'
          // className="select"
          required
          id="Entity"
          select
          className='select'
          label="Entity"
          name="entity"
          size='small'
          defaultValue="none"
          helperText="Please select your Entity Type"
          onChange={(e) => setEntity(e.target.value)}
        >
        {/* <TextField id="demo-helper-text-misaligned-no-helper" label="Select-Entity" /> */}
        
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          sx={{ m: 1 }}
          id="email"
          type="email"
          label="Business Email"
          name="business-email"
          variant="outlined"
          size='small'
          required
          onChange={(e) => setBusinessEmail(e.target.value)}
        />
        <TextField
          sx={{ m: 1 }}
          id="bussiness_phone"
          name="business_phone"
          type="text"
          label="Business Phone"
          variant="outlined"
          size='small'
          required
          inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
          onChange={(e) => setBussinessPhone(e.target.value)}
        />
        <TextField
          sx={{ m: 1 }}
          id="Business_Fax"
          name="business_fax"
          type="text"
          label="Business Fax"
          variant="outlined"
          size='small'
          // required
          inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
          onChange={(e) => setBussinessFax(e.target.value)}
        />
        <TextField
          sx={{ m: 1 }}
          id="website"
          name="website"
          type="text"
          label="Company Website"
          variant="outlined"
          size='small'
          required
          
          onChange={(e) => setWebsite(e.target.value)}
        />
        <TextField
          sx={{ m: 1 }}
          id="Federal-Tax-ID/EIN"
          name="federal-tax-id/ein"
          type="text"
          label="Federal Tax ID/EIN"
          variant="outlined"
          size='small'
          required
          
          onChange={(e) => setFederalTaxID_EIN(e.target.value)}
        />
        <TextField
          sx={{ m: 1 }}
          required
          id="Date-of-Incorporation"
          name="date-of-incorporation"
          type="Date"
          variant="outlined"
          
          size='small'
          helperText="Date of Incorporation"
          
          onChange={(e) => setDateOfIncorporation(e.target.value)}
        />
        {/* <TextField id="demo-helper-text-misaligned-no-helper" label="date" /> */}
        <TextField
          id="industry"
          name="industry"
          select
          className='select'
          label="Industry"
          size='small'
          defaultValue="none"
          helperText="What industry are you in?"
          required
          onChange={(e) => setIndustry(e.target.value)}
        >
          {industry.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <br></br>
        <TextField
          sx={{ m: 1 }}
          id="business_address"
          name="business_address"
          type="text"
          label="Business Address"
          variant="outlined"
          size="small"
          required
          onChange={(e) => setBusinessAddress(e.target.value)}
        />
        <TextField
          sx={{ m: 1 }}
          id="city_business"
          name="city_business"
          type="text"
          label="City"
          variant="outlined"
          size="small"
          required
          onChange={(e) => setCityBusiness(e.target.value)}
        />
        <TextField
          id="state_business"
          name="state_business"
          select
          className='select'
          label="State"
          size='small'
          defaultValue="none"
          helperText="Please select a State"
          required
          onChange={(e) => setStateBusiness(e.target.value)}
        >
          {states.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          sx={{ m: 1 }}
          id="zip-code_business"
          name="zip-code_business"
          type="text"
          required
          label="Zip Code"
          variant="outlined"
          size='small'
          inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
          onChange={(e) => setZipCodeBusiness(e.target.value)}
        />
        <br></br>
        <TextField
          sx={{ m: 1 }}
          id="Funding-Amount"
          name="funding-amount"
          type="text"
          label="Use of Funds and Requested Funding Amount"
          variant="outlined"
          size='small'
          required
          helperText="Use of Funds and Requested Funding Amount"
          onChange={(e) => setFundingAmount(e.target.value)}
        />
        <br></br>
        <FormLabel id="cash-advance-already" className='radio'>Do you currently have any open business loans or cash advances?</FormLabel>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          // defaultValue=""
          name="any-other-loans"
          onChange={(e) => setAnyOtherLoans(e.target.value)}
        >
          <FormControlLabel className='radio' value="Yes" control={<Radio />} label="Yes" />
          <FormControlLabel className='radio' value="No" control={<Radio />} label="No" />
        </RadioGroup>
        <FormLabel id="demo-radio-buttons-group-label" className='radio'>Are you running a seasonal business?</FormLabel>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          // defaultValue=""
          name="seasonal-business"
          onChange={(e) => setSeasonalBusiness(e.target.value)}
        >
          <FormControlLabel className='radio' value="Yes" control={<Radio />} label="Yes" />
          <FormControlLabel className='radio' value="No" control={<Radio />} label="No, I'm running all year" />
        </RadioGroup>
        <TextField
          id="annual-gross-sales"
          name="annual-gross-sales"
          select
          label="average annual gross sales"
          className='select'
          size='small'
          defaultValue="none"
          helperText="What is your average annual gross sales"
          required
          onChange={(e) => setAnnualGrossSales(e.target.value)}
        >
          {amount_a_year.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          sx={{ m: 1 }}
          id="average-deposit"
          name="average-deposit"
          type="number"
          label="3 months average deposit volume per month"
          variant="outlined"
          size='small'
          helperText="What were your last 3 months average deposit volume per month?"
          required
          onChange={(e) => setAnnualGrossSales(e.target.value)}
        />
        <h1 className='padding-top-bottom'>Business Owner Information</h1>
        
        <TextField
          sx={{ m: 1 }}
          id="owner_name"
          name="owner_name"
          type="text"
          label="First Name"
          variant="outlined"
          size="small"
          required
          onChange={(e) => setOwnerName(e.target.value)}
        />
        <TextField
          sx={{ m: 1 }}
          id="owner_name_middle"
          name="owner_name_middle"
          type="text"
          label="Middle Name"
          variant="outlined"
          size="small"
          onChange={(e) => setOwnerNameMiddle(e.target.value)}
        />
        <TextField
          sx={{ m: 1 }}
          id="owner_name_last"
          name="owner_name_last"
          type="text"
          label="Last Name"
          variant="outlined"
          size="small"
          required
          onChange={(e) => setOwnerNameLast(e.target.value)}
        />
        <br></br>
        <TextField
          sx={{ m: 1 }}
          id="owner_address"
          name="owner_address"
          type="text"
          label="Owner's Address"
          variant="outlined"
          size="small"
          required
          onChange={(e) => setOwnerAddress(e.target.value)}
        />
        <TextField
          sx={{ m: 1 }}
          id="owner-city"
          name="owner-city"
          type="text"
          label="City"
          variant="outlined"
          size="small"
          required
          onChange={(e) => setOwnerCity(e.target.value)}
        />
        <TextField
          id="owner-state"
          name="owner-state"
          select
          label="state"
          className='select'
          size='small'
          defaultValue="none"
          helperText="Please select a State"
          required
          onChange={(e) => setOwnerState(e.target.value)}
        >
          {states.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          sx={{ m: 1 }}
          id="owner-zip-code"
          name="owner-zip-code"
          type="text"
          label="Zip Code"
          variant="outlined"
          size='small'
          required
          inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
          onChange={(e) => setOwnerZipCode(e.target.value)}
        />
        <TextField
          sx={{ m: 1 }}
          required
          id="owner-dob"
          name="owner-dob"
          type="date"
          variant="outlined"
          size='small'
          helperText="Date of Birth"
          onChange={(e) => setOwnerBOD(e.target.value)}
        />
         <TextField
          sx={{ m: 1 }}
          id="ssn"
          name="ssn"
          type="text"
          label="Social Security Number"
          variant="outlined"
          // helperText="Social Security Number"
          size="small"
          required
          inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
          onChange={(e) => setSSN(e.target.value)}
        />
        <TextField
          sx={{ m: 1 }}
          id="credit-score"
          name="credit-score"
          type="number"
          label="Credit Score"
          variant="outlined"
          size="small"
          required
          helperText='Please enter a number from 300 to 850.'
          onChange={(e) => setCreditScore(e.target.value)}
        />
        <TextField
          sx={{ m: 1 }}
          id="percentage-of-םwnership"
          name="percentage-of-םwnership"
          type="number"
          label="Percentage of Ownership"
          variant="outlined"
          size="small"
          required
          helperText='Please enter a number from 1 to 100.'
          
          onChange={(e) => setPercentageOfOwnership(e.target.value)}
        />
                
        
        <br></br>
        <TextField
          // width="550px"
          sx={{ m: 1 }}
          id="subit"
          name="submit"
          type="submit"
          label="Submit"
          variant="outlined"
          size="small"
          // width
          // required
          // helperText='Please enter a number from 1 to 100.'
          onClick={handleSubmit}
          // {/* // onChange={(e) => setEmail(e.target.value)} */}
        />
      </Box>
      
      {/* <Button variant="contained" >test */}
      {/* // onClick={handleAction} */}
      
        {/* {props.title} */}
      {/* </Button> */}
      <div>
        {/* <p>{msg}</p> */}
      </div>
    

    {/* <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>
      
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form> */}
    </form>
    </div>
  );
}

export default Forms;