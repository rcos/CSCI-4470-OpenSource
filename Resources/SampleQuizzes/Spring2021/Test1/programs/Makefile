all: main

clean:
	rm main.o helper.o static.o shared.o main libstatic.a libshared.so

main.o: main.c helper.h
	cc -c -o main.o main.c

helper.o: helper.c helper.h static/static.h shared/shared.h
	cc -c -o helper.o helper.c

static.o: static/static.c static/static.h
	cc -c -o static.o static/static.c

shared.o: shared/shared.c shared/shared.h
	cc -fPIC -c shared/shared.c -o shared.o

main: main.o helper.o helper.h libstatic.a libshared.so
	cc main.o helper.o libstatic.a libshared.so -o main -Wl,-rpath .

libstatic.a: static.o
	ar qc libstatic.a static.o

libshared.so: shared.o
	cc -shared -o libshared.so shared.o
