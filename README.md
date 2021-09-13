perchristianberg.com
==========================

Website featuring Per Christian Berg, a musician in many genres and
disciplines.

## Developer goals

My goals with this website was to:

- Create a more or less vanilla website using only HTML (handlebars in this
  case, DRY and all that), CSS and javascript. No frameworks or fancy reacts,
  or vues.

- I chose `webpack` as my build tool, and that was the second goal. Get to
  grips with `webpack`. I've been using it for a long time but only through
  different added layers built on top, or indirectly.

- I wanted to learn [tailwind](https://tailwindcss.com/), seemed like an
  intresting library, and a perfect fit for a project like this.

## Installation

Clone this repository and run npm install
```shell
# Https
$ git clone https://github.com/roosta/perchristianberg.com
# Or using ssh
git clone git@github.com:roosta/perchristianberg.com.git

cd perchristianberg.com && npm install
```

## Developing

To start a server that will host a live reload serve of the page:
```sh
npm start
```
The [dev config](webpack.dev.js) will try to open `google-chrome-unstable` with
a forced device scale factor due to my personal screen setup, and will webpack
warn about this. Can be ignored, or changed.

## Deploying

Included in the repo is a [Dockerfile](Dockerfile), you could use that to
deploy the app with nginx. I personally use Dockerfiles and dokku setup on a
digital ocean droplet, but you can just run
```sh
npm run dist
```
to have the website compiled to the `./dist` folder, then deploy however you
like.

## Assets

The images used for the carousel is [images.json](images.json), and there are
some images hardcoded into the HTML. If you are forking this project for
whatever reason, these assets are not included in the GPL license and are not
free to use, and are under different licenses.

## License

Copyright (c) 2021 Daniel Berg

Source code distributed under [GNU General Public License v3.0](LICENSE) or later.

Copyright (c) 2021 for original creative works and images featured on
[perchristianberg.com](https://perchristianberg.com) are held by Per Christian
Berg.

