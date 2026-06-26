import os
import zipfile

def create_zip():
    home = os.path.expanduser('~')
    desktop = os.path.join(home, 'Desktop')
    zip_path = os.path.join(desktop, 'VTDAuto_Extension.zip')
    ext_dir = r'c:\Users\minhhiep.vu\.gemini\antigravity\scratch\In Bill\custom_script_runner'
    
    with zipfile.ZipFile(zip_path, 'w', zipfile.ZIP_DEFLATED) as zipf:
        for root, dirs, files in os.walk(ext_dir):
            # Exclude the internal 'scratch' directory inside custom_script_runner if it exists
            if 'scratch' in dirs:
                dirs.remove('scratch')
            for file in files:
                file_path = os.path.join(root, file)
                arc_name = os.path.relpath(file_path, ext_dir)
                zipf.write(file_path, arc_name)
    print("CREATED ZIP AT:", zip_path)

if __name__ == '__main__':
    create_zip()
