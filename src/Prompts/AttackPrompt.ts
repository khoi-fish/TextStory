import chalk from 'chalk'
import { prompt } from 'enquirer'

const attackPrompt = (attacks: string[]) =>
  prompt<{ attack: string }>({
    type: 'select',
    name: 'attack',
    message: chalk.cyan('Attack or Special Attack?'),
    choices: attacks.map(a => ({
      name: a,
      message: chalk.magenta(a),
    })),
  })

export { attackPrompt }
