const genders = [
    {name: 'male', value: 'Male'},
    {name: 'female', value: 'Female'},
    {name: 'others', value: 'Others'},
];

const occasions = [
    {name: 'ethnic', value: 'Ethnic'},
    {name: 'casual', value: 'Casual'},
    {name: 'sports', value: 'Sports'},
    {name: 'formal', value: 'Formal'},
];

const uniSexDressTypes = [
    {name: 'formal', value: 'Formal'},
    {name: 'sport', value: 'Sport'},
    {name: 'jacket', value: 'Jacket'},
    {name: 'blazer', value: 'Blazer'},
]

const menDressTypes = [
    {name: 'suit', value: 'Suit'},
    {name: 'sandal', value: 'Sandal'},
    {name: 'kurta', value: 'Kurta'},
    {name: 'sherwani', value: 'Sherwani'},
    {name: 'sneakers', value: 'Sneakers'},
    {name: 'casual', value: 'Casual'},
    {name: 'juti', value: 'Juti'},
    ...uniSexDressTypes,
];

const womenDressTypes = [ // Women types: kurti saree lehenga skirt top dress jacket shrug blazer
    {name: 'kurti', value: 'Kurti'},
    {name: 'saree', value: 'Saree'},
    {name: 'lehenga', value: 'Lehenga'},
    {name: 'skirt', value: 'Skirt'},
    {name: 'top', value: 'Top'},
    {name: 'dress', value: 'Dress'},
    {name: 'jacket', value: 'Jacket'},
    {name: 'shrug', value: 'Shrug'},
    ...uniSexDressTypes,
];

const apparelTypes = [
    {name: 'topWear', value: 'Top Wear'},
    {name: 'bottomWear', value: 'Bottom Wear'},
    {name: 'accessories', value: 'Accessories'},
    {name: 'footWear', value: 'Foot Wear'},
];

const sleeveTypes = [
    {name: 'fullSleeve', value: 'Full Sleeves'},
    {name: 'halfSleeve', value: 'Half Sleeves'},
    {name: 'sleeveLess', value: 'Sleeve Less'},
    {name: '3/4Sleeve', value: '3/4 Sleeves'},
];

module.exports = {
    genders,
    occasions,
    sleeveTypes,
    apparelTypes,
    menDressTypes,
    womenDressTypes,
};