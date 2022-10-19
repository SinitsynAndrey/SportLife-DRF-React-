from rest_framework.serializers import ModelSerializer
from userapp.models import UserProfile


class UserSerializer(ModelSerializer):
    class Meta:
        model = UserProfile
        fields = ['username', 'password', 'first_name', 'last_name', 'email',
                  'avatar', 'age', 'gender', 'about_me', 'weight', 'height']
        lookup_field = 'username'

    def create(self, *args, **kwargs):
        user = super().create(*args, **kwargs)
        p = user.password
        user.set_password(p)
        user.save()
        return user

    def update(self, *args, **kwargs):
        user = super().update(*args, **kwargs)
        p = user.password
        user.set_password(p)
        user.save()
        return user
