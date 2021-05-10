export function fetchData(url: string) {
    return fetch(`http://ergast.com/api/f1/${url}.json`).then((res) => {
        if (!res.ok) {
            return null;
        }

        return res.json();
    })
        .then(({ MRData }) => MRData)
        .catch(() => null);
}
