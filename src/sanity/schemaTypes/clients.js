import {defineField,defineType} from "sanity"


const clients = defineType({
    name:"clients",
    title:"Clients",
    type:"document",
    fields:[
        defineField({
            name:"name",
            title:"Name",
            type:"string"
        }),
        defineField({
            name:"image",
            title:"Image",
            type:"image",
            options:{
                hotspot:true
            }
        }),
        defineField({
            name:"url",

            title:"Url",
            type:"url"
        })
    ]
})

export default clients