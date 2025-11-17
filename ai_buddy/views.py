from flask import Blueprint, render_template, request, flash, jsonify
from .handler import answer_question


views = Blueprint('views', __name__)

@views.route('/', methods=['GET', 'POST'])
def home():
    question = ""
    if request.method == "POST":
        question = request.form.get('question')
    print(f'Your question: {question}')

    # Add AI logic here
    if question:
        answer = answer_question(question=question)
        return render_template("home.html", answer=answer, question=question)
    else:
        return render_template("home.html")
