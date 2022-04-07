cmake_minimum_required(VERSION 3.0)
project(Main C)

add_library(shared SHARED shared/shared.c)

add_library(static STATIC static/static.c)

add_executable(main main.c helper.c)
target_link_libraries(main shared static)

install(TARGETS shared DESTINATION lib)
install(TARGETS main DESTINATION bin)
