import UserMongooseDao from "../daos/userMongooseDao.js";

class UserManager {
  constructor() {
    this.userDao = new UserMongooseDao();
  }

  async paginate(criteria) {
    return this.userDao.paginate(criteria);
  }

  async getOne(id) {
    return this.userDao.getOne(id);
  }

  async create(data) {
    const user = await this.userDao.create(data);
    return { ...user, password: undefined };
  }

  async updateOne(id, data) {
    return this.userDao.updateOne(id, data);
  }

  async deleteOne(id) {
    return this.userDao.deleteOne(id);
  }

  async getOneByEmail() {
    return this.userDao.getOneByEmail(email);
  }

  async forgetPassword(dto) {
    const user = await this.userDao.getOneByEmail(dto.email);
    user.password = dto.password;
    return this.userDao.updateOne(user.id, user);
  }
}

export default UserManager;
