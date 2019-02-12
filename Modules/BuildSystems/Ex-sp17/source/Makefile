all: hi1 hi2
clean:
	rm *.o *.so hi1 hi2
hi1: hi1.o libhello.so
	cc hi1.o libhello.so -o hi1 -Wl,-rpath .
hi2: hi2.o libhello.so
	cc hi2.o libhello.so -o hi2 -Wl,-rpath .
hi1.o: hi1.c
	cc -c hi1.c -o hi1.o
hi2.o: hi2.c
	cc -c hi2.c -o hi2.o
libhello.so: hello1.o hello2.o
	cc -shared -o libhello.so hello1.o hello2.o
hello1.o: hello1.c
	cc -fPIC -c hello1.c -o hello1.o
hello2.o: hello2.c
	cc -fPIC -c hello2.c -o hello2.o
hi1.o: hello.h
hi2.o: hello.h
hello1.o: hello.h
