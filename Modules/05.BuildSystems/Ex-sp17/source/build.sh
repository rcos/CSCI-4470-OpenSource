cc -fPIC -c hello1.c -o hello1.o
cc -fPIC -c hello2.c -o hello2.o
cc -shared -o libhello.so hello1.o hello2.o
cc -c hi1.c -o hi1.o
cc -c hi2.c -o hi2.o
cc hi1.o libhello.so -o hi1 -Wl, -rpath .
cc hi2.o libhello.so -o hi2 -Wl, -rpath .
