import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Skill from 'App/Models/Skill'
import SkillUser from 'App/Models/SkillUser'
import User from 'App/Models/User'

export default class UsersController {
  public async index({ response }: HttpContextContract) {
    const users = await User.query().preload('skills')

    return response.ok(users)
  }
  public async skillUserRegister({ request, response }: HttpContextContract) {
    const userId = request.input('userId')
    const skillId = request.input('skillId')

    const skill = await SkillUser.create({ userId, skillId })

    return response.created({ skill })
  }
  public async userRegister({ request, response }: HttpContextContract) {
    const name = request.input('name')

    const user = await User.create({ name })

    return response.created({ user })
  }
  public async skillRegister({ request, response }: HttpContextContract) {
    const name = request.input('name')

    const skill = await Skill.create({ name })

    return response.created({ skill })
  }
}
