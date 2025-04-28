from flask import Flask, request, jsonify
import pytesseract
from PIL import Image
import spacy

app = Flask(__name__)
nlp = spacy.load("en_ner_bc5cdr_md")  # or med7

@app.route('/upload', methods=['POST'])
def upload_image():
    img = Image.open(request.files['file'])
    text = pytesseract.image_to_string(img)

    doc = nlp(text)
    medicines = [ent.text for ent in doc.ents if ent.label_ == 'DRUG']

    return jsonify(medicines)

if __name__ == '__main__':
    app.run(port=5000)
