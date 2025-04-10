import User from "../database/models/userModel.js";

export const userSignUpService = async (data) => {
  try {
    const user = new User(data);

    return await user.save();
  } catch (error) {
    throw error;
  }
};

export const userLoginService = async (data) => {
  try {
    const user = new User(data);

    return await user.save();
  } catch (error) {
    throw error;
  }
};
export const updatedUserService = async (data) => {
  try {
    return await User.updateOne(data, { where: { id: data.id } });
  } catch (error) {
    throw error;
  }
};

export const deleteUserService = async (data) => {
  try {
    return await User.deleteOne(data, { where: { id: data.id } });
  } catch (error) {
    throw error;
  }
};
