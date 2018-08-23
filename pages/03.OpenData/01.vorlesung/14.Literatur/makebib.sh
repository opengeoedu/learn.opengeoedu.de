#!/bin/bash
echo $(ls)
bibtex2html -nokeys -nofooter -a -s apalike-german -nobibsource "open_data_quellen.bib"
