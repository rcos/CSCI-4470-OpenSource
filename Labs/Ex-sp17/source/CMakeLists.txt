cmake_minimum_required(VERSION 3.0)
project(Hello C)

add_library(hello SHARED hello1.c hello2.c hello.h)

add_executable(hi1 hi1.c)
target_link_libraries(hi1 hello)

add_executable(hi2 hi2.c)
target_link_libraries(hi2 hello)
