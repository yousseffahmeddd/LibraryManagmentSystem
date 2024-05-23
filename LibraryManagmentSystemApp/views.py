from django.contrib import admin
from django.contrib.auth.decorators import login_required
from django.http import HttpResponse
from django.template import loader
from pyexpat.errors import messages
from django.http import JsonResponse

from LibraryManagmentSystemApp.forms import *
from django.shortcuts import render, redirect, get_object_or_404
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.hashers import check_password
from .models import *
from .forms import *




# # Create your views here.
@login_required()
def home(request):
    user = request.user
    prameters = {
        'username': user.username,
    }
    template = loader.get_template('home.html')
    return HttpResponse(template.render(prameters, request))


@login_required
def user_admin(request):
    if not request.user.is_staff:
        return HttpResponse("sorry not allowed to access this page")
    # Logic to get data specific to the admin dashboard
    context = {
        'title': 'Admin',
        'admin_data': {}  # Add any data you need to pass to the template
    }
    return render(request, 'admin_user.html', context)


@login_required
def user(request):
    if (request.user.is_staff):
        return HttpResponse("sorry, not allowed to access this page")

    # Logic to get data specific to the user dashboard
    context = {
        'title': 'User Dashboard',
        'user_data': {}  # Add any data you need to pass to the template
    }
    return render(request, 'user.html', context)


@login_required()
def add_book(request):
    if request.method == "POST":
        title = request.POST.get('title')
        author = request.POST.get('author')
        description = request.POST.get('description')
        language = request.POST.get('language')
        publication_date = request.POST.get('publication_date')
        category = request.POST.get('category')
        cover_image = request.FILES.get('cover_image')
        book_pdf = request.FILES.get('book_pdf')

        if Book.objects.filter(title=title).exists():
            book = Book.objects.get(title=title);
            book.title = title
            book.author = author
            book.description = description
            book.language = language
            book.publication_date = publication_date
            book.category = category
            book.cover_image = cover_image
            book.book_pdf = book_pdf
            book.save()
            alert = True
            return render(request, "admin_user.html")
        else:
            books = Book.objects.create(title=title,
                                        author=author,
                                        description=description,
                                        language=language,
                                        publication_date=publication_date,
                                        category=category,
                                        cover_image=cover_image,
                                        book_pdf=book_pdf)

            books.save()
            alert = True
            return render(request, "admin_user.html", {'alert': alert})
    return render(request, "admin_user.html")



def delete_book(request,title):  # not add url
    books = Book.objects.filter(title=title)
    books.delete()
    return redirect("/admin_user.html")

def search_category(request):
    if request.method == "POST":
        search = request.POST.get('category')
        if search:
            books = Book.objects.filter(category=search)
        else:
            books = Book.objects.none()
    return render(request, "home.html", {'books': books}, search)


def search_title(request):
    books = []
    if request.method == "GET":
        search = request.GET.get('title')
        print(search)
        if search:
            books = Book.objects.filter(title__icontains=search)
    return render(request, "search_results.html", {'books': books})



def search_author(request):
    if request.method == "POST":
        search = request.POST.get('auther')
        if search:
            books = Book.objects.filter(author=search)
        else:
            books = Book.objects.none()
    return render(request, "search_results.html", {'books': books}, search)









