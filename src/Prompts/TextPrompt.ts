import chalk from 'chalk'
import { prompt } from 'enquirer'

const textPrompt = (text: string) =>
  prompt<{ attack: string }>({
    type: 'string',
    name: 'text',
    message: chalk.cyan(text),
  })

export { textPrompt }
