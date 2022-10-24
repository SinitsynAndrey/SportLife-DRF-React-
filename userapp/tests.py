from rest_framework import status
from rest_framework.test import APITestCase, APIClient

from userapp.models import UserProfile


class TestBookViewSet(APITestCase):
    def setUp(self):
        self.user = UserProfile.objects.create(username='test1', password='test1_password')

    def test_get_user(self):
        self.client.force_authenticate(user=self.user)
        response = self.client.get(f'/api/user/{self.user.username}/')
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_get_401_without_auth(self):
        response = self.client.get(f'/api/user/{self.user.username}/')
        self.assertEqual(response.status_code, status.HTTP_401_UNAUTHORIZED)

    def test_create_user(self):
        response = self.client.post('/auth/users/', data={'username': 'test66', 'password': 'test_password'})
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)

    def test_update_user(self):
        new_data = {'username': self.user.username, 'password': self.user.password, 'email': 'new_email@new.ru'}
        old_data = UserProfile.objects.get(id=self.user.id)
        print(old_data)
        self.client.force_authenticate(user=self.user)
        response = self.client.put(f'/api/user/{self.user.username}/', new_data)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
