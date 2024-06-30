import { TBlog } from './blogInterface';
import { Blog } from './blogModel';

const createIntoDB = async (payload: TBlog) => {
  const result = await Blog.create(payload);
  return result;
};

const getAllFromDB = async () => {
  const result = await Blog.find();
  return result;
};

export const BlogServices = {
  getAllFromDB,
  createIntoDB,
};
