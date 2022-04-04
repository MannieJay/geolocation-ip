export async function postRequest(url: string, data: any) {
    // Default options are marked with *
    const response = await fetch(url, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        headers: {
            'Content-Type': 'application/json',
        },
        body: data // body data type must match "Content-Type" header
    });
    return response; // parses JSON response into native JavaScript objects
}