from django.shortcuts import render, get_object_or_404, redirect
#from django.utils import timezone
#from django.http import HttpResponseNotAllowed

#장고에서 페이징을 위해 사용하는 Paginator 클래스
from django.core.paginator import Paginator
#from .models import Question, Answer
#from .forms import QuestionForm, AnswerForm
#from django.core.cache import cache
from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login
from django.contrib.auth.models import User
    
#질문 목록 조회를 위한 index 함수
def index(request) :
    return render(request, 'base.html')
