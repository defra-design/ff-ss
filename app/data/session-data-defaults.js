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
    devmode: "off",
    updated: "04-Aug-22",
    maintitle: "Future Farming Single Service",
    team: [
        {
            role: "Interaction design",
            name: "Jon Maher",
            email: "jon@hippoddigital.co.uk"
           },
        {
            role: "Service design / Product lead",
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
            name: "Cindy Hughes",
            email: "cindy.hughes@defra.gov.uk"
           },
        {
            role: "Business analysis",
            name: "Sophia Attafuah",
            email: "#"
           },
        {
            role: "Content design",
            name: "Eleanor Shakeshaft",
            email: "eleanor.shakeshaft@defra.gov.uk"
           },
        {
            role: "Service design",
            name: "Becky Miller",
            email: "becky.miller@defra.gov.uk"
           },
        {
            role: "Co-design coach",
            name: "Marion Lean",
            email: "marion.lean@defra.gov.uk"
           },
        {
            role: "#",
            name: "Neville Cavendish",
            email: "neville.cavendish@defra.gov.uk"
           },
        {
            role: "#",
            name: "Hannah Freeman",
            email: "hannah.freeman@defra.gov.uk"
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
        },
        {
            url: "https://app.mural.co/t/futurefarmingsd3138/m/futurefarmingsd3138/1658150753050/8a246584d40de0147fb4fd4cb1a462b01467398e?sender=uc30139899e37d01cac4a1915",
            title: "Single Service - Design spike Mural"
        }
    ],
    prototypes: [
        {
            id: 0,
            url: "/0",
            status: "building",
            desc: "TBC",
            updated: "04-Aug-22",
            start: "TBC",
            end: "TBC",
            participants: "TBC",
            home: "start",
            agent: "no",
            payments: "on",
            land: "on",
            messages: "on",
            tasks: "on",
            advice: "on",
            news: "on",
            sfi: "on",
            vets: "on",
            grants: "on",
            LNR: "off",
            historic: "on",
            scheme: "SFI arable and horticultural soils standard",
            agreed: "show",
            eligible: "show",
            ineligible: "",
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
                    template: "account",
                    content: "Sign in",
                    url: "start",
                    pageid: 2,
                    back: "gov-uk",
                    next: "sign-in",
                    complete: "no"
                },
                {
                    title: "Sign in",
                    template: "account",
                    content: "Sign in",
                    url: "sign-in",
                    pageid: 3,
                    back: "start",
                    next: "spinner-sign-in",
                    complete: "no"
                },
                {
                    title: "Dashboard",
                    template: "account",
                    content: "dashboard",
                    url: "dashboard",
                    pageid: 4,
                    back: "",
                    next: "",
                    complete: "no"
                },
                {
                    title: "Payments",
                    template: "payments",
                    content: "payments",
                    url: "payments",
                    pageid: 5,
                    back: "dashboard",
                    next: "",
                    complete: "no"
                },
                {
                    title: "Permissions",
                    template: "account",
                    content: "permissions",
                    url: "permissions",
                    pageid: 6,
                    back: "dashboard",
                    next: "",
                    complete: "no"
                },
                {
                    title: "Personal details",
                    template: "account",
                    content: "details",
                    url: "details",
                    pageid: 7,
                    back: "dashboard",
                    next: "",
                    complete: "no"
                },
                {
                    title: "Documents",
                    template: "Documents",
                    content: "documents",
                    url: "documents",
                    pageid: 8,
                    back: "dashboard",
                    next: "",
                    complete: "no"
                },
                {
                    title: "SFI - improved grassland soils standard",
                    template: "payments",
                    content: "payment statement",
                    url: "payment-statement-31773",
                    pageid: 9,
                    back: "dashboard",
                    next: "",
                    complete: "no"
                },
                {
                    title: "SFI - improved grassland soils standard agreement",
                    template: "schemes",
                    content: "agreement",
                    url: "agreemeent-sfi-grassland",
                    pageid: 10,
                    back: "schemes",
                    next: "",
                    complete: "no"
                },
                {
                    title: "All grants and funding",
                    template: "schemes",
                    content: "payment statement",
                    url: "schemes",
                    pageid: 11,
                    back: "dashboard",
                    next: "",
                    complete: "no"
                },
                {
                    title: "Apply for SFI",
                    template: "application",
                    content: "application",
                    url: "apply-for-sfi",
                    pageid: 12,
                    back: "dashboard",
                    next: "",
                    complete: "no"
                },
                {
                    title: "Manage your land",
                    template: "land",
                    content: "payment statement",
                    url: "land",
                    pageid: 13,
                    back: "dashboard",
                    next: "",
                    complete: "no"
                },
                {
                    title: "Tasks",
                    template: "tasks",
                    content: "tasks",
                    url: "tasks",
                    pageid: 14,
                    back: "dashboard",
                    next: "",
                    complete: "no"
                },
                {
                    title: "Reminders",
                    template: "account",
                    content: "reminders",
                    url: "reminders",
                    pageid: 15,
                    back: "dashboard",
                    next: "",
                    complete: "no"
                },
                {
                    title: "Task",
                    template: "tasks",
                    content: "tasks",
                    url: "task",
                    pageid: 16,
                    back: "actions",
                    next: "",
                    complete: "no"
                },
                {
                    title: "Add your SOM test results",
                    template: "tasks",
                    content: "task",
                    url: "add-som-test",
                    pageid: 17,
                    back: "tasks",
                    next: "",
                    complete: "no"
                },
                {
                    title: "Upload a document",
                    template: "documents",
                    content: "documents",
                    url: "upload-document",
                    pageid: 18,
                    back: "documents",
                    next: "",
                    complete: "no"
                },
                {
                    title: "Task",
                    template: "tasks",
                    content: "task",
                    url: "task-2",
                    pageid: 19,
                    back: "actions",
                    next: "",
                    complete: "no"
                },
                {
                    title: "Task",
                    template: "tasks",
                    content: "task",
                    url: "task-3",
                    pageid: 20,
                    back: "actions",
                    next: "",
                    complete: "no"
                },
                {
                    title: "Confirm your eligibility",
                    template: "application",
                    content: "application",
                    url: "apply-for-sfi-eligibility",
                    pageid: 21,
                    back: "apply-for-sfi",
                    next: "",
                    complete: "no"
                },
                {
                    title: "SFI improved arable and horticultural soils standard - guidance",
                    template: "application",
                    content: "application",
                    url: "apply-for-sfi-guidance",
                    pageid: 22,
                    back: "apply-for-sfi",
                    next: "",
                    complete: "no"
                },
                {
                    title: "SFI improved arable and horticultural soils standard - calculator",
                    template: "application",
                    content: "application",
                    url: "apply-for-sfi-calculator",
                    pageid: 23,
                    back: "apply-for-sfi",
                    next: "",
                    complete: "no"
                },
                {
                    title: "Action 1: Will you complete a soil assessment and produce a written soil management plan covering the land entered into the standard in the first year of your SFI standards agreement?",
                    template: "application",
                    content: "application",
                    url: "apply-for-sfi-levels",
                    pageid: 24,
                    back: "apply-for-sfi",
                    next: "",
                    complete: "no"
                },
                {
                    title: "SFI improved arable and horticultural soils standard - select your land parcels",
                    template: "application",
                    content: "application",
                    url: "apply-for-sfi-land",
                    pageid: 25,
                    back: "apply-for-sfi",
                    next: "",
                    complete: "no"
                },
                {
                    title: "Check your answers",
                    template: "application",
                    content: "application",
                    url: "apply-check-your-answers",
                    pageid: 26,
                    back: "apply-for-sfi",
                    next: "",
                    complete: "no"
                },
                {
                    title: "Manage payments",
                    template: "payments",
                    content: "payments",
                    url: "manage-payments",
                    pageid: 27,
                    back: "dashboard",
                    next: "",
                    complete: "no"
                },
                {
                    title: "Action 2: Will you make sure all the land parcels entered into the standard have been tested for soil organic matter within the last five years?",
                    template: "application",
                    content: "application",
                    url: "apply-for-sfi-levels-2",
                    pageid: 28,
                    back: "apply-for-sfi-levels",
                    next: "",
                    complete: "no"
                },
                {
                    title: "Action 3: Will you add organic matter to the soil all the land parcels entered into the standard at least once during your 3-year SFI standards agreement?",
                    template: "application",
                    content: "application",
                    url: "apply-for-sfi-levels-3",
                    pageid: 29,
                    back: "apply-for-sfi-levels-2",
                    next: "",
                    complete: "no"
                },
                {
                    title: "Action 4: Will you make sure that at least 70% of total area of land entered into this level of the standard is well establish green cover over the winter months (December until end of February)?",
                    template: "application",
                    content: "application",
                    url: "apply-for-sfi-levels-4",
                    pageid: 30,
                    back: "apply-for-sfi-levels-3",
                    next: "",
                    complete: "no"
                },
                {
                    title: "Action 4:  Will you make sure there is a well-established screen cover on at least 50% and multi species cover crops on at least an additional 20% of the land entered into this level of the standard, over the winter months (December until end of February)?",
                    template: "application",
                    content: "application",
                    url: "apply-for-sfi-levels-5",
                    pageid: 31,
                    back: "apply-for-sfi-levels-4",
                    next: "",
                    complete: "no"
                },
                {
                    title: "Vet visit report: Imaginary Farm Ltd",
                    content: "application",
                    url: "vet-visit-report",
                    pageid: 32,
                    back: "documents",
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
