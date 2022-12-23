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
  export default {
    currencies, states,amount_a_year,industry
  }