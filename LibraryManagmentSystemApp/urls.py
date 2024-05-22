"""
URL configuration for LibraryManagmentSystem project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.contrib.auth import views as auth_views
from django.urls import path
from .views import *

urlpatterns = [
    path('home', home, name='home'),
    path('shop', shopping, name='shopping'),
    path('sign_up/', sign_up, name='sign_up'),
    path('user_login/', user_login, name='login'),
    path('admin/', admin, name='admin'),
    path('user/', user, name='user'),
    path('logout/', user_logout, name='logout'),
    path('accounts/login/', auth_views.LoginView.as_view(), name='accounts_login'),
    # path('login/', auth_views.LoginView.as_view(), name='login'),
    # path('logout/', auth_views.LogoutView.as_view(), name='logout'),
]
