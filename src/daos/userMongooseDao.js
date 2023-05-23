import userSchema from "../models/userSchema.js";

class UserMongooseDao {
  async paginate(criteria) {
    const { limit, page } = criteria;
    const userDocuments = await userSchema.paginate({}, { limit, page });

    userDocuments.docs = userDocuments.docs.map((document) => ({
      id: document._id,
      firstName: document.firstName,
      lastName: document.lastName,
      email: document.email,
      age: document.age,
    }));
    return userDocuments;
  }

  async getOne(id) {
    const userDocument = await userDocument.findOne({ _id: id });
    if (!userDocument._id) {
      throw new Error("User dont exist.");
    }
    return {
      id: userDocument._id,
      firstName: userDocument.firstName,
      lastName: userDocument.lastName,
      email: userDocument.email,
      age: userDocument.age,
      password: userDocument.password,
    };
  }
  async getOneByEmail(email) {
    const userDocument = await userDocument.findOne({ email: email });
    if (!userDocument._id) {
      throw new Error("User dont exist.");
    }
    return {
      id: userDocument._id,
      firstName: userDocument.firstName,
      lastName: userDocument.lastName,
      email: userDocument.email,
      age: userDocument.age,
      password: userDocument.password,
    };
  }

  async create(data) {
    const userDocument = await userDocument.create(data);
    return {
      id: userDocument._id,
      firstName: userDocument.firstName,
      lastName: userDocument.lastName,
      email: userDocument.email,
      age: userDocument.age,
      password: userDocument.password,
    };
  }

  async updateOne(id, data) {
    const userDocument = await userDocument.findOneAndUpdate(
      { _id: id },
      data,
      { new: true }
    );
    if (!userDocument._id) {
      throw new Error("User dont exist.");
    }
    return {
      id: userDocument._id,
      firstName: userDocument.firstName,
      lastName: userDocument.lastName,
      email: userDocument.email,
      age: userDocument.age,
    };
  }

  async deleteOne(id) {
    return await userSchema.deleteOne({ _id: id });
  }
}

export default UserMongooseDao;
