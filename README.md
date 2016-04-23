[![Stories in Ready](https://badge.waffle.io/HolisticParallelogram/crunchy-tunes.png?label=ready&title=Ready)](https://waffle.io/HolisticParallelogram/crunchy-tunes)
# crunchy-tunes
A music player and aggregator built on the Spotify, YouTube and Soundcloud APIs.

## Legacy Team

  - __Product Owner__: Reina Mei
  - __Scrum Master__: Laura Curley
  - __Development Team Members__: Andrew Ho, Joel Aguero, Laura Curley, Reina Mei
  
## Greenfield Team

  - __Product Owner__: Kevin Meraz
  - __Scrum Master__: Brandon Ramirez
  - __Development Team Members__: Nemo Baker, Ashwin Ravi, Brandon Ramirez, Kevin Meraz
  

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)
    1. [Installing Dependencies](#installing-dependencies)
    1. [Tasks](#tasks)
1. [Team](#team)
1. [Contributing](#contributing)

## Usage

Checkout the app in action [here](http://159.203.225.145:8080/)!

## Requirements

Node v5.8

## Tech Stack
- [React](https://facebook.github.io/react/)
- [Node](https://nodejs.org/en/) and [Express](http://expressjs.com/)
- [Sequelize ORM](http://docs.sequelizejs.com/en/latest/) and [MySQL](https://www.mysql.com/)

## Development

### Setting up MySQL database:
(If you don't have Homebrew installed, go to http://brew.sh/ to install Homebrew.)
```sh
brew install mysql
mysql -u root
CREATE DATABASE crunchy
```

### Starting the MySQL server:

```sh
mysql.server start
```

### Stopping the MySQL server:

```sh
mysql.server stop
```

### Installing Dependencies

From within the root directory:

```sh
npm install
npm install -g webpack
npm install -g karma-cli
npm install -g jasmine
```

## Serve your files on a webpack server:

'npm run dev-start'

This script uses web pack to bundle your js and jsx files (with source maps), watches the files for changes to trigger a new bundle, and starts your node server on localhost:8080.

Navigate your browser to localhost: 8080 to view the app.


### Current Build Health [![Build Status](https://travis-ci.org/HolisticParallelogram/crunchy-tunes.svg?branch=master)](https://travis-ci.org/HolisticParallelogram/crunchy-tunes)
View the build [history]](https://travis-ci.org/HolisticParallelogram/crunchy-tunes/builds)

### Roadmap

View the project roadmap [here](https://waffle.io/HolisticParallelogram/crunchy-tunes)
[![Stories in 'Backlog'](https://badge.waffle.io/HolisticParallelogram/crunchy-tunes.svg?label=Backlog&title=Backlog)](http://waffle.io/HolisticParallelogram/crunchy-tunes)
[![Stories in 'Ready'](https://badge.waffle.io/HolisticParallelogram/crunchy-tunes.svg?label=Ready&title=Ready)](http://waffle.io/HolisticParallelogram/crunchy-tunes)
[![Stories in 'In Progress'](https://badge.waffle.io/HolisticParallelogram/crunchy-tunes.svg?label=In%20Progress&title=In%20Progress)](http://waffle.io/HolisticParallelogram/crunchy-tunes)


## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for contribution guidelines.
