export default function (plop) {
  function buildBase(name, initialDir) {
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
          },
          {
            type: 'add',
            path: `src/${initialDir}/${subPath()}{{snakeCase componentName}}.stories.ts`,
            templateFile: 'generators/component.stories.ts.hbs'
          },
          {
            type: 'add',
            path: `src/${initialDir}/${subPath()}{{snakeCase componentName}}.test.ts`,
            templateFile: 'generators/component.test.ts.hbs'
          }
        ]
        return actions
      }
    })
  }

  buildBase('view', 'views')
  buildBase('component', 'components')
}
