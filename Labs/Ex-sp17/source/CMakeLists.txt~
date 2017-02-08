cmake_minimum_required(VERSION 2.0)
project(Hello C)

add_library(hello SHARED source/hello1.c source/hello2.c source/hello.h)

add_executable(hi1 source/hi1.c)
target_link_libraries(hi1 hello)

add_executable(hi2 source/hi2.c)
target_link_libraries(hi2 hello)
