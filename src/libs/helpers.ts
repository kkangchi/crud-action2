import { Topic } from '@/typs/topic';

export function convertDocToObj(doc: Topic) {
  return {
    _id: doc._id.toString(),
    title: doc.title,
    description: doc.description,
    createdAt: doc.createdAt || '',
    updatedAt: doc.updatedAt || '',
  };
}
