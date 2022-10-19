from django.db import models
from django.contrib.auth.models import AbstractUser


class UserProfile(AbstractUser):

    MALE = 'M'
    FEMALE = 'W'

    GENDER_CHOICES = (
        (MALE, 'Мужчина'),
        (FEMALE, 'Женщина'),
    )

    avatar = models.ImageField(upload_to='users_avatars', blank=True)
    age = models.PositiveIntegerField(verbose_name='возраст', blank=True, null=True)
    gender = models.CharField(max_length=1, verbose_name='пол', choices=GENDER_CHOICES, blank=True)
    about_me = models.TextField(max_length=512, verbose_name='обо мне', blank=True)
    weight = models.PositiveIntegerField(verbose_name='вес', blank=True, null=True)
    height = models.PositiveIntegerField(verbose_name='рост', blank=True, null=True)
