
import { globby } from 'globby'
import { rimraf } from 'rimraf'

globby(['docs', '!docs/.gitkeep', '!docs/CNAME', '!docs/404.html', '!docs/generative.js'])
    .then(function then(paths) {
        paths.map(function map(item) {
            rimraf.sync(item)
        })
    })

