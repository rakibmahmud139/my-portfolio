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

const getSingleBlog = async (id: string) => {
  const result = await Blog.findById(id);
  return result;
};

export const BlogServices = {
  getAllFromDB,
  createIntoDB,
  getSingleBlog,
};
