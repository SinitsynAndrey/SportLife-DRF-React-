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
    age = models.PositiveIntegerField(verbose_name='возраст', blank=True)
    gender = models.CharField(max_length=1, verbose_name='пол', choices=GENDER_CHOICES, blank=True)
    about_me = models.TextField(max_length=512, verbose_name='обо мне', blank=True)
    weight = models.PositiveIntegerField(verbose_name='вес', blank=True)
    height = models.PositiveIntegerField(verbose_name='рост', blank=True)

    # @receiver(post_save, sender=ShopUser)
    # def create_user_profile(sender, instance, created, **kwargs):
    #     if created:
    #         ShopUserProfile.objects.create(user=instance)
    #
    # @receiver(post_save, sender=ShopUser)
    # def save_user_profile(sender, instance, **kwargs):
    #     instance.shopuserprofile.save()