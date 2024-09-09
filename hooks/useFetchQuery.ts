import {useInfiniteQuery, useQuery} from "@tanstack/react-query";

const endpoint = "https://pokeapi.co/api/v2"

type API = {
    '/pokemon?limit=45': {
        count: number,
        next: string | null,
        results: {name: string, url: string}[]
    }
}

export function useFetchQuery<T extends keyof API> (path: string) {
    return useQuery({
        queryKey: [path],
        queryFn: async () => {
            wait(1)
            return fetch(endpoint + path).then(r => r.json())
        }
    })
}

export function useInfiniteFetchQuery(path: string) {
    return useInfiniteQuery({
        queryKey: [path],
        initialPageParam: endpoint + path,
        queryFn: async ({pageParam}) => {
            await wait(1)
            return fetch(pageParam, {
                headers: {
                    Accept: 'application/json'
                }
            }).then(r => r.json())
        },
        getNextPageParam: (lastPage) => {
            if ("next" in lastPage) {
                return lastPage.next
            }
            return null
        }
    })
}

function wait (duration: number) {
    return new Promise(resolve => setTimeout(resolve, duration * 1000))
}