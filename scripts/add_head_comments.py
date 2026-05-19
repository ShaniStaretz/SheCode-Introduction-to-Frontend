import os
import re

root = '.'
modified = []

def clean_name(name):
    # remove leading numbers and separators
    parts = re.split('[-_ ]+', name)
    # drop numeric prefix
    if parts and parts[0].isdigit():
        parts = parts[1:]
    if not parts:
        return name
    # join and prettify
    title = ' '.join(parts)
    # replace multiple spaces
    title = re.sub('\s+', ' ', title).strip()
    # capitalize first letter
    return title

for dirpath, dirnames, filenames in os.walk(root):
    for fname in filenames:
        if not fname.lower().endswith('.html'):
            continue
        fpath = os.path.join(dirpath, fname)
        try:
            with open(fpath, 'r', encoding='utf-8') as f:
                text = f.read()
        except Exception:
            continue

        # find head tag
        m = re.search(r'<head[^>]*>', text, flags=re.IGNORECASE)
        if not m:
            continue
        insert_pos = m.end()
        # check if already has Main subject comment within next 200 chars
        snippet = text[insert_pos:insert_pos+400]
        if 'Main subject:' in snippet:
            continue

        # derive subject from parent folder or filename
        parent = os.path.basename(os.path.dirname(fpath))
        if parent in ('', '.', os.path.basename(os.getcwd())):
            base = os.path.splitext(fname)[0]
            subject = clean_name(base) + ' example'
        else:
            subject = clean_name(parent)

        comment = f"\n    <!-- Main subject: {subject} -->\n"
        new_text = text[:insert_pos] + comment + text[insert_pos:]
        try:
            with open(fpath, 'w', encoding='utf-8') as f:
                f.write(new_text)
            modified.append(fpath)
        except Exception:
            pass

print('Modified files:')
for p in modified:
    print(p)
print('Done. Total:', len(modified))
