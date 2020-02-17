
from django.urls import path    
from .import views
urlpatterns = [
    path('',views.index),
    path('new',views.forms),
    path('read',views.new),
    path('present/<int:id>',views.present),
    path('delete/<int:id>',views.delete),
    path('gotoedit/<int:id>',views.gotoedit),
    path('edit/<int:id>',views.edit)
    ]