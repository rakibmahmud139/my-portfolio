import { Schema, model } from 'mongoose';
import { TBlog } from './blogInterface';

const BlogSchema = new Schema<TBlog>({
  title: {
    type: String,
    required: [true, 'title is required'],
  },
  platform: {
    type: String,
  },
  publicationDate: {
    type: String,
    required: [true, 'publication date is required'],
  },
  summary: {
    type: String,
    required: [true, 'summary is required'],
  },
  tags: {
    type: [String],
  },
  url: {
    type: String,
    required: [true, 'url is required'],
  },
  image: {
    type: String,
    required: [true, 'image is required'],
  },
  content: {
    type: String,
    required: [true, 'Content is required'],
  },
});

export const Blog = model<TBlog>('Blog', BlogSchema);
