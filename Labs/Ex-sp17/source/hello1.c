#include "hello.h"
#include <stdio.h>
extern void print_hello(const char *s);
void hello(void) {
    print_hello("world");
}
