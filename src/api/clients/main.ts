import { Country } from '../../domain/Country';
import ApolloClient, { gql, DocumentNode } from 'apollo-boost';

interface IClient {
  fetchCountriesList: () => Promise<ResponseType>;
  fetchCountryDetails: (id: string) => Promise<ResponseType>;
}

export type ResponseType = {
  data: {
    countries: Country[]
  }
}

const MIN_POPULATION = 80 * 1000000;
const countriesListQuery: DocumentNode = gql(`
{
  countries( where:{population:{gt:${MIN_POPULATION}}}) 
  {
    id
    name
  }
}`);

const countryDetailsQuery = (countryId: string): DocumentNode => gql(`
{
  countries( where:{id:{eq:"${countryId}"}}) {
    id
    name
    vatRate
    alpha2Code
    alpha3Code
  }
}`);

class Client implements IClient {
  instance: any
  constructor() {
    console.log(process.env);
    const URL = process.env.REACT_APP_API_URL;
    const KEY = process.env.REACT_APP_API_KEY;

    this.instance = new ApolloClient({
      uri: `${URL}${KEY}`,
    });
  }
  fetchCountriesList(): Promise<ResponseType> {
    return this.instance.query({ query: countriesListQuery });
  }
  fetchCountryDetails(id: string): Promise<ResponseType> {
    return this.instance.query({ query: countryDetailsQuery(id) });
  }
}
export default Client;
