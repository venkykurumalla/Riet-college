import sys, os, json

sys.path.append(os.path.abspath("src/scripts/generators"))
from common_builder import create_topic, export_curriculum_ts

def generate_y1():
    # Load specs
    with open("src/scripts/y1_specs.json") as f:
        y1_specs = json.load(f)
        
    print("Generating 33 Year 1 Foundation chapters...")

if __name__ == "__main__":
    generate_y1()
