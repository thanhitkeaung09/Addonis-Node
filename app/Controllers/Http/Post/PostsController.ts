import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Post from 'App/Models/Post'
import { v4 as uuidv4 } from 'uuid'

export default class PostsController {
  /**
   *
   *  All Posts
   */
  public async index() {
    return await Post.all()
  }

  /**
   *
   *  Single Post
   */
  public async single({ request, response }: HttpContextContract) {
    const id = request.params().post_id
    const post = await Post.find(id)
    if (post) {
      return post
    }
    return 'post not found'
  }
  /**
   *
   *  Post Create
   */
  public async create({ request, response }: HttpContextContract) {
    const image = request.file('image')
    const path = 'adonis/post/'
    const name = `${uuidv4()}.${image?.extname}`
    const image_path = `${path}${name}`
    const post = new Post()
    post.userId = request.body().user_id
    post.title = request.body().title
    post.description = request.body().description
    post.image = image_path
    if (image) {
      await image.moveToDisk(
        path,
        {
          name: name,
        },
        's3'
      )
      post.save()

      return 'Post Create Successfully'
    }
  }
  /**
   *
   *  Post Delete
   */
  public async delete() {
    return 'post update'
  }
  /**
   *
   *  Post Update
   */
  public async update() {
    return 'post update'
  }
}
