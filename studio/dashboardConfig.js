export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '62038bb9a31670008c38a6ae',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-heg5bge4',
                  apiId: '64662ac5-a7a1-4deb-900c-5510b022a4fa'
                },
                {
                  buildHookId: '62038bb9cb6a3a00a9d2fe8f',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-swhdumc6',
                  apiId: '203f7fa5-9c59-47b7-acb6-d1e5b616976f'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/dmbrowne/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-swhdumc6.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
