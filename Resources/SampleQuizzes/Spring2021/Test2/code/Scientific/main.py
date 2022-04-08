1  import os
2  import sys
3  import math
4  import time
5  import pygame
6  current_path = os.getcwd()
7  import pymunk as pm
8  from characters import Bird
9  from level import Level
10 pygame.init()
   
   # ... Deleted code
   
11 clock = pygame.time.Clock()
12 running = True
   # the base of the physics
13 space = pm.Space()
14 space.gravity = (0.0, -700.0)
   
   # ... Deleted Code
   
15 static_body = pm.Body(body_type=pm.Body.STATIC)
16 static_lines = [pm.Segment(static_body, (0.0, 060.0), (1200.0, 060.0), 0.0)]
17 static_lines1 = [pm.Segment(static_body, (1200.0, 060.0), (1200.0, 800.0), 0.0)]
   
   # ... Deleted Code
   
18 space.add_collision_handler(0, 1).post_solve=post_solve_bird_pig
19 space.add_collision_handler(0, 2).post_solve=post_solve_bird_wood
20 space.add_collision_handler(1, 2).post_solve=post_solve_pig_wood
   
   # ... Deleted Code
   
21 while running:
22  for event in pygame.event.get():
23         if event.type == pygame.QUIT:
24             running = False
25         elif event.type == pygame.KEYDOWN and event.key == pygame.K_ESCAPE:
26             running = False
27         elif event.type == pygame.KEYDOWN and event.key == pygame.K_w:
28             if wall:
29                 space.remove(static_lines1)
30                 wall = False
31             else:
32                 space.add(static_lines1)
33                 wall = True
34 
35         elif event.type == pygame.KEYDOWN and event.key == pygame.K_s:
36             space.gravity = (0.0, -10.0)
37             level.bool_space = True
38         elif event.type == pygame.KEYDOWN and event.key == pygame.K_n:
39             space.gravity = (0.0, -700.0)
40             level.bool_space = False
41         if (pygame.mouse.get_pressed()[0] and x_mouse > 100 and
42                 x_mouse < 250 and y_mouse > 370 and y_mouse < 550):
43             mouse_pressed = True
44         if (event.type == pygame.MOUSEBUTTONUP and
45                 event.button == 1 and mouse_pressed):
   
           # ... Deleted Code
   
46     for beam in beams:
47         beam.draw_poly('beams', screen)
48     dt = 1.0/50.0/2.
49     for x in range(2):
50         space.step(dt) # make two updates per frame for better stability
   
       # ... Deleted Code
   
51     pygame.display.flip()
52     clock.tick(50)
53     pygame.display.set_caption("fps: " + str(clock.get_fps()))

