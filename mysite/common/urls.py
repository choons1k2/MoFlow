from django.urls import path
from django.contrib.auth import views as auth_views
from . import views
from common.views import login_api, signup

app_name = 'common'

urlpatterns = [
    #path('login/' , auth_views.LoginView.as_view(template_name='common/login.html'), name='login'),
    path('logout/', auth_views.LogoutView.as_view(), name='logout'),    #회원가입을 위한 URL 매핑 추가
    path('signup/', signup, name='signup'),
    path('api/login/', login_api, name='api_login'),
    #path('csrf-token/', get_csrf_token, name='get_csrf_token'),
]