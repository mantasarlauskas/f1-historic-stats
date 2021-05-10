export interface Country {
    CCA2: string;
    Name: string;
    CCA3: string;
    Nationality: string;
}

export interface Driver {
    driverId: string;
    url: string;
    givenName: string;
    familyName: string;
    dateOfBirth: string;
    nationality: string;
    permanentNumber?: string;
}
