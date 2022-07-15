/*

Provide default values for user session data. These are automatically added
via the `autoStoreData` middleware. Values will only be added to the
session if a value doesn't already exist. This may be useful for testing
journeys where users are returning or logging in to an existing application.

============================================================================

Example usage:

"full-name": "Sarah Philips",

"options-chosen": [ "foo", "bar" ]

============================================================================

*/

module.exports = {

    indexlink: "/index",
    devmode: "on",
    updated: "15-Jul-22",
    maintitle: "Future Farming Single Service",
    team: [
        {
            role: "Interaction design",
            name: "Jon Maher",
            email: "jon@hippoddigital.co.uk"
           },
        {
            role: "Service design",
            name: "Lindsey Williams",
            email: "Lindsey.Williams@defra.gov.uk"
           },
        {
            role: "Technical architect",
            name: "James Keep",
            email: "#"
           },
        {
            role: "Research",
            name: "Jennifer Gilkes",
            email: "#"
           },
        {
            role: "Policy",
            name: "TBC",
            email: "#"
           },
        {
            role: "Business analysis",
            name: "Sophia Attafuah",
            email: "#"
           },
        {
            role: "Content design",
            name: "TBC",
            email: "#"
           }
           ],
    stakeholders: [
        {
            name: "Peter Smith",
            role: "Head of Design for FFCP"
           }
           ],
    links: [
        {
            url: "https://app.mural.co/t/futurefarmingsd3138/m/futurefarmingsd3138/1651067545638/4331124ca9039c365a815be244bf62310d39fe65?invited=true&sender=uc30139899e37d01cac4a1915",
            title: "Future Farming Everything - Mural"
        },
        {
            url: "https://app.mural.co/invitation/mural/futurefarmingsd3138/1651507868839?sender=uc30139899e37d01cac4a1915&key=4673bce1-d7b0-40d6-9212-69beb20b37f7",
            title: "Single Service - Mural"
        }
    ],
    prototypes: [
        {
            id: 0,
            url: "/0",
            status: "building",
            desc: "TBC",
            updated: "12-Jul-22",
            start: "TBC",
            end: "TBC",
            participants: "TBC",
            home: "start",
            agent: "no",
            payments: "on",
            land: "on",
            messages: "on",
            reminders: "on",
            advice: "on",
            news: "on",
            sfi: "on",
            vets: "on",
            grants: "on",
            LNR: "on",
            pages: [
                {
                    title: "GOV.UK homepage",
                    template: "homepage",
                    content: "homepage",
                    url: "gov-uk",
                    pageid: 0,
                    back: 0,
                    complete: "yes"
                },
                {
                    title: "Search",
                    template: "Search",
                    content: "Search",
                    url: "search-results",
                    pageid: 1,
                    back: "gov-uk",
                    next: "",
                    complete: "yes"
                },
                {
                    title: "Future Farming Single Service",
                    template: "",
                    content: "Sign in",
                    url: "start",
                    pageid: 2,
                    back: "gov-uk",
                    next: "sign-in",
                    complete: "no"
                },
                {
                    title: "Sign in",
                    template: "",
                    content: "Sign in",
                    url: "sign-in",
                    pageid: 3,
                    back: "start",
                    next: "dashboard",
                    complete: "no"
                },
                {
                    title: "Dashboard",
                    template: "dashboard",
                    content: "dashboard",
                    url: "dashboard",
                    pageid: 4,
                    back: "",
                    next: "",
                    complete: "no"
                }
            ]
}
],
    firstname: "Joe",
    secondname: "Bloggs",
    businessname: "Imaginary Farm Ltd",
    email: "joe@imaginaryfarm.co.uk",
    landline: "01234 567890",
    mobile: "07123 456789",
    address1: "1 Godminster Lane",
    address2: "Drayton",
    town: "Bideford",
    postcode: "GU7 2BX"
}
