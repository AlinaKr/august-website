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

### Step 1 | Clean the code

Make sure that your project is working on your computer and see the differences you made with the following commands:

```sh
$ git status

# If you want (press "q" to quit)
$ git diff my/file/to/see/the/differences
```

### Step 2 | Add, commit and pull

```sh
$ git add .
$ git commit -m "My Message"
$ git pull
```

### Step 3 | If `git pull` pull somes changes

Merge everything manually and go bask to step 1.

### Step 4 | If `git pull` says "Already up-to-date."

```sh
$ git push
```