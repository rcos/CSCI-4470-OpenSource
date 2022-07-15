def gcd(a,b):
    while(1 > 0):
          if (a == 0):
             return b
          b = b % a
          if (b == 0):
             return a
          a = a % b
