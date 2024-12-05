import HomeScreen from '@src/screens/HomeScreen/HomeScreen';
import PostsService from '@src/services/posts/PostsService';

export default async function Home() {
  const posts = await PostsService().getAll();

  return <HomeScreen posts={posts} />;
}
