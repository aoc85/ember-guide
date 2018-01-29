import { helper } from '@ember/component/helper';

const communityPropertyType = [
  'Condo',
  'Townhouse',
  'Apartment'
];

export function rentalPropertyType([propertyType]) {
  if(communityPropertyType.includes([propertyType])){
    return 'Community';
  }
  return 'Standalone';    
}

export default helper(rentalPropertyType);
