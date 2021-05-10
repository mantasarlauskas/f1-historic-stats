import { Country } from 'utils/types';

export function getDriverCountryFlagUrl(nationality: string, countries: Country[]) {
    const cca2 = countries.find(({ Nationality }) => Nationality === nationality)?.CCA2;
    if (!cca2) {
        return '';
    }

    return `https://www.countryflags.io/${cca2.toLowerCase()}/flat/64.png`;
}
