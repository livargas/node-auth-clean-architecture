import { UserEntity, CustomError } from "../../domain";

export class UserMapper {
  static userEntityFromObject(object: { [key: string]: any }) {
    const { _id, id, name, email, password, roles } = object;

    if (!_id || !id) throw CustomError.badRequest("Missing id");

    if (!name) throw CustomError.badRequest("Missing name");
    if (!email) throw CustomError.badRequest("Missing email");
    if (!password) throw CustomError.badRequest("Missing Password");
    if (!roles) throw CustomError.badRequest("Missing Roles");

    return new UserEntity(_id || id, name, email, password, roles);
  }
}
