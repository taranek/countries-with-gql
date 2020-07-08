import { Country } from '../../../domain/Country';

export type State = {
  activeCountry: Country | null;
  countries: Country[] | null;
  loading: boolean;
  errorMessage: string | null
}

export type ResponseType = {
  data: {
    countries: Country[]
  }
}
