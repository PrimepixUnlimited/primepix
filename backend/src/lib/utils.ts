import { Prisma } from '../generated/prisma'

export interface Context {
  db: Prisma;
  request?: any;
  req?: any;
  mailer?: any;
}
