from django.contrib import admin
from django.contrib.auth.decorators import login_required
from django.http import HttpResponse
from django.template import loader
from pyexpat.errors import messages

from LibraryManagmentSystemApp.forms import *
from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.hashers import check_password
from .models import *
from .forms import *

#
# # Create your views here.
@login_required()
def home(request):
    user = request.user
    prameters = {
        'username' : user.username,
    }
    template = loader.get_template('home.html')
    return HttpResponse(template.render(prameters, request))

# def sign_up(request):
#     if request.method == 'POST':
#         form = UserSignUpForm(request.POST)
#         if form.is_valid():
#             form.save()
#             return redirect('login')  # Adjust the redirect to your login view
#     else:
#         form = UserSignUpForm()
#     return render(request, 'sign_up.html', {'form': form})
#
#
# # def user_login(request):
# #     if request.method == 'post':
# #         form = UserLoginForm(request.POST)
# #         if form.is_valid():
# #             username = form.cleaned_data['username']
# #             password = form.cleaned_data['password']
# #
# #             try:
# #                 user = User.objects.get(username=username)
# #                 if check_password(password, user.password):
# #                     login(request, user)
# #                     if user.user_type:  # Assuming user_type True means admin
# #                         return redirect("admin")  # Adjust the redirect to your admin dashboard view
# #                     else:
# #                         return redirect('user')  # Adjust the redirect to your user dashboard view
# #                 else:
# #                     form.add_error('password', 'Invalid password')
# #             except User.DoesNotExist:
# #                 form.add_error('username', 'User does not exist')
# #     else:
# #         print("Error here!!")
# #         form = UserLoginForm()
# #
# #     return render(request, 'login.html', {'form': form})
#
#
# def user_login(request):
#     if request.method == 'POST':
#         form = UserLoginForm(request.POST)
#         if form.is_valid():
#             usernameF = form.cleaned_data['username']
#             passwordF = form.cleaned_data['password']
#             user = authenticate(request, username=usernameF, password=passwordF)
#             if user is not None:
#                 login(request, user)
#                 return redirect('home')
#             else:
#                 messages.error(request, 'Invalid Username or Password')
#         else:
#             print(form.errors)
#     else:
#         form = UserLoginForm()
#     return render(request, 'login.html', {'form': form})
#
#
@login_required
def user_admin(request):
    # Logic to get data specific to the admin dashboard
    context = {
        'title': 'Admin',
        'admin_data': {}  # Add any data you need to pass to the template
    }
    return render(request, 'admin_user.html', context)


@login_required
def user(request):
    # Logic to get data specific to the user dashboard
    context = {
        'title': 'User Dashboard',
        'user_data': {}  # Add any data you need to pass to the template
    }
    return render(request, 'user.html', context)


@login_required
def user_logout(request):
    logout(request)
    return redirect('login')  # Redirect to the login page after logout
