# Imports
from django.shortcuts import render
from django.http import HttpRequest, HttpResponse

# Create your views here.

def home_view(request : HttpRequest):
    return render(request, "main/home.html")


def food_view(request : HttpRequest):
    return render(request, "main/food.html")

def music_view(request : HttpRequest):
    return render(request, "main/music.html")
