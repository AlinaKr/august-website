# August Website for Git collaboration

## The first time

```sh
$ git clone https://github.com/mc100s/august-website.git
$ cd august-website
$ npm install
```

Create a `.env` with the following code
```
PORT=3000
ENV=development
```

## Every time you would like to sync the project

```sh
$ git status

# If you want (press "q" to quit)
$ git diff my/file/to/see/the/differences

# If it's clean with pending changes
$ git add .
$ git commit -m "My Message"

$ git pull
```