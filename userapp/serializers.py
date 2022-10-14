from rest_framework.serializers import ModelSerializer
from userapp.models import UserProfile


class UserSerializer(ModelSerializer):
    class Meta:
        model = UserProfile
        fields = '__all__'
        lookup_field = 'username'
