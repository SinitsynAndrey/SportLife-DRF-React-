from rest_framework import mixins, viewsets
from rest_framework.permissions import AllowAny
from .models import UserProfile
from .serializers import CustomUserSerializer


class UserViewSet(mixins.UpdateModelMixin, mixins.RetrieveModelMixin, viewsets.GenericViewSet):
    queryset = UserProfile.objects.all()
    serializer_class = CustomUserSerializer
    lookup_field = 'username'


class CreateUserViewSet(mixins.CreateModelMixin, viewsets.GenericViewSet):
    queryset = UserProfile.objects.all()
    serializer_class = CustomUserSerializer
    permission_classes = [AllowAny]
