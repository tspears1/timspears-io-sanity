
export default {
    name: 'settings',
    title: 'Settings',
    type: 'document',
    groups: [
        {
            name: 'global',
            title: 'Global',
            default: true,
            // icon: 'some icon',
        },
        {

        }
    ],
    fields: [
        {
            name: 'siteTitle',
            title: 'Site Title',
            type: 'string',
        }
    ]
}