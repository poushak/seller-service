const {NUMBER_REGEX} = require('./constants');
const BRAND_OPTIONS = require('./brands.json');

const OCCASION_OPTIONS = [
  {label: 'Ethnic', value: 'ethnic'},
  {label: 'Casual', value: 'casual'},
  {label: 'Sports', value: 'sports'},
  {label: 'Formal', value: 'formal'},
];

const GENDER_OPTIONS = [
  {label: 'Men', value: 'male'},
  {label: 'Women', value: 'female'},
];

const TYPE_OPTIONS = [
  {label: 'Suits', value: 'suit'},
  {label: 'Blazer & Coats', value: 'blazer'},
  {label: 'Jackets', value: 'jacket'},
  {label: 'Kurta', value: 'kurta'},
  {label: 'Sherwani', value: 'sherwani'},
  {label: 'Shoes', value: 'shoes'},
  {label: 'Kurti', value: 'kurti'},
  {label: 'Saree', value: 'saree'},
  {label: 'Lehnga', value: 'lehnga'},
  {label: 'Top', value: 'top'},
  {label: 'Dress', value: 'dress'},
  {label: 'Shrug', value: 'shrug'},
];

const APPAREL_TYPE_OPTIONS = [
  {label: 'Top wear', value: 'topWear'},
  {label: 'Bottom wear', value: 'bottomWear'},
  {label: 'Accessories', value: 'accessories'},
];

const SIZE_OPTIONS = [
  {label: 'XS', value: 'xs'},
  {label: 'S', value: 's'},
  {label: 'M', value: 'm'},
  {label: 'L', value: 'l'},
  {label: 'XL', value: 'xl'},
  {label: 'XXL', value: 'xxl'},
];

const FABRIC_OPTIONS = [
  {label: 'Cotton', value: 'cotton'},
  {label: 'Polyster', value: 'polyster'},
];

const FIT_OPTIONS = [
  {label: 'Slim', value: 'slim'},
  {label: 'Regular', value: 'regular'},
];

const SLEEVE_LENGTH_OPTIONS = [
  {label: 'Short', value: 'short'},
  {label: 'Long', value: 'long'},
];

let productFields = [
  {
    fieldId: 'title',
    displayName: 'Title',
    placeholder: 'Enter title',
    inputType: 'textInput',
    required: true,
  },
  {
    fieldId: 'gender',
    displayName: 'Gender',
    inputType: 'radio',
    options: GENDER_OPTIONS,
    defaultValue: 'male',
    required: true,
  },
  {
    fieldId: 'occasion',
    displayName: 'Occasion',
    placeholder: 'Select occasion',
    inputType: 'select',
    required: true,
    options: OCCASION_OPTIONS,
    defaultValue: '',
  },
  {
    fieldId: 'type',
    displayName: 'Type',
    placeholder: 'Select type',
    inputType: 'select',
    required: true,
    options: TYPE_OPTIONS,
    defaultValue: '',
  },
  {
    fieldId: 'apparelType',
    displayName: 'Apparel Type',
    placeholder: 'Select apparel type',
    inputType: 'select',
    required: true,
    options: APPAREL_TYPE_OPTIONS,
    defaultValue: '',
  },
  {
    fieldId: 'purchaseDate',
    displayName: 'Purchase Date',
    placeholder: 'Select purchased date',
    inputType: 'date',
    required: true,
    defaultValue: new Date(),
  },
  {
    fieldId: 'marketPrice',
    displayName: 'Market Price',
    placeholder: 'Enter market price',
    inputType: 'textInput',
    required: true,
    pattern: NUMBER_REGEX,
    defaultValue: '',
    transformValue: value => String(value || ''),
  },
  {
    fieldId: 'sellPrice',
    displayName: 'Sell Price',
    placeholder: 'Enter sell price',
    inputType: 'textInput',
    required: false,
    pattern: NUMBER_REGEX,
    defaultValue: '',
    transformValue: value => String(value || ''),
  },
  {
    fieldId: 'size',
    displayName: 'Size',
    placeholder: 'Enter size',
    inputType: 'select',
    required: true,
    options: SIZE_OPTIONS,
    defaultValue: '',
  },
  {
    fieldId: 'color',
    displayName: 'Color',
    placeholder: 'Select color',
    inputType: 'colorselector',
    required: true,
    defaultValue: '',
  },
  {
    fieldId: 'brand',
    displayName: 'Brand',
    placeholder: 'Select brand',
    inputType: 'select',
    required: true,
    options: BRAND_OPTIONS,
    defaultValue: '',
  },
  {
    fieldId: 'altered',
    displayName: 'Is Altered',
    inputType: 'switch',
    defaultValue: false,
  },
  {
    fieldId: 'description',
    displayName: 'Description',
    placeholder: 'Enter description',
    inputType: 'textarea',
    required: true,
    defaultValue: '',
  },
  {
    fieldId: 'offeredPrice',
    displayName: 'Rent Price',
    placeholder: 'Enter rent price',
    inputType: 'textInput',
    required: true,
    pattern: NUMBER_REGEX,
    defaultValue: '',
    transformValue: value => String(value || ''),
  },
  {
    fieldId: 'fabric',
    displayName: 'Fabric',
    placeholder: 'Select fabric',
    inputType: 'select',
    required: true,
    options: FABRIC_OPTIONS,
    defaultValue: '',
  },
  {
    fieldId: 'fit',
    displayName: 'Fit',
    placeholder: 'Select fit',
    inputType: 'select',
    required: true,
    options: FIT_OPTIONS,
    defaultValue: '',
  },
  {
    fieldId: 'sleeveLength',
    displayName: 'Sleeve Length',
    placeholder: 'Select sleeve length',
    inputType: 'select',
    required: false,
    options: SLEEVE_LENGTH_OPTIONS,
    defaultValue: '',
  },
  {
    fieldId: 'quantity',
    displayName: 'Quantity',
    placeholder: 'Enter quantity',
    inputType: 'textInput',
    required: false,
    pattern: NUMBER_REGEX,
    defaultValue: '',
    transformValue: value => String(value || ''),
  },
  {
    fieldId: 'images',
    displayName: 'Images',
    inputType: 'uploadImage',
    required: true,
    defaultValue: '',
    messages: {
      required: `Images are required!`,
    },
  },
];

productFields = productFields.map(field => {
  return Object.freeze(field);
});

productFields = Object.freeze(productFields);

module.exports = {
  productFields,
  OCCASION_OPTIONS,
  GENDER_OPTIONS,
  TYPE_OPTIONS,
  SIZE_OPTIONS,
  BRAND_OPTIONS,
  FABRIC_OPTIONS,
  FIT_OPTIONS,
  SLEEVE_LENGTH_OPTIONS,
};