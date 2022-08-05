import unittest
import Mystery as M
 
class TestMystery(unittest.TestCase):
         def test_init_1(self):
             myst = M.mystery(7, [0, 3, 6])
             self.assertEqual( myst.values, [1, 0, 0, 1, 0, 0, 1])
                                  
         def test_init_2(self):
             myst = M.mystery(7, [0, 3, 7])
             self.assertEqual( myst.values, [1, 0, 0, 1, 0, 0, 0, 1])

         def test_str(self):
             myst = M.mystery(7, [0, 3, 6])
             self.assertEqual( str(myst), "length 7: [1, 0, 0, 1, 0, 0, 1]")
                                  
         def test_add_1(self):
             myst = M.mystery(7, [0, 3, 6])
             self.assertEqual( (myst + 6).values, [1, 0, 0, 1, 0, 0, 2])
                                  
         def test_add_2(self):
             myst = M.mystery(7, [0, 3, 6])
             self.assertEqual( (myst + 7).values, [1, 0, 0, 1, 0, 0, 0, 2])
                                  
if __name__ == '__main__':
    unittest.main()
