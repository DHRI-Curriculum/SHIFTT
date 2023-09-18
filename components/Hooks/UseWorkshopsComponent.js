import useSWRImmutable from "swr/immutable";
import { useSWRConfig } from "swr";
import { useState, useEffect } from "react";
import matter from "gray-matter";

export default function UseWorkshopComponent(workshop) {
    const [parsedWorkshop, setParsedWorkshop] = useState(null);

    let builtURL;
    // remove '?ref=main' from the end of the url
    builtURL = workshop.workshop.url.split('?')[0]

    let headers;
    if (process.env.NEXT_PUBLIC_GITHUBSECRET === 'true') {
        headers = new Headers(
            {
                'Content-Type': 'application/json',
                'authorization': `token ${process.env.NEXT_PUBLIC_GITHUBSECRET}`
            });
    } else {
        headers = new Headers(
            {
                'Content-Type': 'application/json',
            });
    }

    const fetcher = (headers) => (...args) => fetch(...args, {
        headers: headers,
        method: 'GET',
    }).then(
        res => res.json()
    ).then(
        // decode from base64
        res => Buffer.from(res.content, 'base64').toString()
    )
    const { data, isLoading, error } = useSWRImmutable(builtURL, fetcher(headers),
        {
            onSuccess(data) {
                // console.log('data returned')
            },
            onFailure(err) {
                console.log('err', err)
                console.log('workshop.url', builtURL)
            }
        })
    useEffect(() => {
        if (data) {
            setParsedWorkshop(matter(data))
        }
    }, [data])

    return (
        <div>

            <div>
                <h1>{parsedWorkshop && parsedWorkshop.data.title}</h1>
                <p>{parsedWorkshop && parsedWorkshop.data.description}</p>
            </div>

        </div>
    )
}
