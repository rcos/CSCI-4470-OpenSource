### 3/29/2016 Lecture is found here 

https://github.com/rcos/StatComputing


## Interesting link - Solving easy problems (puzzle) the hard way Ordinary Least Square Regression (OLS)

http://www.cerebralmastication.com/2012/03/solving-easy-problems-the-hard-way/

Sample Code in R written in class

## Simple commands
2+3

4*5/6

sqrt(2)

sqrt(6)

6^(1/3)

3^(1/6)

x<-7*41/pi

sqrt(-1+0i)

sqrt(-1)

str(precip)

precip[1:10]

require(graphics)

dotchart(precip[order(precip)], main = "precip data")

title(sub = "Average annual precipitation (in.)")

mean(precip)

which.max(precip)

which.min(precip)

precip['Phoenix']

precip['Albany']

stripchart(precip[1:20],xlab="rainfall")

hist(precip,main="")

precip[60:70]

str(rivers)

rivers[1:20]

max(rivers)

min(rivers)

str(discoveries)







## Plotting commands and Distributions

x <- seq(-4, 4, 0.1)

plot(x, dnorm(x,1,0.25), type = "l") 

y <- 0:30

plot(y, dbinom(y, 30, 0.25), type = "h")

curve(runif(x),-3, 3)

curve(sin, -2*pi, 2*pi, xname = "t")

curve ( dunif ( x , min = 2 , max = 6 ))










###Monty Hall Problem

car_placed_door<-sample(1:3,1000,replace=TRUE)

car_selection_door<-sample(1:3,1000,replace=TRUE)

sum(car_placed_door==car_selection_door)

## Some Data sets

pnorm(27.4, mean=50, sd=20)

x <- seq(-3,3,0.1)

plot(x=x, y=dnorm(x, mean=0, sd=1), type='l')

x <- seq(0,20,1)

plot(x=x, y=dbinom(x,20,0.5))

attach(faithful)

summary(faithful)

bins = seq(42,109,by=10)

freqs <- table(cut(waiting,bins))

par(fg=rgb(0.6,0.6,0.6))

hist(waiting, breaks='scott', prob=T,

     col=rgb(0.9,0.9,0.9),

     main='Time between eruptions of Old Faithful',

     ylab=NULL, xlab='minutes')

par(fg='black')

lines(density(waiting))

abline(v=mean(waiting), col=rgb(0.5,0.5,0.5))

abline(v=median(waiting), lty=3, col=rgb(0.5,0.5,0.5))

abline(v=mean(waiting)+sd(waiting), lty=2, col=rgb(0.7,0.7,0.7))

abline(v=mean(waiting)-sd(waiting), lty=2, col=rgb(0.7,0.7,0.7))

rug(waiting)

str(AirPassengers)

summary(AirPassengers)

str(quakes)

summary(quakes)

summary(USAccDeaths)

str(USArrests)

summary(USArrests)

USArrests

USArrests['New York',]

