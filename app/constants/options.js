export const owners = [
  { id: 0, value: 'Not Available', query: 'number_of_owners: 0' },
  { id: 1, value: '1', query: 'number_of_owners: 1' },
  { id: 2, value: '2', query: 'number_of_owners: 2' },
  { id: 3, value: '3', query: 'number_of_owners: 3' },
  { id: 4, value: '4', query: 'number_of_owners: 4' },
  { id: 5, value: '5', query: 'number_of_owners: 5' },
  { id: 6, value: 'More Than 5', query: 'number_of_owners: 6' }
];

export const transmissionTypes = [
  { id: 1, value: 'Auto' },
  { id: 2, value: 'Manual' },
  { id: 3, value: 'Semi-Auto'}
];

export const fuelTypes = [
  { id: 1, value: 'Petrol' },
  { id: 2, value: 'Diesel' },
  { id: 3, value: 'CNG' },
  { id: 4, value: 'Electric' }
];

export const licenceStatus = [
  { id: 0, value: 'Any', query: 'any', search_query: 'licence_status:Any' },
  { id: 1, value: 'With Licence', query: 'licence', search_query: 'licence_status:"With Licence"' },
  { id: 2, value: 'CIF Only', query: 'cif', search_query: 'licence_status:"CIF Only"' },
  { id: 3, value: 'No Slip', query: 'no_slip', search_query: 'licence_status:"No Slip"'}
];

export const sellerTypes = [
  { id: 0, name: 'options.filterBy.any', query: 'any' },
  { id: 1, name: 'options.filterBy.individual', query: 'user.seller_type:"dealer"' },
  { id: 2, name: 'options.filterBy.showroom', query: 'user.seller_type:"showroom"' },
  { id: 3, name: 'options.filterBy.private', query: 'user.seller_type:"private seller"' }
];

export const priceRanges = [
  { id: 0, name: 'options.price.any', query: "any" },
  { id: 1, name: 'options.price.below', query: "price_in_lakh <= 100"},
  { id: 2, name: 'options.price.10t15', query: "price_in_lakh:101 TO 150" },
  { id: 3, name: 'options.price.15t20', query: "price_in_lakh:151 TO 200" },
  { id: 4, name: 'options.price.20t30', query: "price_in_lakh:201 TO 300" },
  { id: 5, name: 'options.price.30t40', query: "price_in_lakh:301 TO 400" },
  { id: 6, name: 'options.price.40t50', query: "price_in_lakh:401 TO 500" },
  { id: 7, name: 'options.price.50t60', query: "price_in_lakh:501 TO 600" },
  { id: 8, name: 'options.price.60t70', query: "price_in_lakh:601 TO 700" },
  { id: 9, name: 'options.price.70t80', query: "price_in_lakh:701 TO 800" },
  { id: 10, name: 'options.price.80t90', query: "price_in_lakh:801 TO 900" },
  { id: 11, name: 'options.price.90t100', query: "price_in_lakh:901 TO 1000" },
  { id: 12, name: 'options.price.above', query: "price_in_lakh>=1000" }
];

export const carTypes = [
  { id: 1, name: 'options.filterBy.all', query: "any" },
  { id: 2, name: 'options.filterBy.topSpot', query: "car_type:\"Top Spot\""},
  { id: 3, name: 'options.filterBy.premium', query: "car_type:\"Premium Car\"" },
  { id: 4, name: 'options.filterBy.premiumDealer', query: "car_type:\"Premium Dealer Car\"" },  
  { id: 5, name: 'options.filterBy.premiumAssist', query: "car_type:\"Premium Assist\""}
];

export const premiumDurations = [
  { id: 1, name: '3 months',query: '3'},
  { id: 2, name: '6 months',query: '6'},
  { id: 3, name: '12 months',query: '12'}
];

export const shopPackageType = [
  {id: 1, query: '4', name: 'Free Package (Maximum 20 products)'},
  {id: 2, query: '5', name: '60,000 Ks Package (Maximum 50 products)'},
  {id: 3, query: '6', name: '80,000 Ks Package (Maximum 80 products)'},
  {id: 4, query: '7', name: '100,000 Ks Package (Maximum 125 products)'}  
];

