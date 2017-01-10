str(Titanic)
df <- as.data.frame(Titanic)
head(df)
titanic.raw <- NULL
for(i in 1:4) {
  titanic.raw <- cbind(titanic.raw, rep(as.character(df[,i]), df$Freq))
}
titanic.raw <- as.data.frame(titanic.raw)
names(titanic.raw) <- names(df)[1:4]
dim(titanic.raw)
summary(titanic.raw)
library(arules)
install.packages("arules")
library()
rules.all <- apriori(titanic.raw)
inspect(rules.all)
rules <- apriori(titanic.raw, control = list(verbose=F),
                 parameter = list(minlen=2, supp=0.005, conf=0.8),
                 appearance = list(rhs=c("Survived=No", "Survived=Yes"),
                                   default="lhs"))
quality(rules) <- round(quality(rules), digits=3)
rules.sorted <- sort(rules, by="lift")
inspect(rules.sorted)
library(arulesViz)
plot(rules.all)
plot(rules.all, method="grouped")
plot(rules.all, method="graph")
net.bg <- barabasi.game(80)
plot(rules.all, method="paracoord", control=list(reorder=TRUE))
