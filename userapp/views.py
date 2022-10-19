from rest_framework import mixins, viewsets
from rest_framework.permissions import AllowAny
from .models import UserProfile
from .serializers import UserSerializer


class UserViewSet(mixins.UpdateModelMixin, mixins.RetrieveModelMixin, viewsets.GenericViewSet):
    queryset = UserProfile.objects.all()
    serializer_class = UserSerializer
    lookup_field = 'username'


class CreateUserViewSet(mixins.CreateModelMixin, viewsets.GenericViewSet):
    queryset = UserProfile.objects.all()
    serializer_class = UserSerializer
    permission_classes = [AllowAny]
