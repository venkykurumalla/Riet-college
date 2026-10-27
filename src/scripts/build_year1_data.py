import os
import sys
import json

sys.path.append(os.path.abspath("src/scripts"))
from curriculum_topic_factory import build_topic_entry, save_curriculum_ts

print("Building Year 1 comprehensive dataset...")
