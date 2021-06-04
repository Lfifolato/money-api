import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Transaction from 'App/Models/Transaction'
import TransactionValidator from 'App/Validators/TransactionValidator'

export default class TransactionsController {
  public async index({ response }: HttpContextContract) {
    const data = await Transaction.query().orderBy('id', 'desc')

    return response.status(200).send(data)
  }

  public async store({ request, response }: HttpContextContract) {
    const data = await request.validate(TransactionValidator)
    const transaction = await Transaction.create(data)

    return response.status(201).send(transaction)
  }

  public async show({}: HttpContextContract) {}

  public async update({}: HttpContextContract) {}

  public async destroy({ params, response }: HttpContextContract) {
    const transaction = await Transaction.findOrFail(params.id)

    transaction.delete()
  }
}
