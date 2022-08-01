from rest_framework import generics
from userapp.models import UserProfile
from .serializers import UserSerializer


class UserView(generics.ListAPIView):
    queryset = UserProfile.objects.all()
    serializer_class = UserSerializer

