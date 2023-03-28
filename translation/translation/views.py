from django.shortcuts import render
from googletrans import Translator
def home(request):
    translator = Translator()
    translatedtext = ""
    if request.method == "POST":
        lang = request.POST.get("langs")
        text = request.POST.get("texttotrans")
        translated = translator.translate(text,dest=lang)
        translatedtext+=translated.text
    return render(request,"home.html",{"translated":translatedtext})
