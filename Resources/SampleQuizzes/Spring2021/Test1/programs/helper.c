#include <stdio.h>
#include "static/static.h"
#include "shared/shared.h"

void helper()
{
	printf("Helper\n");
	stat();
	shared();
}
