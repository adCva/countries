import { createSlice } from '@reduxjs/toolkit';

export const singlePageSlice = createSlice({
    name: "singlePageSlice",
    initialState: {
        singlePageDetailsOpened: false,
        countryCode: "",
        singleCountryArray: [],
        singleCountryData : {},
        translatedBorderingCountries : {"COD": "DR Congo", "MKD": "North Macedonia", "TON": "Tonga", "POL": "Poland", "AGO": "Angola", "DZA": "Algeria", "REU": "Réunion", "COG": "Republic of the Congo", "SLE": "Sierra Leone", "AND": "Andorra", "IOT": "British Indian Ocean Territory", "ALB": "Albania", "SSD": "South Sudan", "IMN": "Isle of Man", "PAK": "Pakistan", "MSR": "Montserrat", "ATG": "Antigua and Barbuda", "GTM": "Guatemala", "KWT": "Kuwait", "NIU": "Niue", "BOL": "Bolivia", "SGS": "South Georgia", "SYC": "Seychelles", "BWA": "Botswana", "IRN": "Iran", "BIH": "Bosnia and Herzegovina", "GGY": "Guernsey", "NAM": "Namibia", "GIB": "Gibraltar", "ETH": "Ethiopia", "SJM": "Svalbard and Jan Mayen", "MEX": "Mexico", "CMR": "Cameroon", "BLM": "Saint Barthélemy", "MNE": "Montenegro", "ECU": "Ecuador", "CHE": "Switzerland", "LTU": "Lithuania", "BDI": "Burundi", "MCO": "Monaco", "MLI": "Mali", "SHN": "Saint Helena, Ascension and Tristan da Cunha", "JEY": "Jersey", "LVA": "Latvia", "BGR": "Bulgaria", "GNQ": "Equatorial Guinea", "LSO": "Lesotho", "COM": "Comoros", "THA": "Thailand", "SOM": "Somalia", "CAN": "Canada", "BRA": "Brazil", "BRB": "Barbados", "PRI": "Puerto Rico", "SPM": "Saint Pierre and Miquelon", "KNA": "Saint Kitts and Nevis", "SVK": "Slovakia", "ARG": "Argentina", "FRA": "France", "UKR": "Ukraine", "EGY": "Egypt", "IDN": "Indonesia", "TCA": "Turks and Caicos Islands", "ARE": "United Arab Emirates", "FJI": "Fiji", "LBR": "Liberia", "MMR": "Myanmar", "NLD": "Netherlands", "NGA": "Nigeria", "UZB": "Uzbekistan", "GEO": "Georgia", "PSE": "Palestine", "COK": "Cook Islands", "BLZ": "Belize", "HUN": "Hungary", "PRT": "Portugal", "MOZ": "Mozambique", "PAN": "Panama", "FLK": "Falkland Islands", "HND": "Honduras", "UNK": "Kosovo", "CXR": "Christmas Island", "NOR": "Norway", "SLV": "El Salvador", "FSM": "Micronesia", "GRD": "Grenada", "YEM": "Yemen", "ZAF": "South Africa", "QAT": "Qatar", "SXM": "Sint Maarten", "TZA": "Tanzania", "GBR": "United Kingdom", "NER": "Niger", "SLB": "Solomon Islands", "COL": "Colombia", "USA": "United States", "CHL": "Chile", "GRC": "Greece", "AUS": "Australia", "LBN": "Lebanon", "CRI": "Costa Rica", "JPN": "Japan", "MRT": "Mauritania", "BMU": "Bermuda", "CHN": "China", "HMD": "Heard Island and McDonald Islands", "MAR": "Morocco", "PHL": "Philippines", "ERI": "Eritrea", "GAB": "Gabon", "ZMB": "Zambia", "NRU": "Nauru", "LKA": "Sri Lanka", "ASM": "American Samoa", "GUF": "French Guiana", "GHA": "Ghana", "NZL": "New Zealand", "ESP": "Spain", "TUR": "Turkey", "GIN": "Guinea", "DEU": "Germany", "GMB": "Gambia", "IRQ": "Iraq", "BGD": "Bangladesh", "SWZ": "Eswatini", "FIN": "Finland", "TGO": "Togo", "OMN": "Oman", "KHM": "Cambodia", "MNG": "Mongolia", "NCL": "New Caledonia", "BRN": "Brunei", "PCN": "Pitcairn Islands", "ALA": "Åland Islands", "GUY": "Guyana", "GUM": "Guam", "CUW": "Curaçao", "NFK": "Norfolk Island", "RUS": "Russia", "PYF": "French Polynesia", "ARM": "Armenia", "SUR": "Suriname", "ITA": "Italy", "BFA": "Burkina Faso", "GLP": "Guadeloupe", "RWA": "Rwanda", "MAC": "Macau", "MAF": "Saint Martin", "TKL": "Tokelau", "TUN": "Tunisia", "VGB": "British Virgin Islands", "AIA": "Anguilla", "CYP": "Cyprus", "VNM": "Vietnam", "UMI": "United States Minor Outlying Islands", "JOR": "Jordan", "GNB": "Guinea-Bissau", "KOR": "South Korea", "TUV": "Tuvalu", "ABW": "Aruba", "BHS": "Bahamas", "DOM": "Dominican Republic", "FRO": "Faroe Islands", "PRY": "Paraguay", "CUB": "Cuba", "HTI": "Haiti", "AFG": "Afghanistan", "DJI": "Djibouti", "ESH": "Western Sahara", "DNK": "Denmark", "MNP": "Northern Mariana Islands", "MDV": "Maldives", "TLS": "Timor-Leste", "ZWE": "Zimbabwe", "LAO": "Laos", "PNG": "Papua New Guinea", "ATA": "Antarctica", "CAF": "Central African Republic", "URY": "Uruguay", "CIV": "Ivory Coast", "SWE": "Sweden", "AUT": "Austria", "CPV": "Cape Verde", "MDA": "Moldova", "KIR": "Kiribati", "DMA": "Dominica", "VCT": "Saint Vincent and the Grenadines", "LUX": "Luxembourg", "BVT": "Bouvet Island", "NPL": "Nepal", "VAT": "Vatican City", "SRB": "Serbia", "LIE": "Liechtenstein", "ISR": "Israel", "SVN": "Slovenia", "TWN": "Taiwan", "IND": "India", "BES": "Caribbean Netherlands", "WLF": "Wallis and Futuna", "UGA": "Uganda", "HKG": "Hong Kong", "ATF": "French Southern and Antarctic Lands", "PLW": "Palau", "KGZ": "Kyrgyzstan", "MYT": "Mayotte", "SEN": "Senegal", "BEN": "Benin", "TCD": "Chad", "EST": "Estonia", "PRK": "North Korea", "TTO": "Trinidad and Tobago", "MHL": "Marshall Islands", "MUS": "Mauritius", "BTN": "Bhutan", "MLT": "Malta", "VIR": "United States Virgin Islands", "NIC": "Nicaragua", "MDG": "Madagascar", "TJK": "Tajikistan", "BEL": "Belgium", "MWI": "Malawi", "BLR": "Belarus", "VEN": "Venezuela", "LCA": "Saint Lucia", "SYR": "Syria", "GRL": "Greenland", "HRV": "Croatia", "SMR": "San Marino", "CYM": "Cayman Islands", "IRL": "Ireland", "ROU": "Romania", "CZE": "Czechia", "PER": "Peru", "BHR": "Bahrain", "SGP": "Singapore", "MTQ": "Martinique", "SDN": "Sudan", "ISL": "Iceland", "WSM": "Samoa", "KEN": "Kenya", "TKM": "Turkmenistan", "STP": "São Tomé and Príncipe", "CCK": "Cocos (Keeling) Islands", "VUT": "Vanuatu", "KAZ": "Kazakhstan", "LBY": "Libya", "SAU": "Saudi Arabia", "MYS": "Malaysia", "JAM": "Jamaica", "AZE": "Azerbaijan"}
    },
    reducers: {
        openSinglePageDetails: (state, action) => {
            let countryData = action.payload.data;
            
            return {
                ...state,
                singlePageDetailsOpened: true,
                singleCountryData: countryData
            }
        },
        addCountryCode: (state, action) => {
            let newCountryCode = action.payload.code;

            return {
                ...state,
                singleCountryArray: [...state.singleCountryArray, newCountryCode],
            }
        },
        removeLastCountryCode: (state, action) => {
            let newCodesArray = action.payload;

            return {
                ...state,
                singleCountryArray: newCodesArray
            }
        },
        closeSinglePageDetails: state => {
            state.singlePageDetailsOpened = false
            state.singleCountryArray = []
            state.singleCountryData = {data: {}}
        },
    }
})

export const { openSinglePageDetails, addCountryCode, removeLastCountryCode, closeSinglePageDetails } = singlePageSlice.actions;

export default singlePageSlice.reducer;