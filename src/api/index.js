import {createClient} from "@sanity/client"


export const sanityClient  = createClient({
    projectId: import.meta.env.VITE_SANITY_PROJECT_ID,
    dataset: import.meta.env.VITE_SANITY_DATA_SET,
    useCdn: import.meta.env.VITE_SANITY_ENBALE_CDN,
    apiVersion: import.meta.env.VITE_SANITY_API_VERSION,
    token: import.meta.env.VITE_SANITY_API_TOKEN,
    
})

