import { DateTime } from 'luxon'
import { BaseModel, column, belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm'
import User from './User'
import Skill from './Skill'

export default class SkillUser extends BaseModel {
  public static table = 'skill_users'
  @column({ isPrimary: true })
  public id: number

  @column({ columnName: 'user_id', serializeAs: 'userId' })
  public userId: number

  @belongsTo(() => User, {
    foreignKey: 'userId',
  })
  public user: BelongsTo<typeof User>

  @column({ columnName: 'skill_id', serializeAs: 'skillId' })
  public skillId: number

  @belongsTo(() => Skill, {
    foreignKey: 'skillId',
  })
  public skill: BelongsTo<typeof Skill>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
