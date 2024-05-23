# from django.contrib.auth.base_user import AbstractBaseUser
from django.db import models


# class User(AbstractBaseUser):
#     username = models.CharField(max_length=255)
#     password = models.CharField(max_length=255)
#     email = models.EmailField(max_length=255)
#     user_type = models.BooleanField(default=False)
#     USERNAME_FIELD = 'email'
#     REQUIRED_FIELDS = []
#
#     def __str__(self):
#         return self.username

class Book(models.Model):
    title = models.CharField(max_length=255)
    author = models.CharField(max_length=255)
    description = models.TextField()
    language = models.CharField(max_length=255)
    publication_date = models.DateField()
    category = models.CharField(max_length=255)
    cover_image = models.FileField(upload_to="cover/", blank=True)
    book_pdf = models.FileField(upload_to="book/", blank=True)

    def __str__(self):
        return self.title

