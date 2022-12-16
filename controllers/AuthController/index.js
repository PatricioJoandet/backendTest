import { UserDao } from "../../dao/index.js";

const signUp = async (req, res) => {
  try {
    const { name, lastname, email, password } = req.body
    if(!name || !lastname || !email || !password) return res.send({ success: false });
    const existUser = await UserDao.getOne({ email });
    if(existUser && existUser.password) {
      return res.send({ success: false, error: `User already exists 🙃`});
    }
    if (existUser && !existUser.password) {
      const updateUser = await UserDao.updateById(existUser._id, { ...existUser, password })
      return res.send({ success: true })
    }
    await UserDao.save({ naeme, lastname, email, password });
    res.send({ success: true });
  } catch (error) {
    console.log(`Error in AuthRouter 😗`);
    res.send({ sucess: false });
  }
}

export const AuthControllers = { signUp };