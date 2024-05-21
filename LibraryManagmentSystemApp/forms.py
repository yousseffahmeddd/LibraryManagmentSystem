from django import forms
from django.contrib.auth.views import LoginView
from django.shortcuts import redirect

from .models import *
from django.core.exceptions import *
from django.contrib.auth.hashers import *


class UserSignUpForm(forms.ModelForm):
    confirm_password = forms.CharField(widget=forms.PasswordInput)

    class Meta:
        model = User
        fields = ['username', 'email', 'password', 'confirm_password', 'user_type']
        widgets = {
            'password': forms.PasswordInput(),
        }

    def clean(self):
        cleaned_data = super().clean()
        password = cleaned_data.get('password')
        confirm_password = cleaned_data.get('confirm_password')

        if password != confirm_password:
            raise ValidationError("Passwords do not match")

        cleaned_data['password'] = make_password(password)
        return cleaned_data


class UserLoginForm(forms.Form):
    username = forms.CharField(max_length=255)
    password = forms.CharField(widget=forms.PasswordInput)


class CustomLoginView(LoginView):
    template_name = 'LibraryManagmentSystemApp/login.html'

    def form_valid(self, form):
        # Check if the user is an admin
        if form.get_user().is_superuser:
            return redirect('admin')  # Replace 'admin_page' with the name of your admin URL
        else:
            return redirect('home')  # Replace 'home' with the name of the home URL for regular users

        return super().form_valid(form)

