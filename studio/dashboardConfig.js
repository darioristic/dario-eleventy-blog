export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
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
                  buildHookId: '61ebd472e82a8fbd748137fe',
                  title: 'Sanity Studio',
                  name: 'dario-eleventy-blog-studio',
                  apiId: '2456b830-6bbe-46b1-9133-2beb7cfd0e05'
                },
                {
                  buildHookId: '61ebd4724855d8b281235676',
                  title: 'Blog Website',
                  name: 'dario-eleventy-blog',
                  apiId: '51501c9e-dd2d-4596-8b7d-5bea8e6eca93'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/darioristic/dario-eleventy-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://dario-eleventy-blog.netlify.app', category: 'apps'}
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
