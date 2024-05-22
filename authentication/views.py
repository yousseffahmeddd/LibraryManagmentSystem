from django.contrib.auth import authenticate,login,logout
from django.shortcuts import render,redirect
from django.contrib.auth.models import User
from pyexpat.errors import messages

# from LibraryManagmentSystemApp.forms import UserLoginForm


# Create your views here.

def user_login(request):
    if request.method == 'POST':
        username = request.POST['username']
        password = request.POST['password']
        user = authenticate(request, username=username, password=password)
        if user is not None:
            login(request, user)
            if user.is_staff:
                return redirect('admin')
            return redirect('user')
        else:
            return render(request, 'login.html', {'error': 'Invalid Username or Password.'})
    return render(request, 'login.html')



def sign_up(request):
    if request.method == 'POST':
        username = request.POST['username']
        email = request.POST['email']
        password = request.POST['password']
        confirm_password = request.POST['confirm_password']
        is_staff = request.POST['user_type']
        if password != confirm_password:
            return render(request, 'sign_up.html', {'error': 'Passwords do not match'})
        new_user = User.objects.create_user(username=username, email=email, password=password, is_staff=is_staff)
        new_user.save()
        return redirect('login')
    return render(request, 'sign_up.html')