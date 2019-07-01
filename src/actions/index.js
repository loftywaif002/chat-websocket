import { NEW_USER } from './types'
import faker from 'faker'

export const generateUser = () => {
  let user = faker.name.findName()
  return{
    type: NEW_USER,
    user
  }
}
