import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Transaction from 'App/Models/Transaction'

export default class InitSeeder extends BaseSeeder {
  public async run() {
    await Transaction.createMany([
      {
        title: 'Sistema Web',
        amount: 450.5,
        type: 'deposit',
        category: 'web',
      },
      {
        title: 'Lanche',
        amount: 25,
        type: 'deposit',
        category: 'Food',
      },
      {
        title: 'Sistema Web',
        amount: 450.5,
        type: 'deposit',
        category: 'web',
      },
      {
        title: 'Sistema Web',
        amount: 450.5,
        type: 'deposit',
        category: 'web',
      },
    ])
  }
}
