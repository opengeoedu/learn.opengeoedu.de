#!/bin/bash
echo $(ls)
bibtex2html -nokeys -nofooter -a -s authordate1 -nobibsource "open_data_quellen.bib"
