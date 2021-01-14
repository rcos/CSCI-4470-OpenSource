# I normally don't like hard-coding makefiles like this
# But since this is very single-use I think it's fine

all: bin lib

bin: static_bin shared_bin

lib: static_lib shared_lib

program.o: program.c
	gcc -c -o program.o program.c

static_bin: static_lib program.o
	gcc program.c -Llib -lblock -o static_bin

shared_bin: shared_lib program.o
	gcc program.o -Llib -lblock -o shared_bin

block.o: source/block.c
	gcc -c -fPIC -o block.o source/block.c

static_lib: block.o
	mkdir -p lib # Makes linker paths' less finicky
	ar rcs lib/libblock.a block.o

shared_lib: block.o
	mkdir -p lib # Makes linker paths' less finicky
	gcc -shared block.o -o lib/libblock.so

.PHONY: clean
clean:
	rm -rf *.o *.a *.so **/a.out static_bin shared_bin lib/
