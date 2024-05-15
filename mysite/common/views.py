from django.contrib.auth import authenticate, login, logout
from django.shortcuts import render, redirect
from common.forms import UserForm

from rest_framework.decorators import api_view
from django.http import JsonResponse
from django.contrib.auth.forms import UserCreationForm
from django.views.decorators.csrf import csrf_exempt

@api_view(['POST'])
def login_api(request):
    data = request.data
    username = data.get('username')
    password = data.get('password')
    user = authenticate(request, username=username, password=password)
    if user:
        login(request, user)
        return JsonResponse({'success': True, 'username': user.username})
    else:
        return JsonResponse({'success': False, 'error': 'Invalid credentials'}, status=400)

@csrf_exempt
def signup(request):
    if request.method == 'POST':
        # POST 요청에서 사용자 양식 생성
        form = UserForm(request.POST)
        if form.is_valid():
            # 양식이 유효한 경우 사용자 생성
            user = form.save()
            # 생성된 사용자로 로그인
            login(request, user)
            # 사용자 정보 및 성공 메시지 반환
            return JsonResponse({'success': True, 'username': user.username})
        else:
            # 양식이 유효하지 않은 경우 에러 메시지 반환
            return JsonResponse({'success': False, 'errors': form.errors}, status=400)
    else:
        # POST 요청이 아닌 경우에는 회원가입을 허용하지 않음
        return JsonResponse({'success': False, 'error': '회원가입은 POST 요청으로만 가능합니다.'}, status=405)