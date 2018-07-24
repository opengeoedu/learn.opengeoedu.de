install.packages("timevis")
devtools::install_github("daattali/timevis")
library(timevis)
library(htmlwidgets)


data <- data.frame(
  id      = 1:4,
  content = c("Item one"  , "Item two"  ,"Ranged item", "Item four"),
  start   = c("2016-01-10", "2016-01-11", "2016-01-20", "2016-02-14 15:00:00"),
  end     = c(NA          ,           NA, "2016-02-04", NA)
)

wg <- timevis(data)

wd <- getwd()
setwd(tempdir())
htmlwidgets::saveWidget(timevis(data), "timeline.html", selfcontained = FALSE)
file.copy(file.path(getwd(),"timeline.html"), file.path(wd, "timeline.html"), overwrite = TRUE)
file.copy(file.path(getwd(),"timeline_files"), file.path(wd, "timeline_files"), overwrite = TRUE, recursive = TRUE)
unlink("timeline.html")
unlink("timeline_files", recursive = TRUE)
setwd(wd)

wd <- getwd()
setwd(tempdir())
knitr::knit(file.path(wd, "timeline.Rmd"), "timeline.html")
file.copy(file.path(getwd(),"timeline.html"), file.path(wd, "timeline.html"), overwrite = TRUE)
file.copy(file.path(getwd(),"timeline_files"), file.path(wd, "timeline_files"), overwrite = TRUE, recursive = TRUE)
unlink("timeline.html")
unlink("timeline_files", recursive = TRUE)
setwd(wd)

knitr::knit(file.path(getwd(),"timeline.Rmd"), "timeline.html")





library(timevis)


groups <- data.frame(
  id = 1:3,
  content= c("FLOSS", "Geoinformation", "Open Data /<br/> Open Content"),
  style=c("","","")
)

data <- read.csv("timeline.csv")
tv <- timevis(data, groups = groups, options = list(orientation="both", width="100%"))
htmlwidgets::saveWidget(tv, "timeline.html", selfcontained = FALSE)



