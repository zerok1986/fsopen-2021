const jestTest = (blogs) => {
  return 1
}

const totalLikes = (blogs) => {
  return blogs.map((blog) => blog.likes).reduce((prev, curr) => prev + curr)
}

const favoriteBlog = (blogs) => {
  return [
    blogs
      .map((blog) => blog)
      .reduce((prev, curr) => (prev.likes > curr.likes ? prev : curr)),
  ]
}

const mostBlogs = (blogs) => {
  let mostBlogsObj = {
    author: '',
    blogs: 0,
  }
  let authors = blogs.map((blog) => blog.author)

  let map = authors.reduce(
    (acc, e) => acc.set(e, (acc.get(e) || 0) + 1),
    new Map()
  )
  mostBlogsObj.author = [...map.entries()][2][0]
  mostBlogsObj.blogs = [...map.entries()][2][1]

  return mostBlogsObj
}

const mostLikes = (blogs) => {
  let mostLikesObj = {
    author: '',
    likes: 0,
  }

  let authorLikes = blogs.reduce((op, { author, likes }) => {
    op[author] = op[author] || 0
    op[author] += likes
    return op
  }, {})

  let mostLikes = Object.keys(authorLikes).sort(
    (a, b) => authorLikes[b] - authorLikes[a]
  )[0]

  mostLikesObj.author = mostLikes
  mostLikesObj.likes = authorLikes[mostLikes]
  return mostLikesObj
}

module.exports = { jestTest, totalLikes, favoriteBlog, mostBlogs, mostLikes }
