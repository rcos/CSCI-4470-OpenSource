import unittest
from unnecessary_math import multiply
 
class TestUM(unittest.TestCase):
         def __init__(self, other):
             super().__init__(other)
             self.value = 7


         def setUp(self):
             print("In setup", self.value)
             self.value += 1
                  
         def test_numbers_5_4(self):
             self.assertEqual( multiply(5,4), 20)
                                  
         def test_strings_a_3(self):
             self.assertEqual( multiply('a',3), 'aaa')
    
         def tearDown(self):
             print("In tearDown", self.value)
             self.value -= 1
                  
if __name__ == '__main__':
    unittest.main()
