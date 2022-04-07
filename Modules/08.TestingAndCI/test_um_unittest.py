import unittest
from unnecessary_math import multiply
 
class TestUM(unittest.TestCase):
      
         def setUp(self):
             pass
                  
         def test_numbers_5_4(self):
             self.assertEqual( multiply(5,4), 20)
                                  
         def test_strings_a_3(self):
             self.assertEqual( multiply('a',3), 'aaa')
    
if __name__ == '__main__':
    unittest.main()
