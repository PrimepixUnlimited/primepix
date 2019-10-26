import { Prisma } from '../generated/prisma'

export interface Context {
  db: Prisma
  request?: any
  req?: any
  mailer?: any
  user?: any
}

export const generateCode = () => {
  const length = 6
  const randomNumber = () => Math.floor(Math.random() * 10)
  const numbers = []

  for (let i = 0; i < length; i++) {
    numbers.push(randomNumber())
  }

  if (numbers.length !== 6) throw new Error(`Please try again!`)

  const code = Number(numbers.join(''))
  return code
}
