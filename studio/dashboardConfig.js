export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
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
                  buildHookId: '5d67439335b52d027a7bfb45',
                  title: 'Sanity Studio',
                  name: 'sanity-sapper-studio',
                  apiId: 'db07c7be-49d1-47d1-b480-a1c6a5ed8ce5'
                },
                {
                  buildHookId: '5d6743931aa1e32ec0f2d6d8',
                  title: 'Blog Website',
                  name: 'sanity-sapper',
                  apiId: 'ac9c0152-1621-4ff3-81b0-675223d6ed71'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/bshyman/sanity-sapper',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-sapper.netlify.com', category: 'apps'}
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
