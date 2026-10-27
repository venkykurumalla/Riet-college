import json
import os
import re

# We will generate comprehensive topics for Year 4 CRT Curriculum across all 8 categories.
print("Generating complete Year 4 CRT Curriculum...")

output_dir = "src/data/crtYear4"
os.makedirs(output_dir, exist_ok=True)
