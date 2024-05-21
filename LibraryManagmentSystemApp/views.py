from django.shortcuts import render
from django.contrib import admin
from django.http import HttpResponse
from django.shortcuts import render, redirect


# Create your views here.
def home(request):
    return render(request, "index.html", context={})


def shopping(request):
    return HttpResponse("Welcome to shopping")

# def login_view(request):
#     if request.method == 'POST':
#         username = request.POST['username']
#         password = request.POST['password']
#         user = authenticate(request, username=username, password=password)
#         if user is not None:
#             login(request, user)
#             return redirect('home')
#         else:
#             return HttpResponse('Invalid login credentials')
#     return render(request, 'login.html')
#
# def logout_view(request):
#     logout(request)
#     return redirect('login')w
#
# @login_required
# def home_view(request):
#     return render(request, 'home.html')