import chalk from 'chalk'
import { prompt } from 'enquirer'

const classPrompt = (classes: string[]) =>
  prompt<{ classType: string }>({
    type: 'select',
    name: 'classType',
    message: chalk.cyan('Choose a class:'),
    choices: classes.map(a => ({
      name: a,
      message: chalk.magenta(a),
    })),
  })

export { classPrompt }
