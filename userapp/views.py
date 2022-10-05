from rest_framework.viewsets import ModelViewSet
from .models import UserProfile
from .serializers import UserSerializer


class UserModelViewSet(ModelViewSet):
    queryset = UserProfile.objects.all()
    serializer_class = UserSerializer
