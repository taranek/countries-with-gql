import { Country } from '../../../../domain/Country';

export type Props = {
  country: Country;
  onRemove: (country: Country) => void;
}
