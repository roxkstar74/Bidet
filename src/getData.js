const axios = require('axios');

export const getData = async() => {
    console.log('getData');
    const backendURL = process.env.BACKEND_URL || 'https://bidet-backend.herokuapp.com/';
    const response = await axios.get(`${backendURL}/`);
    console.log('response', response);
    let formattedData = response.data.map(row => {
        console.log('row', row);
        let betterRow = {};
        Object.keys(row).forEach(key => {
            betterRow[key] = row[key].number || row[key]?.title?.[0]?.plain_text || row[key].url;
        });
        return betterRow;
    });
    console.log('formattedData', formattedData);
    formattedData = mapData(formattedData);
    return formattedData;
};

const mapData = (rows) => {
    return rows.map(row => {
        Object.keys(fieldMaps).forEach(key => {
            row[key] = fieldMaps[key][row[key] || 0];
        });
        booleanFields.forEach(key => {
            row[key] = row[key] ? 'Yes' : 'No';
        });
        return row;
    })
};

const fieldMaps = {
    'Type': ['Non-electric', 'Handheld', 'Electric']
}

const booleanFields = [
    "Customizable Spray Strength", 
    "Front Nozzle", 
    "Full Crack Coverage", 
    "Heated Seat", 
    "No-stink spray",
    "Retractable Nozzle", 
    "Self Cleaning", 
    "Warm Air Dryer", 
    "Warm Water",
]

// module.exports = {
//     getData
// };

// getData().then(console.log);