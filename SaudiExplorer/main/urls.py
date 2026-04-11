from django.urls import path
from . import views

app_name = "main"

urlpatterns = [
    path('', views.home_view, name='home'),
    path('food/', views.food_view, name='food'),
    path('music/', views.music_view, name='music'),
]