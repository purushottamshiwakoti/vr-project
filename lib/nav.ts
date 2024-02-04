import { Book, PlayCircle, Sparkle } from "lucide-react";

export const userNav=[
    {
            name:"Products",
            href:"/products",
            hasChildren:true,
            children:[
                {
                        nav:[
                                {
                                        icon:Book,
                                        name:"Blog",
                                        description:"The latest industry news, updates and info"
                                },
                                {
                                        icon:Sparkle,
                                        name:"Costumer Stories",
                                        description:"Learn how our costumer are making big changes"
                                },
                                {
                                        icon:PlayCircle,
                                        name:"Video Tutorials",
                                        description:"Get up and running on new features and techniques"
                                },
                        ],
                        image:"/banner.png",
                        title:"We've just realeased an update!",
                        description:"Check out the all new dashboard views. Page now load faster.",
                        button1:"Dismiss",
                        button2:"Changelog",
                }
            ]
    },
    {
            name:"Resources",
            href:"/resources",
            hasChildren:true,
            children:[
                {
                        nav:[
                                {
                                        icon:Book,
                                        name:"Blog",
                                        description:"The latest industry news, updates and info"
                                },
                                {
                                        icon:Sparkle,
                                        name:"Costumer Stories",
                                        description:"Learn how our costumer are making big changes"
                                },
                                {
                                        icon:PlayCircle,
                                        name:"Video Tutorials",
                                        description:"Get up and running on new features and techniques"
                                },
                        ],
                        image:"/banner.png",
                        title:"We've just realeased an update!",
                        description:"Check out the all new dashboard views. Page now load faster.",
                        button1:"Dismiss",
                        button2:"Changelog",
                }
            ]
    },
    {
            name:"Pricing",
            href:"/pricing",
            hasChildren:false,
    },
]