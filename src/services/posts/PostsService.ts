import path from "path"
import fs from "fs/promises"
import matter from "gray-matter"

export interface Post {
  metadata: {
    date: string
    url: string
    excerpt: string
    tags: string[]
  }
  image?: string
  slug: string
  title: string
  content: string
}

export default function PostsService() {
  return {
    async getAll(): Promise<Post[]> {
      const postFiles = await fs.readdir(path.resolve(".", "_data", "posts"), { encoding: "utf-8" })

      const posts = Promise.all(postFiles.map(async (file): Promise<Post> => {
        const post = await fs.readFile(path.resolve(".", "_data", "posts", file), { encoding: "utf-8" })
        const { data, content } = matter(post)

        return {
          metadata: {
            date: new Date(data.date).toISOString(),
            url: data.url,
            excerpt: data.excerpt,
            tags: data.tags
          },
          image: data.image || undefined,
          slug: file.replace(".md", ""),
          title: data.title,
          content,
        }
      }))

      return posts
    }
  }
}
