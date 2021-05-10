import React from 'react';
import fs from 'fs';
import { Country, Driver } from 'utils/types';
import { getDriverCountryFlagUrl } from 'utils/countries';
import { fetchData } from 'utils/fetch';

function Home({ countries, drivers }: HomeProps) {
    return (
        <div>
            {drivers.map(({ driverId, nationality, givenName, familyName }) => (
                <div key={driverId}>
                    <img src={getDriverCountryFlagUrl(nationality, countries)} alt={nationality} />
                    {`${givenName} ${familyName}`}
                </div>
            ))}
        </div>
    );
}

interface HomeProps {
    countries: Country[];
    drivers: Driver[];
}

export async function getServerSideProps(): Promise<{ props: HomeProps }> {
    const { DriverTable: { Drivers: drivers } } = await fetchData('drivers');
    const countries = JSON.parse(fs.readFileSync('data/countries.json', 'utf8'));
    return {
        props: { countries, drivers },
    };
}

export default Home;
