const https = require('https')

function getArgs() {
  const args = {}
  process.argv.slice(2, process.argv.length).forEach((arg) => {
    // long arg
    if (arg.slice(0, 2) === '--') {
      const longArg = arg.split('=')
      const longArgFlag = longArg[0].slice(2, longArg[0].length)
      const longArgValue = longArg.length > 1 ? longArg[1] : true
      args[longArgFlag] = longArgValue
    }
    // flags
    else if (arg[0] === '-') {
      const flags = arg.slice(1, arg.length).split('')
      flags.forEach((flag) => {
        args[flag] = true
      })
    }
  })
  return args
}
const args = getArgs()

const formatText = (text) => {
  // final array of items to be posted
  const result = []
  let currentBody = [
    {
      annotations: {
        bold: true
      },
      text: {
        content: ' GitHub Release:  ' + args.repo + `/${args.release}` + '\n',
        link: {
          type: 'url',
          url: `https://github.com/${args.repo}/releases/tag/${args.release}`
        }
      }
    }
  ]

  // split text into lines
  const lines = text.split('\n')

  // loop through lines
  lines.forEach((line) => {
    // if line contains ## convert to bold, otherwise conver to regular text object.
    if (line.includes('##')) {
      currentBody.length && result.push(...currentBody)
      currentBody = []
      line = line.replace('##', '')
      result.push({
        annotations: {
          bold: true
        },
        text: {
          content: result.length ? '\n' + line + '\n' : line + '\n'
        }
      })
    } else {
      if (line) {
        currentBody.push({
          text: {
            content: line + '\n'
          }
        })
      }
    }
  })

  return result
}

if (args.changelog) {
  const postData = JSON.stringify({
    parent: {
      type: 'database_id',
      database_id: args.databaseId
    },
    properties: {
      Changelog: {
        rich_text: formatText(args.changelog)
      },
      'Release Name/Version': {
        type: 'title',
        title: [
          {
            type: 'text',
            text: {
              content: args.release
            }
          }
        ]
      }
    }
  })

  const options = {
    hostname: 'api.notion.com',
    port: 443,
    path: '/v1/pages',
    method: 'POST',
    headers: {
      Authorization: `Bearer ${args.notion_key}`,
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'Notion-Version': '2021-08-16'
    }
  }

  const req = https.request(options, (res) => {
    console.log('statusCode:', res.statusCode)
  })

  req.on('error', (e) => {
    console.error(e)
  })

  req.write(postData)
  req.end()
}
