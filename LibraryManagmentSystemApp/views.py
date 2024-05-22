from django.contrib import admin
from django.contrib.auth.decorators import login_required
from django.http import HttpResponse
from pyexpat.errors import messages

from LibraryManagmentSystemApp.forms import *
from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.hashers import check_password
from .models import *
from .forms import *


# Create your views here.

def home(request):
    return render(request, "index.html", context={})


def shopping(request):
    return HttpResponse("Welcome to shopping")





def sign_up(request):
    if request.method == 'POST':
        form = UserSignUpForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('login')  # Adjust the redirect to your login view
    else:
        form = UserSignUpForm()
    return render(request, 'sign_up.html', {'form': form})


def user_login(request):
    if request.method == 'POST':
        form = UserLoginForm(request.POST)
        if form.is_valid():
            username = form.cleaned_data['username']
            password = form.cleaned_data['password']

            try:
                user = User.objects.get(username=username)
                if check_password(password, user.password):
                    login(request, user)
                    if user.user_type:  # Assuming user_type True means admin
                        return redirect('admin')  # Adjust the redirect to your admin dashboard view
                    else:
                        return redirect('user')  # Adjust the redirect to your user dashboard view
                else:
                    form.add_error('password', 'Invalid password')
            except User.DoesNotExist:
                form.add_error('username', 'User does not exist')
    else:
        form = UserLoginForm()

    return render(request, 'login.html', {'form': form})


@login_required(login_url='user_login/')
def admin(request):
    # Logic to get data specific to the admin dashboard
    context = {
        'title': 'Admin',
        'admin_data': {}  # Add any data you need to pass to the template
    }
    return render(request, 'admin.html', context)


@login_required
def user(request):
    # Logic to get data specific to the user dashboard
    context = {
        'title': 'User Dashboard',
        'user_data': {}  # Add any data you need to pass to the template
    }
    return render(request, 'user.html', context)



@login_required
def story(request):
    if request.method == "POST":
        form = StoryForm(request.POST)
        if form.is_valid():
                form.save()
                return HttpResponseRedirect('/')
    else:
        form = StoryForm()
    return render(request, 'stories/story.html', {'form': form})


# @login_required
def user_logout(request):
    logout(request)
    return redirect('login')  # Redirect to the login page after logout
