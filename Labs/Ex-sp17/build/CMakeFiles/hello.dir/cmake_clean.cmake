FILE(REMOVE_RECURSE
  "CMakeFiles/hello.dir/source/hello1.o"
  "CMakeFiles/hello.dir/source/hello2.o"
  "libhello.pdb"
  "libhello.so"
)

# Per-language clean rules from dependency scanning.
FOREACH(lang C)
  INCLUDE(CMakeFiles/hello.dir/cmake_clean_${lang}.cmake OPTIONAL)
ENDFOREACH(lang)
