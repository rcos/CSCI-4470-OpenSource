#include "hello.h"
extern void print_hello(const char *s);
void hello(void) {
  print_hello("world");
}
