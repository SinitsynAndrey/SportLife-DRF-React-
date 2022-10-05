from django.contrib import admin
from .models import UserProfile


class UserAdmin(admin.ModelAdmin):
    list_filter = ('is_active',)


admin.site.register(UserProfile, UserAdmin)
