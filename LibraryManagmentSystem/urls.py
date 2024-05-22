from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('home/', include('LibraryManagmentSystemApp.urls')),
    path('admin/', admin.site.urls),
    path('', include('authentication.urls')),
]
