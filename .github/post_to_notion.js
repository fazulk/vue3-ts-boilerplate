const https = require('https')
console.log('node works')
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

const postData = JSON.stringify({
  parent: {
    type: 'database_id',
    database_id: 'd7778df30b5543c587e52b421c26a123'
  },
  properties: {
    Changelog: {
      rich_text: [
        {
          text: {
            content: args.changelog || 'some shit'
          }
        }
      ]
    },
    Name: {
      type: 'title',
      title: [
        {
          type: 'text',
          text: {
            content: 'Good One asdfJeff'
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
