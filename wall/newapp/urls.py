from django.urls import path
from .import views
urlpatterns = [
    path('',views.index),
    path('register',views.register),
    path('login',views.login),
    path('show',views.show),
    path('post',views.post),
    path('logout',views.logout),
    path('delete/<int:id>',views.delete),
    path('comment/<int:id>',views.comment),

]
