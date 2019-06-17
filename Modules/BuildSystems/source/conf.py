import os
import sys

extensions = [
    'sphinxcontrib.blockdiag',
    'hieroglyph',
]

templates_path = ['_templates']
source_suffix = '.rst'
master_doc = 'index'

project = u'Build Systems'

pygments_style = 'sphinx'

slide_theme = 'slides'
slide_theme_options = {'custom_css': 'custom.css'}
slide_numbers = True

slide_footer = '''
<a class="slide-footer-image" href="http://creativecommons.org/licenses/by-sa/4.0/">
  <img border="0" src="_static/cc-by-sa.png" alt="CC BY-SA"/>
</a>
<span class="slide-footer-text">
  RPI OSS - Summer 2019 - Buildsystems - Kitware, Inc.
</span>
'''

html_static_path = ['static']

blockdiag_fontpath = 'c:/Windows/Fonts/verdana.ttf' # edit as needed locally
blockdiag_antialias = True
blockdiag_transparency = True
