import { FormFields } from '../types/formFields';
import { InputType } from '../types/inputTypes';
import { PlaceholderText } from '../types/placeholder';
import { patterns } from '../types/patterns';

export const formFieldsData = [
  { id: FormFields.FirstName, type: InputType.Text, placeholder: PlaceholderText.FirstName },
  { id: FormFields.LastName, type: InputType.Text, placeholder: PlaceholderText.LastName },
  { id: FormFields.MobilePhone, type: InputType.Tel, placeholder: PlaceholderText.PhoneNumber, pattern: patterns.phoneNumber },
  { id: FormFields.Address, type: InputType.Text, placeholder: PlaceholderText.Address },
  { id: FormFields.CreditCard, type: InputType.Text, placeholder: PlaceholderText.CreditCard, pattern: patterns.creditCard },
  { id: FormFields.ExpirationDate, type: InputType.Text, placeholder: PlaceholderText.ExpirationDate, pattern: patterns.expirationDate, maxLength: 5 },
  { id: FormFields.CVV, type: InputType.Text, placeholder: PlaceholderText.CVV, pattern: patterns.cvv, maxLength: 3 },
];