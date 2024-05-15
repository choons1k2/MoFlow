# common/api.py
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.contrib.auth import authenticate, login

@api_view(['POST'])
def login_api(request):
    username = request.data.get('username')
    password = request.data.get('password')
    user = authenticate(request, username=username, password=password)
    if user is not None:
        login(request, user)
        return Response({'success': True, 'username': user.username})
    else:
        return Response({'success': False, 'error': 'Invalid credentials'}, status=400)
