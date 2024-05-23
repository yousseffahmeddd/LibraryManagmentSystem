from django.urls import path

from . import views

urlpatterns = [
    path('', views.user_login, name='login'),
    path('sign_up/', views.sign_up, name='sign_up'),
    path('logout/', views.user_logout, name='logout'),
]

