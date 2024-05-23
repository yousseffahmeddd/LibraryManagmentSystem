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
from django.conf.urls.static import static

urlpatterns = [
    path('', home, name='home'),
    path('user_admin/', user_admin, name='admin'),
    path('user/', user, name='user'),
    path('book/add/', add_book, name='add_book'),
    path('book/delete/', delete_book, name='delete_book'),
    path('book/search_author/', search_author, name='search_author'),
    # path('search_author/auther=<string:auther>', search_author, name='search_author'),
    path('book/search_category/', search_category, name='search_category'),
    path('book/search_title/', search_title, name='search_title'),
    # path('book-view/', book_view, name='book_view'),

    # path('shop', shopping, name='shopping'),
    # path('sign_up/', sign_up, name='sign_up'),
    # path('login/', user_login, name='login'),
    # path('logout/', user_logout, name='logout'),
    # path('accounts/login/', auth_views.LoginView.as_view(), name='accounts_login'),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)