def bsearch(a,x):
    n = len(a)
    i = 0
    j = n-1
    while (i <= j):
        mid = i+(j-i)/2
        if (a[mid] == x):
            return(1)
        if (a[mid]<x):
            i = mid+1
        else:
            j = mid -1
    return(0)



    
