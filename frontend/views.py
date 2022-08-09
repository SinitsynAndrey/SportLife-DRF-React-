from django.shortcuts import render


def main(request):
    if request.user.is_authenticated:
        return render(request, 'frontend/index.html')
    else:
        return render(request, 'frontend/auth.html')
