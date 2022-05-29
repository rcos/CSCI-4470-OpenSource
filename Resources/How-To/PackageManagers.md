# Ubuntu
## apt-get
###First time:
```
  sudo apt-get update
```
###To Install Packages: 
```
  sudo apt-get install package-name
```

#Mac
##[Homebrew](http://brew.sh)
###First Time:
```
  ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
  brew doctor
  brew update
```

###To install packages:
```
  brew install <package-name>
```

#Windows
##[apt-cyg](https://github.com/transcode-open/apt-cyg) (Using Cygwin)
###First Time:
```
  lynx -source rawgit.com/transcode-open/apt-cyg/master/apt-cyg > apt-cyg
  install apt-cyg /bin
  apt-cyg update
  apt-cyg install wget

```

###To Install Packages: 
```
  apt-cyg install package-name
```

##[Chocolatey](https://chocolatey.org)
Follow https://github.com/chocolatey/choco/wiki/Installation

