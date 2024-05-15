from django import forms
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.models import User

#상속한 UserCreationForm이 갖고 있는 속성
# -> 사용자 이름/비번1/비번2

#계정 생성할 때 사용할 UserForm 작성
class UserForm(UserCreationForm):
    email = forms.EmailField(label="이메일")

    class Meta:
        model = User
        fields = ("username",  "email")