export const shopDurations = [
  { id: 1, name: '2 months', query: '2'},
  { id: 2, name: '3 months', query: '3'},
  { id: 3, name: '6 months', query: '6'},
  { id: 4, name: '12 months', query: '12'}
];
export const steeringPositions = [
  { id: 1, value: 'Right Hand Drive'},
  { id: 2, value: 'Left Hand Drive'}
];
export const mileAgeRanges = [
    { id:0,value: '0 - 5k Km'},
    { id:1,value: '5 - 10k Km'},
    { id:2,value: '10 - 15k Km'},
    { id:3,value: '15 - 20k Km'},
    { id:4,value: '20 - 25k Km'},
    { id:5,value: '25 - 30k Km'},
    { id:6,value: '30 - 35k Km'},
    { id:7,value: '35 - 40k Km'},
    { id:8,value: '40 - 45k Km'},
    { id:9,value: '45 - 50k Km'},
    { id:10,value: '50 - 55k Km'},
    { id:11,value: '55 - 60k Km'},
    { id:12,value: '60 - 65k Km'},
    { id:13,value: '65 - 70k Km'},
    { id:14,value: '70 - 75k Km'},
    { id:15,value: '75 - 80k Km'},
    { id:16,value: '80 - 85k Km'},
    { id:17,value: '85 - 90k Km'},
    { id:18,value: '90 - 95k Km'},
    { id:19,value: '95 - 100k Km'},
    { id:20,value: '100 - 105k Km'},
    { id:21,value: '105 - 110k Km'},
    { id:22,value: '110 - 115k Km'},
    { id:23,value: '115 - 120k Km'},
    { id:24,value: '120 - 125k Km'},
    { id:25,value: '125 - 130k Km'},
    { id:26,value: '130 - 135k Km'},
    { id:27,value: '135 - 140k Km'},
    { id:28,value: '140 - 145k Km'},
    { id:29,value: '145 - 150k Km'}, 
    { id:30,value: '150 - 155k Km'},
    { id:31,value: '155 - 160k Km'},
    { id:32,value: '160 - 165k Km'},
    { id:33,value: '165 - 170k Km'},
    { id:34,value: '170 - 175k Km'},
    { id:35,value: '175 - 180k Km'},
    { id:36,value: '180 - 185k Km'},
    { id:37,value: '185 - 190k Km'},
    { id:38,value: '190 - 195k Km'},
    { id:39,value: '195 - 200k Km'},
    { id:40,value: '200 - 205k Km'},
    { id:41,value: '205 - 210k Km'},
    { id:42,value: '210 - 215k Km'},
    { id:43,value: '215 - 220k Km'},
    { id:44,value: '220 - 225k Km'},
    { id:45,value: '225 - 230k Km'},
    { id:46,value: '230 - 235k Km'},
    { id:47,value: '235 - 240k Km'},
    { id:48,value: '240 - 245k Km'},
    { id:49,value: '245 - 250k Km'},
    { id:50,value: '250 - 255k Km'},    
    { id:51,value: '255 - 260k Km'},
    { id:52,value: '260 - 265k Km'},
    { id:53,value: '265 - 270k Km'},
    { id:54,value: '270 - 275k Km'},
    { id:55,value: '275 - 280k Km'},
    { id:56,value: '280 - 285k Km'},
    { id:57,value: '285 - 290k Km'},
    { id:58,value: '290 - 295k Km'},    
    { id:59,value: '295 - 300k Km'},                                                                                                                    
    { id:60,value: '300k Km - Above'}                                                                                                                                                                                                                   
];

export const divisions = [
  {value :'0',name:"DIVISION"},
  {value : 14, name:"YGN"},
  {value : 8,name:"MDY"},
  {value : 1,name:"AYY"},
  {value : 11,name:"SGG"},
  {value : 2,name:"BGO"},
  {value : 12,name:"SHN"},
  {value : 7,name:"MGY"},
  {value : 10,name:"RKE"},
  {value : 9,name:"MON"},
  {value : 6,name:"KYN"},
  {value : 13,name:"TNI"},
  {value : 4,name:"KCN"},
  {value : 3,name:"CHN"},
  {value : 5,name:"KYH"}
];

export const plateColors = [
  {value : 1, name: "Black"},
  {value : 2, name: "Red"},
  {value : 3, name: "Blue"}

]

export const premiumDealershipPlans = [
  { id: 1, name: 'Silver Plan (100,000 MMK)',plan: 'Silver Plan'},
  { id: 2, name: 'Gold Plan (200,000 MMK)',plan: 'Gold Plan'},
  { id: 3, name: 'Platinum Plan (350,000 MMK)',plan: 'Platinum Plan'}
];

export const ratingStatus = [
  "",
  "Hated it",
  "Disliked it",
  "It's Ok",
  "Liked it",
  "Loved it"
]

export const listingColors = [
  {
    name: 'Black',
    id: 1
  },
  {
    name: 'Blue',
    id: 3
  },
  {
    name: 'Red',
    id: 2
  }
]