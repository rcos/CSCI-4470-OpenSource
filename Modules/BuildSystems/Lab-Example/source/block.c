#include <stdio.h>
#include <string.h>
#include "../headers/block.h"

void print_block(const char *s) {
    for (unsigned int line=0; line<strlen(s); line++)
    {
        for (unsigned int ch=line; ch<strlen(s); ch++)
	{
            printf("%c ",s[ch]);
	}
        for (unsigned int ch=0; ch<line; ch++)
	{
            printf("%c ",s[ch]);
	}
	printf("\n");
    }
}
