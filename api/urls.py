from django.urls import path
from .views import UserView

app_name = "api"

urlpatterns = [
    path('', UserView.as_view()),
]