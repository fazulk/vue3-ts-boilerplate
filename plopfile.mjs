export default function (plop) {
  plop.setGenerator('Add new store', {
    description: 'Adds new store with unit tests',
    prompts: [
      {
        type: 'input',
        name: 'storeId',
        message: 'Name/Id of store?'
      }
    ],
    actions: [
      {
        type: 'add',
        path: 'src/stores/{{snakeCase storeId}}.ts',
        templateFile: 'generators/store.ts.hbs'
      },
      {
        type: 'add',
        path: 'src/stores/{{snakeCase storeId}}.test.ts',
        templateFile: 'generators/store.test.ts.hbs'
      }
    ]
  })
  function buildBaseForComponentViews(name, initialDir) {
    plop.setGenerator(`Add ${name}`, {
      description: `Add ${name} with story and tests`,
      prompts: async function (inquirer) {
        return inquirer
          .prompt([
            {
              type: 'input',
              name: 'componentName',
              message: `Name of ${name}:`
            },
            {
              type: 'confirm',
              name: 'subPath',
              default: false,
              message: 'Install in sub directory?'
            },
            {
              type: 'confirm',
              name: 'addStory',
              default: false,
              message: 'Add Story?'
            }
            /* Pass your questions in here */
          ])
          .then(async (answers) => {
            if (answers.subPath) {
              const { subPathName } = await inquirer.prompt([
                {
                  type: 'input',
                  name: 'subPathName',
                  message: 'Sub directory name:'
                }
              ])
              answers.subPathName = subPathName
            }
            return answers
          })
      },
      actions: function (data) {
        function subPath() {
          if (data.subPathName) {
            return '{{pathCase subPathName}}/'
          }
          return ''
        }

        const actions = [
          {
            type: 'add',
            path: `src/${initialDir}/${subPath()}{{snakeCase componentName}}.vue`,
            templateFile: 'generators/component.vue.hbs'
          }
        ]

        if (data.addStory)
          actions.push(
            {
              type: 'add',
              path: `src/${initialDir}/${subPath()}{{snakeCase componentName}}.stories.ts`,
              templateFile: 'generators/component.stories.ts.hbs'
            },
            {
              type: 'add',
              path: `src/${initialDir}/${subPath()}{{snakeCase componentName}}.test.ts`,
              templateFile: 'generators/component.test-story.ts.hbs'
            }
          )
        else
          actions.push({
            type: 'add',
            path: `src/${initialDir}/${subPath()}{{snakeCase componentName}}.test.ts`,
            templateFile: 'generators/component.test.ts.hbs'
          })

        return actions
      }
    })
  }

  buildBaseForComponentViews('view', 'views')
  buildBaseForComponentViews('component', 'components')
}
//
