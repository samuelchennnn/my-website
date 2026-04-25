import os
import sys

path = r'C:\Users\Administrator\Downloads\陈松涛简历.pdf'
sys.stdout.reconfigure(encoding='utf-8')

print(f'Exists: {os.path.exists(path)}')
print(f'Size: {os.path.getsize(path)}')

# Read raw header
with open(path, 'rb') as f:
    header = f.read(100)
    print(f'Header: {header[:50]}')

# Try opening with fitz
import fitz
doc = fitz.open(path)
print(f'Pages: {len(doc)}')
for i, page in enumerate(doc):
    text = page.get_text()
    print(f'Page {i+1} text length: {len(text)}')
    print(f'Page {i+1} text: {text[:500]}')
    images = page.get_images(full=True)
    print(f'Page {i+1} images: {len(images)}')
doc.close()
