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

