import { schema, rules } from '@ioc:Adonis/Core/Validator'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
// table.string('title')
//       table.double('amount')
//       table.string('type')
//       table.string('category')
export default class TransactionValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    title: schema.string({ trim: true }, [
      rules.unique({ table: 'transactions', column: 'title' }),
    ]),
    amount: schema.number(),
    type: schema.string({ trim: true }),
    category: schema.string({ trim: true }),
  })

  public messages = {
    unique: 'Title ja Cadastrado',
  }
}
