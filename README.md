# nuxt-blog

> My stunning Nuxt.js project

## Build Setup

```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn run dev

# build for production and launch server
$ yarn run build
$ yarn start

# generate static project
$ yarn run generate

# deploy static project
--$ yarn run deploy--
$ git subtree push --prefix=dist origin gh-pages
```

## ERROR

1.  [Error: [vuex] Do not mutate vuex store state outside mutation handlers](https://github.com/nuxt/nuxt.js/issues/1917)
2.  `/topic/:id` 接口有缓存，造成读取的 `is_collect` 为 `false`

## [nuxt 部署至 GitHub Pages]

1.  [如何用 Github 的 gh-pages 分支展示自己的项目](https://www.cnblogs.com/MuYunyun/p/6082359.html)
2.  [Website not built properly after running 'nuxt generate'](https://github.com/nuxt/nuxt.js/issues/2636)
3.  [https://github.com/Zurnaz/nuxt-example/blob/master/nuxt.config.js](https://github.com/Zurnaz/nuxt-example/blob/master/nuxt.config.js)
4.  [https://github.com/rockcs1992/Personal-Website/blob/master/nuxt.config.js](https://github.com/rockcs1992/Personal-Website/blob/master/nuxt.config.js)
